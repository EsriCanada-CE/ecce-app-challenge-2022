//swipe function
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Swipe",
    "esri/widgets/Expand"
], function (esriConfig, Map, MapView, FeatureLayer, Swipe, LayerList, Expand) {

    esriConfig.apiKey = 'AAPKdd1e5fb46d0947a382567461358b9a6dRuT09zSFDKSYeLnqZks-JZEi0EsBsx8dyKCdLGaA5X1OHHxhRfHyzeffQG373y_u';

    const map = new Map({
        basemap: "satellite"
    });


    const flood = new FeatureLayer({
        url: "https://services.arcgis.com/z5pirEEiDCpVfvJU/arcgis/rest/services/baselayer/FeatureServer/0",
        opacity: 0
    });

    const flood1 = new FeatureLayer({
        url: "https://services.arcgis.com/z5pirEEiDCpVfvJU/arcgis/rest/services/lac_stpierre_flood_extent_spring_2017/FeatureServer/0"
    });

    map.add(flood1);


    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 14,
        center: [-72.848289, 46.199198], // longitude, latitude
        constraints: {
            maxZoom: 11,
            minZoom: 9
        },
        ui: {
            components: ["attribution"]
        }
    });

    view.on("key-down", function (evt) {
        var prohibitedKeys = ["+", "-", "Shift", "_", "="];
        var keyPressed = evt.key;
        if (prohibitedKeys.indexOf(keyPressed) !== -1) {
            evt.stopPropagation();
        }
    });


    // create a new Swipe widget
    const swipe = new Swipe({
        disabled: false,
        leadingLayers: [flood],
        trailingLayers: [flood1],
        position: 35, // set position of widget to 35%
        view: view
    });

    // add the widget to the view
    view.ui.add(swipe);
});