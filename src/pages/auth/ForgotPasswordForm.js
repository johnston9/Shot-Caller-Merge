/* Page to sign the user in
 * Set the CurrentUser Context
 * Set the TokenTimestamp */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBoxSign from "../../components/TopBoxSign";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirectSign } from "../../hooks/RedirectSign";
import { setTokenTimestamp } from "../../utils/utils";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import { axiosInstanceNoAuth, getCookie } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgotPasswordForm = () => {
  const { projectSlug } = useParams();

  const setCurrentUser = useSetCurrentUser();
  const crewInfoOne = useCrewInfoContext();
  const production_name = crewInfoOne?.production_name || "";

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const history = useHistory();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (projectSlug) {
      localStorage.setItem("projectSlug", projectSlug);
    }
  }, [projectSlug]);

  const handleSubmit = async (event) => {
    /* Function to sign the user in
     * Set the CurrentUser Context
     * Set the TokenTimestamp */

    event.preventDefault();
    try {
      const { data } = await axiosInstanceNoAuth.post(
        `${projectSlug}/internal-user-forgot-password/`,
        {
          email,
        }
      );

      console.log(data);
      setSuccessMsg(data?.message);
      setFormData((prev) => ({ ...prev, email: "" }));

      // history.push(`/${localStorage.getItem("projectSlug")}/home`);
    } catch (err) {
      setErrors(err.response?.data);
      toast.error("You are not associated with this project!");
    }
  };

  return (
    <Container className={styles.SignupBox}>
      {production_name ? (
        <TopBoxSign
          work={production_name}
          title={"Forgot Password"}
          slug={projectSlug}
        />
      ) : (
        <TopBoxSign
          work={`SHOT CALLER`}
          title={"Forgot Password"}
          slug={projectSlug}
        />
      )}
      <Row className={styles.Row}>
        <Col className="my-3 pr-0 pl-3 pl-md-4" xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={door} />
        </Col>
        <Col className="my-auto py-2 p-md-2" xs={10}>
          <Row>
            <Col md={3} className="d-none d-md-block"></Col>
            <Col xs={12} md={6} className="text-center">
              <Container>
                <h1 className={`${styles.Header}`}>Forgot Password</h1>
                <Form onSubmit={handleSubmit} className={styles.Form}>
                  <Form.Group controlId="username" className="mb-2">
                    <Form.Label className="d-none">Email</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.email?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}

                  <div className="text-center">
                    <Button
                      className={`px-0 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div></div>
                    <Link
                      style={{ color: "#fff" }}
                      to={`/${projectSlug}/signin`}
                    >
                      Sign in
                    </Link>
                  </div>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                  ))}
                  {successMsg && (
                    <Alert variant="success" className="mt-3">
                      {successMsg}
                    </Alert>
                  )}
                </Form>
              </Container>
              {/* <Container className="mt-3">
                <Link className={styles.Link} to="/signup">
                  Register <span>Here</span>
                </Link>
              </Container> */}
            </Col>
          </Row>
        </Col>
        <Col className={`my-3 pl-0 pr-3 pr-md-4`} xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={rightdoor} />
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordForm;
