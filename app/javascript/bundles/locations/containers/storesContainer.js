import React from 'react';
import StoreCard from '../components/storeCard';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class StoresContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
  }

  render() {
    let locations = this.props.locations.map(location => {
      return(
        <Col xs={12} md={6} lg={4} className="text-center">
          <StoreCard
            key={location.id}
            id={location.id}
            store={location}
          />
        </Col>
      )
    })
    return (
      <Row>
      {locations}
      </Row>
    );
  }
}

export default StoresContainer;
