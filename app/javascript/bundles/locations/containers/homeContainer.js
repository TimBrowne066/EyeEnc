import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import image from '../../../../assets/images/carousel.jpg';
import image2 from '../../../../assets/images/carousel2.jpg';
import image3 from '../../../../assets/images/carousel3.jpg';
import home1 from '../../../../assets/images/home1.jpg';
import home2 from '../../../../assets/images/home2.jpg';
import home3 from '../../../../assets/images/home3.jpg';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="grid-background">
        <Carousel>
          <Carousel.Item>
            <img className="carousel-image" src={image}/>
            <Carousel.Caption>
              <h3 className="carousel-header">Welcome!</h3>
              <p className="carousel-text">Eye Encounters has been Philadelphia's premier vision center since...</p> '
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="carousel-image" src={image2}/>
            <Carousel.Caption>
              <h3 className="carousel-header">Find your style</h3>
              <p className="carousel-text">We carry the finest designer brands including...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="carousel-image" src={image3}/>
            <Carousel.Caption>
              <h3 className="carousel-header">We take most insurances</h3>
              <p className="carousel-text">We take this insurance and that insurance and it makes your glasses cheaper!.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col xs={8} xsOffset={2} sm={8} className="text-center home-text">
            <h2 className="body-header">Welcome to Eye Encounters</h2>
            <p>At our multi-location Philadelphia state-of-the-art eye care practice, our mission is to preserve, restore and enhance the vision of every member of your family. We are committed to giving you the most thorough eye care and personal attention using the most modern technology.  We believe that educating our patients is among the keys to keeping their eyes healthy. Our expert staff takes the time to discuss how different contact selections and frame styles can impact your vision, answer any questions you might have and supply you with the most up-to-date information in order to keep your eyes healthy.</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} lg={6} className="text-left home-body">
            <p3 className="body-header">We offer the following:</p3>
            <ul className="services">
              <li>Primary Eye Care</li>
              <li>Comprehensive Eye Examinations</li>
              <li>Optical Dispensing - Designer Frames and Sunglasses</li>
              <li>Contact Lenses</li>
              <li>Treatment of Eye Infections, Eye Injuries, Dry Eyes</li>
              <li>Treatment of Eye Diseases: Cataracts, Glaucoma, Diabetic Retinopathy</li>
              <li>Low Vision Services</li>
            </ul>
            <p>As dedicated eye care professionals, we recognize the trust our patients place in us and it is our mission to meet and exceed those expectations. We invite you to come to our practice and receive the quality attention that you deserve. At each of our EYE ENCOUNTERS offices, we take the time to care for you and your eyes.</p>
          </Col>

          <Col xs={12} md={6} lg= {6} className="text-right">
          <Carousel className="carousel2" >
            <Carousel.Item>
              <img className="carousel-image" src={home1}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={home2}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={home3}/>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeContainer;
