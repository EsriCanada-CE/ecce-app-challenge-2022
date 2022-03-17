# FindMe
A web/mobile app that lets users locate nearby emergency services locations and report their needs and physical conditions during an event of natural disaster in BC, Canada. 
Created and owned by Ryan Cheung and Ruimeng Pang.

## Mission Statement
The three digits telephone number '911' has been designated as a nationwide number that provides the public a fast and easy access to reach for emergency assistance. It is designed to handle a fair amount of calls at a given time, but is limited to the number of agents at the call centers. During an event of natural disaster, this communication network could be overwhelmed and conjested. This telephone number would immediately pop up in the heads of people with concerns or in danger. At times like these, it is crucial that urgent emergencies receive priority attention. We understand that people could be desperate in finding out whether they are safe or who they could reach for help during natural disasters, therefore, we created the web, tablet and mobile application **FindMe** that allows people with concerns and/or suffering from less life-threatening situations to report their physical conditions and look-up emergency services locations, as well as real-time evacuation orders and alerts issued by the EmergencyInfoBC. We hope that **FindMe** could help alleviate the tension at the 911 call center and provide the public with crucial information about situations of the event. It could also save time for authorities, emergency service personnels and other first responders to locate these victims and reduce the time needed to search for them.

## Application Descriptions and Layers
Users could access 3 main functions on **FindMe** - look up emergency services locations, report physical conditions and locations and real-time emergency orders and alert. Nagivation through the tabs for these functions. The general app interface also links the users to the "Public emergency preparation and recovery" by the BC Government, and provides a link to all the Emergency Management B.C. office contacts.

### Emergency Services Locations
Launching **FindMe** will bring users to the 'Emergency Services' tab by default. From here, users have the ability to locate themselves on the map and pinpoint emergency services locations such as fire and police stations. Users can use the search bar to look for a specific facility, address or service category. The map will pan to the specific facility by selecting the name of it.

### FindMe (Emergency Report)
The **FindMe** Emergency Report is a survey designed with Survey123. The form collects information from users, including personal contact information, their physical conditions, supply sufficiencies and locations. Entries details will be automatically added to the map and in the attribute table so authorities and emergency services personnels could perform rescues or other related measures to help these victims. 

### Emergency Orders and Alerts
EmergencyInfoBC is active during partial and full-scale provincial emergencies such as events of tsunami, wildfire and earthquakes. They share official response and information about the situation as well as real-time evacuation alerts and orders. Users could easily access these information on **FindMe**. Details of the evacuation orders can be viewed in the feature table located at the bottom of the tab interface. The map will pan to the location of the chosen evacuation order. Users can cycle through evacuation orders around BC by clicking on the left and right arrows located at the top of the feature table. They could also use the search bar to look up specific evacuation alerts/orders.

## Open Data Sources
[1] Open Government License - British Columbia, Evacuation Orders and Alerts 
https://catalogue.data.gov.bc.ca/dataset/7efd46d0-b5d3-4dff-af80-d376c42aec33

[2] Open Government License - British Columbia, BC First Responder Locations
https://hub.arcgis.com/datasets/exchange::bc-first-responders/about

## References
[1] University of Oxford, Natural Disaster Data Explorer
https://ourworldindata.org/natural-disasters#:~:text=States%20(not%20comparable)-,Natural%20disasters%20kill%20on%20average%2060%2C000%20people%20per%20year%20and,disaster%20event%20claims%20many%20lives
