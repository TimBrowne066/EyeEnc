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
      <Grid className="glasses-text">
        <Row>
          <Col xs={12} lg={12} md={12} className="text-center">
            <h1 className="body-header">Eyewear</h1>
            <h3 className="store-body">We offer frames from the following designers:</h3>
          </Col>
        </Row>
        <div className="text-center glasses-grid">
        <Row>
          <Col lg={4}>
            <a href="http://www.framesoflife.com/en-us/"><img className="glasses-tile" src={armani}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.carreraworld.com/us/en.html"><img className="glasses-tile" src={carrera}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.cazal-eyewear.com/"><img className="glasses-tile" src={cazal}/></a>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <a href="http://www.dolcegabbana.com/eyewear/"><img className="glasses-tile" src={dolceandgabbana}/></a>
          </Col>
          <Col lg={4}>
            <a href="https://www.gucci.com/int/en/ca/women/womens-accessories/womens-eyewear/womens-eyeglasses-c-women-sunglasses-opticals"><img className="glasses-tile" src={gucci}/></a>
          </Col>
          <Col lg={4}>
            <a href="https://www.katespade.com/accessories/sunglasses-reading-glasses/"><img className="glasses-tile" src={katespade}/></a>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <a href="https://store.miumiu.com/en/miumiuus/eyewear"><img className="glasses-tile" src={miumiu}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.oakley.com/"><img className="glasses-tile" src={oakley}/></a>
          </Col>
          <Col lg={4}>
            <a href="https://www.valentino.com/gb/shop/women/eyewear-main_section"><img className="glasses-tile" src={valentino}/></a>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <a href="https://www.persol.com/usa"><img className="glasses-tile" src={persol}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.prada.com/en/eyewear.html"><img className="glasses-tile" src={prada}/></a>
          </Col>
          <Col lg={4}>
            <a href="https://www.ray-ban.com/usa"><img className="glasses-tile" src={rayban}/></a>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <a href="http://www.tiffany.com/accessories/eyewear"><img className="glasses-tile" src={tiffany}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.tomford.com/eyewear/"><img className="glasses-tile" src={tomford}/></a>
          </Col>
          <Col lg={4}>
            <a href="http://www.versace.com/us/en-us/women/eyewear/"><img className="glasses-tile" src={versace}/></a>
          </Col>
        </Row>
        </div>
        <h2 className="body-header text-center">And many more!</h2>

      </Grid>
    );
  }
}

export default GlassesContainer;
