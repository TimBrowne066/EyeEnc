import React from 'react';
import StoreCard from '../components/storeCard';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import store1 from '../../../../assets/images/stores/1.png';
import store2 from '../../../../assets/images/stores/2.png';
import store3 from '../../../../assets/images/stores/3.png';
import store4 from '../../../../assets/images/stores/4.png';
import store5 from '../../../../assets/images/stores/5.png';
import store6 from '../../../../assets/images/stores/6.png';

class StoresContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
  }

  render() {
    let photo;
    let locations = this.props.locations.map(location => {
      if(location.id === 1){
        photo = store1
      } else if (location.id === 2) {
        photo = store2
      } else if (location.id === 3) {
        photo = store3
      } else if (location.id === 4) {
        photo = store4
      } else if (location.id === 5) {
        photo = store5
      } else if (location.id === 6) {
        photo = store6
      }
      return(
        <Col xs={12} md={6} lg={4} className="card-column text-center">
          <StoreCard
            key={location.id}
            id={location.id}
            store={location}
            image={photo}
          />
        </Col>
      )
    })
    return (
      <Row className="stores-grid">
      {locations}
      </Row>
    );
  }
}

export default StoresContainer;
