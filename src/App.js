import React, { Component } from 'react'
import './App.css';
import Navbar from "./Components/Navbar"
import { Route, Switch } from "react-router-dom"
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import YoutubeApi from './Components/YoutubeApi'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      randomVideos: []
    }
  }

  async componentDidMount() {
    const randVideos = await YoutubeApi.getRandom()
    console.log(randVideos)
    this.setState({
      randomVideos: randVideos,
    })
  }
  render() {
    const { randomVideos } = this.state;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} randomVideos={randomVideos} />} 
          // component={HomePage} randomVideos={randomVideos}
          ></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
