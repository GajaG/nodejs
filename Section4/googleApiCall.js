const geocode = require('./geoCode');
const weather = require('./weatherReport');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        String: true,
        alias: 'address',
        describe: 'Fetch co-ords of the address being passed'
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.getGeocode(argv.a, (errMsg, result) => {
    console.log('Fetching the co-ordinates');
    console.log('-------------------------');
    if(errMsg) {
        console.log(errMsg);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
        console.log('Fetching the weather');
        console.log('--------------------');
        weather.getWeather(result.latitude, result.longitude, (errMsg, report) => {
            if(errMsg) {
                console.log(errMsg);
            } else {
                console.log(`Current temperature @ ${result.address} is ${report}`);
            }
        });
    }
});