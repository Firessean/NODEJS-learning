'use strict';
const geocode = require('./Utils/geocode');
const forecast = require('./Utils/forecast');

geocode('Dnipro Ukraine', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
