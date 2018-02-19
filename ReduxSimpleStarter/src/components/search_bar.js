// curly braces are like React.Component import
import React, { Component } from 'react';

// SearchBar inherits parent 'React.Component' properties
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }
  // all classes need a render method
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Input Value: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
