import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Ironphones</h1>
          <Navigation />
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 📱 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
