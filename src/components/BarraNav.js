import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const BarraNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Lista" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Monitores</NavDropdown.Item>
          <NavDropdown.Item href="/Monitorias">Monitorias</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default BarraNav