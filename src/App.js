import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import YoutubeApi from "./Components/YoutubeApi";
import Searchbar from "./Components/Searchbar";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      location: "",
      redirect: false,
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
    const { input, location } = this.state;

    if (location === "/about") {
      this.setState({
        redirect: true,
      });
    }
    const searchResults = await YoutubeApi.getSearch(input);
    this.setState({
      searchedVideos: searchResults,
      input: "",
      redirect: false,
    });
  };

  clearSearch = () => {
    this.setState({
      searchedVideos: [],
    });
  };

  getLocation = (location) => {
    this.setState({
      location: location,
    });
  };

  render() {
    const { randomVideos, input, searchedVideos, location, redirect } = this.state;
    return (
      <div>
        <Navbar clearSearch={this.clearSearch} />
        <Searchbar
          input={input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <Switch>
          {redirect ? <Redirect exact to={"/"} /> : null}
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                input={input}
                randomVideos={randomVideos}
                searchedVideos={searchedVideos}
                getLocation={this.getLocation}
              />
            )}
            // component={HomePage} randomVideos={randomVideos}
          ></Route>
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                location={location}
                getLocation={this.getLocation}
              />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
