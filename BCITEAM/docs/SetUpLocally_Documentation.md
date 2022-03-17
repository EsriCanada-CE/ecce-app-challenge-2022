# Application Setup 

The following document outlines the steps for setting up the application on your local computer.

### The following installations are required on your local computer:
1. [ArcGIS Web AppBuilder Developer Edition version 2.12 (April 2019)](https://developers.arcgis.com/downloads/#web-appbuilder)
2. [Feature layer hoverer Custom Widget 2.12](https://community.esri.com/t5/web-appbuilder-custom-widgets-documents/feature-layer-hover-widget-version-2-12-09-05-19/ta-p/915343#:~:text=This%20widget%20allows%20you%20to,you%20mouse%20over%20the%20feature.&text=*%20Fixed%20an%20issue%20with%20the,for%20a%20previously%20configured%20layer.)

### Step by Step for installing and running ArcGIS Web AppBuilder locally
1. Download ArcGIS Web AppBuilder v2.12 on local computer (i.e. this could be your C:/ drive)
2. Go to where you saved the application and navigate to the startup.bat file and run the program.
 2. (C:\arcgis-web-appbuilder-2.12\WebAppBuilderForArcGIS\startup.bat)
3. A web page will be opened, and you will be prompted to **enter your ArcGIS Online organization URL**
 3. (http://orgname.maps.arcgis.com)
4. You will need to set up and register and App ID.
 1. You can set up a mapping ID by logging into ArcGIS online.
 2. Select Newt Item.
 3. Select Application.
 4. Select the Web mapping.
 5. Enter the URL from where you will be hosting the application and click next.
  1. (https://computer_name:3344/webappbuilder)
6. Once done you will need to register a redirect URL that will allow you and other users to access the application.
  1. https://computer_name:3344/ 
  2. http://computer_name:3344/
7. When the app is registered, view the registration Info and copy the App ID to your clip board.
8. Go the web page where you entered your organization URL and paste the App ID and click continue.
9. You will be asked to sign in with your own arcgis online account (your account that is linked to your organization).
  1. If you receive a connection warning, click on Advanced, and proceed to the webpage redirect.
10. You are now inside Web AppBuilder for ArcGIS Developer edition.

### Importing and viewing the project
1. Download the zip of the application.
2. From the ArcGIS WebAppBuilder page import the the application zip from your computer.
3. The application will be loaded and now click on the Launch button in the bottom right corner.
4. View Application.

