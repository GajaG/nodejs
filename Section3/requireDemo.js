console.log("Starting the app");
/*require is a keyword which will import the specified
    pre-defined module
    our own custom js
    thrid party module */

const fs = require("fs");

/*fs.appendFile("Greetings.txt", "Hello World!"); // This is deprecated and will throw warning
fs.appendFile("Greetings.txt", "Hello World!", (err) =>{ // proper method 1
    if(err) {
        console.log("Unable to write to file!");
    }
});*/

fs.appendFileSync("Greetings.txt", "Hello World!"); // proper method 2