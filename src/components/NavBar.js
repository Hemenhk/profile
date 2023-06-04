import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className={`sticky-top ${styles.header} ${styles.slideInAbove}`}>
      <Container fluid className={styles.navbar}>
        <Navbar.Brand className={styles.logo} href="#home">
          HHK
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.toggle}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.nav}`}>
            <Nav.Link className={styles.links} href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className={styles.links} href="#about">
              ABOUT
            </Nav.Link>
            <Nav.Link className={styles.links} href="#portfolio">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className={styles.links} href="#skills">
              SKILLS
            </Nav.Link>
            <Nav.Link className={styles.links} href="#contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
