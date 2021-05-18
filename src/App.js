import React, { Component } from 'react'
import './App.css';
import Navbar from "./Components/Navbar"
import { Route, Switch } from "react-router-dom"
import HomePage from "./Components/HomePage"
import About from "./Components/About"


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
