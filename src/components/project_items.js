import React, {Component} from 'react';
import ProjectItem from './project_item';
import Ionicon from 'react-ionicons';

export default class ProjectItems extends Component {
  render() {
    const projectItems = [
      {title: "How's the Weather", description: "is an Angular app that displays the weather in the user's current location.",
      img_url: '/img/weather_app.png', url: 'https://codepen.io/thegreaterpanda/full/BWwJwE/'},
      {title: 'Joke Generator', description: 'is an app built with jQuery that displays random jokes from a JSON API.',
      img_url: '/img/joke_generator.png', url: 'https://codepen.io/thegreaterpanda/full/ZBeNPe/'},
      {title: 'Wikipedia Viewer', description: 'is an Angular app written in HAML to allow easy viewing/searching of Wikipedia articles.',
      img_url: 'img/wikipedia_viewer.png', url: 'https://codepen.io/thegreaterpanda/full/JWOOpj/'},
      {title: 'YouTube Viewer', description: ['is a React app built with Semantic-UI to search for and view YouTube videos. ', 
      <br/>,
      <a href="https://github.com/p12y/youtube_viewer" target="_blank" rel="noopener noreferrer"><Ionicon icon="ion-social-github" color="white"/></a>],
      img_url: 'img/youtube_viewer.png', url: 'http://p12y.github.io/youtube_viewer'},
      {title: 'My Personal Portfolio', description: ['is a React app. Inception! ', 
      <br/>,
      <a href="https://github.com/p12y/portfolio/tree/master" target="_blank" rel="noopener noreferrer"><Ionicon icon="ion-social-github" color="white"/></a>],
      img_url: '/img/portfolio.png', url: 'https://github.com/p12y/portfolio/tree/master'},
      {title: 'Weather Compare', description: ['is a React app with state management by Redux, to compare the weather in different cities. ', 
      <br/>,
      <a href="https://github.com/p12y/weather_compare" target="_blank" rel="noopener noreferrer"><Ionicon icon="ion-social-github" color="white"/></a>],
      img_url: 'img/weather_compare.png', url: 'http://p12y.github.io/weather_compare'},
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


