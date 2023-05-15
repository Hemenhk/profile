import React from "react";
import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import styles from "../styles/Portfolio.module.css";
import img1 from "../assets/sh.png";
import img2 from "../assets/BnB.png";

const Portfolio = () => {
  return (
    <Container fluid className={styles.Portfolio} id="portfolio">
      <h2 className={styles.Heading}>PORTFOLIO</h2>
      <div className={styles.Projects}>
        <div className={styles.Project}>
          <img src={img1} alt="Project 1" />
          <div className={styles.Overlay}>
            <div className={styles.Text}>
              <p>
                {" "}
                <a
                  href="https://hemenhk.github.io/strength-house/index.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  Strength House
                </a>
              </p>
              <a
                href="https://github.com/Hemenhk/strength-house"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className={styles.github} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.Project}>
          <img src={img2} alt="Project 2" />
          <div className={styles.Overlay}>
            <div className={styles.Text}>
              <p>
                {" "}
                <a
                  href="https://hemenhk.github.io/bnb/"
                  rel="noreferrer"
                  target="_blank"
                >
                  BnB
                </a>
              </p>

              <a
                href="https://github.com/Hemenhk/bnb"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className={styles.github} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
