import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import pic from '../logos.png';
import { Button,Navbar,Nav,NavDropdown } from 'react-bootstrap';

const NavigBar = () => {
  return(
    <div>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={pic}
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          </Nav>

          <Link to="/signIn" > 
          <Button variant="outline-success">Sign In</Button>
          </Link>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
export default NavigBar;
