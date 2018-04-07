import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Weather from './components/Weather.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      infor: []
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(zip) {
    // console.log('zip in client index.jsx', zip)  worked
    axios.post('/weather', {zip:zip})
         .then(data => {
           console.log('data from post yyyyyy', data);   //data from server posted
           this.setState({infor: data})  
         })

  }

  render () {
    return (<div>
      <h1>Weather</h1>
      <div class="infor">
        <Weather infor={this.state.infor}/>
      </div>
      <div  class="search">
        <Search onSearch={this.onSearch}/>
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));