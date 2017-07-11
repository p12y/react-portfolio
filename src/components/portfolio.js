import React, {Component} from 'react';
import Ionicon from 'react-ionicons';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="sans" style={{'margin-top': '1.3em'}}><strong>My work</strong></h1>
            </div>
          </div>
        </div>

        <div className="container" style={{width: '60%'}}>
          <br/>
          <div className="row mono">
            <div className="col-md-6">
              <h3 className="sans project-title">Teachlingo</h3>
              <p>A job board for ESL teachers built with Ruby on Rails.</p>
              <p className="sans">Features:</p>
              <ul>
                <li>Separate teacher/recruiter accounts</li>
                <li>Apply to jobs/send applications with a single click</li>
                <li>User profiles (complete with image uploading)</li>
                <li>Accepts payments with Stripe</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="http://via.placeholder.com/450x300" />
            </div>
          </div>

          <div className="row mono" style={{'margin-top': '6em'}}>
            <div className="col-md-6">
              <h3 className="sans project-title">Appointment Reminder (WIP)</h3>
              <p>An appointment scheduler built with Ruby on Rails.</p>
              <p className="sans">Features:</p>
              <ul>
                <li>Integrated with a heavily customised version of FullCalendar.js</li>
                <li>Ajax requests</li>
                <li>Integration with Twilio API for text message reminders</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="http://via.placeholder.com/450x300" />
            </div>
          </div>
          
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="sans" style={{'margin-top': '1.3em'}}><strong>Projects</strong></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}