const request = require('request');

var getGeocode = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    },(error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2)); -- Preety Print
        if(error) {
            callback('Unable to connect to remote server');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address given');
        } else if(body.status === 'OK') {
            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.getGeocode = getGeocode;