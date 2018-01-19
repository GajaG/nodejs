var getAll = () => {
    console.log("Listing notes");
};

var addNotes = (title, body) => {
    console.log('Adding the note ',title,body);
};

var readNotes = (title) => {
    console.log('Reading the note',title);
};

var remove = (title) => {
    console.log('Removing the note',title);
};
/*module is a common object available to all the files we create in node js
exports is an object and is a member of module
we can add variables and functions to the exports object and that -
can be reused in the other files where we require this file

exports can be prepared as json. when the name and the value are the same in the json entry,
we don't need to put the same by separating with colon. Putting once is enough. 
find the sample below. This is again ES6 syntax*/

module.exports = {
    getAll,
    add : addNotes,
    read : readNotes,
    remove
}