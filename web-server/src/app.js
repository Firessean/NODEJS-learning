'use strict';
const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Dmytro',
      age: 24,
    },
    {
      name: 'Sarah',
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: '5 degrees out',
    location: 'Dnipro Ukraine',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
