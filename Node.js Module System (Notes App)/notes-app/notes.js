const fs = require('fs');
const chalk = require('chalk')

getNotes = () => {
    return 'Your notes...'
};

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added");
    } else {
        console.log("Note title taken");
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json');
        const dataJson = buffer.toString()
        const data = JSON.parse(dataJson);
        return data
    } catch(e) {
        return []
    }
}

const removeNote = (title) => {
    console.log(chalk.red("currently removing: "), chalk.white(title));
    const notes = loadNotes();
    var count = -1;
    const duplicateNotes = notes.filter((note) => {
        count++;
        return(note.title === title ? handleRemove(notes, count) : null )
    })
}

const handleRemove = (notes, index) => {
    notes.splice(index, 1);
    saveNotes(notes);
    console.log(chalk.green("successfully removed..."));
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgWhite.black("Your notes"))
    notes.map((note) => {
        console.log(chalk.white(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    let target = notes.find((note) => note.title === title);
    if (target) {
        console.log(chalk.green.inverse(target.title))
        console.log(target.body)
    } else {
        console.log(chalk.red.inverse("The note wasn't found!"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};