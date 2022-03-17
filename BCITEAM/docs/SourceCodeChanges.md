# Documentation

Our application makes use of the [Feature layer hoverer Custom Widget](https://community.esri.com/t5/web-appbuilder-custom-widgets-documents/feature-layer-hover-widget-version-2-12-09-05-19/ta-p/915343#:~:text=This%20widget%20allows%20you%20to,you%20mouse%20over%20the%20feature.&text=*%20Fixed%20an%20issue%20with%20the,for%20a%20previously%20configured%20layer.).
The widget was created by RobertScheitlin__GISP and published on 05-12-2019.

The only change that was done to the source code was in the MapManager.js. The file can be found in __...\jimu.js\MapManager.js__

In __line 283__ of MapManager.js the default size infoWindow was changed from:

map.infoWindow.resize(270, 316);

to

map.infoWindow.resize(420, 316);




