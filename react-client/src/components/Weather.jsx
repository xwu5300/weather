import React from 'react';

const Weather = (props) => {
console.log('inside weather component', props)
 return (<div>
    weather
    <div class="city">
      city:
      {props.infor.name}
    </div>
  </div>)
}

export default Weather;