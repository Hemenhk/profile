import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import image from "../assets/profile-image.png";

const Home = () => {
  const downloadPDF = () => {
    fetch("cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv.pdf";
        alink.click();
      });
    });
  };
  return (
    <Container fluid className={styles.Contain} id="home">
      <Row xs={12} className={styles.leftside}>
        <Col>
          <h1 className={styles.slideInLeft}>HEMEN</h1>
          <h1 className={styles.slideInLeft}>HIWA KAMAL</h1>
          <p className={`${styles.paragraph} ${styles.slideInLeft}`}>FRONT END DEVELOPER</p>
        </Col>
        <div className={styles.slideInBelow}>
          <button onClick={downloadPDF} className={styles.button}>
            DOWNLOAD CV
          </button>
          <a href="#contact">
            <button className={`${styles.button} ${styles.button2}`}>
              CONTACT ME
            </button>
          </a>
        </div>
      </Row>
      <Row className={`${styles.rightside} ${styles.slideInRight}`}>
        <img src={image} alt="profileimage" />
      </Row>
    </Container>
  );
};

export default Home;
