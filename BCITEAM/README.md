# Extreme Heat & Urban Heat Islands

## Team name
BCITEAM

## Links
[Storymap](https://storymaps.arcgis.com/stories/bf991862b8914580a0371caab9095260)

[Web app](https://ecce-appchallenge.canadacentral.cloudapp.azure.com/uhivp/)

## Team Mission Statement

In the summer of 2021 BC was hit with a heat dome killing around 595 people. With climate change and an aging population, a heat wave will put more people at risk of dying. 

The urban heat island effect is a phenomenon that occurs in densely packed urban areas. During the summer this effect is significantly noticeable. To combat this effect cities plant vegetation to help reduce the urban heat island. A research team in SFU conducted a study in 2014 to find priority areas for providing canopy cover in the City of Vancouver. We have created an app that builds on top of their research with more up to date data. 

Using satellite imagery from landsat 8 and population data from statistics canada we were able to find land surface temperature, normalized difference vegetation index and vulnerable populations during a heatwave. Combining all our datasets we were able to produce an app that lets users identify what areas should be prioritized in reducing UHIs.

Link to urban heat island publication: [click here](https://www.canada.ca/en/services/health/publications/healthy-living/reducing-urban-heat-islands-protect-health-canada.html) 

## Team
* Ferdinand Dorado
* Enrique Pedroso
* Mitchell Bailey

![Logo](images/logo.jpg)

## App Characteristics

We used a story map to showcase each process of how we produced the map for our web app. After showcasing all the layers we embedded the app to let users interactively view the data. Below the app we provide a tour highlighting communities around Vancouver. At the very end we have a call to action where users can read about Vancouver's urban forest strategy and how they can help reduce urban heat islands.

Our target audience are the city planners and the citizens of vancouver. We wanted the app to be simple and not overwhelm the user (i.e make it more easier to use for a non-GIS person). When users first see the app they can see UHIs and then click each block to find out more information. When they click each block we provide information such as: canopy cover percentage, impervious cover percentage, how many people are aged 65 and over and what the surface temperature was recorded on that day. 

## App guide

When the app opens it will show the surface temperature to highlight urban heat islands. 

Things you can do:
* Click on each block to find out more information like canopy cover %
* Change the view on each layer to visualize the canopy cover percent and the percent of the population over 65%
* Filter the layers to show where there are areas of low canopy cover or the areas where the population is most at risk in a heatwave

## Sources
This app uses data obtained from [earthexplorer](https://earthexplorer.usgs.gov/), [StatsCan](https://www.statcan.gc.ca/en/start) and [arcGIS Hub - open data](https://hub.arcgis.com/search?categories=open%20data)

Custom Widget by [RobertScheitlin__GISP](https://community.esri.com/t5/web-appbuilder-custom-widgets-documents/feature-layer-hover-widget-version-2-12-09-05-19/ta-p/915343)

Thanks to Michael Leahy of ESRI for helping us with hosting the app
