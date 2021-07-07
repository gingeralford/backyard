import React, { useState } from 'react';
import { Button , Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

const Sitebar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
        <style type="text/css">
        {`


        `}

        </style>
 

      <Navbar variant="main" bg="light" expand="lg" >
        <Navbar.Brand className="navstyle" href="#home">backyard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="main" className="navstyle mr-auto">
            <Nav.Link className="navstyle" variant="main" href="#home">messages</Nav.Link>
            <Nav.Link className="navstyle" href="#link">your produce</Nav.Link>
            <Nav.Link className="navstyle" href="#link">profile</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="flat">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Sitebar;