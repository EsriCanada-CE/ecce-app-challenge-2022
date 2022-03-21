# Conquer the Cold Calgary by the UCalgary Geograsaurs

This repository hosts documentation, code, and links to support the Geograsaurs web application created for the 2022 Esri Canada GIS Centres of Excellence (ECCE) App Challenge: **Conquer the Cold Calgary (CCC)**. 

Link to the application: https://experience.arcgis.com/experience/2b9e81d4053846599e943e71a557d329/

## Introduction

Natural disasters are caused by a wide range of environmental phenomena. Many regions in Canada are affected by natural disasters such as catastrophic floods and wildfires (e.g., Calgary 2013 floods; Fort McMurray 2016 wildfires) that have been well-reported in the past decade. Because of their scale and harm to humans and the environment, provincial governments and municipalities have taken steps towards mitigating the impacts of future severe natural disasters (Weber, 2020). 

There is another type of natural disaster in Canada that disproportionately affects vulnerable populations: extreme cold. People experiencing homelessness are more vulnerable to the impacts of extreme weather (Cusack et al. 2013), and in large urban centers such as Calgary, extreme cold weather events are persistent seasonal threats to the city’s homeless population. The City of Calgary lists extreme cold as an increasing disaster risk with moderate consequences due to its effect on vulnerable populations like the homeless and the added stress it places on health care and other services (City of Calgary, 2022). This past winter, parts of Alberta (including Calgary) experienced cold snaps with wind chill temperatures of around -40 °C. Different shelters in Calgary have reported an increase in demand for their services during extreme cold periods (Heydari, 2018). As a result, prolonged periods of extreme cold may stress current infrastructure capacities available to support people experiencing homelessness during times that are most threatening to their wellbeing. 

Providing adequate and quality shelter space and services for Calgary’s homeless population during extreme cold emergencies represents a challenge for municipal governments and non-governmental organizations (NGOs). Climate change and limited availability of affordable housing in Calgary are also combining to create a multi-faceted and deadly seasonal problem for those unable to secure housing. Roughly 190 people experiencing homelessness in Calgary in 2020 died as a result of exposure, with a lack of warming centers available during winter months being one particular cause (Gervais, 2021). This indicates that expanded shelter services may be required to better prepare for future cold weather emergencies and protect the most vulnerable part of Calgary’s population during the most extreme events. 

Our app informs better emergency preparedness for extreme cold weather at the municipal level in the City of Calgary. We used statistics and geospatial analyses to investigate the relationship between overnight shelter stays in Calgary and cold weather in 2019 and to characterize areas where infrastructure can be expanded to improve supports available for the most vulnerable Calgarians. While our app focuses on the City of Calgary, the methods could be reproduced for other cities in Canada.

## Mission Statement: Conquer the Cold Calgary (CCC)
The goal of our ESRI Canada GIS Centres of Excellence (ECCE) App Challenge project for 2022 is an accessible online application that presents statistical and geospatial analyses relating to extreme cold weather events and the part of Calgary’s population currently experiencing homelessness. Our app, **Conquer the Cold Calgary (CCC)**, is intended to be a public-facing resource capable of informing city planners, NGOs, and the public on areas to target for shelter infrastructure expansion to protect Calgary’s homeless population. The information communicated through the app will help the City of Calgary better prepare for future periods of extreme cold weather to protect the most vulnerable parts of the population. 

## Statement of Characteristics and App Functionality

We used ArcGIS Experience Builder to configure a dashboard style web app. Our app communicates the statistical and geospatial findings of our project using a map with multiple layers, widgets, and embedded content like images and text. The characteristics and functionality of the app include:

1. Ability to visualize and interact with five different web layers in a map consisting of census data on income, employment, and homeownership, as well as the locations of shelters in Calgary and 20 minute walk time polygons around those shelters. We note that we do not map homelessness specificially, but use the census layers as proxies for areas in Calgary that may have a higher proportion of people experiencing homelessness. Interacting with these layers should reveal areas that would benefit from additional infrastructure to protect this vulnerable part of the population from extreme cold. Spatial gaps in areas of low median household income, employment, and home ownership that are not within a 20 minute walk to current shelters should be targeted as areas for new infrastructure. The basemap can be changed using a widget on the map and users can also display their own location if the location services on their device are active. The map is also interactive and users can click on different points and polygons to see pop ups of attributes.
2. Communicates statistics using three different plots as embedded content in the Experience. From left to right these plots show (i) daily minimum temperatures in Calgary in 2019, (ii) total overnight shelter stays recorded at all shelters reporting data in Calgary in 2019, and (iii) ordinary least squares (OLS) regression of overnight shelter stays on daily minimum temperatures. The regression equation and R^2 value of 0.36 are displayed on the plot. Results from the regression analysis should provide justification for additional municipal funding to create new shelter spaces to better protect people experiencing homelessness from cold weather.
3. Ability to scroll through attribute data of each shelter location using the feature widget. This widget provides information on the name of each shelter, the organization operating it, capacity, and a hyperlink to the organization's website. An additional contribution of this app is a new points feature layer of publicly known shelters in Calgary that will be made available to the GIS community. 
4. Improved understanding of app functionality through embedded rich text describing key features and communicating essential information for users.

## Data Sources
- 2016 open-source census data for the City of Calgary. While more recent census data is available, this dataset contained more robust attribute data related to housing.
  - The City of Calgary. (April 20, 2020a). 2016 Census of Canada - Household Income. https://data.calgary.ca/Demographics/2016-Census-of-Canada-Household-Income/wj3a-wgmh.
  - The City of Calgary. (April 9, 2020b). Census by Community 2016. https://data.calgary.ca/Demographics/Census-by-Community-2016/hfwb-eab8.
- Income data from a publicly-available 2014 community demographics report.
  - Great News Media. (n.d.). Calgary Community Demographics. https://great-news.ca/demographics/.
- Historical weather data from Calgary International Airport.
  - Government of Alberta. (2022a). *Current and Historical Alberta Weather Station Data Viewer (Calgary International Airport A)*. [Data set]. Alberta Climate Service. https://www.alberta.ca/acis-find-current-weather-data.aspx.
- Provincial data on shelters to generate a list of shelters.
  - Government of Alberta. (2022b). *Emergency Shelters Daily Occupancy AB 2013-2021*. [Data set]. Alberta Government Open Data. https://open.alberta.ca/opendata/funded-emergency-shelters-daily-occupancy-ab.
- Google searches of these shelters to support more complete attribute data. 

## Methods and Tools

### *Data Cleaning and Statistics*

Python and Jupyter Notebooks were used in Microsoft Visual Studio (VS) Code to clean, analyze, and visualize weather data from the Calgary International Airport (Station ID: 3031092) and data from the Alberta Government on daily shelter occupancies. Open-source packages used were: pandas, numpy, matplotlib, and statsmodels. 

2019 was chosen as the year to analyze weather and shelter occupancy data sets because it is the most recent year with full time series data before the COVID-19 pandemic. Including shelter data from more recent years would have biased the analysis. 2019 was also chosen because it was one of several more recent years that did not include records of shelter stays due to ‘Cold Weather Emergencies’ which were inconsistent throughout the data set. Counts of overnight stays from each shelter were aggregated on daily time scales to explore the relationship between shelter stays and cold weather. Daily minimum temperatures from the weather data set were used during analyses as opposed to daily mean temperatures because minimum temperatures are likely a better measure of extreme cold given the significant diurnal temperature variability in Calgary. Aggregated overnight shelter stays were regressed on daily minimum temperatures to explore the control extreme cold has on the number of overnight shelter stays in Calgary. 

### *ArcGIS Pro*

Provincial data on emergency shelters and Google searches were used to generate a new points layer of shelter locations in Calgary and attribute data such as operating organization and capacity. Displaying these locations as point features allowed for spatial analyses to be conducted regarding the accessibility of each shelter. As we assume most people experiencing homelessness do not have access to a vehicle, it is important to understand the accessibility of shelter infrastructure by foot, especially in a time of crisis such as an extreme cold weather event. Using the Create Drive-Time Areas tool, we were able to generate 20-minute walk time polygons around each shelter. 

Choropleth feature layers were constructed from census datasets to characterize three focal variables serving as proxies for areas in the City of Calgary that may have a higher proportion of individuals currently experiencing homelessness: income, homeownership, and employment. 

Statistics such as median household income aggregated by census tract were organized into feature layers to visualize the distribution of wealth in Calgary. An additional choropleth feature layer was created to characterize the proportion of people in each community earning less than $20k/year.

Using the census data, the number of employed individuals within each community was normalized by the total number of community residents that are working age (i.e., between the ages of 15 and 64). This was done to avoid representing raw counts of employed residents and to restrict the age demographic to people below the retirement age of 65.

Lastly, the 2016 census dataset was also used to represent homeownership throughout the city. Similar to employment, we normalized homeownership rates in each community in Calgary by using the total number of residents within each census tract. We used the normalized homeownership rates for each community as a proxy for the proportion of individuals able to secure permanent housing. This variable is likely a strong indicator of the housing security for a region in the City of Calgary.

### *ArcGIS Experience Builder*

We configured the ‘Monitor’ template in ArcGIS Experience Builder to build our web app. We chose Experience Builder because of its flexibility and customizability and the monitor template because of its sleek dashboard-like layout. We also selected the monitor template because its design is catered to effectively presenting geospatial and statistical information to end users which was one objective of our project.

## References

Cusack, L., van Loon, A., Kralik, D., Arbon, P., & Gilbert, S. (2013). Extreme weather-related health needs of people who are homeless. *Australian Journal of Primary Health*, 19(3), 250-255.

Gervais, B. (2021, December 21). Longest Night of the Year mourns people who died without housing in Calgary. *Calgary Herald*. https://calgaryherald.com/news/local-news/longest-night-of-the-year-mourns-people-who-died-without-housing-in-calgary.

The City of Calgary. (2022). Disaster Risk Explorer. https://maps.calgary.ca/DisasterRiskExplorer/.

Heydari, A. (2018, February 9). Extreme cold increases demand for Calgary homeless services. *CBC*. https://www.cbc.ca/news/canada/calgary/extreme-cold-increases-demand-for-calgary-homeless-services-1.4529518.

Weber, B. (2020, September 29). Alberta’s auditor general finds province’s disaster risk assessment plan in poor shape. *The Canadian Press*. https://globalnews.ca/news/7366460/alberta-auditor-general-disaster-risk-assessment/.

