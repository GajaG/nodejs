/*
command line arguments are useful when we want to get the user input from the command line
To read the command line input to our app, we need to use a pre-defined object called 'process'
process can ready the argument vector argv as an array in our code
*/

var option = process.argv[2];
console.log('Command received is ', option);
if(option === 'list') {
    console.log('You sent list');
} else if(option === 'add') {
    console.log('You sent add');
} else if(option === 'remove') {
    console.log('You sent remove');
} else if(option === 'read') {
    console.log('You sent read');
} else {
    console.log('Command not recognized');
}