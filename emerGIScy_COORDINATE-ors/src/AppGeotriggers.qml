// ==============================================================================
// File         : AppGeotriggers.QML
//
// Current Author: Ben Schager
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This component is called dynamically every time there is a change in 
//      the app's location data source, through a loader in AppMap. This component
//      creates fence geotriggers that fire when the position from the location
//      data source crosses buffer boundaries of hosted feature point and area 
//      layers edited in the web application DR. DISPATCH. When entering buffer
//      buffer zones, the signal message that are created by the geotrigger are
//      propagated to AppNotifications to send local device notifications, and 
//      to AppHeader and AppSubheader for within app dropdown notifications.
//
// Credits: This code is partly based on ESRI sample code
//
// Dependencies: 
//
// Modification Log :
//    --> Created 2022-02-21 (bs)
//    --> Updated 2022-02-25 (bs)
//
// =============================================================================
import QtQuick 2.13
import QtQuick.Layouts 1.12
import QtQuick.Controls 2.12
import QtQuick.Controls.Material 2.12
import QtGraphicalEffects 1.0
import QtPositioning 5.3
import QtSensors 5.3
import ArcGIS.AppFramework 1.0
import Esri.ArcGISRuntime 100.12
import Esri.ArcGISRuntime.Toolkit 100.12

Item {
    id: appGeotriggers
    // =========================================================================
    // Incoming and Local Properties
    // =========================================================================
    // Buffer distance in m from a location source to a point or polygon boundary
    // of interest. Crossing this threshold emits signal.
    // =========================================================================
    property int bufDistance: 1000

    // =========================================================================
    // Holds all points within a buffer of the 
    // =========================================================================
    property var pointsInRange: []

    // =========================================================================
    // Holds last trigger message to compare with new triggers and determine if 
    // the location source poisition has entered or left the buffer area.
    // =========================================================================
    property var currentZoneName

    // =========================================================================
    // Outgoing Properties: sent to appNotifications for local alerts
    // =========================================================================
    property var triggerNoti: []
    onTriggerNotiChanged: {
        appNotifications.setNoti(triggerNoti)
    }

    // =============================================================================
    // Area geotrigger monitor
    // =============================================================================
    GeotriggerMonitor {
        id: emergencyAreasGeotriggerMonitor
        // Fence geotrigger type
        geotrigger: FenceGeotrigger {
            // Data being fed to the fence geotrigger
            feed: LocationGeotriggerFeed {
                id: areaFeed
                // Data source, set by user tab selection and navigation mode selection
                locationDataSource: locationDataSource1
            }
            // Rule defining when to fire triggers (upon entrance and exit of fence/perimeter)
            ruleType: Enums.FenceRuleTypeEnterOrExit
            // Defines the features and buffers away from those features that serve as the fence
            // for firing triggers.
            fenceParameters: FeatureFenceParameters {
                featureTable: emergencyAreasFeatureTable
                bufferDistance: bufDistance
            }
            // Creates an expression from the feature attributes identifying the emergency the data
            // source's position is nearing.
            messageExpression: ArcadeExpression {
                expression: "$fencefeature.name + TextFormatting.NewLine + $fencefeature.description + TextFormatting.NewLine + 'last updated: ' + Text($fencefeature.LastUpdated, 'DD/MMM/Y @ HH:mm:ss')"
            }
            name: "sectionGeotrigger"
        }
        // =============================================================================
        // Event handler that responds to geotrigger signals. Sends notification through
        // app to alert users of emergency features.
        // =============================================================================
        onGeotriggerNotification: {
            // the message property contains the evaluated messageExpression of the FenceGeotrigger
            var zoneName = geotriggerNotificationInfo.message
            // Parse the zone name to display nicely for drop down notificaiton
            var ind = zoneName.indexOf("\n")
            var firstPart = zoneName.slice(0,ind)
            var secondPart = zoneName.slice(ind)

            // =============================================================================
            // If the user enters the area of an emergengy:
            // -store its information in memory if not already there
            // -set the current zone to the new zone
            // -send a notification
            // =============================================================================
            if (geotriggerNotificationInfo.fenceNotificationType
                    === Enums.FenceNotificationTypeEntered) {
                if (zoneName != areaMessage) {
                    currentZoneName = zoneName
                    // Reformat and send the notification to local device notificaitons.
                    appNotifications.setNoti([`Alert: ${zoneName}. \n\n Check the D.R. Aware app for current details and updates.`])
                    // Send the notificaiton to in-app dropdown notification in AppHeader
                    appHeader.setAreaMessage("<strong>"+firstPart+"</strong><br>"+secondPart)
                    // Console log the notification
                    console.log("#########Within: " + bufDistance + " of " + areaMessage)
                }
            // =============================================================================
            // If a user exits the emergency area, this resets the outgoing message and ultimately hides the in-app notification
            // =============================================================================
            } else if (geotriggerNotificationInfo.fenceNotificationType
                       === Enums.FenceNotificationTypeExited
                       && currentZoneName === zoneName) {
                // If the user exits the section they were currently in, remove section information from the UI
                // Reset the notification
                appHeader.setAreaMessage("")
                console.log("#########Exited buffer distance of: " + areaMessage)
            }
        }

        Component.onCompleted: {
            // Initializes the geotrigger monitor
            start()
            // Verifies the geotrigger's data source by writing to console
            console.log("Geotrigger Data Source: ",locationDataSource1)
        }
    }

    // =============================================================================
    // Point geotrigger monitor
    // =============================================================================

    GeotriggerMonitor {
        id: emergencyPointsGeotriggerMonitor
        // Fence geotrigger type
        geotrigger: FenceGeotrigger {
            // Data being fed to the fence geotrigger
            feed: LocationGeotriggerFeed {
                id: pointFeed
                // Data source, set by user tab selection and navigation mode selection
                locationDataSource: locationDataSource1
            }

            // Rule defining when to fire triggers (upon entrance and exit of fence/perimeter)
            ruleType: Enums.FenceRuleTypeEnterOrExit
            // Defines the features and buffers away from those features that serve as the fence
            // for firing triggers.
            fenceParameters: FeatureFenceParameters {
                featureTable: emergencyPointsFeatureTable
                bufferDistance: bufDistance
            }
            // Creates an expression from the feature attributes identifying the emergency the data
            // source's position is nearing.
            messageExpression: ArcadeExpression {
                expression: "$fencefeature.name + \": \" + $fencefeature.description"
            }

            name: "pointGeotrigger"
        }
        // =============================================================================
        // Event handler that responds to geotrigger signals. Sends notification through
        // app to alert users of emergency features.
        // =============================================================================
        onGeotriggerNotification: {
            // Store output message as pointName
            const pointName = geotriggerNotificationInfo.message
            //Get the index of the See if the point name is already in range (index > 0)
            const index = pointsInRange.indexOf(pointName)
            // If entering a feature's fence, add the feature to the UI as long as point name not found in list
            if (geotriggerNotificationInfo.fenceNotificationType
                    === Enums.FenceNotificationTypeEntered && index === -1) {
                // Push to the array at the last element
                pointsInRange[pointsInRange.length] = pointName
                console.log("#########Entered: " + pointName + " range")
                // Format and send the notification in app to a dropdown alert
                pointMessage = `You're within ${bufDistance} of: ${description}`
                appLowDisplay.setPointMessage(pointMessage)
            }
            // If exiting the fence feature, remove it from the UI
            else if (geotriggerNotificationInfo.fenceNotificationType
                     === Enums.FenceNotificationTypeExited) {
                pointsInRange.splice(index, 1)
                // Log the point removed from the list that the user has exited the fence area of 
                console.log("#########Exited: " + pointName + " range")
            }

            //Display the updated points within range (or nothing, if the array has been cleared)
            var description = ""
            for (var i = 0; i < pointsInRange.length; i++) {
                description += "\n<li>" + pointsInRange[i] + "</li>"
            }
            // Format and send the notification to the local device notifications
            if (description.length > 0){
                appLowDisplay.setPointMessage(`<strong>You're within ${bufDistance/1000}km of:</strong> <ul>${description}</ul>`)
            }
            else {
                // Reset the notification
                pointMessage = ""
                appLowDisplay.setPointMessage("")
            }
        } // Point geotrigger event handler end

        Component.onCompleted: {
            // Initializes the geotrigger monitor
            start()
        }
    } // Point geotrigger monitor end
} // Item end
