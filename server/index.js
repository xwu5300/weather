var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index');
var helper = require('../helpers/getWeather');
var app = express();
var axios = require('axios')
var api = require('../config.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

//try to add zipcode as param
// app.get('/weather', (req, res) => {
//   console.log('server index.js app.get', req.query)
//   db.selectAll(req.query, (err, data) => {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.post('/weather', (req, res) => {
  console.log('requse from server index.js', req.body.zip)
  // helper.getWeather(req.body.zip, () => {
  //   // db.save(data, req.body.zip).then(() => 
    
  // });
  axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${req.body.zip},us&appid=${api.API}`)
  .then((data) => {
    console.log('data from helper function',data.data)
    db.save(data.data, req.body.zip)
    res.send(data.data)
  //  res.status(201).send();
   })
   .catch((err) => {
     console.log('something wrongggggg', err)
   })
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

