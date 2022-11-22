'use strict';

const validator = require('validator');
const getNotes = require('./notes.js');
getNotes();

// console.log(validator.isEmail('dmitry@example.com'));
console.log(validator.isURL('https://mead.io'));
