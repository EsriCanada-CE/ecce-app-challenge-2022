// ==============================================================================
// File         : AppNotifications.QML
//
// Current Author: Ben Schager
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This component listens for messages from other components (in this
//      case appGeotrigger), and relays those messages onto local device 
//      notifications. These notifications are triggered by proximity to 
//      emergency polygons and points created by a dispatcher.
//
// Credits: This code is partly based on ESRI sample code
//
//
// Modification Log :
//    --> Created 2022-02-18 (bs)
//    --> Updated YYYY-MM-DD (fl)
//
// =============================================================================

// =============================================================================
// This import is for the LocalNotification
// =============================================================================
import ArcGIS.AppFramework.Notifications.Local 1.0

// =============================================================================
// This import is for the vibration
// =============================================================================
import ArcGIS.AppFramework.Notifications 1.0

import QtQuick 2.13

Item {
    id: appNotifications
    // =========================================================================
    // String is changed based on signals from AppMap
    // =========================================================================
    property var noti: []

    // =========================================================================
    // On poperty change, trigger notification with message defined by property.
    // This is a listener for external changes to the property.
    // =========================================================================
    onNotiChanged: {
        if (typeof noti !== 'undefined'){
            trigNote(noti)
        }
    }
    // =========================================================================
    // Setter function for other app components to create local alerts
    // =========================================================================
    function setNoti(input){
        noti = input
    }
    // =========================================================================
    // Sets default title and latency to firing, then parses an incoming array
    // that defines what the message will be and whether or not changes need to
    // be made to the latency or title.
    // =========================================================================
    function trigNote(msg) {
        var title = "Emergency Alert"
        var message = ""
        var time = 1
        if (msg.length === 1){
            message = msg[0]
        }
        else if (msg.length === 2) {
            title = msg[0]
            message = msg[1]
        }
        else if (msg.length === 3) {
            title = msg[0]
            message = msg[1]
            time = msg[2]
        }
        // =====================================================================
        // Does not fire if property has been changed back to []. This prevents
        // from sending empty alerts if one is send accidentally from elsewhere
        // =====================================================================
        if (msg.length >0){
            console.log("Signalled ID: ", notification.schedule(title, message, time))
        }
    }
    // =========================================================================
    // Notification signal handler
    // =========================================================================
    LocalNotification {
        id: notification
        onTriggered: {
            console.log("Triggered ID: ", id)
            if(Vibration.supported) {
                Vibration.vibrate()
            }
            else{
                console.log("Vibration not supported on this device.")
            }

            // =====================================================================
            // reset notification message to []. Probably redundant.
            // =====================================================================
            noti = []
        }
    }
}
