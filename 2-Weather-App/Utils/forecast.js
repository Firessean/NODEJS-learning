'use strict';
const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=07f18234a8b3fd4528a8b69493b4d875&query=${String(
    latitude
  )},${String(longitude)}&units=m`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (response.body.error) {
      callback('Unable to find location');
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
    console.log(url);
  });
};

module.exports = forecast;
