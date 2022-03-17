import { useState } from "react"

//Uses GeoNames API from NRCAN to zoom map to any populated place in Canada
//https://www.nrcan.gc.ca/maps-tools-and-publications/maps/geographical-names-canada/application-programming-interface-api/9249
function GeoNames({getCenterName}) {

    const [search, setSearch] = useState('')
    const [cityNames, setCityNames] = useState([])

    const changeCitySearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 2) {
            fetch(`https://geogratis.gc.ca/services/geoname/en/geonames.json?q=${e.target.value}*&num=10&theme=985`)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setCityNames(data.items)
                })
        }
    }

    // const changeCityNames = (e) => {
    //     
            
    //     }
    // }

    const onClick = (e) => {
        e.preventDefault()
        getCenterName(search)
    }

    return(
        <>
            <label htmlFor="city">City</label>
            <input style={{maxWidth: '100%'}} list="cities" id="city" type="text" value={search} onChange={changeCitySearch} placeholder="Search Canadian places..." />
            <datalist id="cities">
                {cityNames.map(city => {
                    return(
                        <option value={city.name} />
                    )
                })}
            </datalist>
            <input type="submit" value="Zoom Here" onClick={onClick} />
        </>
    )
}

export default GeoNames


