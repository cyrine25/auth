import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GuestNav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
        </Nav>
        <Form inline>
          <Link to='/login'><Button variant="outline-info">Login</Button></Link>
          <Link to='/register' ><Button variant="outline-info">Signup</Button></Link>
        </Form>
      </Navbar>
    </div>
  );
};

export default GuestNav;
