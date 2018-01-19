const axios = require('axios');
const yargs = require('yargs');

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

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`;
axios.get(url).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS')
        throw new Error('Invalid Address');
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/8b5dd0f16f441dc52867944f90dd1265/${lat},${lng}`;
    return axios.get(weatherUrl).then((response) => {
        var temperature = response.data.currently.temperature;
        console.log(`The temperature is ${temperature}`);
    });
}).catch((e) =>{
    if(e.code === 'ENOTFOUND')
        console.log('Unable to connect to server!');
    else
        console.log(e);
});