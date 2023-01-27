const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// ---------------------------- Draft Scripts -----------------------------------------------

// import chalk from 'chalk';

// console.log(getNotes())

// console.log(validator.isEmail('andrewexamle.com')); //determine if str is a valid email

// console.log(validator.isURL('https:/mead.io')) //determine if str is a valid email

// const success = "success";
// const failure = "failure";

// console.log(chalk.green(success), " ", chalk.red.bold(failure));

// const command = process.argv[2]

// // console.log(command);

// if (command === 'add') console.log('Adding Note');
// else if (command === 'remove') console.log('remove');

// console.log(process.argv);

//----------------------------------------------------------------------------------//

//customize yargs version 
yargs.version('1.1.0');

//create command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            type: "string",
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command: "list",
    describe: 'list all the notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "Read all the notes",
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})
//add, remove, read, list

// console.log(yargs.argv);
yargs.parse()
