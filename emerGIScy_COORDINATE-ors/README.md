# EBM-ESRI-2022
Evie, Ben and Matt's Repo for the ESRI App Challenge 2022

# Videos
[Promo Video](https://player.vimeo.com/video/681190445?h=172bcdf7cd&badge=0&autopause=0&player_id=0&app_id=58479)

[Tutorial Video](https://vimeo.com/682053244?embedded=true&source=video_title&owner=167740146)

# Mission Statement
The mission of the Disaster Response applications is for government organizations to provide real-time information on disasters and emergencies, as well as potential hazards, to citizens. Disaster Response is designed for citizens to receive mobile notifications based on their proximity to events so they can adequately prepare, as well as browse potential threats in their area. A design philosophy emphasizing an intuitive and easy-to-navigate UI was embraced during design and development. Our application currently covers only Metro Vancouver due to resource and time constraints of the app challenge, but expanding our coverage to all of Canada would be the logical next step. 

The Disaster Response applications align with the theme of this year's ESRI Canada Centers of Excellence (ECCE) App Challenge – Natural Disasters and Emergency Preparedness, alongside the sub-themes of Industry, Innovation, and Infrastructure. 

For more information and resources, please see our [ArcGIS Storymap](https://storymaps.arcgis.com/stories/1c4c126bd635415b87dec87af6b42184).

# App Description
The Disaster Response applications include a web application, D.R. Dispatch, for organizations to map disaster areas and related resources, and then push this information down to citizens, and a native mobile app, D.R. Aware, for citizens to consume the information on their smartphones.

The applications, described in detail below, aim to: 

1. Effectively alert citizens of emergency situations and resources in their area
2. Allow citizens to receive updated information from government officials as events unfold
3. Inform citizens of potential threats in their area to enable personal decision making and preparedness

## DR Dispatch
D.R. Dispatch is a Web Application built using ESRI's App Builder and was created for government officials to inform citizens of emergencies and disasters.
[Click Here](https://bcitgis.maps.arcgis.com/apps/webappviewer/index.html?id=38c1cc97bd914ce4990b41aa8cfbaa99)

### Features
1. Draw areas on the map to identify different types of disasters like floods, fires, train derailments and chemical spills
2. Capture additional disaster info to share with citizens
3. Generate emergency IDs to uniquely identify areas (using the ArcGIS JavaScript API)
4. Add map points and relate them to disaster areas, for example temporary shelters or resource distribution centers
5. Edit existing data and allow citizens to view the time of the last update

### Limitations
1. Internet Explorer is not supported
2. An ArcGIS Online account is required

## DR Aware
D.R. Aware is a native mobile application built in Qt Creator using ESRI's ArcGIS Runtime Qt SDK QML API and makes use of Geotriggers.
![QR Code](https://cdn.discordapp.com/attachments/782855855003009027/946824542423248906/unknown.png)

### Accessing the application
1. Download ESRI's AppStudio Player app for iPhone or Android
2. Open yor phone's camera and scan the QR code above
3. The AppStudio Player app should open and prompt you to download the app or launch the app if you already have it
4. The first time you launch the app, make sure to allow it to access your location, or you will not receive notifications when you are close to an emergency!
5. Note: you do not need to login to AppStudio Player

### Features
1. View your current location
2. Receive notifications when you are within 1km of an emergency area
3. Explore the map to learn more about the disaster area and points of interest
4. View in-app alerts with emergency descriptions as you move with the app open
5. View threats in your current area, such as potential flood zones
6. Touch Mode for testing and GPS Mode for live use

### Limitations
1. For iPhone (iOS 13.0 and up) and Android (6.0 and up) smartphones only
2. Requires the installation of the AppStudio Player app

# Data Sources
[Flooded Areas with Meter Rise](https://www.arcgis.com/home/item.html?id=07a0b1be573a4803bff2a59410219def)

[Metro Vancouver Municipality Boundaries](https://bcitgis.maps.arcgis.com/home/user.html?user=2022_sgrondin1)

[BC Wildfire Threat Rating](https://catalogue.data.gov.bc.ca/dataset/bc-wildfire-psta-fire-threat-rating)

[National Railway Network](https://open.canada.ca/data/en/dataset/ac26807e-a1e8-49fa-87bf-451175a859b8)

[BC Coastal Marine Industrial Sites](https://catalogue.data.gov.bc.ca/dataset/coastal-bc-marine-industrial-sites)

[Royalty free music](https://pixabay.com/music/search/genre/ambient/?mood=dreamy)

# Licensing
The app is licensed under the 3.0 GNU General Public License. Any credited use/re-purposing of this application is permitted and encouraged.
