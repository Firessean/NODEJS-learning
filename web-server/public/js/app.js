'use strict';
console.log('Client side javascript is loaded!');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = searchElement.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) return console.log(data.error);

      console.log(data.location);
      console.log(data.forecast);
    });

  });
});
