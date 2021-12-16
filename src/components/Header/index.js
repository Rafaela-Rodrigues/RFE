import {Navbar, Container, Nav, Offcanvas} from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./style.scss";

const Header = () => {
    return (
    <>
    <Navbar bg="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Recuperação</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navegue aqui!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Link className="text-link"to="/">Home</Link>
        <Link className="text-link"to="/carrinho">Carrinho</Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</>
    )

}

export default Header;

