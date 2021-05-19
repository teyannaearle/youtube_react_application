import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import YoutubeApi from "./Components/YoutubeApi";
import Searchbar from "./Components/Searchbar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      randomVideos: [],
      searchedVideos: [],
    };
  }

  async componentDidMount() {
    const randVideos = await YoutubeApi.getRandom();
    this.setState({
      randomVideos: randVideos,
    });
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { input } = this.state;

    const searchResults = await YoutubeApi.getSearch(input);
    this.setState({
      searchedVideos: searchResults,
      input: "",
    });
  };

  clearSearch = () => {
    this.setState({
      searchedVideos: [],
    });
  };

  render() {
    const { randomVideos, input, searchedVideos } = this.state;
    return (
      <div>
        <Navbar clearSearch={this.clearSearch} />
        <Searchbar
          input={input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                randomVideos={randomVideos}
                searchedVideos={searchedVideos}
              />
            )}
            // component={HomePage} randomVideos={randomVideos}
          ></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
