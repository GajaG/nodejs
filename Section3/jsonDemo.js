const fs = require('fs');

var person = {
    name : "Gaja",
    age : 31
};

var personString = JSON.stringify(person);

fs.writeFileSync('../playground/personInfo.json', personString);

var personStringFromFile = fs.readFileSync('../playground/personInfo.json');
var personParsed = JSON.parse(personStringFromFile);

console.log(typeof personParsed);
console.log(personParsed.name);