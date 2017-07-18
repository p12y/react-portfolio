import React, {Component} from 'react';
import List from './list';
import Header from './header';
import ReactTooltip from 'react-tooltip';

const skills = [{id: 1, name: 'HTML/CSS/SCSS'}, {id: 2, name: 'Ruby', children: [{id: 3, name: 'Rails'}, 
{id: 4, name: 'RSpec'}]}, {id: 5, name: 'Javascript', children: [{id: 6, name: 'jQuery'}, 
{id: 7, name: 'React'}, {id: 8, name: 'Angular'}, {id: 9, name: 'Redux'}]}, {id: 10, name: 'Git'}, 
{id: 11, name: 'Heroku'}, {id: 12, name: 'AWS'}];

const dominationTextAfter = <span><del>work on my plans for world domination</del> ehem... pursue my goals <span className="text-danger"><span role="img" aria-label="devil-face">&#x1F608;</span></span></span>;
const dominationTextBefore = <span className="blue-underline">work on my plans for world domination</span>;

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {dominationText: dominationTextBefore}
    this.handleDominationText = this.handleDominationText.bind(this);
  }

  handleDominationText() {
    this.setState({dominationText: dominationTextAfter});
  }

  render() {
    return (
      <div id="about">
        <ReactTooltip />
        <Header title={'About'} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h2 className="sans"><strong>Who am I?</strong></h2>
              <p className="mono">Music enthusiast <span role="img" aria-label="music">&#9835;</span>. World explorer. Motorbike rider. Tech lover.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h2 className="sans"><strong>Skills</strong> <small><span data-tip="Pretty much..." className="pink-underline">in strength order</span></small></h2>
              <List items={skills}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h2 className="sans"><strong>Interests</strong></h2>
              <p className="mono">I am passionate about self-development, which is why I spend a serious amount of time picking up new skills and learning to do things better than I could before.</p>
              <p className="mono">I love to travel, but after spending two and a half years abroad I'm happy to be back, ready to <span onMouseOver={this.handleDominationText} onClick={this.handleDominationText}>{this.state.dominationText}</span>.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <p className="lead mono"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}