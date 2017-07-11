import React, {Component} from 'react';
import List from './list';

const skills = [{id: 1, name: 'HTML/CSS/SCSS'}, {id: 2, name: 'Ruby', children: [{id: 3, name: 'Rails'}, 
{id: 4, name: 'RSpec'}]}, {id: 5, name: 'Javascript', children: [{id: 6, name: 'jQuery'}, 
{id: 7, name: 'React'}, {id: 8, name: 'Angular'}, {id: 9, name: 'Redux'}]}, {id: 10, name: 'Git'}, 
{id: 11, name: 'Heroku'}, {id: 12, name: 'AWS'}];

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="sans"><strong>About</strong></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Who am I?</strong></h2>
            <p className="mono">Music enthusiast &#9835;. World explorer. Motorbike rider. Tech lover.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Skills</strong> <small><span className="pink-underline">in strength order</span></small></h2>
            <List items={skills}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="sans"><strong>Interests</strong></h2>
            <p className="mono">I am passionate about self-development, which is why I spend a serious amount of time picking up new skills and learning to do things better than I could before.</p>
            <p className="mono">I love to travel, but after spending two and a half years abroad I'm happy to be back, ready to <del>work on my plans for world domination</del> ehem... persue my goals <span className="text-danger">&#x1F608;</span>.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <p className="lead mono"></p>
          </div>
        </div>
      </div>
    );
  }
}