# TeamWesterlies
Team Westerlies: Abbotsford flooding risks analysis
## Team members: 
Lingxuan Fan, Xilin Wan, Lan Qing Zhao 
## Introduction to the Web App:
Due to climate change, the precipitation level in B.C. has been increasing in past years. This has resulted in multiple flooding events alongside of the Fraser river, and increasing the threat to populations who live there. Just in the past year in 2021, the city of Abbotsford has experienced the largest flooding event in decades, causing about $2 billion dollars in damages and leaving many injuries. Therefore, it is important for the home owners to know the risk levels of their home to future flooding events in Abbotsford, and how to safely evacuate during a flood. Furthermore, the officials will need to know the risk levels as well for developing a more sustainable city development plan. 
## Mission Statement: 
Flooding refers to overflowing of water onto land that is normally dry due to heavy rains, sea level rises, snow melts and dams break (Alberta Water Portal Society, 2014). Floods are extremely destructive and will cause extensive physical damage to plants, animals, and communities. Furthermore, floods can carry contaminants and viruses to a long distance which might threaten drinking water safety. According to previous studies,  global warming effects lead to snowpack melting and swelling which increases the precipitation level and chances of floods.

Faster River basin located in B.C. is one of the largest river basins in Western Canada. The average temperature of Fraser River is 11°C, and the average monthly precipitation is around 66.5 mm (Timeanddate.com, 2021). The ongoing climate change has significantly increased the precipitation level in B.C. which results in higher frequency of flooding along the Fraser River. 
Especially in the city of Abbotsford, which has experienced catastrophic flooding due to a heavy precipitation of 500mm in November, 2021. As a result, nearly 15,000 people were forced to leave their home, major roads and bridges were cut off by water, and farms were flooded up to two meters deep. Furthermore, the flooding caused landslides have killed at least five people. Financial losses were estimated at $2 billion dollars including the loss of livestocks and infrastructure (Weber, 2022).

The goal of our project is to create a story-map and a web-app illustrating the high flood risk areas in Abbotsford and educate the audience about the emergency responses to flooding. We aim to support the local community's sustainable development by increasing the resilience to floods of residents through our story map. Furthermore, our web app is useful for residents in Abbotsford because they can clearly see if their home is at risk to floods and how high the level of risk is. The functions embed in this app also provides users with some advance functions to navigate and find evacuation centres if a flood ever happens. This app can be used by newcomers to Abbotsford that are looking for a place to live, or can be used by the government officials who are determining the future planning of this city. Either way, this app is a great tool to use in a drastically changing climate like today. 

## App description and features:
Thie Web App is designed to perform flood risk analysis in the city of Abbotsford in B.C. The App provides a "level index" showing areas in Abbotsford that are at risk to future flooding events, ranking them from the lowest level flooding risk "level 1" to the highest flooding risk "level 3". On the map, areas within Abbotsford city that don't have colours overlaid have very low risks of floods, therefore are considered as safe areas in this app.

There are three features included in this app: directions, analysis and near me. With the help of these three features, the users can enhance their using experience and obtain more information, such as where and how to evacuate during a flood. 

Here are the detailed description of each feature: 

### Directions ![image](https://user-images.githubusercontent.com/100981881/160197963-fb884f90-b315-4589-a943-860af739f271.png)
- This feature allows users to find the best route between two points on the map. Users can also input locations by using their current location or entering addresses. 

### Analysis ![image](https://user-images.githubusercontent.com/100981881/160198557-ce6e67f2-d096-477d-b971-a7f272c9633e.png)
- This feature contains two sub-functions allowing users to perform more analysis based on their needs. 
- The first function is "buffer", users can create buffers around the area of their interests, for instance, distance buffer around the hospital or the evacuation centres. 
- The second function is "drive-time areas" which allows users to create an area around their point of interests with a real-life driving time, for example 5 mins/10 mins.

### Near me ![image](https://user-images.githubusercontent.com/100981881/160198808-f1834e74-aae3-410b-b70f-cc49019207db.png)
- This feature can assist users to find the near-by evacuation centres by pinning a point on map or using their current locations. This feature can also provide the fastest travel route from the user's location to the nearby evacuation centres. 

## Method and Calculation:
- **Software:** Arcmap desktop 10.8 is used to perform data processing, AHP and MCE analysis. ArcGIS online is used to create the web app and story map. Procreate is used for logo design.

- **The Analytic Hierarchy Process (AHP)** is an approach that allows criteria weight estimation relying on the experts’ view of the relative importance of criteria against another for flooding (Dash and Sar, 2020). We adopted the experts’s scoring for criteria weights from previous study.

     |    Parameter   |      Landuse      |  Slope |  Elevation
     |----------|-------------|------|------|
     | Landuse |      1     |  1/3 |  0.2
     | Slope |      3     |  1 |  0.2
     | Elevation |      5     |  5 |  1

     Table 1. _Weight matrix for analytical hierarchy process_
     
- **Multi-criteria evaluation (MCE)** focuses on combining the information from several criteria based on their weights to form a single index of output.We have reclassified all the parameters that we considered for flood risk mapping and assigned rating and weights based on previous study and AHP above.
    <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="482" style="width:241.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;
 mso-padding-alt:0cm 5.4pt 0cm 5.4pt">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:14.0pt">
  <td width="136" nowrap="" style="width:68.0pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;background:#D6DCE4;padding:0cm 5.4pt 0cm 5.4pt;
  height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;
  color:black;mso-ansi-language:EN-US">Parameters<o:p></o:p></span></b></p>
  </td>
  <td width="138" nowrap="" style="width:69.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;background:
  #D6DCE4;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;
  color:black;mso-ansi-language:EN-US">Class<o:p></o:p></span></b></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;background:
  #D6DCE4;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;
  color:black;mso-ansi-language:EN-US">Rating<o:p></o:p></span></b></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-top-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;background:
  #D6DCE4;padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;
  color:black;mso-ansi-language:EN-US">Weight<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1;height:14.0pt">
  <td width="136" nowrap="" rowspan="5" style="width:68.0pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-left-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;padding:
  0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span class="SpellE"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:
  宋体;color:black;mso-ansi-language:EN-US">Landuse</span></span><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US"><o:p></o:p></span></p>
  </td>
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">0 (Other)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">1<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" rowspan="5" style="width:52.0pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-bottom-alt:solid black .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">10%<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">1 (Urban)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">3<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">2 (Water)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">9<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">3 (Forest)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">2<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:5;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">4 (Agriculture)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">6<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:6;height:14.0pt">
  <td width="136" nowrap="" rowspan="5" style="width:68.0pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-left-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;padding:
  0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">Slope (%)<o:p></o:p></span></p>
  </td>
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">1 (0-2)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">9<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" rowspan="5" style="width:52.0pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-bottom-alt:solid black .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">20%<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:7;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">2 (2-5)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">7<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:8;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">3 (5-15)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">4<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:9;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">4 (15-35)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">2<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:10;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">5 (&gt;35)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">1<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:11;height:14.0pt">
  <td width="136" nowrap="" rowspan="4" style="width:68.0pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-left-alt:solid windowtext .5pt;mso-border-bottom-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;padding:
  0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">Elevation (m)<o:p></o:p></span></p>
  </td>
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">0 (-1-2)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">9<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" rowspan="4" style="width:52.0pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-left-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-bottom-alt:solid black .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="center" style="text-align:center;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">70%<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:12;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">1 (3-5)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">8<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:13;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">2 (6-12)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">4<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:14;mso-yfti-lastrow:yes;height:14.0pt">
  <td width="138" nowrap="" style="width:69.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" style="line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;mso-ansi-language:
  EN-US">3 (13-912)<o:p></o:p></span></p>
  </td>
  <td width="104" nowrap="" style="width:52.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-bottom-alt:solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:14.0pt">
  <p class="MsoNormal" align="right" style="text-align:right;line-height:normal"><span lang="EN-US" style="font-family:等线;mso-bidi-font-family:宋体;color:black;
  mso-ansi-language:EN-US">1<o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>
     
  Table 2. _Classes of criteria and corresponding weights used for mapping_      
  
  
## Data Sets
  <table class="a0" border="1" cellspacing="0" cellpadding="0" width="864" style="margin-left:41.0pt;border-collapse:collapse;mso-table-layout-alt:fixed;
 border:none;mso-border-alt:solid black 1.0pt;mso-yfti-tbllook:1536;mso-padding-alt:
 5.0pt 5.0pt 5.0pt 5.0pt;mso-border-insideh:1.0pt solid black;mso-border-insidev:
 1.0pt solid black">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><b style="mso-bidi-font-weight:normal"><span lang="EN" style="font-size:12.0pt;
  font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:&quot;Times New Roman&quot;">Data
  Source<o:p></o:p></span></b></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border:solid black 1.0pt;
  border-left:none;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><b style="mso-bidi-font-weight:normal"><span lang="EN" style="font-size:12.0pt;
  font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:&quot;Times New Roman&quot;">Data
  files<o:p></o:p></span></b></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border:solid black 1.0pt;
  border-left:none;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><b style="mso-bidi-font-weight:normal"><span lang="EN" style="font-size:12.0pt;
  font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:&quot;Times New Roman&quot;">Data
  Format<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">City of Abbotsford Open Data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">City boundary<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Shapefile</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"> <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">BC Open Data Catalogue<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Digital Elevation Model<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Raster file <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">City of Abbotsford Open Data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Population data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Shapefile</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"> <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">City of Abbotsford Open Data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Hospital data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Shapefile</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:5">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Agriculture and <span class="SpellE">Agri</span>-Canada<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">B.C. land use data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Raster file <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:6">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">BC Open Data Catalogue<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Coastal water and river<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Shapefile</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"> <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:7;mso-yfti-lastrow:yes">
  <td width="296" valign="top" style="width:147.75pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">City of Abbotsford Open Data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Abbostford</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"> community planning data<o:p></o:p></span></p>
  </td>
  <td width="284" valign="top" style="width:142.1pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt">
  <p class="MsoNormal" style="line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes"><span class="SpellE"><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;">Shapefile</span></span><span lang="EN" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,serif;
  mso-fareast-font-family:&quot;Times New Roman&quot;"> <o:p></o:p></span></p>
  </td>
 </tr>
</tbody></table>
     
   Table 3. _Datasource and Metadata_
   
## References
Dash, & Sar, J. (2020). Identification and validation of potential flood hazard area using GIS‐based multi‐criteria analysis and satellite data‐derived water index. Journal of Flood Risk Management, 13(3), n/a–n/a. https://doi.org/10.1111/jfr3.12620

Flood Preparation | City of Abbotsford. (n.d.). City of Abbotsford. https://www.abbotsford.ca/public-safety/emergency-program/flood-preparation

Home | City of Abbotsford. (n.d.). City of Abbotsford. https://www.abbotsford.ca/
Pearson, C. (2018, May 13). Defining usability - Prototypr. Medium. https://blog.prototypr.io/defining-usability-e7bf42e8abd0

The Canadian Press, & Weber, B. (2022, February 16). Climate change made B.C. floods at least twice as likely, Environment Canada study suggests. British Columbia. https://bc.ctvnews.ca/climate-change-made-b-c-floods-at-least-twice-as-likely-environment-canada-study-suggests-1.5784287

WaterPortal (n.d.). Alberta WaterPortal | Environmental Impacts of Flooding. Alberta Water Portal Society. https://albertawater.com/what-are-the-consequences-of-flooding/environmental/

10 Usability Heuristics for User Interface Design. (n.d.). Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/

## Images Reference
Azpiri, J. (2021, November 18). B.C. Flooding. Global News. https://globalnews.ca/news/8380118/b-c-flooding-abbotsford-rescue-by-water-air-heavy-flooding/
Chandra, C. (2021, November 20). This Map Shows How Climate Change Could Flood Areas Across BC’s Lower Mainland. 604 Now. https://604now.com/climate-change-flood-map-vancouver-lower-mainland-bc-2021/

Frontline-editor. (2020, January 6). Industrial Markets to Watch: West Abbotsford. Frontline Real Estate Services LTD. https://flre.ca/insights/industrial-markets-to-watch-west-abbotsford/

Hopes, V. (2021a, November 6). City of Abbotsford to implement COVID-19 vaccination policy for staff. Mission City Record. https://www.missioncityrecord.com/news/city-of-abbotsford-to-implement-covid-19-vaccination-policy-for-staff/

Hopes, V. (2021b, November 16). Woman on flight into Abbotsford captures aerial photos of flood devastation. Hope Standard. https://www.hopestandard.com/news/woman-on-flight-into-abbotsford-captures-aerial-photos-of-flood-devastation/

Lypka, B. (2021, November 16). VIDEO & PHOTOS: Aerial tour of flood damage to Abbotsford. Abbotsford News. https://www.abbynews.com/news/video-photos-aerial-tour-of-flood-damage-to-abbotsford/

Sheehy, F., Guest, P., & Watson, C. (2021, December 2). How bad is the British Columbia and Pacific north-west flooding and what caused it? The Guardian. https://www.theguardian.com/environment/2021/nov/17/pacific-north-west-flooding-british-columbia-washington-state-canada

Verenca, T. (2021, November 25). New satellite imagery shows Sumas Prairie flood, before and after. Victoria Times Colonist. https://www.timescolonist.com/bc-news/new-satellite-imagery-shows-sumas-prairie-flood-before-and-after-4795007

       
  
