'use strict';
console.log('Client side javascript is loaded!');

const searchButton = document.querySelector('.search__button');
const searchElement = document.querySelector('.location__field');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();

  const location = searchElement.value;

  messageOne.textContent = 'Loading the weather. Please wait...';
  messageTwo.textContent = '';

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) return (messageOne.textContent = data.error);

        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      });
    }
  );

  searchElement.value = '';
  searchElement.blur();
});
