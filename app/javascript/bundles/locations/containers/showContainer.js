import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import store1 from '../../../../assets/images/stores/11.jpg';
import store2 from '../../../../assets/images/stores/22.jpg';
import store3 from '../../../../assets/images/stores/33.jpg';
import store4 from '../../../../assets/images/stores/44.jpg';
import store5 from '../../../../assets/images/stores/55.jpg';
import store6 from '../../../../assets/images/stores/66.jpg';
import store1two from '../../../../assets/images/stores/111.jpg';
import store2two from '../../../../assets/images/stores/222.jpg';
import store3two from '../../../../assets/images/stores/333.jpg';
import store4two from '../../../../assets/images/stores/444.jpg';
import store5two from '../../../../assets/images/stores/555.jpg';
import store6two from '../../../../assets/images/stores/666.jpg';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let photo;
    let photo2;
    let hours = this.props.location.hours.split("\n")
    let hours2 = hours.map(hour => {
      return(
        <p className="store-body">{hour}</p>
      )
    })
    if(this.props.location.id === 1){
      photo = store1
      photo2 = store1two
    } else if (this.props.location.id === 2) {
      photo = store2
      photo2 = store2two
    } else if (this.props.location.id === 3) {
      photo = store3
      photo2 = store3two
    } else if (this.props.location.id === 4) {
      photo = store4
      photo2 = store4two
    } else if (this.props.location.id === 5) {
      photo = store5
      photo2 = store5two
    } else if (this.props.location.id === 6) {
      photo = store6
      photo2 = store6two
    }
    return (
      <Grid className="show-page">
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
              <a href={`tel:${this.props.location.phone}`} className="store-button">{this.props.location.phone}</a>
              <p className="store-details">HOURS</p>
              {hours2}
              </div>
          </Col>
          <Col lg={6} sm={12} className="home-text">
          <iframe
            className="google-map"
            width="100%"
            height="412"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA9y27CfGXcc0jBZi1Dhnb9gTu9LCE-hic
              &q=${this.props.location.address},Philadelphia+PA`} allowfullscreen>
          </iframe>
          </Col>
        </Row>
        <Row>
          <div className="show-photo-container">
            <Image className="show-photo" src={photo}/>
            <Image className="show-photo" src={photo2}/>
          </div>
        </Row>
      </Grid>

    );
  }
}

export default ShowContainer;
