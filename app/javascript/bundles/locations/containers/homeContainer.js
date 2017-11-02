import React from 'react';
import StoresContainer from './storesContainer';
import HomeCarousel from '../components/homeCarousel';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import home1 from '../../../../assets/images/home1.jpg';
import home2 from '../../../../assets/images/home2.jpg';
import home3 from '../../../../assets/images/home3.jpg';
import instagram from '../../../../assets/images/instagram.png';
import facebook from '../../../../assets/images/facebook.png';
import twitter from '../../../../assets/images/twitter.png';
import { Modal } from 'simple-react-bootstrap';
import special from '../../../../assets/images/special.png';


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    }
  }

  render() {
    let adModal;
    if (this.state.modal === true) {
      adModal = <Modal className="fade text-center ad-modal" keyboard show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                  <Modal.Body className="ad-modal">
                    <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><Image className="modal-image" src={special}/></a>
                    <a href="https://eyeencounters.acuityscheduling.com/schedule.php"><button type="button" className="btn btn-primary text-right">Schedule an Appointment</button></a><br/>
                    <button type="button" className="btn btn-danger text-right" onClick={() => this.setState({ modal: false })}>Close</button>
                  </Modal.Body>
                </Modal>
    }


    return (
      <div className="home-page">
      <HomeCarousel/>
      <Grid className="grid-background">
        <Row>
          <Col xs={12} lg={8} lgOffset={2} md={8} mdOffset={2} className="text-center home-text">
            <h2 className="body-header">Welcome to Eye Encounters</h2>
            <h3>Serving the eyecare needs of Philadelphia since 1980!</h3>
            <a href="https://www.instagram.com/eyeencounters/"><Image className="social-media-icon" src={instagram}/></a><a href="https://www.facebook.com/Eye-Encounters-192939874071785/"><Image className="social-media-icon" src={facebook}/></a><a href="https://twitter.com/eyeencounters"><Image className="social-media-icon" src={twitter}/></a>
          </Col>
        </Row>
        <Row className="locations-block">
        <h2 className="text-center body-header">Locations</h2>

          <StoresContainer
            locations={this.props.locations}
          />
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6} className="text-center home-body">
            <p3 className="services-header text-center">We offer the following:</p3>
              <Button bsStyle="info" className="services" href="https://eyeencounters.acuityscheduling.com/schedule.php">Primary Eye Care</Button>
              <Button bsStyle="info" className="services" href="https://eyeencounters.acuityscheduling.com/schedule.php">Comprehensive Eye Examinations</Button>
              <Button bsStyle="info" className="services" href="/contacts/">Contact Lenses and Exams</Button>
              <Button bsStyle="info" className="services" href="/laboratory/">On-site laboratory at 19th and Chestnut</Button>
              <Button bsStyle="info" className="services" href="/laboratory/">Digital Lenses</Button>
              <Button bsStyle="info" className="services" href="/glasses/">Designer frames and sunglasses</Button>
              <Button bsStyle="info" className="services" href="/laboratory/">Same day glasses service at 19th and Chestnut</Button>
            <br></br><p>As dedicated eye care professionals, we recognize the trust our patients place in us and it is our mission to exceed those expectations. We invite you to come to our practice and receive the quality attention that you deserve.</p>
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
      {adModal}
      </div>
    );
  }
}

export default HomeContainer;
