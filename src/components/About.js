import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/About.module.css";
import image from "../assets/hemen12.jpg";

const About = () => {
  return (
    <Container fluid className={styles.Container} id="about">
      <Row className={styles.Row}>
        <Col xs={12} md={4}>
          <Image src={image} alt="Avatar" className={styles.Avatar} />
        </Col>
        <Col xs={12} md={8} className={styles.TextContainer}>
          <h2 className={styles.Heading}>ABOUT ME</h2>
          <p className={styles.Paragraph}>
            I am a software developer with a passion for building creative and
            innovative applications. I have experience working with HTML5, CSS3,
            Javascript ES6, JQuery, Bootstrap and Tailwind CSS. I tend to favour
            working with ReactJS as my framework of choice, and I am always
            looking for new challenges and opportunities to expand my knowledge
            and skills.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
