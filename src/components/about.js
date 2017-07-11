import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="mono"><strong>About</strong></h2>
            <p className="sans">Some stuff about me</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="mono"><strong>Skills</strong></h2>
            <p className="sans">My skills</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="mono"><strong>Interests</strong></h2>
            <p className="sans">My interests</p>
          </div>
        </div> 
      </div>
    );
  }
}