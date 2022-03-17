// ====================================================================================================
// File         : MyApp.QML
//
// Current Author: Ben Schager
//
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This is the core application component. It sets the size of the app, contains the global 
//      variables (and their setter functions) that are used elsewhere in the app, defines the app 
//      colour and style, and holds the app's core components. The app spawns a splash page (App splash)
//      that outputs a user choice for navigation type. Navigation type defines the location data source 
//      and other current location data that is set and stored in this component. Also contains the links
//      to the local notification functionality (appNotifications) and links to the component that holds
//      both views and the footer.
//
// Credits: Parts of this code are loosely informed by ESRI sample code
//
// Dependencies: 
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

App{
    id: app
    width: 400
    height: 640

    // =================================================================================================
    //
    // Global Properties
    //
    // =================================================================================================
    // =================================================================================================
    // GPS-based data source
    // =================================================================================================
    property var defaultDataSource: ArcGISRuntimeEnvironment.createObject("DefaultLocationDataSource");

    // =================================================================================================
    // Simulated data source, set by user touches
    // =================================================================================================
    property var simulatedDataSource: ArcGISRuntimeEnvironment.createObject("SimulatedLocationDataSource");

    // =================================================================================================
    // The active datasource, chosen from the two above
    // =================================================================================================
    property var locationDataSource1

    // =================================================================================================
    // Navigation mode, set initially in the splash screen, that determines which data source to use.
    // Can be gpsMode or touchMode
    // =================================================================================================
    property string navMode
    // A string of imports to clean up Qt.createObject statements
    property string imports: 'import ArcGIS.AppFramework 1.0; import QtQuick.Layouts 1.12; import QtQuick.Controls 2.12; import QtGraphicalEffects 1.0; import QtQuick.Controls.Material 2.12; import Esri.ArcGISRuntime.Toolkit 100.12; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; import QtPositioning 5.3; import QtSensors 5.3; '
    // The default location of the simulated data source. Gets updated to save the current state
    property string currentTouchPoint: '[[[491162.0977559023, 5459426.621654951]]]'

    // ==============================================================================
    //
    // Major App Components
    //
    // ==============================================================================
    // =================================================================================================
    // Splash page where you get directions and choose what navigation mode to enter
    // =================================================================================================
    AppSplash {
        id: appSplash
        anchors {
            top: parent.top
            right: parent.right
            left: parent.left
        }
    }

    // =================================================================================================
    // Main page that contains the footer (and the view switching tabs) and a loader
    // to hold the two views in the app: the Alert View and the Info View.
    // =================================================================================================
    MainPage{
        id:mainPage
        anchors.fill: parent
    }

    // =================================================================================================
    // Component that sends local alerts and vibrations to the device
    // =================================================================================================
    AppNotifications{
        id: appNotifications
    }

    // =================================================================================================
    // UI Components:
    // Togge button to switch between navigation views
    // =================================================================================================
    Button {
        id: navModeToggle
        anchors {
            left: parent.left
            bottom: parent.bottom
            bottomMargin: 70
        }
        // =============================================================================================
        // Placeholder text. Eventually populated with GPS or Touch
        // =============================================================================================
        text: "Init"
        z: 50
        width: 75
        // =============================================================================================
        // Toggles between navigation modes by setting the data source and the navMode property, which
        // acts as a signal elsewhere in the app
        // =============================================================================================
        onClicked:{
            if (navMode === "gpsMode"){
                setLocationDataSource('touchMode')
                navMode = "touchMode"
            }
            else {
                setLocationDataSource('gpsMode')
                navMode = "gpsMode"
            }
        }
    }

    // =================================================================================================
    // Rectangle holding fade-in/fade-out text to alert the user which navigation mode they are using.
    //
    // NOTE: Very strange anchoring with this component. Not sure why I couldn't position it normally.
    // =================================================================================================
    Rectangle {
        id: navModeNotification
        anchors{
            left: parent.left
            right: parent.right
            horizontalCenter: parent.horizontalCenter
            verticalCenter: parent.verticalCenter
            verticalCenterOffset: 160
        }
        z: 50
        // =============================================================================================
        // Holds text that declares the current navigation mode
        // =============================================================================================
        Text {
            id: navModeNotificationText
            anchors.fill: parent
            // =========================================================================================
            // Fades in when the relevant text is set
            // =========================================================================================
            onTextChanged: {
                fadeInAnimation.start()
            }
            font.pointSize: 14
        }
        // =============================================================================================
        // Fades in animation by altering opacity over 100ms between 0 and 1. Triggers timer that waits
        // before triggering the fade out.
        // =============================================================================================
        NumberAnimation on opacity {
            id: fadeInAnimation
            from: 0
            to: 1
            duration: 100
            onFinished: {
                pauseTimer.start()
            }
        }
        // =============================================================================================
        // Triggered by the timer to fade the text out
        // =============================================================================================
        NumberAnimation on opacity {
            id: fadeOutAnimation
            from: 1
            to: 0
            duration: 100
            onFinished: {
            }
        }
        // =============================================================================================
        // Ensures that animations do not run before they are explicitly started
        // =============================================================================================
        Component.onCompleted:{
            fadeInAnimation.stop()
            fadeOutAnimation.stop()
        }
    }

    // =================================================================================================
    // Timer waits 2 seconds while text displays, then triggers the text's fade-out
    // =================================================================================================
    Timer{
        id: pauseTimer
        interval: 2000
        onTriggered: {
            fadeOutAnimation.start()
        }
        Component.onCompleted: {
            pauseTimer.stop()
        }
    }

    // =================================================================================================
    // Data model containing both views and the source component for each view. Feeds
    // the footer tabs.
    // =================================================================================================
    ListModel{
        id: tabViewModel
        ListElement { name: qsTr("Alert View"); }
        ListElement { name: qsTr("Information View"); }
    }
    // =================================================================================================
    //
    // Javascript Functions
    //
    // =================================================================================================
    // =================================================================================================
    // Setter for the global navigation mode property
    // =================================================================================================
    function setNavMode(input) {
        navMode = input
    }
    // =================================================================================================
    // Setter for the global location data source. Stops the data source if it is not
    // null (to prevent firing too early), changes it based on the navigation mode,
    // then restarts it. Also sets the text in the toggle button above to reflect
    // which mode is active, and sends the new navMode signal throughout the app.
    // =================================================================================================
    function setLocationDataSource(input){
        if (!!locationDataSource1){
            locationDataSource1.stop()
        }
        console.log("Data source was: ", locationDataSource1)
        switch(input) {
        case "gpsMode":
            // Set data source
            locationDataSource1 = defaultDataSource;
            // Set button text
            navModeToggle.text = "Touch"
            // Set descriptive text
            navModeNotificationText.text = "GPS Mode Active"
            // Send the navMode signal locally
            setNavMode("gpsMode")
            // Send the navMode signal globally
            mainPage.setNavMode("gpsMode")
            console.log("Sent gps navMode to AppMap")
            break;
        case "touchMode":
            // Set data source
            locationDataSource1 = simulatedDataSource;
            // Set starting location for data source
            locationDataSource1.setLocationsWithPolyline(createPolyline(currentTouchPoint))
            // Set button text
            navModeToggle.text = "GPS"
            // Set descriptive text
            navModeNotificationText.text = "Touch Mode Active"
            // Send the navMode signal locally
            setNavMode("touchMode")
            // Send the navMode signal globally
            mainPage.setNavMode("touchMode")
            console.log("Sent touch navMode to AppMap")
            break;
        default:
            // set default to GPS data source
            locationDataSource1 = defaultDataSource;
        }
        console.log("Just set data source to: ", locationDataSource1)
        // Restart the data source
        locationDataSource1.start()
    }

    // ==============================================================================
    // Sets (stores) the current point occupied by the simulated data source
    // ==============================================================================
    function setCurrentTouchPoint(input){
        currentTouchPoint = input
    }

    // ==============================================================================
    // Inputs coordinate pair, reformats, then sets the current point occupied by the
    // simulated data source based on the input coordinate. Simulated data sources
    // must be based on a poly-line, so this calls a function that creates a single-
    // point poly-line dynamically
    // ==============================================================================
    function setCurrentPoint(x,y) {
        currentTouchPoint = '[[['+x+', '+y+']]]'
        locationDataSource1.setLocationsWithPolyline(createPolyline(currentTouchPoint))
    }

    // ==============================================================================
    // Dynamically creates a single point poly-line for use in the simulated data
    // source
    // ==============================================================================
    function createPolyline(coords) {
        var line = Qt.createQmlObject('import ArcGIS.AppFramework 1.0; import Esri.ArcGISRuntime 100.12; import QtQuick 2.13; Polyline {json: {"paths": '+coords+',"spatialReference": {"wkid": 26910,"latestWkid": 26910}}}',app)
        return line
    }

    // ==============================================================================
    // Default Style Components
    // ==============================================================================
    property bool lightTheme: true

    // App color properties
    readonly property color appBackgroundColor: lightTheme? "#FAFAFA":"#303030"
    readonly property color appDialogColor: lightTheme? "#FFFFFF":"424242"
    readonly property color appPrimaryTextColor: lightTheme? "#000000":"#FFFFFF"
    readonly property color appSecondaryTextColor: Qt.darker(appPrimaryTextColor)
    readonly property color primaryColor:"#FF1493"
    readonly property color accentColor: Qt.lighter(primaryColor,1.2)
    readonly property color headerTextColor:"#FFFFFF"
    readonly property color listViewDividerColor:"#19000000"

    // App size properties
    property real scaleFactor: AppFramework.displayScaleFactor
    readonly property real baseFontSize: app.width<450*app.scaleFactor? 21 * scaleFactor:23 * scaleFactor
    readonly property real titleFontSize: 1.1 * app.baseFontSize
    readonly property real captionFontSize: 0.6 * app.baseFontSize
    // ==============================================================================
}






