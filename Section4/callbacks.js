var getUser = (id, callback) => {
    var user = {
        id,
        name:'Gaja'
    };
    setTimeout(() => callback(user), 3000);
};

getUser(04, (userObject)=>{
    console.log(userObject);
});