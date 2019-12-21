import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar'

import Showcase from './components/HomePage/Showcase';

import PlayerStats from './components/Stats/PlayerStats'
import Fixtures from './components/Fixtures/Fixtures';
import Profile from './components/Stats/Profile';

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />

        <Route exact path="/" component={Showcase} />
        <Route exact path="/playerStats" component={PlayerStats
        } />
        <Route exact path='/Fixtures' component={Fixtures} />
        <Route exact path='/Profile' component={Profile} />

      </div>
    </Router>
  );
}


export default App;
