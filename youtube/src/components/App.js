import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import youtube from "../apis/youtube"

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('happiness');
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

  }


  render() {
    return <SearchBar onFormSubmit={this.onFormSubmit} />;
  }
}

export default App;
