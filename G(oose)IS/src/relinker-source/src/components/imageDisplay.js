import { useEffect, useState } from 'react'

import '../App.css'

import left from '../icons/calcite/caret-left-32.svg'
import right from '../icons/calcite/caret-right-32.svg'

function ImageDisplay({attachments, id, pointsUrl}) {

    const [photo, setPhoto] = useState(1)

    const previousPhoto = () => {
        setPhoto(photo - 1)
    }

    const nextPhoto = () => {
        setPhoto(photo + 1)
    }

    useEffect(() => {
        setPhoto(1)
    },[id])

    return(
        <>
            {attachments.length > 0 ?
                <div className="imageContainer">
                    <span className="imageSides" onClick={photo > 1 ? previousPhoto : null}>
                        {photo > 1 ? 
                            <img className="icon" src={left} style={{padding: '2px'}} />
                        : null}
                    </span>
                    <div style={{width: '180px', maxWidth: '180px', height: '30vh', maxHeight: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {id ?
                        <img className="hazardImage" src={pointsUrl ? pointsUrl.concat(`/${id}/attachments/${attachments[photo-1].id}/`) : `https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/road_hazard_points_view/FeatureServer/0/${id}/attachments/${attachments[photo-1].id}`} />
                    : null}
                    </div>
                    <span className="imageSides" onClick={photo < attachments.length ? nextPhoto : null}>
                        {photo < attachments.length ? 
                            <img className="icon" src={right} style={{padding: '2px'}} />
                        : null}
                    </span>
                </div>
            : null}
        </>
    )
}

export default ImageDisplay