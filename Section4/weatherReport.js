const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/8b5dd0f16f441dc52867944f90dd1265/${lat},${lng}`,
        json:true
    },(error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, body.currently.temperature);
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;