import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Game from './component/Game/Game';
import Project from './components/Project';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Skill from './components/Skill';

import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <div className="loading-end">
          <div className="lds-hourglass"></div>
        </div>
        <Navbar></Navbar>
        <Home></Home>
        <Profile></Profile>
        <Timeline></Timeline>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
      </div>
    )
  }
}

export default App;
