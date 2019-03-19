'use strict';
//configure environment variables
//use the dotenv file

require('dotenv').config();

//Application dependencies
const express = require('express');
const app = express();

//CORS
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;

app.get('/location', (request, response)=>{
  const locationData = searchToLatLong(request.query.data)
  console.log(request);
  console.log(request.query);
  console.log(request.data);
  response.send(locationData);
})

//test route
//form of a route: app.METHOD(PATH, CALLBACK)
app.get('/testing', (request, response) => {
  console.log('hit the testing route');
  let caity = {firstName: 'Caity', lastName: 'Heath', awesome:true}
  response.json(caity);
})

//turn on the server so it'll listen for incoming requests
app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))

//Helpoer functions

function searchToLatLong(query) {
  const geoData = require('./data/geo.json');
  const location = new Location(geoData);
  location.search_query = query;
  console.log(location);
  return location;
}

function Location(data) {
  this.formatted_query = data.results[0].formatted_address;
  this.latitude = data.results[0].geometry.location.lat;
  this.longitude = data.results[0].geometry.location.lng;
}

//tomorrow, create a weatherLookup
//get the data
//run it through a constructor
//return it to the front end




