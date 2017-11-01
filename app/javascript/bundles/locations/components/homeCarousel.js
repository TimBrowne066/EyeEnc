import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import image from '../../../../assets/images/carousel.jpg';
import image2 from '../../../../assets/images/carousel2.jpg';
import image3 from '../../../../assets/images/carousel3.jpg';

const HomeCarousel = (props) => {
  return(
      <Carousel>
      <Carousel.Item>
        <Image className="carousel-image" src={image}/>
        <Carousel.Caption>
          <h3 className="carousel-header">Welcome</h3>
          <p className="carousel-text">Eye Encounters has been Philadelphia's premier vision center since 1980.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="carousel-image" src={image2}/>
        <Carousel.Caption>
          <h3 className="carousel-header">Find your style</h3>
          <p className="carousel-text">We carry the finest designer brands including Gucci, Tom Ford, and Cazal!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="carousel-image" src={image3}/>
        <Carousel.Caption>
          <h3 className="carousel-header">We take most insurances</h3>
          <p className="carousel-text">EyeMed, VSP, Davis, Medicaid, Spectera and many more!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel;
