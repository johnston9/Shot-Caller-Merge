/* Info component on the Scene Component */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoScenePage = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <div className={`text-center px-3 pt-1 ${styles.SubTitle2} ${styles.Width2}`}>
            <h5 className={`text-center `}>INFO</h5>
            <p>
              Collaborate on the scene in the Scene Workspace.
              <br />
              Add and view Scene info in the Breakdown and Characters/BG
              sections.
              <br /> Add and view the Scene Script and Storyboard.
              <br />
              Create and view the Shotlist. <br />
              Add and view Moodshots to explore visual themes.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InfoScenePage;
