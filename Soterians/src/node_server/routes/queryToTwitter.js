const express = require('express')
const router = express.Router()
let request = require('request');
const fs = require('fs')

router.get('/tweet', (req , res) => {

    let query = req.query.q;
    let lat_qury = req.query.lat;
    let long_query = req.query.long;
    let radius = req.query.radius;
    let area = req.query.area;
    let range = req.query.range;
    url_string = "https://api.twitter.com/1.1/search/tweets.json?q="+query+ "&geocode=" +lat_qury+","+long_query+","+radius+"km"+"&count=100";
    console.log(url_string);
    //'https://api.twitter.com/1.1/search/tweets.json?q=&geocode=43.773641,-79.502994,5km&count=100'

    let options = {
  'method': 'GET',
  'url': url_string,
  'headers': {
    'Authorization': 'API-KEY'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  
  let response_all = JSON.parse(response.body);
  const arr = response_all['statuses'];
  let size = Object.keys(arr).length;

  let geoJsonObj = {};
  geoJsonObj['type'] = 'FeatureCollection';
  geoJsonObj['features'] = [];

  
  console.log("##########" + size);
  for (let i = 0; i < size; i++) {  
    
    let final_coordinates = [];
    let link = "empty"
    let tweet = arr[i];
    let created_at = tweet['created_at'];
    let user_image = tweet['user']['profile_image_url_https']
    let id_m = tweet['id'];
    let size_url = Object.keys(tweet['entities']['urls']).length;
    if (size_url > 0){
      link = tweet['entities']['urls'][0]['url'];
    }else{
      link = "empty";
    }
    let has_geo = false
    let id = tweet['id'];
    let text = tweet['text'];
    let source = tweet['source'];
    let location = tweet['user']['location'];
    let geo = tweet['geo'];
    if (geo == null){geo ="empty"}
    else{
      has_geo=true;
      lat =  geo['coordinates'][1];
      lon = geo['coordinates'][0];
      final_coordinates = [lat , lon];

    } if(!has_geo){
      let coordinates = tweet['coordinates'];
      if (coordinates == null){coordinates ="empty";}
      else{
        has_geo=true;
        final_coordinates = coordinates['coordinates'];
      }
   
  } if(!has_geo){
    let place = tweet['place'];
    if (place == null){
     // console.log("Place is null");
     
    }else{
      has_geo = true;
      final_coordinates = tweet['place']['bounding_box']['coordinates'][0][0];
    }
  }
    
    if (has_geo){
      let feature = {};
      feature['type'] = 'Feature';
      feature['properties'] = {};
      feature['properties']['created_at'] = created_at;
      feature['properties']['id'] = id_m;
      feature['properties']['text'] = text;
      feature['properties']['source'] = source;
      feature['properties']['user_image']= user_image;
      //feature['properties']['location'] = location;
      //feature['properties']['geo'] = geo;
      feature['properties']['url'] = link;
      feature['geometry'] = {};
      feature['geometry']['type'] = "Point";
      feature['geometry']['coordinates'] = final_coordinates;
      feature['id'] = id_m;
      
      if (Object.keys(feature).length != 0){
        console.log("%%%%%%%%%" + final_coordinates)
        geoJsonObj['features'].push(feature);
      }
      

      console.log(final_coordinates);
    }
    //console.log(location);
  }
  //console.log(geoJsonObj)
  //console.log(response.body)
  //console.log(geoJsonObj['features'])
  res.send(response.body)
  try {
    fs.writeFileSync(area+"data.geojson", JSON.stringify(geoJsonObj));
  } catch (err) {
    console.error(err);
  }
  //res.send(geoJsonObj);
  

  



});

    //res.send('test twitter')
})




module.exports = router