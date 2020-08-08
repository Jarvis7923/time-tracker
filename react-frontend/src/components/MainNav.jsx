import React from "react";

import { Nav, Navbar, Button } from "react-bootstrap";

export default function MainNav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>Time Tracker</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/about'>About</Nav.Link>
        <Nav.Link href='/contact'>Contact</Nav.Link>
      </Nav>
      <Button variant='outline-info'>SING UP</Button>
      <Button variant='outline-info'>LOG IN</Button>
    </Navbar>
  );
}
