import React from 'react';

const Weather = (props) => {
console.log('inside weather component', props)
 return (<div>
    <div class="city">
      City: {props.infor.city}
    </div>
    <div class="temp">
      Temperature: {props.infor.temp}
    </div>
    <div class="desc">
      Summary: {props.infor.sum}
    </div>
    <div class="humi">
      Humidity: {props.infor.hum}
    </div>
    <div class="date">
      Date: {props.infor.date}
    </div>
  </div>)
}

export default Weather;