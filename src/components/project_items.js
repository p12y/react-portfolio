import React, {Component} from 'react';
import ProjectItem from './project_item';

export default class ProjectItems extends Component {
  render() {
    const projectItems = [
      {title: "How's the Weather", description: "is an Angular app that displays the weather in the user's current location.",
      img_url: 'http://via.placeholder.com/300x175', url: 'https://codepen.io/thegreaterpanda/full/BWwJwE/'},
      {title: 'Joke Generator', description: 'is an app built with jQuery that displays random jokes from a JSON API.',
      img_url: 'http://via.placeholder.com/300x175', url: 'https://codepen.io/thegreaterpanda/full/ZBeNPe/'},
      {title: 'Wikipedia Viewer', description: 'is an Angular app written in HAML to allow easy viewing/searching of Wikipedia articles.',
      img_url: 'http://via.placeholder.com/300x175', url: 'https://codepen.io/thegreaterpanda/full/JWOOpj/'},
      {title: 'Blah blah', description: '',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {title: 'Blah blah', description: '',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
      {title: 'Blah blah', description: '',
      img_url: 'http://via.placeholder.com/300x175', url: '#'},
    ]

    const items = projectItems.map(item => {
      return (
        <ProjectItem 
          title={item.title}
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


