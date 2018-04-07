import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Weather from './components/Weather.jsx';
import axios from 'axios';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '',
      temp: '',
      sum: '',
      hum: '',
      date: '',
      max: '',
      min: '',
      wind: '',
      icon: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.getDate = this.getDate.bind(this);

  }

  componentDidMount() {
    this.onSearch(10017);
  }

  onSearch(zip) {
    // console.log('zip in client index.jsx', zip)  worked
    axios.post('/weather', {zip:zip})
         .then(data => {
          //  console.log("data in index", data.data)
           this.setState({
            city: data.data.name,
            temp: Math.round(data.data.main.temp * 9 / 5 - 459.67),
            sum: data.data.weather[0].main,
            hum: data.data.main.humidity,
            date: this.getDate(data.data.dt),
            max: Math.round(data.data.main.temp_max * 9 / 5 - 459.67),
            min: Math.round(data.data.main.temp_min * 9 / 5 - 459.67),
            wind: Math.round(data.data.wind.speed),
            icon: data.data.weather[0].icon
           })
         })
        
    // console.log('check dattttttte', this.getDate())
  }
  
  getDate(dt) {
    var date = new Date(0);
    date.setUTCSeconds(dt)
    return JSON.stringify(date).slice(1,11)
  }
  
  

  render () {
    return (<div>
      <h1></h1>
      <div className="infor">
        <Weather infor={this.state}/>
      </div>

      <div  className="search">
        <Search onSearch={this.onSearch}/>
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));