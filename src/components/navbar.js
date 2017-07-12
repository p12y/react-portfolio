import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Ionicon from 'react-ionicons';

export default class FixedNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Work</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">ptylde@gmail.com</NavItem>
            <NavItem eventKey={2} href="#"><Ionicon icon="ion-social-octocat" color="#7DF9FF"/></NavItem>
            <NavItem eventKey={2} href="#"><Ionicon icon="ion-social-instagram" color="#7DF9FF"/></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

