import React, { Component } from 'react';
import './Notifications.css';
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
  Jumbotron,
  Toast,
  ToastHeader,
  ToastBody,ButtonGroup
} from "reactstrap";
import './Notifications.css';
class Notifications extends Component {
  render() {
    return (    
      <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Need to repair</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>@mdo</td>
          <td>Computer</td>
          <td>Not repaired</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
            <Button size="sm" color="danger" >Repair</Button>
          </ButtonGroup>
        </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>@fat</td>
          <td>Computer</td>
          <td>Not repaired</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
            <Button size="sm" color="danger" >Repair</Button>
          </ButtonGroup>
        </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>@twitter</td>
          <td>Computer</td>
          <td>Not repaired</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
            <Button size="sm" color="danger" >Repair</Button>
          </ButtonGroup>
        </td>
        </tr>
        
        
      </tbody>
    </Table>
    );
  }
}

export default Notifications;
