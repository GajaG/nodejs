/*
'yargs' - This is one of the modules that works with commandline arguments like 'process'
it will read and parse the commandline
But it treats the command line arguments in a different way. The difference is
process
=======
1) node commandLineArgumentsYargs.js list
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\VICKEY\\Documents\\NodeJs\\Udemy\\commandLineArgumentsYargs.js',
  'list' ]

2) node commandLineArgumentsYargs.js add --title=secret --body="my secret"
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\VICKEY\\Documents\\NodeJs\\Udemy\\commandLineArgumentsYargs.js',
  'add',
  '--title=secret',
  '--body=my secret' ]
3)node commandLineArgumentsYargs.js add title=secret body="my secret"
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\VICKEY\\Documents\\NodeJs\\Udemy\\commandLineArgumentsYargs.js',
  'add',
  'title=secret',
  'body=my secret' ]
yargs
=====
1) node commandLineArgumentsYargs.js list
argv: { _: [ 'list' ],
  help: false,
  version: false,
  '$0': 'commandLineArgumentsYargs.js' }
2) node commandLineArgumentsYargs.js add --title=secret --body="my secret"
argv: { _: [ 'add' ],
  help: false,
  version: false,
  title: 'secret',
  body: 'my secret',
  '$0': 'commandLineArgumentsYargs.js' }
3) node commandLineArgumentsYargs.js add title=secret body="my secret"
{ _: [ 'add', 'title=secret', 'body=my secret' ],
  help: false,
  version: false,
  '$0': 'commandLineArgumentsYargs.js' }
*/
console.log('Demonstrating YARGS');

const yargs = require('yargs');
const notes = require('./manipulateNotes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('process:', process.argv);
console.log('argv:', argv);

if(command === 'list') {
    //node commandLineArgumentsYargs.js list
    notes.getAll();
} else if(command === 'add') {
    //node commandLineArgumentsYargs.js add --title=secret --body="my secret"
    notes.add(argv.title, argv.body);
} else if(command === 'read') {
    //node commandLineArgumentsYargs.js read --title=secret
    notes.read(argv.title);
} else if(command === 'remove') {
    //node commandLineArgumentsYargs.js remove --title=secret
    notes.remove(argv.title);
} else {
    console.log('Command not recognized');
}