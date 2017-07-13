import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import MotionMenu from 'react-motion-menu';

export default class FixedNavbar extends Component {
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
        <div className="btn btn-black">
          <Ionicon icon="ion-person" fontSize="32px" color="white"/>
        </div>
        <div className="btn btn-black">
          <Ionicon icon="ion-code-working" fontSize="32px" color="white"/>
        </div>
        <div className="btn btn-black">
          <Ionicon icon="ion-paper-airplane" fontSize="32px" color="white"/>
        </div>
        </MotionMenu>
      </div>
    );
  }
}

