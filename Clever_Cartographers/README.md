<p align="center" style="margin-bottom:-10px">
  <img width="300" src="https://drive.google.com/uc?id=1u8eK3sRHjBEMDBj0lkqCIbsGe0vs4XhA"/>
</p>
<p align="center">
 <b>Application Name:</b> Cool Toronto<br/>
  <b>Team Name:</b>  Clever Cartographers<br/>
  <b>Application Authors:</b> Amanda Norton, Scarlett Rakowska, Elysia Fuller-Thomson
</p>

###Application Summary
####Application Description
Cool Toronto’s primary goal is to inform Toronto residents about dangerous portions of the city during heat emergencies. Heat emergencies are expected to increase as a result of climate change in the next 40 years.^1^ It is projected that there will be over 60 extreme heat days (defined as >30° C) per year by 2050.^1^ In turn, there will be an increased demand for cooling resources- as vulnerable Toronto residents may not have access to air-conditioning. This web-application offers some cooling resources for Toronto residents. Finally, this application demonstrates vulnerable neighborhoods of Toronto – showing that some areas have disproportionate percentages of multiple vulnerable populations. The application was built using ESRI’s Geohub and integrates ESRI StoryMaps and ESRI Instant Apps. 

###Application Pages
####Home Page
The application (developed in GeoHub) has a home page that states the overall intent of the application. The application also utilizes an opensource weather widget – to inform users of the 24-hour forecast. The temperature and weather data enables residents to see if there are any upcoming heat warnings or events. The forecast data is provided by [Windy](Windy.com) and auto populates.^2^ To view the 10-day 24-hour forecast in Toronto, review the diagram below.^2^ The picture below was generated using the windy app embedded on the Cool Toronto application.

---
![Windy](https://drive.google.com/uc?id=17ZHLJ9rIM4Gp9OwkzNRFYSF_tUd48Ms8)

1. **Play:** The play button will animate the next 10 days and their subsequent 24-hour forecast. The play button starts at midnight of the current day. 
2. **Date Indicator:** The small red line represents the time of day it currently is. 
3. **Zoom:** The zoom feature allows you to zoom in on specific cities or towns. 

---
Beneath the weather widget on the home page – there is a link to the team mission statement. The link can be reached by simply clicking the text that says, “Learn More About Our App’s Mission Here.” This links the user to the team mission statement page, which is described below. The next feature on the home page is our application video introduction. Elysia walks the user through the features of the application. This feature is a Youtube link but can be viewed directly on the home web page. The final item featured on the website home page is a link to the team’s page. The page can be accessed by clicking the text that says “Learn More About our Team Here.”

####About the Team: 
The team page spotlights each of the team members and their graduate work outside of the ESRI application challenge. The page also displays portraits of each team member. There is no interactivity on this page. 

####Mission Statement: 
The mission statement of our team is outlined on this page. In addition, the page features the team’s logo and the team’s slogan. There is no interactivity on this page. 

####Extreme Heat Areas: 
This page displays a static heat exposure map initially. This map was generated by the city of Toronto and represents areas of the city that are disproportionately exposed to heat.^3^The second map is a gif demonstrating the increase in temperature change over time across Canada.4 These maps illustrate that there are anticipated growing temperature increases.^4^ With these increasing temperatures, additional heat islands and extreme heat days can be expected. 1 The final map on this page is interactive. The map shows Toronto buildings,^5^ impermeable surfaces,^6^ and tree density.^7^ These three layers are all associated with urban heat islands. ^8^ Impermeable land values were derived by averaging the raster value across dissemination areas – dissemination areas were pulled from the Statistics Canada website.^9^ The tree density values were derived by averaging the raster to the neighborhood level.^10^ The following diagram demonstrates utilities of the map.

![Extreme Heat Islands](https://drive.google.com/uc?id=12Hhc2pn5jHtX2uFDQbvDgtSxbm5-znL-)

1.	**Legend:** This button displays the legend when clicked. Users can scroll to see all the layers of the map. 
2.	**Layer:** List: This button displays a list of all the items on the map. The layers can be clicked on and off if the user wants to see one specific layer only. 
3.	**Zoom:** This button enables users to zoom in and out of the map. 
4.	**Search:** This enables a user to enter their Toronto address and examine both the impermeable surface values and the tree density values.

---

#####Extreme Heat Resources: 
The extreme heat resources page features one map with point level and neighborhood level values. The point level values are cooling centers,^11^ health service centers,^12^ parks,^13^ and water fountains.^14^ Each of these resources were selected specifically because they can aid in cooling individuals down in extreme heat events. The following diagram demonstrates how the map can be utilized: 

![Extreme Heat Resources](https://drive.google.com/uc?id=17toM5ZVcIRWyE3PHu1rhfScuErqKn40c)

1. **Zoom:** This button enables the user to zoom in and out on the map. 
2. **Legend:** This legend shows the symbology for each layer and enables the user to zoom in and out of the web page. This list scrolls and lists all layers available. 
3. **Legend Icon:** This button hides the legend if needed. 
4. **Search:** The search button function enables the user to type in their address and examine what cooling resources are nearest to them. 
5. **Layer List:** This button enables the user to turn layers on and off. 

---
#####Heat Vulnerability Areas:
Specific populations are more vulnerable to extreme heat. This StoryMap – produced in using ESRI’s StoryMaps application – shows the neighborhoods in Toronto which contain higher proportions of vulnerable populations. Heat vulnerable populations in Toronto have been specifically defined as older adults, economically disadvantaged adults (low-income), and immigrant populations.^3^ This page enables the user to explore Toronto neighborhoods and assess if their own neighborhood has higher proportions of vulnerable groups. The StoryMap’s demographic maps (demonstrated in the first two interactive map panels) utilize census data at the neighborhood level^15,16^ to show proportions of immigrant population, senior population, and low-income populations.^16^ The StoryMap also shows a map of a heat vulnerability index developed by the city of Toronto in 2011.^3^ Finally the StoryMap demonstrates specific vulnerable living communities in Toronto, as retirement homes tend to have older adults, and homeless shelters house those who are most economically disadvantaged. The retirement home data and the homeless shelter data displayed in the final interactive map slider was derived using Toronto open data.^17,18^ 

The diagram below has been created to assist with navigating the map sliders on this page:


![Vulnerability Areas](https://drive.google.com/uc?id=1GisbuKsZ_DT11oI652CB4EAGi3PP8JIV)

1. **Legend:** Click this bottom left button to reveal the layers displayed on the map. There is a button on the legend to scroll, this enables the user to see all of the contents of the map. 
2. **Slider:** Click and drag the slider to the left or right to display one of the two maps more prominently in the window. 
3. **Full Screen:** Click this to make the map full screen. 
4. **Zoom:** Use the + and – buttons to zoom in closer on the map. 
---
### Data Sources
|Name|Source| Description|Link|
|---|---|---|---|
|Proportion of Senior Adults|Toronto Open Data |Proportion of Senior Adults in Toronto Neighborhoods|[Link](https://open.toronto.ca/dataset/neighbourhood-profiles/)|
|Proportion of Low-Income Individuals|Toronto Open Data|Proportion of Low-Income Individuals in Toronto Neighborhoods|[Link](https://open.toronto.ca/dataset/neighbourhood-profiles/)|
|Proportion of Immigrants|Toronto Open Data|Proportion of Immigrants in Toronto Neighborhoods|[Link](https://open.toronto.ca/dataset/neighbourhood-profiles/)|
|Retirement Homes|Toronto Open Data|Retirement Homes in Toronto|[Link](https://open.toronto.ca/dataset/retirement-homes/)|
|Homeless Shelters|Toronto Open Data|Homeless Shelters in Toronto|[Link](https://open.toronto.ca/dataset/hostel-services-homeless-shelter-locations/)|
|Toronto Buildings|Toronto Open Data|Buildings in Toronto|[Link](https://open.toronto.ca/dataset/forest-and-land-cover/)|
|Impermeable Surfaces|Toronto Open Data|Impermeable Surfaces in Toronto – by dissemination area|[Link](https://open.toronto.ca/dataset/topographic-mapping-impermeable-surface/)|
|Cooling Centres|Toronto Open Data|Cooling Centres in Toronto (Air Conditioned)|[Link](https://open.toronto.ca/dataset/air-conditioned-and-cool-spaces-heat-relief-network/)|
|Drinking Fountains|Toronto Open Data|Public Drinking Fountains|[Link](https://open.toronto.ca/dataset/parks-drinking-fountains/)|
|Health Service Centres|Toronto Open Data|Toronto Health Service Centres|[Link](https://open.toronto.ca/dataset/wellbeing-youth-health-services/)|
|Greenspaces|Toronto Open Data|Parks and Greenspaces in Toronto|[Link](https://open.toronto.ca/dataset/parks/)|
|Tree Density|Toronto Open Data|Trees per square meter—converted from raster dataset listed.|[Link](https://open.toronto.ca/dataset/topographic-mapping-physical-location-of-trees/)|
|Dissemination Areas|Statistics Canada|Dissemination Areas Shapefile in Canada|[Link](https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2016-eng.cfm)|
|Toronto Neighborhoods|Toronto Open Data|Neighborhood Shapefile in Toronto|[Link](https://open.toronto.ca/dataset/neighbourhoods/)|

### References
1.	The City of Toronto. Extreme Weather. The City of Toronto. (2022).
2.	Windy.com. Windy.com. (2022).
3.	Toronto Health. Protecting Vulnerable People from Health Impacts of Extreme Heat. (2011).
4.	Government of Canada. Climate Warming - National Summer Temperature Scenario: 2050. (2022).
5.	Toronto Open Data. Toronto Forest and LandCover: Buildings. Toronto Open Data (2022).
6.	Toronto Open Data. Impermeable Surface. Toronto Open Data (2022).
7.	Toronto Open Data. Physical Location of Trees. Toronto Open Data (2022).
8.	United States Environmental Protection Agency (US EPA). Reducing Urban Heat Islands: Compendium of Strategies. (2008).
9.	Statistics Canada. 2016 Census - Boundary files. (2016).
10.	Toronto Open Data. Neighbourhoods. Toronto Open Data (2021).
11.	Toronto Open Data. Air Conditioned and Cool Spaces (Heat Relief Network). Open Data Toronto (2022).
12.	Toronto Open Data. Health Services . Toronto Open Data (2020).
13.	Toronto Open Data. Parks. Toronto Open Data (2018).
14.	Toronto Open Data. Parks Drinking Fountains. Toronto Open Data (2016).
15.	STAT Can. Canadian Census Data . University of Toronto CHASS Data Center (2016).
16.	Toronto Open Data: Social Development, F. & A. Retirement Homes. Toronto Open Data (2020).
17.	Toronto Open Data: Shelter, S. & H. A. Hostel Services: Homeless Shelter Locations. Toronto Open Data (2012).
 
