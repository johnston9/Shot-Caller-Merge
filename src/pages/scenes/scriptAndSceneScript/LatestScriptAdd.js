/* Form to upload the First Script to Media */
import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Asset from "../../../components/Asset";
import Upload from "../../../assets/upload.png";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";

import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";

const LatestScriptAdd = ({ setAddScript }) => {
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [postData, setPostData] = useState({
    script: "",
    draft: "",
    latest_changes: "",
    notes: "",
  });
  const { draft, script, latest_changes, notes } = postData;
  const scriptInput = useRef(null);
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const history = useHistory();

  // eslint-disable-next-line
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeScript = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(script);
      setPostData({
        ...postData,
        script: URL.createObjectURL(event.target.files[0]),
      });
      setFileName(event.target.files[0].name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("draft", draft);
    formData.append("latest_changes", latest_changes);
    formData.append("notes", notes);
    if(epi) {
      formData.append("episode", epi);
    }
    if (scriptInput.current.files[0]) {
      formData.append("script", scriptInput.current.files[0]);
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const data = await axiosReq.post(`/script/`, formData);
        history.push(`/${localStorage.getItem("projectSlug")}/scenes`);
      } else {
        const data = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/script/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.push(`/${localStorage.getItem("projectSlug")}/scenes`);
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => setAddScript(false)}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div>
      <h5
        style={{ textTransform: "uppercase" }}
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle} text-center`}
      >
        Add Script
      </h5>
      <Form onSubmit={handleSubmit}>
        {/* draft */}
        <Row>
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            md={{ span: 6, offset: 3 }}
          >
            <Form.Group controlId="draft" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Draft Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="draft"
                value={draft}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.draft?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* script */}
        <Row>
          <Col className="py-2 p-0 p-md-2" md={{ span: 6, offset: 3 }}>
            {/* script */}
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                {script ? (
                  <>
                    <figure>
                      <iframe
                        title="Script"
                        className={appStyles.iframe}
                        src={script}
                      />
                    </figure>
                    {fileName && <p>{fileName} </p>}
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="script-upload"
                      >
                        Change the Script
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="script-upload"
                  >
                    <Asset
                      src={Upload}
                      height={50}
                      width={50}
                      message="Upload Script"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="script-upload"
                  onChange={handleChangeScript}
                  ref={scriptInput}
                />
              </Form.Group>
              {errors?.script?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Container>
          </Col>
        </Row>
        {/* changes notes */}
        <Row>
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
            <Form.Group
              controlId="latest_changes"
              className={`${styles.Width2} `}
            >
              <Form.Label className={`${styles.Bold}`}>
                Latest Changes
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                name="latest_changes"
                as="textarea"
                rows={2}
                value={latest_changes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.latest_changes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
            <Form.Group controlId="notes" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Notes</Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                name="notes"
                as="textarea"
                rows={2}
                value={notes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.notes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Container className={`mt-3 ${styles.Container}`}>
              {buttons}
            </Container>
          </Col>
        </Row>
      </Form>
      <p className={`my-3 mb-1 pl-3 py-2 ${styles.SubTitle} text-center`}></p>
    </div>
  );
};

export default LatestScriptAdd;
