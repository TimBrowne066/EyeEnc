import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

const StoreCard = (props) => {
  return (
    <Col className="store-card">
      <Panel bsStyle="danger" header={props.store.name}>
        <br />
        <Button bsStyle="danger" href={"/locations/" + props.store.id}>Details</Button>
      </Panel>
    </Col>
  )
}

export default StoreCard;
