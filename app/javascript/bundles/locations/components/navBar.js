import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import navImage from '../../../../assets/images/logo.png';
import { Modal } from 'simple-react-bootstrap';
import StoresContainer from '../containers/storesContainer';
import specials from "../../../../assets/images/specials.png";
import instagram from '../../../../assets/images/instagram.png';
import facebook from '../../../../assets/images/facebook.png';
import twitter from '../../../../assets/images/twitter.png';
import specialmodal from "../../../../assets/images/specialmodal.png";
import appointment from "../../../../assets/images/appointment.gif"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicModal: false,
      specialModal: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSpecialClick = this.handleSpecialClick.bind(this)
  }

  handleClick(){
    this.setState({ basicModal: true })
  }

  handleSpecialClick(){
    this.setState({ specialModal: true })
  }

  render() {

    let contacts = this.props.locations.map(location => {
      return(
        <div>
        <h2>{location.name}</h2>
        <a href={`tel:${location.phone}`} className="store-button">{location.phone}</a>
        </div>
      )
    })

    return (
      <div>
      <Navbar inverse fixedTop collapseOnSelect className="navigation">
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
              <MenuItem eventKey={3.3} href="/contacts/">Contact Lenses</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="/insurances/">Insurance</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="/laboratory/">Laboratory</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <img onClick={this.handleSpecialClick} className="nav-logo" src={specials}/>
            <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><img className="nav-logo2" src={appointment}/></a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal className="fade" show={this.state.basicModal} onHide={() => this.setState({ basicModal: false })}>
        <Modal.Body className="contact-modal">
          {contacts}
          <a className="appt" href="https://eyeencounters.acuityscheduling.com/schedule.php"><img className="nav-logo" src="http://www.societegenerale.al/en/wp-content/uploads/2016/07/Make-an-appointment.gif"/></a>            <a href="https://www.instagram.com/eyeencounters/"><Image className="social-media-icon" src={instagram}/></a><a href="https://www.facebook.com/Eye-Encounters-192939874071785/"><Image className="social-media-icon" src={facebook}/></a><a href="https://twitter.com/eyeencounters"><Image className="social-media-icon" src={twitter}/></a>

        </Modal.Body>
        <Modal.Footer>
            <button type="button" className="btn btn-danger" onClick={() => this.setState({ basicModal: false })}>Close</button>
        </Modal.Footer>
      </Modal>
      <Modal className="fade" show={this.state.specialModal} onHide={() => this.setState({ specialModal: false })}>
        <Image className="modal-image" src={specialmodal}/>
        <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><button type="button" className="btn btn-primary text-right">Schedule an Appointment</button></a><br/>
        <button type="button" className="btn btn-danger" onClick={() => this.setState({ specialModal: false })}>Close</button>
      </Modal>
      </div>
    );
  }
}

export default NavBar;
