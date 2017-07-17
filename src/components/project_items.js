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
      {title: 'YouTube Viewer', description: 'is a React app to search for and view YouTube videos.',
      img_url: 'http://via.placeholder.com/300x175', url: 'http://p12y.github.com/youtube_viewer'},
      {title: 'Personal Portfolio', description: 'This site is actually an app built with React. Inception! Feel free to view the source code on Github.',
      img_url: 'http://via.placeholder.com/300x175', url: 'https://github.com/p12y/portfolio/tree/master'},
      {title: 'More to come', description: '',
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


