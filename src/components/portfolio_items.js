import React, {Component} from 'react';
import PortfolioItem from './portfolio_item';

export default class PortfolioItems extends Component {
  render() {
    const teachlingoItems = [{id: 1, name: 'Teacher/recruiter accounts with dashboards'}, 
      {id: 2, name: 'Easy applications with email alerts'}, 
      {id: 3, name: 'User profiles with image uploading'},
      {id: 4, name: 'Payments with Stripe'}];

    const schedulerItems = [{id: 1, name: 'Ajax requests'}, 
      {id: 2, name: 'Custom FullCalendar integration'}, 
      {id: 3, name: 'Twilio API & Delayed Job for SMS & email reminders'},
      {id: 4, name: 'Test credentials:', children: [{id: 5, name: <u>Email: foo@bar.com</u>},
    {id: 6, name: <u>Password: password</u>}]}];
    
    const portfolioItems = [
      {title: 'Teachlingo', 
      description: 'A job board for ESL teachers built with Ruby on Rails.',
      listItems: teachlingoItems, img_url: 'img/teachlingo.png', url: 'https://teachlingo.com/'},
      {title: 'Appointment Reminder (WIP)', 
      description: 'An appointment scheduler built with Ruby on Rails.',
      listItems: schedulerItems, img_url: 'img/scheduler.png', url: 'https://appointment-reminder-app.herokuapp.com/'}
    ]

    const items = portfolioItems.map(item => {
      return (
        <PortfolioItem 
          title={item.title} 
          description={item.description} 
          listItems={item.listItems} 
          img_url={item.img_url}
          url={item.url}
        />
      );
    });

    return <div className="container work">{items}</div>;
  }
}