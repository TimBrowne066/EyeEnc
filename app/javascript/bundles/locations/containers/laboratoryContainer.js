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
      <Row>
        <Col sm={12} lg={6}>
          <h3>Lens Types</h3>
          <Panel collapsible header="Click Here">
            <h4 className="lab-service-header text-center">Single Vision Lenses</h4>
            <p>Single vision lenses offer correction for people who are nearsighted, farsighted, or need help with reading.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Multifocal Lenses</h4>
            <p>A multifocal lens combines two or more focal points into one lens. This allows a person to view objects near, far and in between all in one lens. Multifocal lenses are available in bifocals, trifocals and no-line progressive bifocals.</p>
            <hr/>
            <h4 className="lab-service-header text-center">No-line Multifocal (Progressive) Lenses</h4>
            <p>No-line bifocal or progressive lenses offer all the benefits of a multifocal lens without the visibility of lines on the lens.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Plano Lenses</h4>
            <p>Almost all our frames can be purchased with plano lenses, giving you both fashion appeal and lens treatments that fit your lifestyle - even if you don't need vision correction.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Polycarbonate</h4>
            <p>Durable, scratch resistant and shatter resistant lenses are a standard choice for sports, children’s and safety glasses.</p>
            <hr/>
            <h4 className="lab-service-header text-center">CR-39 Plastic</h4>
            <p>Standard plastic lenses offer sharp optics for basic prescriptions at an opening price point.</p>
            <hr/>
            <h4 className="lab-service-header text-center">High-Index</h4>
            <p>Super lightweight and ultrathin, these lenses are a good option for higher prescriptions.</p>
          </Panel>
        </Col>
        <Col sm={12} lg={6}>
          <h3>Lens Treatments</h3>
          <Panel collapsible header="Click Here">
            <h4 className="lab-service-header text-center">Scratch Resistant Coating</h4>
            <p>Most eyeglass lenses today include a scratch resistant coating to help protect against damage. The hard coating or scratch coating is great for children and is standard on polycarbonate lenses.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Ultraviolet Treatment</h4>
            <p>The application of an ultraviolet treatment helps protect the eyes from the harmful rays of the sun. This treatment is simple and quick to apply to most plastic eyeglass lenses without affecting the appearance. Several lens materials such as polycarbonate, hi-index and trivex do not require an additional UV treatment due to the inherent property of the lens material.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Anti-Reflective Coating</h4>
            <p>The primary purpose of anti-reflective treatment, sometimes called "AR," is to eliminate glare and allow more light to pass through your prescription lenses. Reducing glare is beneficial for many reasons. Not only does AR eliminate reflection that others may see on the surface of your lens, but also greatly reduces the glare you see on computer screens, from lights on the road when you are driving at night, and from fluorescent lighting indoors.</p>
            <hr/>
            <h4 className="lab-service-header text-center">Mirror Coating</h4>
            <p>Highly reflective reflex mirror coatings prevent the eyes of the wearer from being seen by others and are a great way to add some flavor to a pair of prescription sunglasses.</p>
          </Panel>
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
