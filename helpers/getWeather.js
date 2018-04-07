const axios = require('axios');
const config = require('../config.js');

let getWeather = (zipCode, cb) => {
  console.log('check if getWeather been called',zipCode)
  axios.get("api.openweathermap.org/data/2.5/weather?zip=11355,us&appid=927aeae65fe17110a0fa6f5b369d87a6")
       .then((data) => {
        //  console.log('data from helper function',data)  //passed 
        //  cb(data)
        
        })
}

// exports.getWeather = getWeather;