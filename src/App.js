import React, { Component } from 'react';
import Intro from './components/intro';
import FixedNavbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Waypoint from 'react-waypoint';

class App extends Component {
  handleWaypointEnter() {
    const reg = new RegExp('(^| )navbar-fixed-top($| )','g');
    const navbar = document.querySelector('.navbar');
    const placeholder = document.getElementById('navPlaceholder');
    navbar.className = navbar.className.replace(reg,' ');
    placeholder.style.height = '0px';
  }

  handleWaypointLeave() {
    const navbar = document.querySelector('.navbar');
    const placeholder = document.getElementById('navPlaceholder');
    navbar.className += ' navbar-fixed-top';
    placeholder.style.height = navbar.clientHeight + 'px';
  }

  componentWillMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    return (
      <div className="App">
        <Intro />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        />
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
