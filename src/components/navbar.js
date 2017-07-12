import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Ionicon from 'react-ionicons';
import scrollToElement from 'scroll-to-element';

export default class FixedNavbar extends Component {
  handleClick(el) {
    scrollToElement(el);
  }

  render() {
    return (
      <div>
        <div id="navPlaceholder"></div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={() => this.handleClick('#about')} eventKey={1} href="#">About</NavItem>
              <NavItem onClick={() => this.handleClick('#portfolio')} eventKey={2} href="#">Work</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem onClick={() => this.handleClick('#contact')} eventKey={1} href="#">Contact</NavItem>
              <NavItem eventKey={2} href="#"><Ionicon icon="ion-social-octocat" color="#7DF9FF"/></NavItem>
              <NavItem eventKey={2} href="#"><Ionicon icon="ion-social-instagram" color="#7DF9FF"/></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

