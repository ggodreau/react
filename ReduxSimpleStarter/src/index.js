import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

var myKey = config.MyKey;

class App extends Component {
  constructor(props){
    super(props);

    // SHOULD I BE CALLING AN API
    // IN MY CONSTRUCTOR???!
    YTSearch({ key: myKey, term: 'surfboards'}, (data) => {
      console.log(data[0].snippet.channelTitle);
      this.setState({ videos: data });
    });

    this.state = {
      videos: []
    };
  }
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
