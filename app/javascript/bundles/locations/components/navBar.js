import React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import navImage from '../../../../assets/images/logo.png';

const NavBar = (props) => {
  return (
    <Navbar inverse collapseOnSelect className="navigation">
      <Navbar.Header>
        <a href="/">
          <img className="nav-logo" src={navImage}/>
        </a>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Contact Us</NavItem>
          <NavItem eventKey={2} href="#">Locations</NavItem>
          <NavDropdown eventKey={3} title=" Our Services" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="#">Eyewear</MenuItem>
            <MenuItem eventKey={3.2} href="#">Sunglasses</MenuItem>
            <MenuItem eventKey={3.3} href="#">Contact Lenses</MenuItem>
            <MenuItem eventKey={3.3} href="#">Insurance</MenuItem>
            <MenuItem eventKey={3.3} href="#">Specials</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Eye Exams</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Set up an Appointment</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
