import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let hours = this.props.location.hours.split("\n")
    let hours2 = hours.map(hour => {
      return(
        <p className="store-body">{hour}</p>
      )
    })

    return (
      <Grid>
        <Row>
          <Col xs={12} lg={8} lgOffset={2} md={8} mdOffset={2} className="text-center home-text">
            <h2 className="body-header">{this.props.location.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12} className="home-text">
          <div className="store-body">
              <p className="store-details">ADDRESS</p>
              <p className="store-body">{this.props.location.address}</p>
              <p className="store-body">{this.props.location.city}, {this.props.location.state} {this.props.location.zip}</p>
              <p className="store-details">PHONE</p>
              <a href={`tel:${this.props.location.phone}`} className="store-body">{this.props.location.phone}</a>
              <p className="store-details">HOURS</p>
              {hours2}
              </div>
          </Col>
          <Col lg={6} sm={12} className="home-text">
          <iframe
            className="google-map"
            width="100%"
            height="400"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA9y27CfGXcc0jBZi1Dhnb9gTu9LCE-hic
              &q=${this.props.location.address},Philadelphia+PA`} allowfullscreen>
          </iframe>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default ShowContainer;
