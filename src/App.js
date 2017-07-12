import React, { Component } from 'react';
import Intro from './components/intro';
import FixedNavbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <FixedNavbar />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
