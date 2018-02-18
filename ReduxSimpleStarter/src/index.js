import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

var myKey = config.MyKey;

const App = () => {
  console.log(myKey);
  return (
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
