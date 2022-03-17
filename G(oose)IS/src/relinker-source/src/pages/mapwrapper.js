//Imports
import React, {useState, useCallback, useEffect} from 'react';

import MainMap from "../components/map"
import BaseMapToggler from '../components/baseMapToggler';
import ImageDisplay from '../components/imageDisplay';
import Linker from '../components/linker';

import '../App.css';

//Legend png
import legend from '../icons/legend.png'

//Calcite Icons
import basemap from '../icons/calcite/basemap-32.svg'
import drivetime from '../icons/calcite/driving-distance-32.svg'
import hazard_info from '../icons/calcite/information-32.svg'
import draw_icon from '../icons/calcite/pencil-mark-32.svg'
import erase_icon from '../icons/calcite/erase-32.svg'
import play from '../icons/calcite/play-32.svg'
import close from '../icons/calcite/x-32.svg'
import link from '../icons/calcite/link-32.svg'
import legend_icon from '../icons/calcite/legend-32.svg'
import survey from '../icons/calcite/survey-32.svg'
// import tutorial from '../icons/calcite/book-32.svg'
import relinker from '../icons/relinker-logo.svg'

//Map Wrapper
//Sidebar, Popup menus, state management
function MapWrapper() {
    const [drawRoute, setDrawRoute] = useState(false);

    const [run, setRun] = useState(false);

    const toggleDraw = () => {
        setDrawRoute(!drawRoute)
    }

    const onRun = () => {
        setRun(true)
    }

    const endRun = useCallback(() => {
        setRun(false)
    })

    const [erase, setErase] = useState(false)

    const startErase = () => {
        setErase(true)
    }

    const endErase = useCallback(() => {
        setErase(false)
    })

    const [hazardInfo, setHazardInfo] = useState()
    const [attachments, setAttachments] = useState(0)

    const [hazardId, setHazardId] = useState()

    const getHazardInfo = useCallback((info) => {
        setHazardInfo(info)
        setHazardId(info.objectid)
    })

    useEffect(() => {
        if (hazardId) {
            fetch(pointsUrl ? pointsUrl.concat(`${hazardId}/attachments/?f=pjson&token=`) : `https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/road_hazard_points_view/FeatureServer/0/${hazardId}/attachments/?f=pjson&token=`)
                .then(res => {
                    const data = res.json()
                    return data;
                }).then(data => {
                    setAttachments(data.attachmentInfos)           
                })
        }
    }, [hazardId])

    const [baseName, setBaseName] = useState('Esri Topo')

    const changeBaseMap = useCallback((baseName) => {
        setBaseName(baseName)
    })

    const [customUrl, setCustomUrl] = useState()

    const getCustomUrl = useCallback((url) => {
        setCustomUrl(url)
    })

    const [overlay, setOverlay] = useState()

    const getOverlay = useCallback((overlay) => {
        setOverlay(overlay)
    })

    const [opacity, setOpacity] = useState(1)

    const getOpacity = useCallback((opacity) => {
        setOpacity(opacity)
    })

    // Menus

    const [menu, setMenu] = useState('')

    const toggleDrawRouteMenu = () => {
        if (menu === 'drawRoute') {
            setMenu('')
            if (drawRoute) {
                setDrawRoute(false)
            }
            startErase();
        } 
        else {
            setMenu('drawRoute')
        }
    }

    const toggleBaseMapMenu = () => {
        if (menu === 'baseMap')
            setMenu('')
        else {
            if (menu === 'drawRoute') {
                if (drawRoute) {
                    setDrawRoute(false)
                }
                startErase();
            } 
            setMenu('baseMap')
        }
    } 

    useEffect(() => {
        if (hazardInfo) {
            setMenu('hazardInfo')
        }
    }, [hazardInfo])

    const toggleHazardInfoPanel = () => {
        if (menu === 'hazardInfo') {
            setMenu('')
        }
        else {
            if (menu === 'drawRoute') {
                if (drawRoute) {
                    setDrawRoute(false)
                }
                startErase();
            } 
            setMenu('hazardInfo')
        }
    }

    const toggleLinksMenu = () => {
        if (menu === 'links')
            setMenu('')
        else {
            if (menu === 'drawRoute') {
                if (drawRoute) {
                    setDrawRoute(false)
                }
                startErase();
            } 
            setMenu('links')
        }
    } 

    const toggleLegend = () => {
        if (menu === 'legend')
            setMenu('')
        else {
            if (menu === 'drawRoute') {
                if (drawRoute) {
                    setDrawRoute(false)
                }
                startErase();
            } 
            setMenu('legend')
        }
    }

    //Links
    const [roadUrl, setRoadUrl] = useState()

    const getRoadUrl = useCallback((url) => {
        setRoadUrl(url)
    })

    const [pointsUrl, setPointsUrl] = useState()

    const getPointsUrl = useCallback((url) => {
        setPointsUrl(url)
    })

    const [polyUrl, setPolyUrl] = useState()

    const getPolyUrl = useCallback((url) => {
        setPolyUrl(url)
    })

    const [centerName, setCenterName] = useState()

    const fetchCenterName = useCallback((name) => {
        setCenterName(name)
    })


    return(
        <>
            <MainMap drawRoute={drawRoute} baseName={baseName} customUrl={customUrl} overlay={overlay} opacity={opacity} run={run} endRun={endRun} erase={erase} endErase={endErase} getHazardInfo={getHazardInfo} roadUrl={roadUrl} pointsUrl={pointsUrl} polyUrl={polyUrl} centerName={centerName} />
            <div className="logoBox">
            <a href="https://natural-disaster-hazard-reporting-and-routing-service-uwaterloo.hub.arcgis.com/"><img className="icon logo" src={relinker} /></a>
            </div>
            <div className="sidebar">
                <img className="icon" src={drivetime} onClick={toggleDrawRouteMenu} style={menu === 'drawRoute' ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                <img className="icon" src={hazard_info} onClick={toggleHazardInfoPanel} style={menu === 'hazardInfo' ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                <img className="icon" src={legend_icon} onClick={toggleLegend} style={menu === 'legend' ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                <img className="icon" src={basemap} onClick={toggleBaseMapMenu} style={menu === 'baseMap' ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                <img className="icon" src={link} onClick={toggleLinksMenu} style={menu === 'links' ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                <a href="https://survey123.arcgis.com/share/555147d905cb44f78b233fbbdcc74f88"><img className="icon" src={survey} /></a>
                {/* <a href="#"><img className="icon" src={tutorial} /></a> */}
            </div>
            {menu === 'drawRoute' ? 
                <div className="drawRoute">
                    <img className="icon" src={draw_icon} onClick={toggleDraw} style={drawRoute ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                    <img className="icon" src={erase_icon} onClick={startErase} />
                    <img className="icon" src={play} onClick={onRun} style={run ? {backgroundColor: 'rgb(200, 203, 207)'} : null} />
                    <img className="icon" src={close} onClick={toggleDrawRouteMenu} style={{width: '4vh'}} />
                </div>
            : null}
            {menu === 'hazardInfo' ?
                <div className="hazardInfoPanel">
                    {/* Close Icon */}
                    <span className="close">
                        <img className="icon" src={close} onClick={toggleHazardInfoPanel} style={{width: '4vh', height: '4vh'}} />
                    </span>
                    {/* Text if no hazard point selected */}
                    {!hazardInfo ? <span className="noHazard">Click on a hazard icon to display photos and a description of the hazard.</span> : null}
                    {/* Hazard Table */}
                    {hazardInfo ? 
                        <div style={{padding: '5px', margin: 0}}>
                            <h3>Hazard Info</h3>
                            <table className="table-responsive hazardTable" style={{padding: '5px'}}>
                                <tbody>
                                    <tr>
                                        <td><b>Type</b></td>
                                        <td>{hazardInfo.type === 'road_water' 
                                            ? 'Water over road' :
                                            hazardInfo.type === 'hydro_down'
                                            ? 'Downed hydro pole - wires on ground' :
                                            hazardInfo.type === 'tree_down'
                                            ? 'Tree down on road' :
                                            hazardInfo.type === 'road_damage'
                                            ? 'Damaged road surface' :
                                            hazardInfo.type === 'road_debris'
                                            ? 'Debris blocking road' :
                                            hazardInfo.type === 'bridge_collapsed'
                                            ? 'Collapsed bridge' :
                                            hazardInfo.type === 'type_other'
                                            ? 'Unspecified hazard' :
                                            null
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td><b>Desc.</b></td>
                                        <td>{hazardInfo.comments}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    : null}
                    {/* Hazard Photos */}
                    {attachments.length > 0 && hazardInfo.objectid ?
                        <ImageDisplay attachments={attachments} id={hazardInfo.objectid} pointsUrl={pointsUrl} />
                    : null}
                </div>
            : null}
            {menu === 'baseMap' ?
                <div className="baseMapMenu">
                    <span className="close">
                        <img className="icon" src={close} onClick={toggleBaseMapMenu} style={{width: '4vh', height: '4vh'}} />
                    </span>
                    <BaseMapToggler baseName={baseName} changeBaseMap={changeBaseMap} getCustomUrl={getCustomUrl} getOverlay={getOverlay} opacity={opacity} getOpacity={getOpacity} />
                </div> 
            : null}
            {menu === 'links' ?
                <div className="baseMapMenu">
                    <span className="close">
                        <img className="icon" src={close} onClick={toggleLinksMenu} style={{width: '4vh', height: '4vh'}} />
                    </span>
                    <Linker getRoadUrl={getRoadUrl} getPointsUrl={getPointsUrl} getPolyUrl={getPolyUrl} fetchCenterName={fetchCenterName} />
                </div>
            : null}
            {menu === 'legend' ? 
                <div className="baseMapMenu">
                    <span className="close">
                        <img className="icon" src={close} onClick={toggleLegend} style={{width: '4vh', height: '4vh'}} />
                    </span>
                    <h3>Legend</h3>
                    <img src={legend} style={{width: '100%', height: '60vh'}} />
                </div>
            : null}
        </>
    )
}

export default MapWrapper