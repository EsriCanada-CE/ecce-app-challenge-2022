# Wildfire Monitoring Around Indigenous Communities

Contributors:
Olivier Makuch,
Beck Osterland,
Mike Hann
<br/><br/>
### Mission Statement
As wildfires become more frequent, solutions must be developed to mitigate social, environmental, economic, and humanitarian losses. This application serves as a monitoring system for vulnerable communities in danger of ongoing wildfires.
<br/><br/>

## Introduction
Around 5pm, during a late-June evening in 2021, residents of Lytton, British Columbia and the surrounding areas could smell the smoke of an approaching wildfire. Locals were already recovering from a number of record-hot days, the town having lived the highest-temperature ever recorded in Canadian history (49.6 °C) just days earlier. What came next, would again put the small town of 250 people in the national headlines. The scorching temperatures and drought conditions, combined with high winds bred perfect ground for a wildfire which spread quickly through the Fraser Canyon. When residents returned days later, they found 90% of Lytton gone. Nearby First Nation bands such as Lytton First Nation, Skuppah, Nicomen and Siska had the majority of their populations displaced. 

Canadians and indigenous peoples throughout the country are increasingly at risk of exposure to wildfires. A recent study published in the Canadian Journal of Forest Research has estimated that about 4.1 million people — equal to 12.3% of the Canadian population lives within the wildland-urban interface, areas where housing and forest structures at-risk of wildfires meet. While it is more commonly accepted that climate change is one of the driving factors of this increased risk, recent studies have also shown that human settlement patterns and demographics have significant effects on the vulnerability of certain populations. While on-reserve indigenous populations make up for only 1.1% of the ‘Canadian’ population, wildfire risk among these communities is closer to 33% for this population. The data highlights one of the many disparities between indigenous people and settler-colonial populations when it comes to issues relating to housing, emergency services, 

The outpaced warming temperature in the Arctic, in particular, puts the greatest pressures on many indigenous communities 

## The Application
It is this unbalance that influenced us to create this application.

This app was created to show real-time active fires, factors that may influence those fires (wind, drought), and nearby indigneous (and settler) communities. The communities contain buffer zones at 15km, 30km, and 50km. These were chosen the represent arbitrary threat levels during different wildfire conditions, but also to give perspective about community vulnerability. Wildfires can travel anywhere from 5km/hr to 25km/hr depending on environmental conditions and ecosystem type, but may also travel even faster than that over short distances. These buffer zones are thus used to qualify the immediate risks certain communities face. 

Intuitions can be made about wildfires, however, wildfires are chaotic, unpredictable, and should not be underestimated. This application is unverified, and is not meant to be relied upon incase of emergency. The 'threat level buffer' layers present a very limited indication of the danger posed to communities. Any person concerned about wildfires should listen to their local authorities for instruction. For eductional use only.

   **StoryMap  :** https://storymaps.arcgis.com/stories/97c9053e3c024e7dbaef797548a8722a <br/><br/>
   **WebApp    :** https://www.arcgis.com/apps/instant/nearby/index.html?appid=2c8031583885401e8031a42640283c23 <br/><br/>
   **Dashboard :** https://www.arcgis.com/apps/dashboards/f150bce2beb44322b6ff0b060167218b 

#### App Features
- Ongoing wildfire locations (updated daily)
- Real-time wind data (updated hourly)
- Canadian cities and municipalities under threat
- Indigenous lands under threat
- Tiered buffer zones around communities indicating vulnerability at different forward rate's of spread (FROS)

#### How to Use WebApp

1. The initial extent of the application allows user to identify the ownership of different indigenous lands, while also providing a sense of the distribution of current potential fires.
2. The panel located on the left of the map, provides an introduction on how to use the App. There are two main functionalities: (1) Search geocoded locations and (2) create a adjustable buffer around a user selected location (on click). 
3. As the user zooms into a location of interest (i.e. current wildfire), current environmental conditions (Wind direction & speed, and land surface dryness) and familiar Indigenous locations render. 
4. By further approaching the wildfire cluster, the first of three warning buffers appear while simultaneously removing the land surface dryness layer. The first buffer represents a 50 Km area around indigenous lands, the second represents a 30 Km buffer, and the third 15 Km.
5. If the user whishes to have a adjustable search area, they simply need to click any location on the map and a adjustable buffer is created.

### Data 

Three live datasets were used; Thermal  Hotspots and Fire Activity (1Km); METeorological Aerodrome Report (METAR); and Land Surface Dryness based on vegetation conditions (1Km). 

The Fire Information for Resource Management System (FIRMS) data is provided courtesy of NASA and uses data derived from the Moderate Resolution Imaging Spectroradiometer (MODIS). Fire detection is performed using a contextual algorithm that exploits the strong emission of mid-infrared radiation from fires. For spatial resolution, pixels derived from the MODIS dataset are approximately 1 km2 and temporally, the satellite revisits the same location 1-2 times per day. Through the ArcGIS Living Atlas, the FIRMS data is updated every 30 minutes using the Aggregated Live Feed Methodology and is automatically updated within the application’s web map. 
The METAR data is provided through the National Oceanic and Atmospheric Administration. The dataset contains several weather variables for each land-based station, however only the wind speed and direction were utilized. This data is updated hourly using the Aggregated Live Feeds Methodology.
Land Surface dryness based on vegetation conditions dataset is provided by Agriculture and Agri-Food Canada (AAFC). The dataset has a spatial resolution of 1 km2 and a temporal resolution of a week. The dataset is constructed using weekly precipitation anomalies derived from Standardized Precipitation Index (SPI) and vegetation conditions derived from Normalized Difference Vegetation Index (NDVI) from the MODIS Satellite. In addition, the live data is coupled with static land cover, soil retentive capacities, irrigation, ecozones and land surface elevation data to model the drought severity as described with the Palmer Drought Severity Index (PDSI). The model used, mapcubist, was developed by the AAFC, the United States Geological Survey and the United States Drought Monitor at the University of Nebraska Lincoln. 


For Identifying indigenous communities and land, two datasets were used; (1) the First Nations geographic location dataset from the Government of Canada & Indigenous and Northern Affairs Canada were each First Nation point represents its administrative office address as it is registered in Indigenous Services Canada (ISC) Band Governance Management System (BGMS); and (2) the Indigenous Lands, as defined by the Government of Canada, provided by Esri Canada. 


#### Data Layers


**Settler Communtities**<br/>
Multipolygonal layers retrieved from the 2021 Statistics Canada Boundary File online hub at (https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21). Settler communities are defined as the combination of "Population Centres" (defined by Statistics Canada as having more than 1000 people) and "Designated Places" (defined by Statistics Canada as having 400-1000 people).

**Indigenous Communities**<br/>
Multipolygonal layers of legislative boundaries verified as of May 18, 2021 retrieved from the Canada Land Surveying System of Natural Resources Canada at (https://open.canada.ca/data/en/dataset/522b07b9-78e2-4819-b736-ad9208eb1067/resource/80e7e909-bf2e-40cd-9070-03535dccff73?inner_span=True). Official definitions of the dataset boundaries can be read here(https://open.canada.ca/data/en/dataset/522b07b9-78e2-4819-b736-ad9208eb1067).

**Real-time Wildfires**<br/>
FIRMS data is provided courtesy of NASA and uses data derived from the Moderate Resolution Imaging Spectroradiometer (MODIS). Fire detection is performed using a contextual algorithm that exploits the strong emission of mid-infrared radiation from fires. For spatial resolution, pixels derived from the MODIS dataset are approximately 1 km2 and temporally, the satellite revisits the same location 1-2 times per day. FIRMS data is updated every 5 minutes to capture near-real-time changes in fire activity. These changes are automatically updated within the application’s web map. 

**Real-time Wind Data**<br/>
The METAR data is provided courtesy of the National Oceanic and Atmospheric Administration. 
https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer

**Weekly Land Surface Dryness Based On Vegetation Conditions**<br/>
Land Surface dryness based on vegetation conditions dataset is provided courtesy of Agriculture and Agri-Food Canada (AAFC).
https://agriculture.canada.ca/atlas/rest/services/imageservices/vegdri/ImageServer

## References
[1] Sandy Erni, Lynn Johnston, Yan Boulanger, Francis Manka, Pierre Bernier, Brian Eddy, Amy Christianson, Tom Swystun, and Sylvie Gauthier. Exposure of the Canadian wildland–human interface and population to wildland fire, under current and future climate conditions. Canadian Journal of Forest Research. 51(9): 1357-1367. https://doi.org/10.1139/cjfr-2020-0422



