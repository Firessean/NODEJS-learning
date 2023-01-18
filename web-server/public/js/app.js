'use strict';
console.log('Client side javascript is loaded!');

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
  response.json().then((data) => {
    if (data.error) return console.log(data.error);

    console.log(data.location);
    console.log(data.forecast);
  });
});
