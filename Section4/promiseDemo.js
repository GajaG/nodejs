/* 1. Simple example
var prom = new Promise ((resolve, reject) => {
    reject('Am bad!')
});

prom.then((message) => {
    console.log(message);
}, (errorMessage) => {
    console.log(errorMessage);
}); */

/* 2. Complex example
var add = (a,b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Arguments must be number');
        }
    });
};

add(10,'20').then((res) => {
    console.log(`Added result ${res}`);
}, (err) => {
    console.log(err)
}); */

/* 3. Promise chaining */

var add = (a,b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Arguments must be number');
        }
    });
};

add(10,20).then((res) => {
    console.log(`Added result ${res}`);
    return add(res,30);
}).then((res2)=>{
    console.log(`New Added result ${res2}`);
}).catch((err) => {
    console.log(err);
});