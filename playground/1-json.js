const fs = require('fs');

const bufferData = fs.readFileSync('1-json.json');
const buffed = bufferData.toString();
const parsedData = JSON.parse(buffed)

let name = "Erico";
let age = 26;

parsedData.name = name;
parsedData.age = age;

let str = JSON.stringify(parsedData);

fs.writeFileSync('./1-json.json', str);