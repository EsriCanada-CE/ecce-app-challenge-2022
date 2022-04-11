# New Brunswick Flood Risk Map - Readme

The NB Flood Risk map is built using ArcGIS online and is deployed as a webapp: [New Brunswick Flood RIsk Map](https://wiz8fvj50b7v31aq.maps.arcgis.com/apps/webappviewer/index.html?id=833c32082a9a4e49a45ae4e1401c3024)

The inbuilt pan and zoom navigation of the map fits the real-word demands of monitoring for different levels of civic administration levels natural. 


## Use case: Monitoring single station 

1. Loading the URI, and opens the map centred on Fredericton.
![App Launch screen](https://i.imgur.com/Hanl7m6.png) 
2. A hydrometric station is plotted as a light-blue rectangle, highlighted below
![Hydrometric Station](https://i.imgur.com/1b21IXL.png)
3. Clicking a station opens up its details as follows, with the most important parameter **HEIGHT** stating the measure of its water level
![Hydrometric Station - Detail Popup](https://i.imgur.com/ub41Nvm.png)Please note that the station id has a CAN prefix, which needs to be removed when looking up further details from local government resources. 

4. Along with these stations and near-real time water levels the historical extent of flood from 1973 to 2018 has been plotted to help an expert quickly estimate the risk. 
![Highlight - Legend](https://i.imgur.com/EIkBVSY.png)
![Legned opened](https://i.imgur.com/h1ChL58.png)&nbsp;
## Use case: Monitoring a region (with multiple stations)

1. Open the layers menu from top-right 
![Highlight Layers menu](https://i.imgur.com/YizhRdW.png)

2. Click on the vertical dots "⋮" for "Live Stream Gauges" Layer and click "View Attribute in Table" 
![Opening Table view](https://i.imgur.com/BOLbPOU.png)
3. A quick summary of the visible hydrometric station appears on the bottom 
![Table View bottom screen](https://i.imgur.com/3sIGLgo.png)
4. At this point, zooming out to the relevant level, adds more stations to the purview 
![Zoom out table view](https://i.imgur.com/F4uEG0W.png)
5. Consider an example, where the user needs to quickly find places that are experiencing water levels of at least 10 feet. First, they may open "Options" menu and click "Filters" 
![Options menu with Filter highlighted](https://i.imgur.com/oTFBi9U.png)
6. Click on "Add expression"
![Add Expression Dialog](https://i.imgur.com/ihtPcja.png)
7. Select "Height" as the parameter 
![Select Height from parameter options](https://i.imgur.com/XfoYyQU.png)
8. Configure the expression to be greater than 10 units and click "OK"
![Finalize expression](https://i.imgur.com/WuJBU58.png)
9.  Out of 87 stations, now the map displays 15 with[ water level beyond 10 feeet. 
![Map with expression](https://i.imgur.com/mnRQ75t.png)
## Use case: Reviewing historical flooding areas 

1. Start with an appropriate zoom level and open the layers menu from top-right
 ![Zoomed in map](https://i.imgur.com/yxEzCVw.png)
2. Deselect all the flood area layers to begin analysis
![All selected](https://i.imgur.com/hmyOHLX.png)![None selected](https://i.imgur.com/YVXm5a4.png)
3. We recommend that the user start adding layers with the "Flood Hazard Areas" first which predicts flood lines for next 10, 20 and 100 years 
![Flood Hazard Areas Layer](https://i.imgur.com/YTDz66O.png)
4. Beyond this, the user may add multiple historical flood area layer
![Multiple flood layer](https://i.imgur.com/6wYg8L5.png) 



