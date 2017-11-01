import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import store1 from '../../../../assets/images/stores/1.png';
import store2 from '../../../../assets/images/stores/2.png';
import store3 from '../../../../assets/images/stores/3.png';
import store4 from '../../../../assets/images/stores/4.png';
import store5 from '../../../../assets/images/stores/5.png';
import store6 from '../../../../assets/images/stores/6.png';

class StoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    }
  }
  componentDidMount(){
    let imgLink;
    if (this.props.store.id == 1){
      imgLink = <Image src={store1}/>
    }
  }
  render() {

    return (
      <Col className="card-column store-card">
        <Panel className="store-panel">
          <a href={"/locations/" + this.props.store.id}><Image src={this.props.image} className="store-image"/></a>
          <h3 className="store-cap">{this.props.store.name}</h3>
        </Panel>
      </Col>
    );
  }
}

export default StoreCard;
