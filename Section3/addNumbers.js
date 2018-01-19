console.log("addNumbers.js is being required");
/*module is a common object available to all the files we create in node js
exports is an object and is a member of module
we can add variables and functions to the exports object and that -
can be reused in the other files where we require this file*/
module.exports.purpose = "To add two numbers";
module.exports.addNumbers = (a, b) => { //=> is a replacement for function in ES6 - => will not bind the THIS key word and the arguments array
    return a+b;
}