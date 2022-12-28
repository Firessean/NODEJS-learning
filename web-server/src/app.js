'use strict';
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup starter directory to serve
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
    title: 'Help',
    name: 'Dmytro',
    helpText: 'This some helpful text.',
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
