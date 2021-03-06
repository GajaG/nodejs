const fs = require('fs');

var fetchPerson = () => {
    try {
        var personArrayString = fs.readFileSync('../playground/personData.json');
        return JSON.parse(personArrayString);
    } catch(e) {
        return [];
    }
};

var savePerson = (personArray) => {
    fs.writeFileSync('../playground/personData.json', JSON.stringify(personArray));
};

var addPerson = (name, age) => {
    var newPerson = {
        name,
        age
    };

    var personArray = fetchPerson();

    var duplicatePerson = personArray.filter((oldPerson) => oldPerson.name === name);

    if(duplicatePerson.length === 0) {
        personArray.push(newPerson);
        savePerson(personArray);
        return personArray;
    }
};

var removePerson = (name) => {
    var personArray = fetchPerson();
    var filteredPersonArray = personArray.filter((person) => person.name !== name);
    savePerson(filteredPersonArray);
    return personArray.length !== filteredPersonArray.length;
};

var getPerson = (name) => {
    var personArray = fetchPerson();
    var filteredPersonArray = personArray.filter((person) => person.name === name);
    console.log(filteredPersonArray[0]);
    debugger;
    return filteredPersonArray[0];
};

var getAll = () => {
    return fetchPerson();
}

module.exports = {
    addPerson,
    removePerson,
    getPerson,
    getAll
};

/*
Command line Debug mode
-----------------------
while running use node inspect appName commandLineArguments
Ex: "node inspect personApp.js read --name="Gaja" //instead of inspect you can use debug
It will open debug mode and the first line will be node's autogenerated wrapper function
    wrapper function includes the below parameters
        exports
        require
        module
        --dirname
        --filename
Commands can be used are
    list(10) -- shows 10 lines above and below of our current line
    n -- moves to the next line
    c -- continues till the next line break point. If no break point completes the execution
    repl -- while on line break point use this to manipulate the data using javascript

Chrome dev tools debug mode
---------------------------
Command: "node --inspect-brk person.js read --name="Gaja"
This will wait to get the chrome opened 
hit chrome with  the url "chrome://inspect" and continue the debug there with the regular dev tools 

debug with nodemon
------------------
Unlike node, nodemon will help refreshing the debugger as soon as you change and save your file
The new changes will be picked up automatically and the debugger will start from the beginning
commands
    nodemon inspect personApp.js read --name="Gaja"
    nodemon --inspect-brk person.js read --name="Gaja"
*/