console.log('Person Database to store name and age');

const yargs = require('yargs');
const _ = require('lodash');
const person = require('./personHelper.js');

//var argv = yargs.argv; -- Lets use command() to let the user to know how the command needs to be executed

var descName = {
    describe:'Name of the person',
    demand: true,
    alias: 'n'
};
var descAge = {
    describe:'Age of the person',
    demand:true,
    alias: 'a'
}
var argv = yargs
    .command('add','Add new person',{
        name:descName,
        age:descAge
    })
    .command('remove','Remove an existing person',{
        name:descName
    })
    .command('read', 'Get details of a person', {
        name:descName
    })
    .command('list', 'Get all person and details')
    .help()
    .argv;
var command = argv._[0];

if(command === 'add') {
    console.log('You are adding a person',argv.name);
    var retPerson = person.addPerson(argv.name, argv.age);
    var message = '';
    if(_.isUndefined(retPerson) ? message=`${argv.name} is duplicate` : message=`${argv.name} is added`);
    console.log(message);
} else if(command === 'remove') {
    console.log('You are removing the person',argv.name);
    var retPerson = person.removePerson(argv.name);
    var message = '';
    if(retPerson ? message=`removed the person ${argv.name}` : message=`No person found named ${argv.name}`);
    console.log(message);
} else if(command === 'read') {
    console.log('You are reading a person',argv.name);
    var retPerson = person.getPerson(argv.name);
    var message = '';
    if(_.isUndefined(retPerson) ? message=`No person found named ${argv.name}`:message=`Found person ${retPerson.name} aged ${retPerson.age}`);
    console.log(message);
} else if(command === 'list') {
    console.log('You are listing all the person');
    var retPerson = person.getAll();
    if(retPerson.length >0) {
        //instead of for loop we can use forEach method of array like the filter method
        retPerson.forEach((person) =>  console.log(`Name : ${person.name} Age : ${person.age}`));
    } else {
        console.log('No data to list');
    }
}