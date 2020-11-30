require('dotenv').config()
const geoCode = require("./utils/geocode")
const weather = require("./utils/weather")
const address = process.argv[2]

if (!address) {
    console.log("Please provide a search address")
} else {
    geoCode(address, (error, latLong) => {
        if (error) {
            return console.log(error)
        }
        weather(latLong.latitude, latLong.longitude, (error, weather) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(latLong.location)
            console.log(weather)
        }) 
    })
    
}



