import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import Typist from 'react-typist';

export default class Intro extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="intro container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-12">
              <h2 className="sans"><Typist startDelay={1000} avgTypingDelay={90}><strong>&lt;Peter Tyldesley /&gt;</strong></Typist></h2>
                <h2 className="mono"><span className="purple">Full-stack</span> <span className="pink">software engineer</span><br/>
              </h2>
              <hr/>
              <blockquote>I use the <span className="highlight">entire</span> tech stack to <span className="highlight">create</span> products that people <span className="highlight">love</span> to use.</blockquote>
              <br/>
              <div className="text-center more">
                <h5>Find out more</h5>
                <Ionicon icon="ion-ios-arrow-down" fontSize="25px" color="white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}