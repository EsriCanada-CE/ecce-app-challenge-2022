// ====================================================================================================
// File         : AppInfoView.QML
//
// Current Author: Ben Schager
//
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This view is designed to show risk factors for various natural disaster-related events. 
//      The idea of this component is to have a place for people to look to gauge the risk level of
//      their current and surrounding locations in regards to a number of hazards and disasters. Eventually
//      this could be expanded to include enough contextural information for many possible natural disasters
//      so that people could use it as a decision making tool in an evolving disaster scenario. For that
//      purpose, we would add grouped layer visibility toggles and larger volumes of information. As 
//      it stand with some limited information, this is still a useful decision making tool for spotting
//      obvious risks in an individual's current environment.
//
// Credits: Much of this code is modified ESRI sample code
//
// Dependencies: 
//
// Modification Log :
//    --> Created 2022-02-18 (mm)
//    --> Updated 2022-02-25 (bs)
//
// ====================================================================================================

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


Rectangle {
    id: appView
    property string imports: 'import ArcGIS.AppFramework 1.0; import QtQuick.Layouts 1.12; import QtQuick.Controls 2.12; import QtGraphicalEffects 1.0; import QtQuick.Controls.Material 2.12; import Esri.ArcGISRuntime.Toolkit 100.12; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; import QtPositioning 5.3; import QtSensors 5.3; '
    property MapView mapView: mapView

    anchors {
        left: parent.left
        right: parent.right
        top: parent.top
        bottom: parent.bottom
    }
    // =========================================================================
    // Popup properties needed to add popups to popup stack
    //==========================================================================
    property var popupManagers: []
    property var featureLayer: null

    // ==========================================================================
    // MapView: map, layers, resonsive signals for creating popups,
    // the display location, and the legend
    // ==========================================================================
    MapView {
        id: mapView
        anchors {
            left: parent.left
            right: parent.right
            top: parent.top
            bottom: parent.bottom
        }
        // =========================================================================
        // Map view signals to create popups and send to the popup stack
        // =========================================================================
        onMouseClicked: {
            getPopups(mouse)
        }
        onIdentifyLayersStatusChanged: {
            populateAllPopupStack(identifyLayersStatus)
        }
        // ===============================================
        //  End of mapview signals
        // ===============================================
        // =========================================================================
        // Popup Stack Start
        // Displays the popups that are generated for layers that have been selected
        //==========================================================================
        PopupStackView {
            id: popupStackView
            anchors {
                bottom: parent.bottom
                right: parent.right
                bottomMargin: 30
                left: parent.left
            }
            visible: false
            z: 100
            onPopupManagersChanged: popupStackView.visible = true
        }
        // =========================================================================
        // Displays an indicator icon while waiting for the identify layer task to
        // complete
        // =========================================================================
        BusyIndicator {
            id: busy
            anchors.centerIn: parent
            visible: mapView.identifyLayerStatus === Enums.TaskStatusInProgress
        }
        // =========================================================================
        // Popup Stack End
        //==========================================================================
        // ===============================================
        //  Map: Contains base webmap
        // ===============================================
        Map {
            id: map
            // Layers are brought in through a configured webmap from ArcGIS Online
            initUrl: "https://bcitgis.maps.arcgis.com/home/item.html?id=87f3466d9d2542c3aa1184bcb2676503"
            autoFetchLegendInfos: true
        }
        // set the location display's position source
        locationDisplay {
            id: userLocation
            autoPanMode: Enums.LocationDisplayAutoPanModeRecenter
            initialZoomScale: 100000
            dataSource: app.locationDataSource1
        }
        Component.onCompleted: {
            console.log("Map view loaded ... ")
        }
    }
    // =========================================================================
    // Legend Start
    //==========================================================================
    // Create outter rectangle for the legend
    Rectangle {
        id: legendRect
        anchors {
            margins: 10
            left: parent.left
            top: parent.top
        }
        property bool expanded: true
        height: 200
        width: 175
        color: "lightgrey"
        opacity: 0.95
        radius: 10
        clip: true
        border {
            color: "darkgrey"
            width: 1
        }

        // Animate the expand and collapse of the legend
        Behavior on height {
            SpringAnimation {
                spring: 3
                damping: .4
            }
        }

        // Catch mouse signals so they don't propagate to the map
        MouseArea {
            anchors.fill: parent
            onClicked: mouse.accepted = true
            onWheel: wheel.accepted = true
        }

        // Create UI for the user to select the layer to display
        Column {
            anchors {
                fill: parent
                margins: 10
            }
            spacing: 2

            Row {
                spacing: 55

                Text {
                    text: qsTr("Legend")
                    font {
                        pixelSize: 18
                        bold: true
                    }
                }

                // Legend icon to allow expanding and collapsing
                Image {
                    source: legendRect.expanded ? "images/ic_menu_legendpopover_light_d.png" : "images/ic_menu_legendpopover_light.png"
                    width: 28
                    height: width

                    MouseArea {
                        anchors.fill: parent
                        onClicked: {
                            if (legendRect.expanded) {
                                legendRect.height = 40;
                                legendRect.expanded = false;
                            } else {
                                legendRect.height = 200;
                                legendRect.expanded = true;
                            }
                        }
                    }
                    Component.onCompleted: {
                        legendRect.expanded = false
                        legendRect.height = 40;
                    }
                }
            }

            // Create a list view to display the legend
            ListView {
                id: legendListView
                anchors.margins: 10
                width: 165
                height: 150
                clip: true
                model: map.legendInfos
                // Create delegate to display the name with an image
                delegate: Item {
                    width: parent ? parent.width : 0
                    height: 35
                    clip: true
                    Row {
                        spacing: 5
                        anchors.verticalCenter: parent.verticalCenter
                        Image {
                            anchors.verticalCenter: parent.verticalCenter
                            width: 24
                            height: width
                            source: symbolUrl
                        }
                        Text {
                            anchors.verticalCenter: parent.verticalCenter
                            width: 125
                            text: name
                            wrapMode: Text.WordWrap
                            font.pixelSize: 12
                        }
                    }
                }
                // Section breaks between layers
                section {
                    property: "layerName"
                    criteria: ViewSection.FullString
                    labelPositioning: ViewSection.CurrentLabelAtStart | ViewSection.InlineLabels
                    delegate: Rectangle {
                        width: 180
                        height: childrenRect.height
                        color: "darkgrey"

                        Text {
                            text: section
                            font.bold: true
                            font.pixelSize: 13
                        }
                    }
                }
            }
        }
    }
    // =========================================================================
    // Legend End
    //==========================================================================

    function resetMapViewDataSource(){
        mapView.locationDisplay.stop()
        mapView.locationDisplay.dataSource = app.locationDataSource1
        mapView.locationDisplay.start()
    }
    // =============================================================================
    // Popup Functions
    // =============================================================================
    // =============================================================================
    //  Identifies all layers at a point
    // =============================================================================
    function getPopups(mouse){
        const screenX = mouse.x;
        const screenY = mouse.y;
        const tolerance = 12;
        const returnPopupsOnly = false;
        const maximumResults = 10;
        //For the industrial locations only at the moment; identifyLayersWithMaxResults not working to get all layers at the mouse point
        mapView.identifyLayersWithMaxResults(screenX, screenY, tolerance, returnPopupsOnly, maximumResults);
    }

    // =============================================================================
    //  Gets popups from identified layers and passes to popup stack
    // =============================================================================
    function populateAllPopupStack(identifyLayersStatus){
        if (identifyLayersStatus !== Enums.TaskStatusCompleted)
            return;
        var results = mapView.identifyLayersResults;
        // clear the list of PopupManagers
        popupManagers = [];
        // Loop through the results
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            featureLayer = result.layerContent
            if (featureLayer.layerType === Enums.LayerTypeFeatureLayer) {
                const geoElements = result.geoElements;
            }
            const popups = result.popups;
            for (let i = 0; i < popups.length; i++) {
                // create a popup manager
                const popupManager = ArcGISRuntimeEnvironment.createObject("PopupManager", {popup: popups[i]});
                // push popup manager to list
                popupManagers.push(popupManager);
                popupStackView.popupManagers = popupManagers;
            }
        }
    } //end of popup stack fn
} //end of rectangle

