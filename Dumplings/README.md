# Emergency Preparedness for Flooding Events in Ottawa, ON
## ECCE Web Challenge - Western University
Team Name: Dumplings
Team Member: Stanley Ho, Jayden Zhe Chang
## Mission Statement
Ottawa has a history of being affected by flooding along Ottawa River, Rideau River, and adjacent small creeks and lakes. Most recent flood events in May 2016, July 2018, and the most severe one in April and May 2019 affected many streams, lakes, watersheds, and local neighbourhoods around the city of Ottawa (CBC News, 2017, 2018, 2019; Ottawa River Regulation Planning Board, 2019; Pringle, 2019) . The floodplain is monitored by conservation authorities within the city of Ottawa including South Nation Conservation, Rideau Valley Conservation and Mississippi Valley Conservation providing historical flood plain maps and real-time monitoring information (City of Ottawa, 2021). While the temperature rises and snow continues to melt, the city of Ottawa has put out an Emergency Preparedness plan on their website in March for the upcoming 2022 spring flood to reduce potential socio-economical losses (City of Ottawa, 2022b). We identify that the existing resources and information are scattered and disconnected. To combine various resources and information related to flooding in Ottawa, the flood prevention information guide aims to deliver an intuitive navigation system that gathers geospatial information including the geography of the Ottawa water system and resources available in the city to aid citizens in better preparing for the upcoming flood season.
## App information
This web application will be publicly available and aims to answer why, where, and how. Why flooding may happen close to my neighbourhood, where would the flooding happen, where can I find help and how can I prepare myself?

A 300-meter buffer layer is created over the river system to simulate the potential flood risk area in the city of Ottawa. Set as one of the base layers, this shows the user whether their neighbourhoods are at potential risk of being affected by the flood. Users also have the opportunity to search their houses using the find address function available to see if their location falls within the buffer area.

Resources for flood response are included in the app includes city services such as police stations, ambulance facilities, fire stations, and veterinary services where residents can reach out to, or they can expect whether their locations will be accessible by search-and-rescue officials.

The City of Ottawa provides sandbags to residents who live in areas prone to Spring flooding at various locations across the city. Sandbag distribution layer shows the users where they are available.

Community shelters and school shelters area are crucial to many residents seeking for help during emergency and natural disaster.

Lastly, this app enables a few key functions that comes very handy for navigation and acquire for information, including measuring distance, searching for locations, calculating shortest routes, summary counts of services available.

## How to use the app
### Shortest route
This is the most practical function where users can plan routes to access city services or evacuate to designated shelters or away from the city. The flood buffer layer can caution users if their travel path would pass through flooded areas that might have risks to immobilize their vehicles or be impassable by walking.
### Measure distance on the map
This is helpful for users to have a rough concept on the Euclidean distance between locations.
### Summary Count
This provides a quick, localized summary of service points available to the residents of the city.
### Legend explanation
The legend can be toggled on and off for users to familiarize with the elements shown on the map app.

## Limitation
When visualizing the potential flood risk area, we had thought about whether historical, major map layers would be available for us to reconstruct some of the flood events that could have been described as a 100-year flood (City of Ottawa, 2022a). Since those materials was not available for download, we also reviewed on some research methods such as GARI, multiple criteria decision analysis, and also ESRI’s Flood Impact Analysis to see if we can build it on our own (Ajibade et al., 2021; Esri, 2022; Lim & Lee, 2009; Oubennaceur et al., 2021). Our impression was that many methods demand knowledge in hydrology and data such as river discharge rate, DEM, rainfall data and land use data, that are out of our expertise and demand extended of time to understand the concept. Therefore, we decided to visualize it with a buffer instead to just demonstrate our concept. It is recommended for the readers to study those mentioned models in order to formulate a better simulation method of the flood area.

## Data Sources
* Open data, Government of Canada
	* https://open.canada.ca/en/open-data
* City of Ottawa open data
	* https://open.ottawa.ca/
* Scholars Geoportal
	* http://geo2.scholarsportal.info/

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# References
Ajibade, F. O., Ajibade, T. F., Idowu, T. E., Nwogwu, N. A., Adelodun, B., Lasisi, K. H., Opafola, O. T., Ajala, O. A., Fadugba, O. G., & Adewumi, J. R. (2021). Flood-prone area mapping using GIS-based analytical hierarchy frameworks for Ibadan city, Nigeria. _Journal of Multi-Criteria Decision Analysis_, _28_(5–6), 283–295. https://doi.org/10.1002/mcda.1759

CBC News. (2017, May 14). _The Ottawa and Gatineau flood: A timeline of events_. https://www.cbc.ca/news/canada/ottawa/ottawa-gatineau-floods-photos-week-1.4110510

CBC News. (2018, July 25). _Sewer waters flood into Gatineau homes amid heavy rain_. https://www.cbc.ca/news/canada/ottawa/gatineau-rain-flooding-july-25-2018-1.4761315

CBC News. (2019, May 4). _Under water, again_. https://www.cbc.ca/news/canada/ottawa/ottawa-river-flooding-2019-recap-1.5119980

City of Ottawa. (2021, April 14). _Flood Plain Mapping_. https://ottawa.ca/en/city-hall/public-engagement/projects/flood-plain-mapping

City of Ottawa. (2022a). _How to find out if your house is in the 1-in-100 year flood plain_. https://ottawa.ca/en/planning-development-and-construction/maps-and-zoning

City of Ottawa. (2022b, March 15). _Spring flooding 2022_. https://ottawa.ca/en/health-and-public-safety/emergency-preparedness/spring-flooding-2022

Esri. (2022). _Introduction to Flood Impact Analysis_. https://doc.arcgis.com/en/arcgis-solutions/latest/reference/introduction-to-flood-impact-analysis.htm

Lim, K. S., & Lee, D. R. (2009). The spatial MCDA approach for evaluating flood damage reduction alternatives. _KSCE Journal of Civil Engineering_, _13_(5), 359–369. https://doi.org/10.1007/s12205-009-0359-2

Ottawa River Regulation Planning Board. (2019). _2019 Spring Flood – Questions and Answers_. https://ottawariver.ca/wp-content/uploads/2020/03/FAQ_2019_ORRPBV.Oct24.pdf

Oubennaceur, K., Chokmani, K., El Alem, A., & Gauthier, Y. (2021). Flood Risk Communication Using ArcGIS StoryMaps. _Hydrology_, _8_(4), 152. https://doi.org/10.3390/hydrology8040152

Pringle, J. (2019, December 19). _Ottawa River flooding the top weather story of 2019_. Ottawa. https://ottawa.ctvnews.ca/ottawa-river-flooding-the-top-weather-story-of-2019-1.4736458
