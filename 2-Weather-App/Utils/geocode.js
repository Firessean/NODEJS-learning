'use strict';
const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZmlyZXNzZWFuIiwiYSI6ImNsYnh1YmZpajAxaHYzdHBlbWFldHltYWMifQ.oYVL6V_X1p7DM4OuJ9sHeg&limit=1`;

  request(
    { url, json: true },
    (
      error,
      {
        body: {
          features: [
            {
              place_name: location,
              center: [longitude, latitude],
            },
          ],
          features,
        },
      }
    ) => {
      if (error) {
        callback('Unable to connect to geocoding service!', undefined);
      } else if (features.length === 0) {
        callback(
          'Unable to find location! Try again with different search term',
          undefined
        );
      } else {
        callback(undefined, {
          latitude,
          longitude,
          location,
        });
      }
    }
  );
};

module.exports = geocode;
