<img src="https://bwoody711.github.io/relinker/static/media/relinker-logo.444de5e06b4ef0c2007af44a6fd46047.svg" width="400" /> 

### Objectives

* Be a low cost and rapidly deployable tool that can be launched hours after disaster strikes
* Allow citizens to report hazards if it is safe to do so, giving disaster response teams a clear picture of what is happening on the ground during a disaster more quickly.
* Provide citizens the ability to find the quickest safe route to evacuate an area
* Provide disaster response teams with the quickest safe route to deliver supplies to hard hit areas
* Allow disaster response teams to prioritize which roads to clear to establish road links more quickly following a disaster


### How to use ReLinkeR

##### Route mapper

<img src="https://bwoody711.github.io/relinker/static/media/driving-distance-32.47a6e5c403ab1d8e796ec164e0cd8c28.svg" width="50" /> 

* Click the "Pencil" button to draw a route
* Click on the map to place two or more points outlining your route
* Drag and drop your points to move them
* Once you are happy with your route, click the "Run" button and the map will draw the quickest safe route
* To erase your route, close the route mapper popup or click the erase button
* Occasionally, the outputted route will cut through a hazard point or polygon. This occurs when the user specifies that the hazard is passable in a short amount of time (e.g. very shallow water on road).

##### Hazard Information

<img src="https://bwoody711.github.io/relinker/static/media/information-32.1b17b7c3079ac71ed2e8fe5467d9f309.svg" width="50" /> 

* Click on a hazard icon on the map to display the hazard type, a description of the hazard, and images of the hazard

##### Legend

<img src="https://bwoody711.github.io/relinker/static/media/legend-32.b787a77eaddd87d633dca08f06ed7172.svg" width="50" /> 

* Click this button to display a legend for the map

##### Basemaps

<img src="https://bwoody711.github.io/relinker/static/media/basemap-32.ac4aab7309fbb73a6c192f43af49f1c2.svg" width="50" /> 

* Toggle between the Esri Topo, Esri Satellite, and OpenLayers basemap
* Paste in a link to a tile layer (e.g. http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}) and click the "Custom" radio button to view your own custom basemaps.
* Paste in a link to a tile layer to the overlay section to add a custom tile overlay
* Use the opacity slider to change the opacity of the overlay, and click the clear button if you wish to remove the overlay from the map

##### Linker

<img src="https://bwoody711.github.io/relinker/static/media/link-32.5ee3e3a52bd24527421edce784ea7688.svg" width="50" /> 

* Paste in links to road networks, hazard points, and hazard polygons to generate a new ReLinkeR disaster response map
* Links for road networks must be from a GeoJSON api, such as those found on Esri's municipal open data hubs
* Links for hazard points and hazard polygons must be from an Esri feature service. You can include a query string at the end of the link, but you do not need to as the app automatically appends one
* Once you have added your new datasets, zoom to the appropriate location by searching for the appropriate city and clicking "Zoom Here". This feature uses the GeoNames API from NRCAN

##### Survey

<img src="https://bwoody711.github.io/relinker/static/media/survey-32.0fa3c3c43ab492286fb2bb2bd036330a.svg" width="50" /> 

* Click this icon to access our Survey123 to add hazard points to the map

##### Limitations with Esri's Routing Service and the Run tool
* The routing service has a limit to how long the url it accepts can be. If the url is too long, the run tool will hang and not output a route. If this happens, let us know and we will remove a few hazard points, which will get it running again.


And that's it! Enjoy exploring ReLinkeR!

### Downloading and Running ReLinkeR

1. Clone the repository from GitHub
2. Download Node.js, which includes Node Package Manager (npm)
3. In your favourite terminal, run "npm install" to install necessary packages
4. In getPath.js, paste your ArcGIS developer token where indicated. Be sure that your token is configured to allow you to use the routing service
5. Run "npm start" to start the development version of ReLinkeR
6. Run "npm build" to create a production version of ReLinkeR, which can be hosted on a variety of platforms