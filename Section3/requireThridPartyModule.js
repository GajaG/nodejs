/*
requiring thrid party modules.
You have to have a package.json in your project. Get that by doing "npm init"
package.json will include little info about the project and the dependencies needed for 
    that project to run
once package.json created, you have to do npm install with specific modules like
    npm install lodash -- save
lodash - module name
--save - adds entry to package.json into dependencies portion.
This will create a folder inside the current path named "node_modules"
node_modules is the container for all the downloaded modules
This will be useful when we setup the proj again in remote place or upload the proj to git 
    without the node_modules directory which can be downloaded from net anytime
nodemon is one of the modules which will run behind and refreshes the result as we save the file
    we never require nodemon to our code as that is an utility needed to run the app
    So that needs to be installed globally unlike the lodash
    npm install nodemon -g
*/

const _ = require('lodash'); //_ is the common name used for lodash modules

//lodash will have more utilities. we will use two of them. isString() and uniq()

console.log(_.isString(true));
console.log(_.isString("true"));
console.log(_.isString("Gaja"));

console.log(_.uniq(["gaja",1,"gaja","Gaja",2,3,4]));