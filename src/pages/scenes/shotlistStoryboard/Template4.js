import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import landscape12 from "../../../assets/storyboards/landscape12.pdf";

const Template4 = ({ setOpen4 }) => {
  return (
    <div>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h5 className={` ${styles.SubTitle}`}>
            12 PANEL LANDSCAPE
            <span
              className={`float-right ${styles.Close} pt-1`}
              onClick={() => setOpen4(false)}
            >
              Close
            </span>
          </h5>
        </Col>
      </Row>
      <div className={`${styles.Frame}`}>
        <iframe
          title="Storyboard Template 4"
          src={landscape12}
          className={appStyles.iframeFull}
          alt="Storyboard Template 4"
        />
      </div>
    </div>
  );
};

export default Template4;
