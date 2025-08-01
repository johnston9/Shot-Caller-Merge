/* Topbox component used on the top of all pages to 
   display that page's title and other information */
import React, { useEffect, useState } from "react";
import door from "../assets/door.png";
import styles from "../styles/TopBox.module.css";
import { Col, Row, Image } from "react-bootstrap";

function TopBoxSign(props) {
  const { title, scene, title2, title3, title4, work, slug } = props;
  const [proj, setProj] = useState("");

  function toTitleCase(str) {
    return str
      .toLowerCase() // Convert entire string to lowercase
      .split(" ") // Split by spaces
      .map((word) => {
        // Capitalize the first letter of each word
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // Join the words back together with spaces
  }

  useEffect(() => {
    setProj(slug);
  }, [slug]);
  return (
    <div className={styles.RegBoxSign}>
      <Row className={styles.Row}>
        <Col
          xs={{ span: 1, offset: 1 }}
          lg={{ span: 1, offset: 3 }}
          md={{ span: 1, offset: 2 }}
          className={`text-center ${styles.Longboxl}`}
        >
          <p>S</p>
          <p>H</p>
          <p>O</p>
          <p>T</p>
        </Col>

        <Col className="pb-1" xs={8} md={6} lg={4}>
          <div className={`${styles.Titlebox}`}>
            <Row>
              <Col xs={1}>
                <Image
                  className={styles.SmallPanel}
                  src={door}
                  alt="door"
                  height="120"
                />
              </Col>
              <Col
                xs={10}
                className={`d-flex align-items-center justify-content-center ${styles.Alignme}`}
              >
                <div>
                  {work && (
                    <h2 className={` text-center ${styles.Title}`}>{work} </h2>
                  )}
                  <h1 className={` text-center ${styles.Title2}`}>
                    {toTitleCase(proj)}{" "}
                  </h1>
                  {title && (
                    <h2 className={` text-center ${styles.Title2}`}>
                      {title}{" "}
                    </h2>
                  )}
                  {title4 && (
                    <h2 className={` text-center ${styles.Title2}`}>
                      {title4}{" "}
                    </h2>
                  )}
                  {scene && (
                    <h2 className={` text-center ${styles.Title2}`}>
                      Scene {scene}{" "}
                    </h2>
                  )}
                  <h5
                    style={{ textTransform: "capitalize" }}
                    className={`text-center ${styles.Title3}`}
                  >
                    {title2} {title3}
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xs={{ span: 1, offset: 0 }}
          lg={{ span: 1, offset: 1 }}
          md={{ span: 1, offset: 0 }}
          className={`text-center px-0 mx-0 ${styles.Longboxr}`}
        >
          <p>C</p>
          <p>A</p>
          <p>L</p>
          <p>L</p>
          <p>E</p>
          <p>R</p>
        </Col>
        {/* <Col xs={2}
            className={`text-center mt-5 ${styles.Longboxr}`}
        >    
        <p className="mt-4">C A L L E R</p>
        </Col> */}
      </Row>
    </div>
  );
}

export default TopBoxSign;
