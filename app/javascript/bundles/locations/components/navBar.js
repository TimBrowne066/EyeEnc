import React from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import navImage from '../../../../assets/images/logo.png';
import { Modal } from 'simple-react-bootstrap';
import StoresContainer from '../containers/storesContainer';
import specials from "../../../../assets/images/specials.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicModal: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ basicModal: true })
  }

  render() {

    let contacts = this.props.locations.map(location => {
      return(
        <div>
        <h2>{location.name}</h2>
        <p>{location.phone}</p>
        </div>
      )
    })

    return (
      <div>
      <Navbar inverse collapseOnSelect className="navigation">
        <Navbar.Header>
          <a href="/">
            <img className="nav-logo" src={navImage}/>
          </a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick={this.handleClick} href="#">Contact Us</NavItem>
            <NavDropdown eventKey={3} title=" Our Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/glasses/">Eyewear</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="#">Contact Lenses</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="#">Insurance</MenuItem>

            </NavDropdown>

          </Nav>
          <Nav pullRight>
          <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><img className="nav-logo" src={specials}/></a>
            <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><img className="nav-logo" src="http://www.societegenerale.al/en/wp-content/uploads/2016/07/Make-an-appointment.gif"/></a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal className="fade" show={this.state.basicModal} onHide={() => this.setState({ basicModal: false })}>
        <Modal.Body>
          {contacts}
          <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><img className="nav-logo" src="http://www.societegenerale.al/en/wp-content/uploads/2016/07/Make-an-appointment.gif"/></a>
        </Modal.Body>
        <Modal.Footer>
            <button type="button" className="btn btn-danger" onClick={() => this.setState({ basicModal: false })}>Close</button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default NavBar;
