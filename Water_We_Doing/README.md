# Infrastructure Flood Mapper
## Team: *Water We Doing*
- Danilo Jovanovic
- Gabriella Sta. Cruz
- Ryan Wong

## Table of Contents
1. [How to use the app](How-to-use-the-app)
1. [Mission statement](Mission-statement)
1. [App statement](App-statement)
1. [Team member profiles](Team-member-profiles)
1. [Data sources and references](Data-sources-and-references)

## How to use the app
- [Start using the Poseidon web app](https://utoronto.maps.arcgis.com/apps/webappviewer/index.html?id=6e5846e711eb47a0af1e38de50598af8)
- [Watch a promotional and demonstration video of the app](https://drive.google.com/file/d/1dtarrn9fjX6Tquh7WgYBhUVOn-Lm3zqy/view?usp=sharing)
<details>
<summary>Video transcript</summary>
<br>
SLIDE 1: As climate change progresses, the likelihood of flooding increases. Large-scale flooding recently affected the province of British Columbia, so we decided to focus our efforts there. With numerous projects currently underway in this province, we wanted to bring awareness to the projects that may be on existing and historical floodplains, as they may experience floods in the upcoming years.

SLIDE 2: In the upcoming decades, the prevalence of natural disasters such as floods, fires, and landslides are expected to increase as a result of climate change.
 
SLIDE 3: A significant portion of Canada’s infrastructure is located within areas that are susceptible to flooding, and accessing this data can be challenging for the public. 

SLIDE 4: Since infrastructure is a costly investment for public and private entities, we believe that this data should be more accessible, and more Canadians should be aware of the rising threats of flooding. 

SLIDE 5: Our app aims to highlight the proximity of many of Canada’s planned infrastructure projects to floodplains and historical flood zones. 

SLIDE 6: We curated open data to create a list of approved projects in the province of British Columbia. We also collected historical floodplain boundaries and recent flood extents. 

SLIDE 7: Using the ArcGIS Online Web AppBuilder, we created a tool that queries and returns information

SLIDE 8: Most of British Columbia’s existing floodplain map data is physical or hand-drawn. It is possible that some of the approved infrastructure projects are not at risk of flooding despite being located in a historical flood zone, 

SLIDE 9: but preventative measures such as floodwalls or levees are often not disclosed to the public in an accessible format. 

SLIDE 10: Our app demonstrates the benefits of having these maps digitized. Instead of manually searching for a hand-drawn flood map, with our app, a homeowner or developer could check if their project is located within or in the vicinity of a floodplain or area that has been recently flooded.

DEMO: In the box menu, the legend icon allows users to view the legend and better understand the symbology on the map.
The layers icon is used to control which layers are visible. Here users can turn off layers that are not important for them to see when performing their assessment.
Using the Evaluate Hazard tool, users can select a buffer size around the flood layers to see whether or not any infrastructure projects fall within that area. In this example, we are performing an analysis to see which infrastructure projects lie within 100 meters of a floodplain or are overlapping with recent areas that have flooded.
Once the analysis is complete, we can view which project sites are considered at risk based on the initial criteria we inputted. The details of a project are displayed when it is selected on the map, which can be useful for assessment by agencies or organizations. 
Selecting a flood layer on the map will display the year and location of the flood that the polygon represents. This is useful for seeing when an area has flooded in the past.

</details>

### Tutorial: Determine if an infrastructure project is at risk
1. In the tools menu, select the **Evalueate Hazard** tool.
1. You can query which infrastructure projects are at risk based on either the historical **Floods** layer, or **Floodplains** layer.
    - In the Related layer dropdown, select **Floods** to assess infrastructure projects’ proximity in relation to historic floodplains.
    - In the Related layer dropdown, select **Floodplains** to assess infrastructure projects’ proximity in relation to historic floodplains.
1. Type a number in the **Apply a search distance** field. The default value is 100 meters.
1. You can select specific features of the layer you want to query.
    1. Click the <img src="images/outline-icon.png" alt="Draw shapes to select features" width=14px> icon.
    1. Click and drag anywhere on the map area that overlaps the features that you want to examine.
1. By default you will query all of the features in the layer you choose. Wait 5 to 10 minutes after selecting features for evaluating hazards for the area around your selected features to generate.
1. Click the **Apply** icon. The process should take 3 to 5 minutes to complete.
1. When the process completes, View risk tab, you can click on the generated list of infrastructure projects within your defined proximity of the flood-prone areas to view them on the map.

## Mission statement
Our goal was to create a tool that showcases the risks of flooding to infrastructure projects in Canada. Flooding can cause loss of life, damage to property or infrastructure, and severe economic devastation if not properly mitigated. Despite the risks posed by flooding, many Canadian infrastructure projects are located within floodplain areas. Our mission is to highlight the proximity of upcoming infrastructure projects to existing and historical floodplains.

## App statement
Poseidon is designed to help companies, organizations, and individuals visualize the proximity of infrastructure projects to provincial floodplains. Projects approved by Infrastructure Canada are displayed over top of polygons representing both historical floodplains and recent flood extents. End users can view the details of the project and query whether or not it lies within a set proximity to areas historically prone to flooding. The app can be used as a demonstration of the importance of easily accessible digital mapping of flood plains.


## Team member profiles

<img src="images/Danilo-Cropped.jpg" alt="Danilo DeVito" width=20%>
Dani: I am a fourth-year undergraduate student competing in this challenge for the first time. I am majoring in physical geography, with minors in biology and sociology. GIS and remote-sensing courses have been my favourites during my studies, so I am excited to learn more and develop my skills in this challenge! In my spare time, I dabble in graphic design, writing, and literature. I also spend hours poring over old and new maps, discovering what has been discovered before. I hope to one day contribute some of my own knowledge to future cartophiles.


<img src="images/Gab-Cropped.jpg" alt="Gabriella Santa Claus" width=20%>
Gaby: I am a fourth-year undergraduate student double-majoring in GIS and Human Geography. Throughout university, I have thoroughly developed my love for GIS and learning about the relationships between place and space. After my undergrad, I aspire to obtain a Masters in Urban Planning and one day become a professional planner. 


<img src="images/Ryan-Cropped.jpg" alt="Ryan" width=20%>
Ryan: I enjoy making music, and creating useful mobile apps. My passion for teaching and computers has led me to love GIS because of the opportunity to transform data and delight viewers by weaving meaningful stories. I am in my 4th year at University of Toronto Mississauga studying GIS, Communication Technology, and Computer Science.

## Data sources and references
[Infrastructure	Infrastructure Canada - Investing in Canada Plan Project Map](https://www.infrastructure.gc.ca/gmap-gcarte/index-eng.html)

[Floods	Floods in Canada - Cartographic Product Collection - Open Government Portal](https://open.canada.ca/data/en/dataset/08b810c2-7c81-40f1-adb1-c32c8a2c9f50)

[Mapped Floodplains in BC - British Columbia Data Catalog - BC Geographic Warehouse](https://catalogue.data.gov.bc.ca/dataset/mapped-floodplains-in-bc-historical/resource/12b14039-3a2b-435b-bccc-90f99a09955a)

[Climate change made B.C. floods at least twice as likely, study suggests](https://globalnews.ca/news/8622139/study-climate-change-bc-floods/)

[World Topographic Map Basemap - Esri](https://www.arcgis.com/home/item.html?id=7dc6cea0b1764a1f9af2e679f642f0f5)
