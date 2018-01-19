var request = require('request');
var yargs = require('yargs');

var argv = yargs
.options ({
    a : {
        describe: 'required Address to get Co-ords',
        demand: true,
        alias: 'address'
    }
})
.help()
.alias('help','h')
.argv;

var getAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json:true
        },(error, response, body) => {
            if(error || body.status==='ZERO_RESULTS') {
                if(error === null)
                    reject('Invalid Address');
                else
                    reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

getAddress(argv.a).then((body)=>{
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng);
},(err)=>{
    console.log(err);
});