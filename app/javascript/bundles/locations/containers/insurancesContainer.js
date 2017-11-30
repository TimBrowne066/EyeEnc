import React from 'react';
import { Carousel, img, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import davisvision from '../../../../assets/images/insurances/davisvision.jpg';
import eyemed from '../../../../assets/images/insurances/eyemed.jpeg';
import healthpartners from '../../../../assets/images/insurances/healthpartners.jpg';
import keystonefirst from '../../../../assets/images/insurances/keystonefirst.jpg';
import nva from '../../../../assets/images/insurances/nva.jpg';
import vba from '../../../../assets/images/insurances/vba.jpg';
import vsp from '../../../../assets/images/insurances/vsp.jpg';
import spectera from '../../../../assets/images/insurances/spectera.jpg';
import fop from '../../../../assets/images/insurances/fop.jpg';
import humana from '../../../../assets/images/insurances/humana.jpg';
import superior from '../../../../assets/images/insurances/superior.jpg';
import aetna from '../../../../assets/images/insurances/aetna.jpg';
import bcbs from '../../../../assets/images/insurances/bcbs.jpg';
import march from '../../../../assets/images/insurances/march.png';
import united from '../../../../assets/images/insurances/united.jpg';
import uhc from '../../../../assets/images/insurances/uhc.jpg';

class InsurancesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="insurance-grid">
        <Row>
          <Col xs={12} lg={12} md={12} className="text-center">
            <h1 className="body-header">Insurance</h1>
            <h3 className="store-body">We accept the following insurance plans:</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={8} lgOffset={2}>
            <a href="https://www.davisvision.com/Member/"><img className="insurance-card" src={davisvision}/></a>
            <a href="http://portal.eyemedvisioncare.com/wps/portal/em/eyemed/members/!ut/p/b1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOI9Lc2cLZwMHQ38Q51dDDz9gozNPAx8DA3cTYEKIoEKDHAARwNC-r30ozKTcvXKk3P1DPTMDA3NDY2NzI0MjIxNTA3M9cP1o1ANMDCwMAAa4OQe4O1hamDgawpVgMcBfh75uan6BbkRlcEB6YoAQjqK5g!!/dl4/d5/L2dBISEvZ0FBIS9nQSEh/"><img className="insurance-card" src={eyemed}/></a>
            <a href="https://www.healthpartnersplans.com/"><img className="insurance-card" src={healthpartners}/></a>
            <a href="https://www.keystonefirstpa.com/"><img className="insurance-card" src={keystonefirst}/></a>
            <a href="https://www.e-nva.com/nva/content/home/home.jsf"><img className="insurance-card" src={nva}/></a>
            <a href="https://online.visionbenefits.com/pages/gen/ZBlueLogon.aspx"><img className="insurance-card" src={vba}/></a>
            <a href="https://www.vsp.com/"><img className="insurance-card" src={vsp}/></a>
            <a href="https://www.spectera.com/PWP/Landing"><img className="insurance-card" src={spectera}/></a>
            <a href="https://www.superiorvision.com/"><img className="insurance-card" src={superior}/></a>
            <a href="https://www.humana.com/"><img className="insurance-card" src={humana}/></a>
            <a href="http://www.uhccommunityplan.com/"><img className="insurance-card" src={uhc}/></a>
            <a href="http://fop5.org/"><img className="insurance-card" src={fop}/></a>
            <a href="https://www.aetna.com/index.html"><img className="insurance-card" src={aetna}/></a>
            <a href="https://www.bcbs.com/"><img className="insurance-card" src={bcbs}/></a>
            <a href="https://www.marchvisioncare.com/"><img className="insurance-card" src={march}/></a>
            <a href="https://www.uhc.com"><img className="insurance-card" src={united}/></a>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default InsurancesContainer;
