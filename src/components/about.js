import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-4">
            <h1 className="sans"><strong>About</strong></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Who am I?</strong></h2>
            <p className="mono">Music enthusiast. World explorer. Motorbike rider. Tech lover.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Skills</strong> <small>In order of strength</small></h2>
            <ul className="mono">
              <li>Ruby on Rails</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Interests</strong></h2>
            <p className="mono">My interests..</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <p className="lead mono">Lead paragraph here...</p>
          </div>
        </div>
      </div>
    );
  }
}