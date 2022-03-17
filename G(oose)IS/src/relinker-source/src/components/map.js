import { useState, useEffect, useRef } from "react";
import { arcgisToGeoJSON } from "@terraformer/arcgis";

//OpenLayers
import Map from 'ol/Map'
import View from 'ol/View'
import {Style, Fill, Stroke, Icon} from "ol/style";
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import {OSM, Source, Vector as VectorSource, XYZ} from 'ol/source'
import {fromLonLat} from "ol/proj";
import {defaults as defaultControls} from "ol/control"
import {GeoJSON} from 'ol/format'
import {Modify, Draw, Snap, Select} from 'ol/interaction'

//Turf.js
import {booleanIntersects} from "@turf/turf"

//ArcGIS Rest API
import { getPath } from "../functions/getPath";

//Icons
import water_over_road from "../icons/png-water_over_road.png"
import downed_tree from "../icons/png-downed_tree.png"
import downed_powerline from "../icons/png-hydro.png"
import bridge_broken from "../icons/png-bridge-broken.png"
import road_damage from "../icons/png-road-damage.png"
import road_debris from "../icons/png-road-debris.png"
import other from "../icons/png-other-hazard.png"

function MainMap({drawRoute, baseName, customUrl, run, endRun, erase, endErase, getHazardInfo, overlay, opacity, roadUrl, pointsUrl, polyUrl, centerName}) {
    const [map, setMap] = useState();
    const mapElement = useRef();

    const mapRef = useRef()
    mapRef.current = map;

    const [roadsLayer, setRoadsLayer] = useState();

    const [hazardPolyLayer, setHazardPolyLayer] = useState();

    const [routeLayer, setRouteLayer] = useState();

    const [hazardPointsLayer, setHazardPointsLayer] = useState();

    const roadsRef = useRef()
    roadsRef.current = roadsLayer;

    const hazardPolyRef = useRef()
    hazardPolyRef.current = hazardPolyLayer;

    const routeRef = useRef()
    routeRef.current = routeLayer;

    const hazardPointsRef = useRef()
    hazardPointsRef.current = hazardPointsLayer;

    //Functions for fetching from Esri GeoJSON API
    async function getGeoJSON(url) {
        const res = await fetch(url)
        const data = res.json()
        return data;
    }

    async function jsonToFeatures(url) {
        const data = await getGeoJSON(url)
        const features = (new GeoJSON({dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'})).readFeatures(data)
        return features;
    }

    //https://stackoverflow.com/questions/37829941/use-svg-icon-as-marker-in-openlayers
    //Make sure you define width and height in the SVG itself
    const waterOverRoadIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: water_over_road,
    });

    const downedTreeIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: downed_tree,
    });

    const downedPowerLineIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: downed_powerline,
    });

    const brokenBridgeIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: bridge_broken,
    });

    const roadDamageIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: road_damage,
    });

    const roadDebrisIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: road_debris,
    });

    const otherIcon = new Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.15,
        src: other,
    });

    const iconStyle = new Style();

    //Get Hazard Points
    useEffect(() => {
        jsonToFeatures('https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/road_hazard_points_view/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson')
            .then(features => {
                const hazardPoints = new VectorLayer({
                    source: new VectorSource({
                        features: features
                    }),
                    style: function(feature) {
                        if (feature.get('type') === 'road_water') {
                            iconStyle.setImage(waterOverRoadIcon)
                        }
                        else if (feature.get('type') === 'tree_down') {
                            iconStyle.setImage(downedTreeIcon)
                        }
                        else if (feature.get('type') === 'hydro_down') {
                            iconStyle.setImage(downedPowerLineIcon)
                        }
                        else if (feature.get('type') === 'bridge_collapsed') {
                            iconStyle.setImage(brokenBridgeIcon)
                        }
                        else if (feature.get('type') === 'road_damage') {
                            iconStyle.setImage(roadDamageIcon)
                        }
                        else if (feature.get('type') === 'road_debris') {
                            iconStyle.setImage(roadDebrisIcon)
                        }
                        else {
                            iconStyle.setImage(otherIcon)
                        }
                        return iconStyle;
                    }
                })

                setHazardPointsLayer(hazardPoints)
            })
    }, [])

    //Get Hazard Polygons
    useEffect(() => {
        jsonToFeatures('https://services1.arcgis.com/DwLTn0u9VBSZvUPe/ArcGIS/rest/services/hazard_polygons_view/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson')
            .then(features => {
                const polyStyle = new Style({
                    stroke: new Stroke({
                        color: "rgba(50, 70, 168,0.9)",
                        width: 2
                    }),
                    fill: new Fill({
                        color: "rgba(50, 70, 168,0.6)"
                    })
                })
        
                const hazardPoly = new VectorLayer({
                    source: new VectorSource({
                        features: features
                    }),
                    style: function(feature) {
                        if (feature.get('type') === "Flood") {
                            polyStyle.getFill().setColor("rgba(50, 70, 168, 0.6)")
                            polyStyle.getStroke().setColor("rgba(50, 70, 168, 0.9)")
                        }
                        else if (feature.get('type') === "Tornado Track") {
                            polyStyle.getFill().setColor("rgba(140, 134, 133, 0.6)")
                            polyStyle.getStroke().setColor("rgba(140, 134, 133, 0.9)")
                        }
                        else if (feature.get('type') === "Forest Fire") {
                            polyStyle.getFill().setColor("rgba(227, 137, 34, 0.6)")
                            polyStyle.getStroke().setColor("rgba(227, 137, 34, 0.9)")
                        }
                        else {
                            polyStyle.getFill().setColor("rgba(245, 90, 66, 0.6)")
                            polyStyle.getStroke().setColor("rgba(245, 90, 66, 0.9)")
                        }
                        return polyStyle
                    }
                })
        
                setHazardPolyLayer(hazardPoly)
            })
    }, [])

    //Set up base layer
    const [baseLayer, setBaseLayer] = useState()

    const baseRef = useRef()
    baseRef.current = baseLayer

    useEffect(() => {
        const initialBaseLayer = new TileLayer();
        setBaseLayer(initialBaseLayer)
    }, [])

    //Set up overlay layer
    const [overlayLayer, setOverlayLayer] = useState()

    const overlayRef = useRef()
    overlayRef.current = overlayLayer

    useEffect(() => {
        const initialOverlayLayer = new TileLayer({
            opacity: 1,
            name: 'overlay'
        });
        setOverlayLayer(initialOverlayLayer)
    }, [])

    const osmSource = new OSM({
        attributions: "Basemap from OpenStreetMap."
    })

    const esriTopoSource = new XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url:
          'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    })

    const esriSatelliteSource = new XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Imagery/MapServer">ArcGIS</a>',
        url: 'http://server.arcgisonline.com/arcgis/rest/services/' + 
        'World_Imagery/MapServer/tile/{z}/{y}/{x}',
    })

    const customSource = new XYZ()

    useEffect(() => {
        if (baseLayer && baseName) {
            if (baseName === 'Esri Topo') {
                baseLayer.setSource(esriTopoSource)
            }
            else if (baseName === 'Esri Satellite') {
                baseLayer.setSource(esriSatelliteSource)
            }
            else if (baseName === 'OSM') {
                baseLayer.setSource(osmSource)
            }
            else if (baseName === 'Custom' && customUrl) {
                customSource.setUrl(customUrl)
                baseLayer.setSource(customSource)
            }
        }
    }, [baseLayer, baseName, customUrl])

    const overlaySource = new XYZ()

    useEffect(() => {
        if (overlayLayer && overlay) {
            overlaySource.setUrl(overlay)
            overlayLayer.setSource(overlaySource)
        }
        else if (overlayLayer) {
            overlayLayer.setSource(null)
        }
    }, [overlay])

    useEffect(() => {
        if (opacity && overlayLayer) {
            overlayLayer.setOpacity(parseFloat(opacity))
        }
    }, [opacity])

    //Change road source
    const roadSource = new VectorSource({
        format: new GeoJSON()
    })

    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        if (roadsLayer && roadUrl) {
            roadSource.setUrl(roadUrl)
            roadsRef.current.setSource(roadSource)
            // mapRef.current.getView().fit()
            let initialSnap = new Snap({
                source: roadSource, 
                pixelTolerance: 40
            })
            setSnap(initialSnap)
            setTrigger(!trigger)
        }
    }, [roadUrl])

    useEffect(() => {
        if (roadsRef.current) {
            console.log(roadsRef.current.getSource().getExtent())
        }
    }, [trigger])

    //Change points source
    let pointsSource = new VectorSource({
        format: new GeoJSON()
    })

    let pointsQuery;

    useEffect(() => {
        if (hazardPointsLayer && pointsUrl) {
            pointsQuery = pointsUrl.concat('/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson')
            pointsSource.setUrl(pointsQuery)
            hazardPointsRef.current.setSource(pointsSource)
            console.log(pointsSource.getExtent())
            // mapRef.current.getView().fit()
        }
    }, [pointsUrl])

    //Change polygon source
    let polySource = new VectorSource({
        format: new GeoJSON()
    })

    let polyQuery;

    useEffect(() => {
        if (hazardPolyLayer && polyUrl) {
            polyQuery = polyUrl.concat('/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson')
            polySource.setUrl(polyQuery)
            hazardPolyRef.current.setSource(polySource)
            console.log(polySource.getExtent())
            // mapRef.current.getView().fit()
        }
    }, [polyUrl])

    //Initialize Map
    useEffect(() => {
        if (hazardPolyLayer && hazardPointsLayer && baseLayer) {
            const roadStyle = new Style({
                stroke: new Stroke({
                    color: 'rgba(22, 156, 64, 0.9)',
                    width: 1.5
                })
            })

            // const osm = new TileLayer({
            //     source: ,
            //     visible: true,
            // })

            //Load this in separately, add loading icon
            const roads = new VectorLayer({
                source: new VectorSource({
                    url: "https://opendata.arcgis.com/datasets/73468fa4b21747198d12741a2d20df59_195.geojson",
                    format: new GeoJSON()
                }),
                style: function(feature) {
                    roadStyle.getStroke().setWidth(feature.get('SURFACE_WIDTH')/5)

                    const tempFeature = new GeoJSON().writeFeatureObject(feature)
                    const tempExtent = new GeoJSON().writeFeaturesObject(hazardPolyLayer.getSource().getFeatures())
                    if (booleanIntersects(tempFeature, tempExtent)) {
                        roadStyle.getStroke().setColor('red')
                    }
                    else {
                        roadStyle.getStroke().setColor('rgba(22, 156, 64, 0.9)')
                    }
                    return roadStyle
                }
            })

            const routeStyle = new Style({
                stroke: new Stroke({
                    color: 'rgb(3, 252, 23)',
                    width: 8
                })
            })

            const initialRouteLayer = new VectorLayer({
                style: routeStyle
            })

            const initialMap = new Map({
                target: mapElement.current,
                layers: [
                    baseLayer,
                    overlayLayer,
                    roads,
                    hazardPolyLayer,
                    hazardPointsLayer,
                    initialRouteLayer,
                ],
                view: new View({
                    projection: 'EPSG:3857',
                    center: fromLonLat([-122.2781,49.0734]),
                    zoom: 12,
                }),
                controls: defaultControls({ rotate: false, zoom: false}),
            })

            

            setMap(initialMap)
            setRoadsLayer(roads)
            setRouteLayer(initialRouteLayer)
        }
    }, [hazardPolyLayer, hazardPointsLayer])

    const [modify, setModify] = useState()
    const [draw, setDraw] = useState()
    const [snap, setSnap] = useState()
    const [drawLayer, setDrawLayer] = useState()

    const modifyRef = useRef()
    modifyRef.current = modify;

    const drawRef = useRef()
    drawRef.current = draw;

    const snapRef = useRef()
    snapRef.current = snap;

    const drawLayerRef = useRef()
    drawLayerRef.current = drawLayer;

    let drawSource;

    useEffect(() => {
        if (mapRef.current) {
            drawSource = new VectorSource()
            setDrawLayer(new VectorLayer({source: drawSource}))
            let initialModify = new Modify({
                source: drawSource
            })
            setModify(initialModify)
            let initialDraw = new Draw({
                source: drawSource,
                type: "Point"
            })
            // initialDraw.setActive(false)
            setDraw(initialDraw)
            let initialSnap = new Snap({
                source: roadsLayer.getSource(), 
                pixelTolerance: 40
            })
            // initialSnap.setActive(false)
            setSnap(initialSnap)
        }
    }, [mapRef.current])

    useEffect(() => {
        if (drawLayerRef.current && mapRef.current) {
            mapRef.current.addLayer(drawLayerRef.current)
        }
    }, [drawLayerRef.current])

    useEffect(() => {
        if (mapRef.current && modifyRef.current && drawRef.current && snapRef.current && drawRoute) {
            //https://openlayers.org/en/latest/examples/draw-and-modify-features.html
            mapRef.current.addInteraction(modifyRef.current);
            mapRef.current.addInteraction(drawRef.current);
            mapRef.current.addInteraction(snapRef.current);
            drawLayer.getSource().clear()
            drawLayer.setVisible(true)
            if (routeLayer.getSource()) {
                routeLayer.getSource().clear();
            }
        }
        else if (mapRef.current && modifyRef.current && drawRef.current && snapRef.current) {
            mapRef.current.removeInteraction(modifyRef.current);
            mapRef.current.removeInteraction(drawRef.current);
            mapRef.current.removeInteraction(snapRef.current);
            // mapRef.current.addInteraction(selectRef.current);
            drawLayer.setVisible(false);
        }
    }, [drawRoute, map])

    useEffect(() => {
        if (run && drawLayer && hazardPolyLayer) {
            const stops = new GeoJSON().writeFeaturesObject(drawLayer.getSource().getFeatures())
            const barriers = new GeoJSON().writeFeaturesObject(hazardPointsLayer.getSource().getFeatures())
            const poly_barriers = new GeoJSON().writeFeaturesObject(hazardPolyLayer.getSource().getFeatures())
            getPath(stops, barriers, poly_barriers)
                .then(data => {
                    console.log(data)
                    try {
                        const route = arcgisToGeoJSON(data.routes)
                        if (data.routes.features.length > 0) {
                            const features = (new GeoJSON({dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'})).readFeatures(route.features[0].geometry)
                            routeLayer.setSource(new VectorSource({
                                features: features
                            }))
                        }
                        else {
                            alert("Draw failed! Try again.")
                        }
                    }
                    catch {
                        alert("Draw failed! Try again.")
                    }
                    endRun();
                })
        }
    }, [run])

    useEffect(() => {
        if (erase && drawLayer && hazardPolyLayer) {
            drawLayer.getSource().clear()
            if (routeLayer.getSource()) {
                routeLayer.getSource().clear();
            }
            endErase();
        }
    }, [erase])

    const [select, setSelect] = useState()

    const selectRef = useRef()
    selectRef.current = select;

    //Click events
    
    useEffect(() => {
        if (mapRef.current) {
            let selectInteraction = new Select({
                layers: [hazardPointsLayer],
                hitTolerance: 10,
            })
            setSelect(selectInteraction)
        }
    }, [mapRef.current])

    let selected, coordinate;
    useEffect(() => {
        if (mapRef.current) {
            map.on('singleclick', function (e) {
                mapRef.current.forEachFeatureAtPixel(e.pixel, function (f) {
                    selected = f;
                    if (selected.values_.geometry.getType() === 'Point' && selected.values_.objectid) {
                        getHazardInfo(selected.values_)
                    }
                })
            })
        }
    }, [mapRef.current])

    useEffect(() => {
        if (mapRef.current && selectRef.current && centerName) {
            fetch(`https://geogratis.gc.ca/services/geoname/en/geonames.json?q=${centerName}*&num=10&theme=985`)
                .then(res => {
                    return res.json();
                }).then(data => {
                    mapRef.current.setView((new View({
                        projection: 'EPSG:3857',
                        center: fromLonLat([data.items[0].longitude,data.items[0].latitude]),
                        zoom: 12,
                    })))
                })
        }
    }, [centerName])

    return(
        <div ref={mapElement} style={{height:'100vh',width: '100%', cursor: 'pointer'}}></div>
    )
}

export default MainMap
