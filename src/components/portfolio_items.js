import React, {Component} from 'react';
import PortfolioItem from './portfolio_item';

export default class PortfolioItems extends Component {
  render() {
    const teachlingoItems = [{id: 1, name: 'Separate teacher/recruiter accounts'}, 
      {id: 2, name: 'Apply to jobs/send applications with a single click'}, 
      {id: 3, name: 'User profiles (complete with image uploading)'},
      {id: 4, name: 'Accepts payments with Stripe'}];

    const schedulerItems = [{id: 1, name: 'Built with a heavily customised version of FullCalendar.js'}, 
      {id: 2, name: 'Ajax requests'}, 
      {id: 3, name: 'Integration with Twilio API & Delayed::Job for text message reminders'},
      {id: 4, name: 'Test credentials:', children: [{id: 5, name: <u>Email: foo@bar.com</u>},
    {id: 6, name: <u>Password: password</u>}]}];
    
    const portfolioItems = [
      {title: 'Teachlingo', 
      description: 'A job board for ESL teachers built with Ruby on Rails.',
      listItems: teachlingoItems, img_url: 'http://via.placeholder.com/450x300'},
      {title: 'Appointment Reminder (WIP)', 
      description: 'An appointment scheduler built with Ruby on Rails.',
      listItems: teachlingoItems, img_url: 'http://via.placeholder.com/450x300'}
    ]

    const items = portfolioItems.map(item => {
      return (
        <PortfolioItem 
          title={item.title} 
          description={item.description} 
          listItems={item.listItems} 
          img_url={item.img_url} 
        />
      );
    });

    return <div>{items}</div>;
  }
}