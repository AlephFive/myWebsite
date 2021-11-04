import React from 'react';
import { Nav, Navbar, Button, Badge, NavDropdown, Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top" className="justify-content-center" style={{'box-shadow': '1px 1px 5px grey'}}>
        <span style={{ width: '12.5%' }} />
        <Navbar.Brand href="#home">
          <strong>Brian Shao-en Ma</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">CV</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="https://nothatbrian.myportfolio.com/">Portfolio</Nav.Link>
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#contact">
              <Button variant="primary">Contact Me!</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span style={{ width: '12.5%' }} />
      </Navbar>
    );
  }
}
//<Nav.Link href="/blog">Blog</Nav.Link>

export default Header;
