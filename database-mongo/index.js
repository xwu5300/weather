var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var weatherSchema = mongoose.Schema({
  "zip_code": String,
  "id": Number,
  "weather": String, 
  "description": String,
  "temperature": Number,
  "pressure": Number,
  "dt": Number,
  "name": String
});

var Weather = mongoose.model('Weather', weatherSchema);

var save = (item, zipCode) => {
  // console.log('data and zip for database', zipCode)
  // return Promise.all(
  //   Weather.find({"zip_code": zipCode}, (err, item) => {
  //     if (err) {
  //       console.log('err for saving database', err)
  //     } else {
        // console.log("is data passssss", item) 
        if (!item.length) {

          new Weather({
            "zip_code": zipCode.toString(),
            "id": item.id,
            "weather": item.weather[0].main, 
            "description": item.weather[0].description,
            "temperature": Math.round(item.main.temp * 9 / 5 -459.67),
            "pressure": item.main.pressure,
            "dt": item.dt,
            "name": item.name
          }).save()
        }
    //   }
    // })
  // )      
}

// var selectAll = (zipCode, callback) => {
//   Weather.find({zip_code: zipCode}).sort({dt:-1}).limit(1).exec((err, item) => {
//     callback(item);
//   });
// }

// module.exports.selectAll = selectAll;
module.exports.save = save;