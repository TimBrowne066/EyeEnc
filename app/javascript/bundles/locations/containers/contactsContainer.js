import React from 'react';
import { Carousel, img, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

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
            <h3 className="store-body">We offer these contact brands:</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ContactsContainer;
