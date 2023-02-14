import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className={styles.Header}>
      <Container fluid>
        <Navbar.Brand className={styles.Logo} href="#home">HHK</Navbar.Brand>
        <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.Nav}`}>
            <Nav.Link className={styles.Links} href="#home">HOME</Nav.Link>
            <Nav.Link className={styles.Links} href="#about">ABOUT</Nav.Link>
            <Nav.Link className={styles.Links} href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className={styles.Links} href="#contact">CONTACT</Nav.Link>
            <Nav.Link className={styles.Links} href="#skills">SKILLS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
