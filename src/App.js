import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './components/intro';
import FixedNavbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <FixedNavbar />
      </div>
    );
  }
}

export default App;
