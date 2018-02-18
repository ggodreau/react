// curly braces are like React.Component import
import React, { Component } from 'react';

// SearchBar inherits parent 'React.Component' properties
class SearchBar extends Component {
  // all classes need a render method
  render() {
    return (<input />);
  }
}

export default SearchBar;
