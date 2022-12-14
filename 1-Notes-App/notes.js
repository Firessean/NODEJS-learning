'use strict';

const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgYellow.white.italic('Your notes'));
  notes.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);

  if (findNote) {
    console.log(chalk.bgYellow.white.italic(findNote.title));
    console.log(findNote.body);
  } else {
    console.log(chalk.bgRed(`Note '${title}' does not exist!`));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
