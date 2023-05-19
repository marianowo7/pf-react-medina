import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
// import Link from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";
import useCartContext from "../../store/CartContext.jsx";

function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction } = useCartContext();
  contextFunction();
  return (
    <header>
      <nav>
        <Navbar
          expanded={expanded}
          className="headlogbg"
          bg="light"
          expand="lg"
        >
          <Container>
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer onClick={() => setExpanded(false)} to="/inicio">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <LinkContainer
                    onClick={() => setExpanded(false)}
                    to="/category/MOUSE"
                  >
                    <NavDropdown.Item>MOUSE</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer
                    onClick={() => setExpanded(false)}
                    to="/category/KB"
                  >
                    <NavDropdown.Item>KB</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer
                    onClick={() => setExpanded(false)}
                    to="/category/AU"
                  >
                    <NavDropdown.Item>AU</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                </NavDropdown>
                <LinkContainer
                  onClick={() => setExpanded(false)}
                  to="/contacto"
                >
                  <Nav.Link href="/contacto">Contacto</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
      </nav>
    </header>
  );
}

export default NavBar;
