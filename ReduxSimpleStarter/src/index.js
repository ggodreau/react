import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

var myKey = config.MyKey;

YTSearch({ key: myKey, term: 'surfboards'}, function(data) {
  console.log(data[0].snippet.channelTitle);
});

const App = () => {
  console.log(myKey);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
