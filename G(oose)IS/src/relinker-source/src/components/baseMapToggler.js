import { useState } from "react"

function BaseMapToggler({baseName, changeBaseMap, getCustomUrl, getOverlay, getOpacity, opacity}) {

    const onToggle = (e) => {
        changeBaseMap(e.target.id)
    }

    const [url, setUrl] = useState()

    const changeUrl = (e) => {
        setUrl(e.target.value)
    }

    const passCustomUrl = (e) => {
        e.preventDefault()
        getCustomUrl(url)
    }

    const [overlay, setOverlay] = useState()

    const changeOverlay = (e) => {
        setOverlay(e.target.value)
    }

    const passOverlay = (e) => {
        e.preventDefault()
        getOverlay(overlay)
    }

    const clearOverlay = (e) => {
        e.preventDefault()
        setOverlay('')
        getOverlay('')
    }

    const onSlide = (e) => {
        getOpacity(e.target.value)
    }

    return(
        <>
            <div onChange={onToggle} className="baseMapToggler">
                <h3>Basemaps</h3>
                <span><input type="radio" name="baseMaps" id="Esri Topo" defaultChecked={baseName === "Esri Topo" ? true : false}/><label htmlFor="Esri Topo">Esri Topo</label></span>
                <span><input type="radio" name="baseMaps" id="OSM" defaultChecked={baseName === "OSM" ? true : false}/><label htmlFor="OSM">OpenStreetMap</label></span>
                <span><input type="radio" name="baseMaps" id="Esri Satellite" defaultChecked={baseName === "Esri Satellite" ? true : false}/><label htmlFor="Esri Satellite">Esri Satellite</label></span>
                <span><input type="radio" name="baseMaps" id="Custom" defaultChecked={baseName === "Custom" ? true : false}/><label htmlFor="Custom">Custom</label></span>
            </div>
            <div style={{padding: 4}}>
                <input type="text" value={url} onChange={changeUrl} placeholder="Paste link to tile layer here" />
                <input type="submit" onClick={passCustomUrl} />
                <h3 style={{paddingTop: '5px'}}>Overlay</h3>
                <label htmlFor="opacity">Opacity</label>
                <input id="opacity" type="range" min="0" max="1" step="0.01" value={opacity} onInput={onSlide}/>
                <input type="text" value={overlay} onChange={changeOverlay} placeholder="Paste link to tile layer here" />
                <input type="submit" onClick={passOverlay} />
                <input type="submit" onClick={clearOverlay} value="Clear" />
            </div>
        </>
    )
}

export default BaseMapToggler;