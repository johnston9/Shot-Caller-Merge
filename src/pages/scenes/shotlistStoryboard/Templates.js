/* Templates Component  */
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../../styles/Scene.module.css";
import Button from "react-bootstrap/Button";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import portrait6 from "../../../assets//storyboards/portrait6.pdf";
import portrait8 from "../../../assets/storyboards/portrait8.pdf";
import landscape6 from "../../../assets/storyboards/landscape6.pdf";
import landscape12 from "../../../assets/storyboards/landscape12.pdf";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";

const Templates = ({ setTemplates }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="mb-5 mt-4">
      <Row>
        <Col xs={12} className="text-center">
          <h5 className={` py-0 pl-5 ${styles.SubTitle}`}>
            TEMPLATES
            <span
              className={`float-right ${styles.Close} pt-1`}
              onClick={() => setTemplates(false)}
            >
              Close
            </span>
          </h5>
        </Col>
      </Row>
      <div className={` ${styles.Back} pt-4 pb-5`}>
        <Row>
          {/* PORTRAIT */}
          <Col xs={12} md={6}>
            <Row>
              <Col xs={6} className="text-center">
                <p className={`${styles.BoldSceneI} pb-1`}>6 PANEL PORTRAIT</p>
                <figure>
                  <iframe
                    title="portrait 6"
                    alt="portrait 6"
                    className={appStyles.iframe}
                    src={portrait6}
                  />
                </figure>
              </Col>
              <Col xs={6} className="text-center">
                <p className={`${styles.BoldSceneI} pb-1`}>8 PANEL PORTRAIT</p>
                <figure>
                  <iframe
                    title="portrait 8"
                    alt="portrait 8"
                    className={appStyles.iframe}
                    src={portrait8}
                  />
                </figure>
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="text-center">
                <Button
                  className={`py-0 mt-1 ${btnStyles.Grey} ${btnStyles.Button}`}
                  onClick={() => setOpen((open) => !open)}
                >
                  OPEN
                </Button>
              </Col>
              <Col xs={6} className="text-center">
                <Button
                  className={` py-0 mt-1 ${btnStyles.Grey} ${btnStyles.Button}`}
                  onClick={() => setOpen2((open2) => !open2)}
                >
                  OPEN
                </Button>
              </Col>
            </Row>
          </Col>
          {/* LANDSCAPE */}
          <Col xs={12} md={6}>
            <Row>
              <Col xs={6} className="text-center mt-3 mt-md-0">
                <p className={`${styles.BoldSceneI} pb-1`}>6 PANEL LANDSCAPE</p>
                <figure>
                  <iframe
                    title="landscape 6"
                    alt="landscape 6"
                    className={appStyles.iframe}
                    src={landscape6}
                  />
                </figure>
              </Col>
              <Col xs={6} className="text-center mt-3 mt-md-0">
                <p className={`${styles.BoldSceneI} pb-1`}>
                  12 PANEL LANDSCAPE
                </p>
                <figure>
                  <iframe
                    title="landscape 12"
                    alt="landscape 12"
                    className={appStyles.iframe}
                    src={landscape12}
                  />
                </figure>
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="text-center">
                <Button
                  className={`py-0 mt-1 ${btnStyles.Grey} ${btnStyles.Button}`}
                  onClick={() => setOpen3((open3) => !open3)}
                >
                  OPEN
                </Button>
              </Col>
              <Col xs={6} className="text-center">
                <Button
                  className={` py-0 mt-1 ${btnStyles.Grey} ${btnStyles.Button}`}
                  onClick={() => setOpen4((open4) => !open4)}
                >
                  OPEN
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {!open ? "" : <Template1 setOpen={setOpen} />}
      {!open2 ? "" : <Template2 setOpen2={setOpen2} />}
      {!open3 ? "" : <Template3 setOpen3={setOpen3} />}
      {!open4 ? "" : <Template4 setOpen4={setOpen4} />}
      <Row className="mt-5">
        <Col md={2}></Col>
        <Col md={8}>
          <hr className={`${styles.Break}`} />
        </Col>
      </Row>
    </div>
  );
};

export default Templates;
