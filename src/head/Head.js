import React, { Component } from 'react';
import logohead from '../img/Logo-head.png';
import { Badge, Button, Container ,ButtonDropdown, DropdownToggle, DropdownMenu,ButtonGroup , Dropdown,
   DropdownItem, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Head.css';

import Notifications from '../Notifications/Notifications';
class Head extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      dropdownOpen: false
    };
  }
  toggle(tab) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form className="Form-head">
    <Container>
  <Row>
    <Col xs="2.5"><img src={logohead} className="App-logo" alt="logohead"/></Col>
    <Col>
    <div className="profile">
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret color="primary">
      Profile User
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>User Name</DropdownItem>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Sign Out</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
      </div>
    </Col>

  </Row>
  </Container>
        </form>
        </header>
      </div>
    );
  }
}

export default Head;
