import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={styles.Container}>
    <Container fluid>
      <Row className={styles.Row}>
        <Col xs="auto" className="text-center">
          <a href="https://linkedin.com" target="_blank">
            <FontAwesomeIcon className={styles.Image} icon={faLinkedin} />
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a href="https://github.com" target="_blank">
            <FontAwesomeIcon className={styles.Image} icon={faGithub} />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
