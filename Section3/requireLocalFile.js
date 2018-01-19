console.log("We are going to require addNumbers.js");

const addNumbers = require("./addNumbers.js"); // requiring local file
var res = addNumbers.addNumbers(9,-2);
console.log(`Purpose os this file is ${addNumbers.purpose}`); //using template string (`) is from ES6
console.log(`The result is ${res}`);