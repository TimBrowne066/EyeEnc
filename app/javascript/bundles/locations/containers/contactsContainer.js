import React from 'react';
import { Carousel, img, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import acuvue2 from '../../../../assets/images/contacts/acuvue2.jpg';
import acuvuemoist from '../../../../assets/images/contacts/acuvuemoist.jpg';
import acuvuemoist1day from '../../../../assets/images/contacts/acuvuemoist1day.jpg';
import acuvueoasys1day from '../../../../assets/images/contacts/acuvueoasys1day.jpg';
import oasys from '../../../../assets/images/contacts/oasys.jpg';
import oasysastigmatism from '../../../../assets/images/contacts/oasysastigmatism.jpg';
import airoptix from '../../../../assets/images/contacts/airoptix.jpg';
import airoptixcolors from '../../../../assets/images/contacts/airoptixcolors.jpg';
import avaira from '../../../../assets/images/contacts/avaira.jpg';
import biofinity from '../../../../assets/images/contacts/biofinity.jpg';
import biofinitytoric from '../../../../assets/images/contacts/biofinitytoric.jpg';
import biotrue from '../../../../assets/images/contacts/biotrue.jpg';
import blultra from '../../../../assets/images/contacts/blultra.jpg';
import focusdailies from '../../../../assets/images/contacts/focusdailies.jpg';
import freshlookcolor from '../../../../assets/images/contacts/freshlookcolor.jpg';

class ContactsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="glasses-text">
        <Row>
          <Col xs={12} lg={12} md={12} className="text-center">
            <h1 className="body-header">Contact lenses</h1>
            <h3 className="store-body">We offer these contact brands and more:</h3>
          </Col>
        </Row>
        <Row className="contacts-container text-center">
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={acuvue2}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={acuvuemoist}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={acuvuemoist1day}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={acuvueoasys1day}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={oasys}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={oasysastigmatism}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={airoptix}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={airoptixcolors}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={avaira}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={biofinity}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={biofinitytoric}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={biotrue}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={blultra}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={focusdailies}/>
          </Col>
          <Col sm={6} lg={4} className="contact-cell">
            <img className="contact-image" src={freshlookcolor}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ContactsContainer;
