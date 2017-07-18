import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import Typist from 'react-typist';
import scrollToElement from 'scroll-to-element';

export default class Intro extends Component {
  handleArrowClick(el) {
    scrollToElement(el);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="intro container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-12">
              <h2 className="sans"><Typist startDelay={600} avgTypingDelay={70}><strong>&lt;Peter Tyldesley /&gt;</strong></Typist></h2>
                <h2 className="mono"><span className="purple">Full-stack</span> <span className="pink">software engineer</span><br/>
              </h2>
              <hr/>
              <blockquote>My <span className="highlight">passion</span> is creating great <span className="highlight">products</span> that people <span className="highlight">love</span> to use.</blockquote>
              <div className="text-center more">
                <span className="arrow" onClick={() => this.handleArrowClick('#about')} >
                  <Ionicon icon="ion-ios-arrow-down" fontSize="25px" color="white"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}