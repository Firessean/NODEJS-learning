'use strict';
const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Dmytro',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Dmytro',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'FAQ',
    name: 'Dmytro',
  });
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
