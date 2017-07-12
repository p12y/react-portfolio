import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import PortfolioItem from './portfolio_item'

export default class Portfolio extends Component {
  render() {

    const teachlingoItems = [{id: 1, name: 'Separate teacher/recruiter accounts'}, 
      {id: 2, name: 'Apply to jobs/send applications with a single click'}, 
      {id: 3, name: 'User profiles (complete with image uploading)'},
      {id: 4, name: 'Accepts payments with Stripe'}];

    const schedulerItems = [{id: 1, name: 'Built with a heavily customised version of FullCalendar.js'}, 
      {id: 2, name: 'Ajax requests'}, 
      {id: 3, name: 'Integration with Twilio API & Delayed::Job for text message reminders'},
      {id: 4, name: 'Test credentials:', children: [{id: 5, name: 'Email: foo@bar.com'},
      {id: 6, name: 'Password: password'}]}];

    return (
      <div className="container-fluid dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="sans"><strong>My work</strong></h1>
            </div>
          </div>
        </div>

        <div className="container work">
          <PortfolioItem 
            title={'Teachlingo'} 
            description={'A job board for ESL teachers built with Ruby on Rails.'} 
            listItems={teachlingoItems} 
            img_url={'http://via.placeholder.com/450x300'} 
          />

          <PortfolioItem 
            title={'Appointment Reminder (WIP)'} 
            description={'An appointment scheduler built with Ruby on Rails.'} 
            listItems={schedulerItems} 
            img_url={'http://via.placeholder.com/450x300'} 
          /> 
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="sans"><strong>Projects</strong></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}