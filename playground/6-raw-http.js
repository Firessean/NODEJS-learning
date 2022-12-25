'use strict';
const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=07f18234a8b3fd4528a8b69493b4d875&query=40,-75&units=m`;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
