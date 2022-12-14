'use strict';

const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

data.name = 'Dmitry';
data.age = 24;
console.log(data);

const newDataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', newDataJSON);
