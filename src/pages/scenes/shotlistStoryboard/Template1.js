import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import portrait6 from "../../../assets/storyboards/portrait6.pdf";

const Template1 = ({ setOpen }) => {
  return (
    <div>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h5 className={`py-0 ${styles.SubTitle}`}>
            6 PANEL PORTRAIT
            <span
              className={`float-right ${styles.Close} pt-1`}
              onClick={() => setOpen(false)}
            >
              Close
            </span>
          </h5>
        </Col>
      </Row>
      <div className={`${styles.Frame}`}>
        <iframe
          title="Storyboard Template 1"
          src={portrait6}
          className={appStyles.iframeFull}
          alt="Storyboard Template 1"
        />
      </div>
    </div>
  );
};

export default Template1;
