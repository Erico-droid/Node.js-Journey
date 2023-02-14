const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXJpY28tZHJvaWQiLCJhIjoiY2xkZzNqdHk2MHR3aTNucTcycDZoY3YyayJ9.Gq-EnuUXhyF0LibM2QQ6uA&limit=1`;
    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to location services', undefined);
        } else if (!body.features.length) {
            callback('Unable to find location. Try another Search', undefined);
        } else {
            const data = body.features[0].center
            callback(undefined, {
                latitude: data[1],
                longitude: data[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode