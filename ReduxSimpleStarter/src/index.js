import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import MyKey from './config';

const myKey = MyKey;

const App = () => {
  console.log(myKey);
  return (
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
