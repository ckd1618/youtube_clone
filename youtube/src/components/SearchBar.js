import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = e => {
    this.setState({ term: e.target.value });
    // e.persist();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
