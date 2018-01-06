import React, {Component} from 'react';
import ProjectItem from './project_item';
import Ionicon from 'react-ionicons';

export default class ProjectItems extends Component {
  render() {
    const projectItems = [
      {title: "Shrnk", description: "is a URL shortener app and API built with Expresss.",
      img_url: 'img/shrnk.png', url: 'https://shrnk.glitch.me/'},
      {title: "Calculator", description: "is a React app.",
      img_url: 'img/calculator.png', url: 'http://react-js-calculator.surge.sh'},
      {title: "Markdown Previewer", description: "is a React app to preview markdown in the browser.",
      img_url: 'img/markdown_previewer.png', url: 'http://p12y-md-previewer.surge.sh'},
      {title: "Tic-Tac-Toe", description: "is a React app featuring that classic game.",
      img_url: 'img/ttt.png', url: 'http://ttt-react.surge.sh'},
      {title: "Pomodoro", description: "is a Pomodoro Timer built with React.",
      img_url: 'img/pomodoro.png', url: 'http://react-pomodoro.surge.sh'},
      {title: "Simon Game", description: "is a memory game built with React.",
      img_url: 'img/simon_game.png', url: 'http://react-simon-game.surge.sh'},
      {title: "Twitch Streamer", description: "is a React app that shows which shows are currently streaming on Twitch.tv.",
      img_url: 'img/twitch.png', url: 'http://twitch-streamer.surge.sh/'},
      {title: "How's the Weather", description: "is an Angular app that displays the weather in the user's current location.",
      img_url: 'img/weather_app.png', url: 'https://codepen.io/thegreaterpanda/full/BWwJwE/'},
      {title: 'Wikipedia Viewer', description: 'is an Angular app written in HAML to allow easy viewing/searching of Wikipedia articles.',
      img_url: 'img/wikipedia_viewer.png', url: 'https://codepen.io/thegreaterpanda/full/JWOOpj/'},
      {title: 'YouTube Viewer', description: 'is a React app built with Semantic-UI to search for and view YouTube videos. ',
      img_url: 'img/youtube_viewer.png', url: 'http://p12y.github.io/youtube_viewer'},
      {title: 'My Personal Portfolio', description: 'is a React app. Inception!',
      img_url: 'img/portfolio.png', url: 'https://github.com/p12y/portfolio/tree/master'},
      {title: 'Weather Compare', description: 'is a React app with state management by Redux, to compare the weather in different cities.',
      img_url: 'img/weather_compare.png', url: 'http://p12y.github.io/weather_compare'}
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


