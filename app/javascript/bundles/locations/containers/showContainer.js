import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col xs={12} lg={8} lgOffset={2} md={8} mdOffset={2} className="text-center home-text">
            <h2 className="body-header">{this.props.location.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12} className="home-text store-details">
              <p>{this.props.location.address}</p>
              <p>{this.props.location.city}, {this.props.location.state}</p>
              <p>{this.props.location.zip}</p>
              <p>{this.props.location.phone}</p>
              <p>{this.props.location.hours.split(/\r?\n/)}</p>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default ShowContainer;
