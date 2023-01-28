const { default: axios } = require('axios');
const request = require('postman-request');

const url =  "http://api.weatherstack.com/current?access_key=7af5817c0a1a17138746d41b4a3c61b9&query=37.8267,-122.4233&units=f";

request({url: url, json: true}, (error, response) => {
    const data = response.body.current;
    console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`)
})

//Forward Geocoding
const geocoding_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXJpY28tZHJvaWQiLCJhIjoiY2xkZzNqdHk2MHR3aTNucTcycDZoY3YyayJ9.Gq-EnuUXhyF0LibM2QQ6uA&limit=1";
request({url: geocoding_url, json: true}, (error, response) => {
    const data = response.body.features[0].center
    const latitude = data[1]
    const longitude = data[1]
    console.log(latitude, longitude);
})

// trying to make requests using axios
// async function get_weather_data(url) {
//    const resp = await axios.get(url)
//     .then((res) => {
//         const data = res.data.current;
//         return data;
//      })
//     .catch((err) => {
//         console.log(err);
//     })
//    return resp
// }

// get_weather_data(url)
// .then((data) => {
//     console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`)
// })

//geocoding using axios and mapbox
// async function foward_geocoding(url) {
//     const resp = await axios.get(url)
//     .then((response) => {
//         const data = response.data.features[0].center
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     return resp;
// }

// foward_geocoding(geocoding_url)
// .then(() => {

// })
