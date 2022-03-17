// ====================================================================================================
// File         : MainPage.QML
//
// Current Author: Ben Schager
//
//
// Previous Author: None
//
// Contact Info: schagerben@gmail.com
//
// Purpose : This page contains the main visual components of the app. It contains the footer and,
//      within that, the tabs that are used for navigation between the Alert View and the Info View.
//      Both components are loaded dynamically into a loader based on triggers from the tabs in the 
//      footer. Input from the splash page, buttons from myApp, and signals sent from elsewhere in the 
//      application determine whether this component triggers a change in the location data source by
//      calling a setter in myApp.
//
// Credits: This code is partly based on ESRI sample code
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

Page {
    id: mainPage
    property int index
    // Initializes the default biew as the Alert View
    property int currentIndex: 0
    property string navMode
    onNavModeChanged: {
        loader.item.setNavMode(navMode)
    }
    // =================================================================================================
    //
    // Page Components
    //
    // =================================================================================================
    // =================================================================================================
    // Loads dynamically the Alert or Info view based on the selected tab
    // =================================================================================================
    Loader{
        id: loader
        anchors.fill: parent
    }

    // =================================================================================================
    // Timer loops the choosing of the default view display while waiting for the mode the user wants
    // =================================================================================================
    Timer{
        id: loaderTimer
        interval: 250
        repeat: true
        onTriggered: {
            navigateToPage()
        }
        Component.onCompleted: {
            loaderTimer.start()
        }
    }

    // =================================================================================================
    // Footer and Tab Switcher
    // =================================================================================================
    footer:TabBar {
        Material.background: app.appBackgroundColor
        Material.accent: app.accentColor
        padding: 0
        // Creates a tab for each element in the data list model in MyApp
        Repeater {
            model: tabViewModel
            TabButton {
                text: name
            }
        }
        // =================================================================================================
        // Navigates
        // =================================================================================================
        onCurrentIndexChanged: {
            console.log("After index change, the current index is: ", currentIndex)
            navigateToPage(currentIndex);
            if (typeof app.navMode != "undefined" && app.navMode != ""){
                index = currentIndex
            }
        }
    }
    // =================================================================================================
    //
    // Javascript Functions
    //
    // =================================================================================================
    // =================================================================================================
    //  Swaps out one view for another using the tabs in the footer.
    // =================================================================================================
    function navigateToPage(index){
        // =============================================================================================
        // Conditional statement prevents this from running until after the splash screen. However, it
        // outputs a blank page that must be refreshed by clicking on the other view. I acccepted loading
        // a slightly buggier first page (data source is not cleanly defined) as the lesser of two evils
        // =============================================================================================
        //if (typeof app.navMode != "undefined" && app.navMode != ""){
        //}
        //        }
        //        else{
        //            loaderTimer.restart()
        //        }
        // =============================================================================================
        // Destroys the timer that prevented firing while waiting for the navigation mode and data
        // source, then loads the Alert View to ensure that the page is not blank on initialization
        // =============================================================================================
        if (typeof loaderTime != "undefined"){
            loaderTimer.destroy()
            loader.source = "AppAlertView.qml"
            console.log("Timer destroyed", index)
        }
        // =============================================================================================
        // Based on the navigation mode, sets the data source for the whole app and loads the loader
        // with the correct view.
        // =============================================================================================
        switch(index){
        case 0:
            console.log("Alert View", index)
            // Set data source (this might be redundant)
            app.setLocationDataSource(app.navMode)
            // Defines what file contains the component to fill the loader. This is the Alert View in this case
            loader.source = "AppAlertView.qml"
            // Passes the navigation mode signal to the map component of the alert view
            loader.item.setNavMode(app.navMode)
            // Turns on the navigation mode toggle in Alert View
            navModeToggle.enabled = true
            navModeToggle.visible = true
            break;
        case 1:
            console.log("Info View", index)
            app.setLocationDataSource("gpsMode")
            // Defines what file contains the component to fill the loader. This is the Info View in this case
            loader.source = "AppInfoView.qml";
            loader.item.resetMapViewDataSource()
            // ==========================================================================================
            // Turns off the navigation mode toggle in Info View. This is so you can't press it and throw
            // the synchronization of view and datasource off and because there is no reason to have a
            // simulated source here as you wouldn't be alt to trigger alerts.
            // ==========================================================================================
            navModeToggle.enabled = false
            navModeToggle.visible = false
            break;
        default:
            break;
        }
    }
    // =================================================================================================
    // Local setter for the navigation mode. This triggers an on-change event that passes the signal on
    // to Alert View and then to App Map in the loader
    // =================================================================================================
    function setNavMode(input){
        navMode = input
    }
}

