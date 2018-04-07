import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }
  
  onChange(e) {
    this.setState({
      zip: e.target.value
    });
  } 

  search() {
    // console.log('zipppppppp in search.jsx', this.state.zip) worked
    this.props.onSearch(this.state.zip);
  }

  render() {
    return (
    <div class="zip">
      Enter a Zip Code <input value={this.state.zip} 
      onChange={this.onChange}/>
      <button onClick={this.search}> Search </button>
    </div>)

  }
}
export default Search;