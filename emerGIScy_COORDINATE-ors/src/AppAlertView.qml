// ====================================================================================================
// File         : AppAlertView.QML
//
// Current Author: Ben Schager
//
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This is a container component for the map (AppMap) and popdown display boxes (AppHeader 
//      and AppSubheader). It is used as an organizer to bind the bottom of the header to the subheader,
//      and the bottom of the subheader to the map.
//
//
// Modification Log :
//    --> Created 2022-02-18 (mm)
//    --> Updated 2022-02-25 (bs)
//
// ====================================================================================================
import QtQuick 2.13
import QtQuick.Layouts 1.13
import QtQuick.Controls 2.13
import QtQuick.Controls.Material 2.13
import QtGraphicalEffects 1.0
import QtPositioning 5.3
import QtSensors 5.3
import ArcGIS.AppFramework 1.0
import Esri.ArcGISRuntime 100.12

Item{
    id: appAlertView
    // ====================================================================================================
    // Incoming Properties: navigation mode. I don't think it's actually even accessed here.
    // ====================================================================================================
    property string navMode
    property string areaMessage
    property string pointMessage
    // ====================================================================================================
    // Anchor to the top of the app
    // ====================================================================================================
    anchors {
        left: parent.left
        right: parent.right
        top: parent.top
    }

    // ====================================================================================================
    // Contains the red popdowns for emergency area geotrigger messages
    // ====================================================================================================
    AppHeader {
        id: appHeader
        z:100
        anchors {
            top: parent.top
            left: parent.left
            right: parent.right
        }
    }

    // ====================================================================================================
    // Contains the gret popdowns for emergency point geotrigger messages
    // ====================================================================================================
    AppSubHeader {
        id: appLowDisplay
        height: 0
        anchors {
            top: appHeader.bottom
        }
        z:60
    }

    // ====================================================================================================
    // Contains the mapView for viewing location, operational layers
    // ====================================================================================================
    AppMap{
        id: appMap
        anchors{
            top: appLowDisplay.bottom
        }
        z: 50
    }

    // ====================================================================================================
    // Relay setter function to pass the navigation mode from MainPage to AppMap. Necessary because I don't
    // think it is straightforward to send signals directly to nested items in the item that is loaded to
    // the loader 
    // ====================================================================================================
    function setNavMode(input){
        appMap.setNavMode(input)
    }
}
