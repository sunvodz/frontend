import React, { Component } from "react";
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Jumbotron
} from "reactstrap";
import './Home.css';
import Notifications from "../Notifications/Notifications";
import History from "../History/History";
import Head from "../head/Head";
import Messenger from "../Chat/Messenger";
import classnames from 'classnames';
class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="bgbody">
        <Head />
        <Container className="border_a">
        <div className="tab">
         <Nav tabs style={{backgroundColor: '#f1f1f1'}} >
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
          Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
          History
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
          Repair
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
          >
          Chat
          </NavLink>
        </NavItem>
      </Nav>
        
      </div>
          <Jumbotron>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                <Notifications/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                <History/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                 <History/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <Messenger/>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Home;
