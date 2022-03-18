/*
  Author  : Olivier Makuch
  Date    : March 3rd, 2022
  Purpose : Create a simple html page to host a web map and display
            some basic map elements and functionallity. 
*/ 

require(["esri/WebMap", 
         "esri/views/MapView",
         "esri/layers/FeatureLayer",
         "esri/widgets/ScaleBar",
         "esri/widgets/Legend",
         "esri/widgets/Search"], 
         (WebMap, 
          MapView, 
          FeatureLayer,
          ScaleBar, 
          Legend,
          Search) => {

    // Create a Map element
    const map = new WebMap({
        portalItem: {
          id: "fa007b0db11643a5b13372b6725a3db1"
        }
      });

    // Create a Map View, add Map
    const view = new MapView({
      container: "viewDiv",
      map: map
    });

    // Create and add a scale bar 
    const scalebar = new ScaleBar({
      view: view
    });
    // Change scale bar to Metric
    scalebar.unit = "metric"
    view.ui.add(scalebar, "bottom-left");

    // Create and add a legend
    const legend = new Legend ({
      view: view
    });
    view.ui.add(legend, "top-right");

    // Create a search element
    const search = new Search({
      view: view
    });
    view.ui.add(search, "top-right");

  });