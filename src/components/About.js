import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/About.module.css";
import infoImage from "../assets/info.png";
import educationImage from "../assets/education.png";

const About = () => {
  return (
    <Container fluid className={styles.container} id="about">
      <Col>
        <Row className={styles.row}>
          <Col xs={12} md={8} className={styles.textContainer}>
            <h2 className={styles.heading}>ABOUT ME</h2>
            <p className={styles.paragraph}>
              I am a software developer with a passion for building creative and
              innovative applications. I have experience working with HTML5,
              CSS3, Javascript ES6, JQuery, Bootstrap and Tailwind CSS. I tend
              to favour working with ReactJS as my framework of choice, and I am
              always looking for new challenges and opportunities to expand my
              knowledge and skills.
            </p>
          </Col>
        </Row>
        <Row className={styles.imageContainer}>
          <img src={infoImage} alt="info" className={styles.image1} />
          <img src={educationImage} alt="education" className={styles.image2} />
        </Row>
      </Col>
    </Container>
  );
};

export default About;
