import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '../styles/Skills.module.css';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import jquery from '../assets/jqurey.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import photoshop from '../assets/photoshop.png';
import tailwind from '../assets/tailwing.png';


const Skills = () => {
  return (
    <Container fluid className={`${styles.Skills} ${styles.Container}`} id="skills">
      <h2 className={styles.Heading}>SKILLS</h2>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Image src={html} alt="Skill 1" className={styles.Image} />
          <p className={styles.Description}>HTML</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={css} alt="Skill 2" className={styles.Image} />
          <p className={styles.Description}>CSS</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={js} alt="Skill 3" className={styles.Image} />
          <p className={styles.Description}>JAVASCRIPT</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={jquery} alt="Skill 4" className={styles.Image} />
          <p className={styles.Description}>JQUERY</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={react} alt="Skill 5" className={styles.Image} />
          <p className={styles.Description}>REACTJS</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={bootstrap} alt="Skill 5" className={styles.Image} />
          <p className={styles.Description}>BOOTSTRAP</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={tailwind} alt="Skill 5" className={styles.Image} />
          <p className={styles.Description}>TAILWIND CSS</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Image src={photoshop} alt="Skill 5" className={styles.Image} />
          <p className={styles.Description}>PHOTOSHOP</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
