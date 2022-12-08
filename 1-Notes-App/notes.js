'use strict';

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => console.log('Your notes...');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

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

const removeNote = (title) => {
  const notes = loadNotes();
  const removeTitle = notes.filter((note) => note.title !== title);

  if (notes.length > removeTitle.length) {
    console.log(chalk.bgGreen(`Note '${title}' removed`));
    saveNotes(removeTitle);
  } else {
    console.log(chalk.bgRed(`Note '${title}' does not exist!`));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
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
