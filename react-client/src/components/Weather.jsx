import React from 'react';
import Moment from 'moment';

const Weather = (props) => {
// console.log('inside weather component', props)
 return (<div>
    <div className="city">
      {props.infor.city}
    </div>
    <div className="desc">
      {props.infor.sum}
      <img src={"http://openweathermap.org/img/w/" +props.infor.icon + ".png"} />
    </div>
    <div className="temp">
      {props.infor.temp}°
    </div>
    <div className="cont">
      <div className="date">{Moment(props.infor.date).format("MMMM D dddd")}</div> 
      <div className="range">{props.infor.max}°  -  {props.infor.min}°</div>
    </div>
    <div className="wind">
      <div className="title">
        WIND
      </div>
      {props.infor.wind}mph
    </div> 
    <div className="humi">
      <div className="title">
        HUMIDITY
      </div>
      {props.infor.hum}%
    </div>

  </div>)
}

export default Weather;