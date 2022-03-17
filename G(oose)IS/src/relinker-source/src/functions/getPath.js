//https://www.youtube.com/watch?v=0fJmKSWURyU
import { geojsonToArcGIS} from "@terraformer/arcgis"
import { toWgs84 } from "@turf/turf"

export async function getPath(stops, barriers, poly_barriers) {
    //const searchUrl = 'https://logistics.arcgis.com/arcgis/rest/services/World/Route/GPServer/FindRoutes/submitJob'
    const searchUrl = 'https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve'
    const stopsJSONArray = geojsonToArcGIS(toWgs84(stops))
    const polyJSONArray = geojsonToArcGIS(toWgs84(poly_barriers))
    const barriersJSONArray = geojsonToArcGIS(toWgs84(barriers))
    let stopsJSON = {
        features: stopsJSONArray
    }
    stopsJSON = JSON.stringify(stopsJSON)
    let polyJSON = {
        features: polyJSONArray
    }
    polyJSON = JSON.stringify(polyJSON)
    console.log(polyJSON)

    let barriersJSON = {
        features: barriersJSONArray
    }
    barriersJSON = JSON.stringify(barriersJSON)
    
    // console.log(polyJSON)
    const params = {
        f: 'json',
        token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        stops: stopsJSON,
        polygonBarriers: polyJSON,
        barriers: barriersJSON,
        returnDirections: false,
        returnRoutes: true,
    }
    const paramVals = [];
    for (const k in params) {
        const val = encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
        paramVals.push(val)
    }
    const url = `${searchUrl}?${paramVals.join('&')}`
    const res = await fetch(url)
    const data = res.json();
    return data;

    //Get outputs: https://logistics.arcgis.com/arcgis/rest/services/World/Route/GPServer/FindRoutes/jobs/<yourJobID>/results/<output_parameter_name>?token=<yourToken>&f=json
}