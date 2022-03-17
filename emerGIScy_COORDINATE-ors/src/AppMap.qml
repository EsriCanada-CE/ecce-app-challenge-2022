// ====================================================================================================
// File         : AppMap.QML
//
// Current Authors: Ben Schager & Matt Meeboer
//
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com, mmeeboer@my.bcit.ca
//
// Purpose : This view is designed to display a user's current location so they can gauge the relationship 
//      between their location and that of hazardous elements in their vicinity. Here, they can visualize 
//      the different emergency classes, view the children point features to each emergency, determine 
//      when the emergency was posted and whether they are still at risk in their current location, and 
//      generally obtain more information about evolving current events around them. This view also allows
//      testing of the application with simulated locations.
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

Item {
    id: appMap
    property string navMode
    onNavModeChanged: {
        appLowDisplay.setPointMessage("")
        appHeader.setAreaMessage("")
        resetMapViewDataSource()
        console.log("AppMap received change in navMode. It is now: ", navMode, "That should be the same as the app base: ", app.navMode)
        geotriggerRefresh.source = ''
        geotriggerRefresh.source = 'AppGeotriggers.qml'
    }

    property string imports: 'import ArcGIS.AppFramework 1.0; import QtQuick.Layouts 1.12; import QtQuick.Controls 2.12; import QtGraphicalEffects 1.0; import QtQuick.Controls.Material 2.12; import Esri.ArcGISRuntime.Toolkit 100.12; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; import QtPositioning 5.3; import QtSensors 5.3; '
    property MapView mapView: mapView

    anchors {
        left: parent.left
        right: parent.right
        top: parent.top
        bottom: parent.bottom
    }
    Loader {
        id: geotriggerRefresh
    }

    // =========================================================================
    // Popup properties
    //==========================================================================
    property var popupManagers: []
    property var featureLayer: null

    // ===============================================
    //  MapView
    // ===============================================
    MapView {
        id: mapView
        anchors {
            left: parent.left
            right: parent.right
            top: parent.top
            bottom: parent.bottom
        }
        // set the location display's position source
        locationDisplay {
            id: userLocation
            autoPanMode: Enums.LocationDisplayAutoPanModeRecenter
            initialZoomScale: 1000
            dataSource: app.locationDataSource1
        }

        // ===============================================
        // Map view signals
        // ===============================================
        //For touch navigation mode
        onMousePressedAndHeld: {
            getPopups(mouse)

        }
        onMouseClicked:{
            addPointAtLocation(mouse)
        }

        onIdentifyLayersStatusChanged: {
            populateAllPopupStack(identifyLayersStatus)
        }


        // ===============================================
        //  Map
        // ===============================================
        Map {
            id: map
            initUrl: "https://bcitgis.maps.arcgis.com/home/item.html?id=d9e6a8e982304e5e8bdf810b58e896e4"
            autoFetchLegendInfos: true
            //Feature table for the emergency area polygons
            ServiceFeatureTable {
                id: emergencyAreasFeatureTable
                url: "https://services1.arcgis.com/KsnB2VOAvO5LjdB4/arcgis/rest/services/Emergencies/FeatureServer/1"
            }

            //Feature table for the emergency points
            ServiceFeatureTable {
                id: emergencyPointsFeatureTable
                url: "https://services1.arcgis.com/KsnB2VOAvO5LjdB4/arcgis/rest/services/Emergencies/FeatureServer/0"
            }
        }

        // =========================================================================
        // Popup Stack Start
        //==========================================================================
        PopupStackView {
            id: popupStackView
            anchors {
                bottom: parent.bottom
                right: parent.right
                left: parent.left
                bottomMargin: 30
            }
            visible: false
            z: 100
            onPopupManagersChanged: popupStackView.visible = true
        }

        BusyIndicator {
            id: busy
            anchors.centerIn: parent
            visible: mapView.identifyLayerStatus === Enums.TaskStatusInProgress
        }
        // =========================================================================
        // Popup Stack End
        //==========================================================================

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
                            opacity: 0.8

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
        // End of Legend
        //==========================================================================

        Component.onCompleted: {
            console.log("Map view loaded ... ")
            //resetMapViewDataSource()
            geotriggerRefresh.source = 'AppGeotriggers.qml'
        }
    }

    // =============================================================================
    // Change Simulated Source Location Functions
    // =============================================================================
    function addPointAtLocation(mouse) {
        console.log(" ===== SRID " + mouse.mapPoint.spatialReference.wkid)
        console.log(" ===== X " + mouse.mapX)
        console.log(" ===== Y " + mouse.mapY)

        if (navMode == "touchMode"){
            var pt = Qt.createQmlObject('import ArcGIS.AppFramework 1.0; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; Point {x:'+mouse.mapX+'; y:'+mouse.mapY+'; SpatialReference {wkid: 3857}}',appMap)
            var spref = Qt.createQmlObject('import ArcGIS.AppFramework 1.0; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; SpatialReference {wkid: 26910}',appMap)
            var prjpt = GeometryEngine.project(pt,spref)
            app.setCurrentPoint(prjpt.x, prjpt.y)
        }
    }

    function resetMapViewDataSource(){
        mapView.locationDisplay.stop()
        mapView.locationDisplay.dataSource = app.locationDataSource1
        mapView.locationDisplay.autoPanMode = Enums.LocationDisplayAutoPanModeRecenter
        mapView.locationDisplay.start()
   }
    function setNavMode(input){
        navMode = input
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
    }
}
