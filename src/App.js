import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './components/intro';
import FixedNavbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <FixedNavbar />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
