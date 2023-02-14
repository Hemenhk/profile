import React from "react";
import { Container} from "react-bootstrap";
import styles from "../styles/Portfolio.module.css";
import img1 from "../assets/sh.png";
import img2 from "../assets/locations.png";
import img3 from "../assets/filmstar.png";

const Portfolio = () => {
  return (
    <Container fluid className={styles.Portfolio} id="portfolio">
      <h2 className={styles.Title}>PORTFOLIO</h2>
      <div className={styles.Projects}>
        <div className={styles.Project}>
          <a href="https://hemenhk.github.io/strength-house/index.html" target="_blank">
            <img src={img1} alt="Project 1" />
            <div className={styles.Overlay}>
              <p className={styles.Text}>STRENGTH HOUSE</p>
            </div>
          </a>
        </div>
        <div className={styles.Project}>
          <a href="https://locations-p5.herokuapp.com/" target="_blank">
            <img src={img2} alt="Project 2" />
            <div className={styles.Overlay}>
              <p className={styles.Text}>LOCATIONS</p>
            </div>
          </a>
        </div>
        <div className={styles.Project}>
          <a href="https://filmstar22.herokuapp.com/" target="_blank">
            <img src={img3} alt="Project 3" />
            <div className={styles.Overlay}>
              <p className={styles.Text}>FILMSTAR</p>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
