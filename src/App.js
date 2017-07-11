import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="intro container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-12">
              <h2><strong>Peter Tyldesley</strong></h2>
              <h2 className="sans"><span className="purple">Full-stack</span> <span className="pink">software engineer</span><br/>
              </h2>
              <hr/>
              <blockquote>I use the <span className="highlight">entire</span> tech stack to create <span className="highlight">products</span> that people <span className="highlight">love</span> to use.</blockquote>
              <br/>
              <h5>Find out more</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
