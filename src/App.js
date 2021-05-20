import React, { Component } from 'react'
import './App.css';
import Navbar from "./Components/Navbar"
import { Route, Switch } from "react-router-dom"
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import YoutubeApi from './Components/YoutubeApi'
import Videos from "./Components/Videos"


export class App extends Component {
  constructor() {
    super()
    this.state = {
      randomVideos: [], 
      videoId: "SB-qEYVdvXA", 
    }
  }

  async componentDidMount() {
    const randVideos = await YoutubeApi.getRandom()
    //console.log(randVideos)
    this.setState({
      randomVideos: randVideos,
    })
  }
  render() {
    const { randomVideos, videoId } = this.state;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} randomVideos={randomVideos} />} 
          // component={HomePage} randomVideos={randomVideos}
          ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/videos/:id" render={(props) => <Videos {...props} videoId={videoId}/>}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
