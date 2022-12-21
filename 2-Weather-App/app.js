'use strict';
const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=07f18234a8b3fd4528a8b69493b4d875&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});

// Geocoding
const geocodingURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmlyZXNzZWFuIiwiYSI6ImNsYnh1YmZpajAxaHYzdHBlbWFldHltYWMifQ.oYVL6V_X1p7DM4OuJ9sHeg&limit=1';

request({ url: geocodingURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(
    `${response.body.features[0].place_name}.\nLatitude: ${latitude}.\nLongitude: ${longitude}`
  );
});
