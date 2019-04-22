import React, { Component } from 'react';
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
import './History.css';
class History extends Component {
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
          <td>Mark1</td>
          <td>@mdo1</td>
          <td>Computer</td>
          <td>Successful Repair</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
          </ButtonGroup>
        </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob1</td>
          <td>@fat1</td>
          <td>Computer</td>
          <td>Successful Repair</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
          </ButtonGroup>
        </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry1</td>
          <td>@twitter1</td>
          <td>Computer</td>
          <td>Successful Repair</td>
          <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Chat</Button>
          </ButtonGroup>
        </td>
        </tr>
        
        
      </tbody>
    </Table>
    );
  }
}

export default History;
