'use strict';

const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return console.log('Your notes...');
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('Note title taken!'));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const removeTitle = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > removeTitle.length) {
    console.log(chalk.bgGreen(`Note '${title}' removed`));
    saveNotes(removeTitle);
  } else {
    console.log(chalk.bgRed(`Note '${title}' does not exist!`));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
