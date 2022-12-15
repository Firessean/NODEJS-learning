'use strict';
const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=07f18234a8b3fd4528a8b69493b4d875&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
