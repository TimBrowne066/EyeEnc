import React from 'react';
import { Carousel, img, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import armani from '../../../../assets/images/brands/armani.jpg';
import carrera from '../../../../assets/images/brands/carrera.jpg';
import cazal from '../../../../assets/images/brands/cazal.jpg';
import dolceandgabbana from '../../../../assets/images/brands/DolceAndGabbana.jpg';
import gucci from '../../../../assets/images/brands/gucci.jpg';
import katespade from '../../../../assets/images/brands/katespade.jpg';
import miumiu from '../../../../assets/images/brands/miumiu.jpg';
import oakley from '../../../../assets/images/brands/oakley.jpg';
import persol from '../../../../assets/images/brands/persol.jpg';
import prada from '../../../../assets/images/brands/prada.jpg';
import rayban from '../../../../assets/images/brands/rayban.jpg';
import tiffany from '../../../../assets/images/brands/tiffany.jpg';
import tomford from '../../../../assets/images/brands/tomford.jpg';
import valentino from '../../../../assets/images/brands/valentino.gif';
import versace from '../../../../assets/images/brands/versace.jpg';

class GlassesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="home-text">
        <Row>
          <Col xs={12} lg={12} md={12} className="text-center">
            <h2 className="body-header">Eyewear</h2>
            <p className="store-body">We offer frames from the following designers:</p>
          </Col>
        </Row>
        <div className="text-center glasses-grid">
        <Row>
          <Col lg={4}>
            <img className="glasses-tile" src={armani}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={carrera}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={cazal}/>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img className="glasses-tile" src={dolceandgabbana}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={gucci}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={katespade}/>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img className="glasses-tile" src={miumiu}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={oakley}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={armani}/>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img className="glasses-tile" src={persol}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={prada}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={rayban}/>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img className="glasses-tile" src={tiffany}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={tomford}/>
          </Col>
          <Col lg={4}>
            <img className="glasses-tile" src={versace}/>
          </Col>
        </Row>
        <h2 className="body-header">And many more!</h2>
        </div>
      </Grid>
    );
  }
}

export default GlassesContainer;
