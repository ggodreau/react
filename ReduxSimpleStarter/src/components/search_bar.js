// curly braces are like React.Component import
import React, { Component } from 'react';

// SearchBar inherits parent 'React.Component' properties
class SearchBar extends Component {
  // all classes need a render method
  render() {
    return (<input onChange={event => console.log(event.target.value)} />);
  }
}

export default SearchBar;
