import React, { Component } from 'react';

//es6 class based component -- needs to be aware of state
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: " "};
  }

  render() {
    return (
      <div>
        <input className="blue white-text"
          // controlled component. component recieves value from state
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}
export default SearchBar;
