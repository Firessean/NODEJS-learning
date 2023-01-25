'use strict';
const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=07f18234a8b3fd4528a8b69493b4d875&query=${String(
    latitude
  )},${String(longitude)}&units=m`;
  request(
    { url, json: true },
    (
      error,
      {
        body: {
          error: errorMessage,
          current: {
            weather_descriptions: [weatherDescriptionMessage],
            temperature,
            feelslike,
          },
        },
      }
    ) => {
      if (error) {
        callback('Unable to connect to weather service!');
      } else if (errorMessage) {
        callback('Unable to find location');
      } else {
        callback(
          undefined,
          `${weatherDescriptionMessage}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
        );
      }
    }
  );
};

module.exports = forecast;
