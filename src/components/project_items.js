import React, {Component} from 'react';
import ProjectItem from './project_item';

export default class ProjectItems extends Component {
  render() {
    const projectItems = [
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {description: 'Blah blah',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
    ]

    const items = projectItems.map(item => {
      return (
        <ProjectItem 
          description={item.description} 
          url={item.url} 
          img_url={item.img_url} 
        />
      );
    });

    return (
      <div className="container projects">
        <div className="row mono">
          {items}
        </div>
      </div>
    );
  }
}


