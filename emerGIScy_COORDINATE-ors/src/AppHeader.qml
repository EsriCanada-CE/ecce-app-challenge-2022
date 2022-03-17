// ==============================================================================
// File         : AppHeader.QML
//
// Current Author: Matt Meeboer, Ben Schager
//
//
// Previous Author: None
//
// Contact Info: mmeeboer@my.bcit.ca, schagerben@gmail.com
//
// Purpose : This component receives a message from AppGeotriggers about changes
//      in emergency polygons near the user. If that message is not empty, it is
//      displayed in an animated red popdown from the top of the screen. It is
//      hidden again as soon as it receives another empty string. These messages
//      and animations are triggered by a user's location entering or leaving a
//      buffer around a polygon.
//
// Dependencies: None ... yet
//
// Modification Log :
//    --> Created 2022-02-18 (mm)
//    --> Updated 2022-02-25 (bs)
//
// =============================================================================
import QtQuick 2.13
import QtQuick.Controls 2.13

import Esri.ArcGISRuntime 100.12
Item {
    id: appHeader
    // ==============================================================================
    // Incoming Properties. Other parts of the app set this value
    // ==============================================================================
    property string areaMessage

    // ==============================================================================
    // When an incoming change to areaMessage is detected, resize the box to show
    // two lines of text (with a button to see more of it), or hide the box by setting
    // its height to 0 if there is an empty message detected.
    // ==============================================================================
    onAreaMessageChanged: {
        // Reset seeMore Button properties
        seeMoreBtn = true
        seeMore.text = "See More"
        // Set the text value and limit display to 2 lines
        txtAreaName.text = areaMessage
        txtAreaName.maximumLineCount = 2
        // Show or Hide Header
        if (areaMessage.length > 0){
            // Show header
            setHeaderHeight(60)
        }
        else {
            // Hide header
            setHeaderHeight(0)
        }
    }

    // ==============================================================================
    // Local Properties. Height determines visibility and seeMoreBtn determines
    // whether the button on the box says "See More" or "See Less"
    // ==============================================================================
    property bool seeMoreBtn
    height:0

    // ==============================================================================
    // Hide Component if height is 0. This is probably not necessary on top of setting
    // height, but some devices do weird things with displays, so this is for safety
    // ==============================================================================
    visible: {if(height>0){return true} else{return false}}
    anchors {
        left: parent.left
        right: parent.right
        // anchor to the top of the display
        top: parent.top
    }
    //=======================================
    // App header rectangle
    //=======================================
    Rectangle {
        id: titleRect
        // ==========================================================================
        // Sets the implicit size of the rectangle based on the full size needed
        // to display the volume of text send in.
        // ==========================================================================
        implicitHeight: txtAreaName.implicitHeight
        anchors {
            left: parent.left
            right: parent.right
            top: parent.top
            bottom: parent.bottom
        }
        color: app.info.propertyValue("titleBackgroundColor", "#E10600")
        // ==========================================================================
        // Set default parameters of the text
        // ==========================================================================
        Text {
            id: txtAreaName
            anchors {
                left: parent.left
                leftMargin: 15
                right: seeMore.left
                rightMargin: 20
            }
            wrapMode: Text.WordWrap
            // Triggered message sent in when areaMessage is changed globally.
            text: areaMessage
            maximumLineCount: 2
            color: "white"
            topPadding: 15
        }
        // ==========================================================================
        // Adds an ellipses when there is text overflow and not all is shown
        // ==========================================================================
        Text {
            id: ellipses
            // Not visible if See Less is displayed on the button or if the text doesn't take up the whole space
            visible: {if(txtAreaName.contentWidth/txtAreaName.width<0.8 || seeMoreBtn == false){return false} else{return true}}
            anchors {
                left: txtAreaName.right
                right: seeMore.left
                bottom: txtAreaName.bottom
            }
            text: '...'
            topPadding: 15
            color: "white"
        }
        // ==========================================================================
        // Toggle button that changes the size of the rectangle to show all the text
        // in the message when it is clicked, and reverts the box back to its original
        // size when pressed again
        // ==========================================================================
        Button {
            id: seeMore
            text: "See More"
            width: 100
            // displays to the right of the text in the bar
            anchors {
                right: parent.right
                rightMargin: 15
                verticalCenter: parent.verticalCenter
            }
            onClicked: {
                btnChange()
            }
        }
    } // End of rec

    // ==============================================================================
    // Height change animation over 100 ms dropping down
    // ==============================================================================
    Behavior on height {
        NumberAnimation {duration: 100 }
    }

    // ==============================================================================
    // Javascript Function Section
    // ==============================================================================
    // ==============================================================================
    // On button click, changes button text and resizes box to fit the implicit height
    // of the text (the entire height the text needs to show in its entirety)
    // ==============================================================================
    function btnChange() {
        if (seeMoreBtn === true){
            // toggle the button to read "See Less"
            seeMoreBtn = false
            seeMore.text = "See Less"
            // increase the max number of lines the text can span
            txtAreaName.maximumLineCount = 10
            // change the height of the whole component to just over the text height
            setHeaderHeight(txtAreaName.implicitHeight+15)
        }
        else {
            seeMoreBtn = true
            seeMore.text = "See More"
            // Reset default header height
            setHeaderHeight(60)
            txtAreaName.maximumLineCount = 2
        }
    }

    // ==============================================================================
    // Setter function to set the whole component's height and trigger the animation
    // ==============================================================================
    function setHeaderHeight (ht) {
        appHeader.height = ht
    }

    // ==============================================================================
    // Setter function for external components to signal in a message to be displayed
    // ==============================================================================
    function setAreaMessage(input){
        areaMessage = input
    }
} // End Item
