'use strict';

const chalk = require('chalk');

const getNotes = require('./notes.js');
getNotes();

console.log(chalk.red('Error!'));
console.log(chalk.red.bgBlue('Error!'));
console.log(chalk.red.bgBlue.inverse('Error!'));
