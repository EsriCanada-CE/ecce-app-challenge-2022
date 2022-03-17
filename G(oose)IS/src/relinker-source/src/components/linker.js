import { useState, useEffect, useCallback } from "react"

import GeoNames from "./geonames"

//Link menu for swapping out the road network, hazard points, or hazard poly datasets
function Linker({getRoadUrl, getPointsUrl, getPolyUrl, fetchCenterName}) {

    // Links
    const [roadUrl, setRoadUrl] = useState('')

    const changeRoadUrl = (e) => {
        setRoadUrl(e.target.value)
    }

    const [pointsUrl, setPointsUrl] = useState('')

    const changePointsUrl = (e) => {
        setPointsUrl(e.target.value)
    }

    const [polyUrl, setPolyUrl] = useState('')

    const changePolyUrl = (e) => {
        setPolyUrl(e.target.value)
    }

    const passUrls = (e) => {
        e.preventDefault()
        console.log(roadUrl, pointsUrl, polyUrl)
        if (roadUrl) {
            if (roadUrl.includes('http') && roadUrl.includes('.geojson')) {
                getRoadUrl(roadUrl)
            }
        }
        if (pointsUrl) {
            if (pointsUrl.includes('http') && pointsUrl.includes('FeatureServer')) {
                if (pointsUrl.includes('query')) {
                    getPointsUrl(pointsUrl.split('query')[0])
                }
                else {
                    getPointsUrl(pointsUrl)
                }
            }
        }
        if (polyUrl) {
            if (polyUrl.includes('http') && polyUrl.includes('FeatureServer')) {
                if (polyUrl.includes('query')) {
                    getPolyUrl(polyUrl.split('query')[0])
                }
                else {
                    getPolyUrl(polyUrl)
                }
            }
        }
    }

    const [centerName, setCenterName] = useState()

    const getCenterName = useCallback((name) => {
        setCenterName(name)
    })

    useEffect(() => {
        fetchCenterName(centerName)
    }, [centerName])
    
    return(
        <>
            <GeoNames getCenterName={getCenterName} />
            <label htmlFor="roads">Roads</label>
            <input id="roads" type="text" value={roadUrl} onChange={changeRoadUrl} placeholder="Paste link here" />
            <label htmlFor="points">Hazard Points</label>
            <input id="points" type="text" value={pointsUrl} onChange={changePointsUrl} placeholder="Paste link here" />
            <label htmlFor="poly">Hazard Polygons</label>
            <input id="poly" type="text" value={polyUrl} onChange={changePolyUrl} placeholder="Paste link here" />
            <input type="submit" onClick={passUrls} />
        </>
    )
}

export default Linker;