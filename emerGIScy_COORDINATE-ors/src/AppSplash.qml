// ==============================================================================
// File         : AppSplash.QML
//
// Current Author: Ben Schager
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This component is a splash screen that prompts the user to choose
//      between a simulated and a GPS location source for their app experience.
//      It also directs the user on how to use the app, and then it page fades out 
//      and its button's destroy themselves. This component is designed only to be 
//      viewed once.
//
// Dependencies: None ... yet
//
// Modification Log :
//    --> Created 2022-02-20 (bs)
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

Rectangle {
    id: appSplash
    // =================================================================================================
    //
    // Global Properties
    //
    // =================================================================================================
    // =================================================================================================
    // Handles whether or not the component is visible. After fading, it is set to false.
    // =================================================================================================
    property bool vis: true
    anchors {
        fill: parent
    }
    // =================================================================================================
    // sets priority on page, so it is displayed over all else. Logo images is here.
    // =================================================================================================
    z: 100
    Image {
        id: splashLogo
        anchors {
            left: parent.left
            right: parent.right
            verticalCenter: parent.verticalCenter
            verticalCenterOffset: -75
        }
        source: "images/draware.png"
        fillMode: Image.PreserveAspectFit
        sourceSize.width: 1924
        sourceSize.height: 760
    }
    // =================================================================================================
    // Text sits above the buttons and instructs how to press buttons
    // =================================================================================================
    Text {
        id: explanationText
        width: parent.width - 20
        text: "Tap a mode for more information, or <strong>press and hold</strong> to choose a mode."
        wrapMode: Text.WordWrap
        anchors {
            top: splashLogo.bottom
            topMargin: 15
            leftMargin: 15
            rightMargin: 15
            bottomMargin: 15
            horizontalCenter: parent.horizontalCenter
        }
    }
    // =================================================================================================
    // Button that triggers touch navigation mode.
    // =================================================================================================
    Button {
        id: touchButton
        text: "Touch Mode"
        width: parent.width/2-20
        anchors {
            top: explanationText.bottom
            left: parent.left
            leftMargin: 15
        }
        onClicked: {
            explainButtons.text = "Touch Mode lets you define your GPS location by tapping on the map. Choose this mode if you want to simulate your location. This mode is ideal for testing purposes. Popups are enabled on press and hold."
        }
        // =============================================================================================
        // Sends message to open application in touch mode, sets data source (1 of 3 times? Probably
        // unnecessary), and destroys buttons so they can no longer be pushed accidentally
        // =============================================================================================
        onPressAndHold: {
            console.log("========= Touch Mode Initiated =========")
            navMode = "touchMode"
            setNavMode("touchMode")
            // set simulated data source
            setLocationDataSource(navMode)
            // Fade the splashscreen
            fadeAnimation.start()
            // Destroy buttons so they can't be pressed anymore
            explainButtons.destroy()
            touchButton.destroy()
            gpsButton.destroy()
        }
    }
    Button {
        id: gpsButton
        text: "GPS Mode"
        width: parent.width/2-20
        anchors {
            top: explanationText.bottom
            right: parent.right
            rightMargin: 15
        }
        // =============================================================================================
        // Explanatory text is swapped out whn a button is tapped. Tells you how to use the app
        // =============================================================================================
        onClicked: {
            explainButtons.text = "GPS Mode lets you get your location on the map from your device's GPS. Choose this mode for real-world situations. Popups are enabled on press and hold."
        }
        // =============================================================================================
        // Sends message to open the app in GPS mode, sets data source (1 of 3 times? Probably
        // unnecessary), and destroys buttons so they can no longer be pushed accidentally
        // =============================================================================================
        onPressAndHold: {
            console.log("========= GPS Mode Initiated =========")
            navMode = "gpsMode"
            setNavMode("gpsMode")
            setLocationDataSource(navMode)
            // Fade the splashscreen
            fadeAnimation.start()
            // Destroy buttons so they can't be pressed anymore
            explainButtons.destroy()
            touchButton.destroy()
            gpsButton.destroy()
        }
    }
    // =================================================================================================
    // Explanatory text that is swapped out on short clicks over button
    // =================================================================================================
    Text {
        id: explainButtons
        width: parent.width - 20
        text: ""
        wrapMode: Text.WordWrap
        anchors {
            top: gpsButton.bottom
            right: parent.right
            topMargin: 15
            leftMargin: 15
            rightMargin: 15
            horizontalCenter: parent.horizontalCenter
        }
    }
    // =================================================================================================
    // Fades slash screen from 1 to 0 over 1.5 seconds. When finishes, sets visibility off
    // =================================================================================================
    NumberAnimation on opacity {
        id: fadeAnimation
        from: 1
        to: 0
        duration: 1500
        onFinished: {
            vis = false
        }
    }
    Component.onCompleted:{
        console.log("=============== Image loaded ================")
        fadeAnimation.stop()
    }
}



