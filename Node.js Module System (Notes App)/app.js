const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Erico-Droid!');


//challenge: Append a message to notes.txt

fs.appendFileSync('notes.txt', '\nI love coding in Javascript');