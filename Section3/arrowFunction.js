//Three types we can get a statement executed. But when you have more statements stick with 1st option

var square1 = (x) => {
    return x * x;
};

var square2 = (x) => x * x;

var square3 = x => x * x;

console.log(square1);
console.log(square2);
console.log(square3);
/*
The Arrow functions are lag with two properties
    1. They don't bind the 'this' variable
    2. They don't have the argument array
*/

var obj = {
    name: "Gaja",
    sayHi:() => {
        console.log(arguments); // this will print the arguments of the wrapper function that node created
        console.log(`Hi. I am ${this.name}`); // this wont work as it won't bind the this keyword
    },
    sayHiAlt() {
        console.log(arguments); // this will print the arguments passed to this function
        console.log(`Hi. I am ${this.name}`); // this works
    }
}

obj.sayHi(1,2,3);