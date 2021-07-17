import React, { useState } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Sitebar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    console.log('collapse')
    setCollapsed(!collapsed)};

  return (
    <div>
        <style type="text/css">
        {`


        `}

        </style>
 

      <Navbar collapseOnSelect bg="light" expand="xl" style={{zIndex: 5}}>
        <Link to="/" style={{textDecoration: "none"}}> 
          <Navbar.Brand className="navstyle" href="#home">backyard</Navbar.Brand> 
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bg="lite"/>

        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav variant="main" className="navstyle mr-auto" >
            <Link to="/messages" style={{textDecoration: "none"}}> 
              <Nav.Link className="navstyle" variant="main" href="/messages">messages</Nav.Link>
            </Link>
            <Link to="/feed" style={{textDecoration: "none"}}>
              <Nav.Link className="navstyle" href="#link">feed</Nav.Link>
            </Link>

            {/* <Nav.Link className="navstyle" href="#link" onClick={toggleNavbar} >your produce</Nav.Link> */}
            
            <Link to="/profile" style={{textDecoration: "none"}}>
              <Nav.Link className="navstyle" href="#link">profile</Nav.Link>
            </Link>
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="flat">Search</Button>
            </Form> */}
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Sitebar;