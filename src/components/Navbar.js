import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/dashboard">Shopping Mate</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/dashboard">Home</Nav.Link>
          <Nav.Link href="#/shopping-lists">Your Lists</Nav.Link>
          <Nav.Link href="#/shared-lists">Shared Lists</Nav.Link>
          <Nav.Link href="#/expenses">Your Expenses</Nav.Link>
          <Nav.Link href="#/shared-expenses">Shared Expenses</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="#/signout">Sign Out</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
