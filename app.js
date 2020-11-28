require('dotenv').config()
const request = require("request")

const weather = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233`
const geocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.GEOCODE_API_KEY}&limit=1`

function options(url) {
    const parameters ={
            url: url,
            json: true
    }
    return parameters
}

request(options(weather), (error, response, body) => {
    console.log(`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
})

request(options(geocode), (error, response, body) => {
    const latitude = body.features[0].center[1]
    const longitude = body.features[0].center[0]
    console.log(latitude, longitude)
})