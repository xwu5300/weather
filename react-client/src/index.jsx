import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Weather from './components/Weather.jsx';
import axios from 'axios';
import Timestamp from 'react-timestamp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '',
      temp: '',
      sum: '',
      hum: '',
      date: ''
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
           console.log('data from post yyyyyy', data.data);   //data from server posted
           this.setState({
            city: data.data.name,
            temp: Math.round(data.data.main.temp * 9 / 5 - 459.67),
            sum: data.data.weather[0].main,
            hum: data.data.main.humidity,
            date: this.getDate(data.data.dt)
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
    console.log('jason is here', this.state)
    return (<div>
      <h1>Weather</h1>
      <div class="infor">
        <Weather infor={this.state}/>
      </div>
      <div  class="search">
        <Search onSearch={this.onSearch}/>
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));