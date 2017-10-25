import React from 'react';
import StoresContainer from './storesContainer';
import HomeCarousel from '../components/homeCarousel';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import home1 from '../../../../assets/images/home1.jpg';
import home2 from '../../../../assets/images/home2.jpg';
import home3 from '../../../../assets/images/home3.jpg';
import instagram from '../../../../assets/images/instagram.png';
import facebook from '../../../../assets/images/facebook.png';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {



    return (
      <div className="home-page">
      <HomeCarousel/>
      <Grid className="grid-background">
        <Row>
          <Col xs={12} lg={8} lgOffset={2} md={8} mdOffset={2} className="text-center home-text">
            <h2 className="body-header">Welcome to Eye Encounters</h2>
            <p>At our multi-location Philadelphia state-of-the-art eye care practice, our mission is to preserve, restore and enhance the vision of every member of your family. We are committed to giving you the most thorough eye care and personal attention using the most modern technology.  We believe that educating our patients is among the keys to keeping their eyes healthy. Our expert staff takes the time to discuss how different contact selections and frame styles can impact your vision, answer any questions you might have and supply you with the most up-to-date information in order to keep your eyes healthy.</p>
            <a href="https://www.instagram.com/eyeencounters/"><Image className="social-media-icon" src={instagram}/></a><a href="https://www.facebook.com/Eye-Encounters-192939874071785/"><Image className="social-media-icon" src={facebook}/></a>
          </Col>
        </Row>
        <Row className="locations-block">
        <h2 className="text-center body-header">Locations</h2>

          <StoresContainer
            locations={this.props.locations}
          />
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6} className="text-left home-body">
            <p3 className="body-header">We offer the following:</p3>
            <ul className="services-container">
              <li className="services"><a href="https://eyeencounters.acuityscheduling.com/schedule.php">Primary Eye Care</a></li>
              <li className="services"><a href="https://eyeencounters.acuityscheduling.com/schedule.php">Comprehensive Eye Examinations</a></li>
              <li className="services"><a href="/contacts/">Contact Lenses and Exams</a></li>
              <li className="services"><a href="/laboratory/">On-site laboratory</a></li>
              <li className="services"><a href="/laboratory/">Digital Lenses</a></li>
              <li className="services"><a href="/glasses/">Designer frames and sunglasses</a></li>
            </ul>
            <p>As dedicated eye care professionals, we recognize the trust our patients place in us and it is our mission to meet and exceed those expectations. We invite you to come to our practice and receive the quality attention that you deserve. At each of our EYE ENCOUNTERS offices, we take the time to care for you and your eyes.</p>
          </Col>

          <Col xs={12} md={6} lg= {6} className="text-right">
          <Carousel className="carousel2" >
            <Carousel.Item>
              <Image className="carousel-image" responsive src={home1}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="carousel-image" responsive src={home2}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="carousel-image" responsive src={home3}/>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default HomeContainer;
