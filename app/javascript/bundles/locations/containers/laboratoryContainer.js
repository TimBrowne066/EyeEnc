import React from 'react';
import transitions from '../../../../assets/images/lab/transitions.png';
import polarized from '../../../../assets/images/lab/polarized.jpg';
import varilux from '../../../../assets/images/lab/varilux.png';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';


const LaboratoryContainer = (props) => {
  return (
    <Grid className="glasses-text">
      <Row>
        <Col xs={12} lg={12} md={12} className="text-center">
          <h1 className="body-header">Laboratory</h1>
          <h3 className="store-body">Our on-site, state-of-the-art lab offers these services and more!</h3>
        </Col>
      </Row>
      <Row className="lab-service">
        <Col lg={4} sm={12}>
          <Image className="lab-image" src={transitions}/>
        </Col>
        <Col lg={8} sm={12}>
          <h3 className="text-center lab-service-header">Transitions photochromic lenses</h3>
          <p>Photochromic lenses are eyeglass lenses that are clear (or nearly clear) indoors and darken automatically when exposed to sunlight. Other terms sometimes used for photochromic lenses include light-adaptive lenses and variable tint lenses.<br></br><br></br>Transitions lenses change effortlessly, but the technology behind them is anything but simple. A complex formula of photochromic molecules make light, dark and every shade in between possible.</p>
        </Col>
      </Row>
      <Row className="lab-service">
        <Col lg={4} sm={12}>
          <Image className="lab-image" src={varilux}/>
        </Col>
        <Col lg={8} sm={12}>
          <h3 className="text-center lab-service-header">Digital progressive lenses</h3>
          <p>Progressive eyeglass lenses, also known as 'no-line bifocals' or 'no-line trifocals' are multifocal lenses that allow for comfortable viewing at distance, reading, and everything in-between.  The top of the lens is for distance viewing, and the power increases down the lens for viewing intermediate (computer) and reading.
              <br></br> <br></br>Recently, the Digital (High-Definition), also known as 'free-form,' progressive lens technology has taken progressive lenses to a new level.  While traditional progressives are produced using 'pre-molded' designs, where the same design is used for every application, the new, Digital (HD) progressives are fully customized!</p>
        </Col>
      </Row>
      <Row className="lab-service">
        <Col lg={4} sm={12}>
          <Image className="lab-image" src={polarized}/>
        </Col>
        <Col lg={8} sm={12}>
          <h3 className="text-center lab-service-header">Polarized sunglass lenses</h3>
          <p>Polarized lenses are coated with a special chemical film that helps reduce glare. Glare is caused when light from the sun is reflected off of water or a solid surface. By neutralizing glare, polarized lenses help you see objects more clearly, and also help reduce the harmful effects of UV light.<br></br><br></br>Regular sunglasses are designed to only reduce the amount of light that is transmitted through the lens horizontally and vertically. But the chemical filter on the lenses of polarized sunglasses is designed to absorb horizontal light waves, while still allowing vertical waves to pass through. Because light only travels in one direction through polarized lenses, glare is eliminated.</p>
        </Col>
      </Row>
    </Grid>
  )
}

export default LaboratoryContainer;
