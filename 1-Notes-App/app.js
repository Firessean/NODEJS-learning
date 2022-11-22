'use strict';

const chalk = require('chalk');

const getNotes = require('./notes.js');
getNotes();

console.log(chalk.green('Success!'));
console.log(chalk.green.bgBlue('Success!'));
console.log(chalk.green.bgBlue.inverse('Success!'));
