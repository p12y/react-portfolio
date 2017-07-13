import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import MotionMenu from 'react-motion-menu';
import scrollToElement from 'scroll-to-element';

export default class FixedNavbar extends Component {
  handleArrowClick(el) {
    scrollToElement(el);
  }

  render() {
    return (
      <div id="menu">
        <MotionMenu
          type="vertical"
          margin={120}
        >
        <div className="btn btn-black">
          <Ionicon icon="ion-navicon" fontSize="32px" color="white"/>
        </div>
        <div onClick={() => this.handleArrowClick('#about')} className="btn btn-black">
          <Ionicon icon="ion-person" fontSize="32px" color="white"/>
        </div>
        <div onClick={() => this.handleArrowClick('#portfolio')} className="btn btn-black">
          <Ionicon icon="ion-code-working" fontSize="32px" color="white"/>
        </div>
        <div onClick={() => this.handleArrowClick('#contact')} className="btn btn-black">
          <Ionicon icon="ion-paper-airplane" fontSize="32px" color="white"/>
        </div>
        </MotionMenu>
      </div>
    );
  }
}

