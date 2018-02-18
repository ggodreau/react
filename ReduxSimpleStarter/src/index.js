import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import MyKey from './config';

const myKey = MyKey; //config.MY_KEY;

const App = () => {
  console.log(myKey);
  return (
    //<div>index component</div>
    <SearchBar />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
