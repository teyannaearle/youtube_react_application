import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import YoutubeApi from "./Components/YoutubeApi";
import Searchbar from "./Components/Searchbar";
import VideoFirebase from "./Components/VideoFirebase";

// This is just a general comment about component naming conventions in your file tree. Component file names should be PascalCased, just like the note in Likebutton.js. It should be LikeButton.js. Tiny fixes! 

/* Your CSS files should not be housed in the components folder. I would say there are two ways to restructure your CSS files. 
1. Either have separate folders for each component and CSS file, i.e. 'about' for About.js and About.css
2. Have a separate 'css' folder and house all of your CSS files within. */

// Another very tiny naming convention - folders, like 'Components', should be lowercased. React Components themselves are uppercased.

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      prevInput: "",
      videoId: "",
      redirect: false,
      randomVideos: [],
      searchedVideos: [],
      apiError: false,
      invalid: false,
    };
  }

  async componentDidMount() {
    try {
      const randVideos = await YoutubeApi.getRandom();
      this.setState({
        randomVideos: randVideos,
        apiError: false,
      });
    } catch {
      this.setState({
        apiError: true,
      });
    }
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { input, videoId } = this.state;
    const pathname = window.location.pathname;

    if (
      (pathname === "/about" && input) ||
      (pathname === `/video/${videoId}` && input)
    ) {
      this.setState({
        redirect: true,
      });
    }

    if (input) {
      try {
        const searchResults = await YoutubeApi.getSearch(input);
        this.setState({
          prevInput: input,
          searchedVideos: searchResults,
          input: "",
          redirect: false,
          invalid: false,
          apiError: false,
        });
      } catch {
        this.setState({
          apiError: true,
        });
      }
    } else {
      this.setState({
        invalid: true,
      });
    }
  };

  clearSearch = () => {
    this.setState({
      searchedVideos: [],
      input: "",
      invalid: false,
    });
  };

  getLocation = (location) => {
    this.setState({
      videoId: location,
    });
  };

  grabVideo = () => {
    this.setState({
      invalid: false,
    });
  };

  render() {
    const {
      randomVideos,
      input,
      prevInput,
      searchedVideos,
      location,
      redirect,
      invalid,
      apiError,
    } = this.state;
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
                input={prevInput}
                randomVideos={randomVideos}
                searchedVideos={searchedVideos}
                grabVideo={this.grabVideo}
                invalid={invalid}
                apiError={apiError}
              />
            )}
          ></Route>
          <Route
            path="/about"
            render={(props) => (
              <About {...props} location={location} invalid={invalid} />
            )}
          ></Route>

          <Route
            path="/video/:id"
            render={(props) => (
              <VideoFirebase
                {...props}
                invalid={invalid}
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
