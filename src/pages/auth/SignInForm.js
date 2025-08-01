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

const SignInForm = () => {
  const { projectSlug } = useParams();

  const setCurrentUser = useSetCurrentUser();
  const crewInfoOne = useCrewInfoContext();
  const production_name = crewInfoOne?.production_name || "";

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (projectSlug) {
      localStorage.setItem("projectSlug", projectSlug);
    }
  }, [projectSlug]);

  const csrfToken = getCookie("csrftoken") ? getCookie("csrftoken") : null;

  // Create headers object with or without the Authorization header
  const csrfHeader = {};
  if (csrfToken) {
    csrfHeader["X-CSRFToken"] = csrfToken;
  }

  const fetchUserRole = async (userId, token) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}${localStorage.getItem(
          "projectSlug"
        )}/users/${userId}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...csrfHeader,
          },
          withCredentials: true,
        }
      );

      return data?.groups;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    /* Function to sign the user in
     * Set the CurrentUser Context
     * Set the TokenTimestamp */

    event.preventDefault();
    try {
      const { data } = await axiosInstanceNoAuth.post(
        `login/?project_name=${localStorage.getItem("projectSlug")}`,
        signInData
      );

      const loggedInUserGroups = await fetchUserRole(
        data?.user?.pk,
        data?.access_token
      );

      // history.push(`/${localStorage.getItem("projectSlug")}/home`);

      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data.user,
          groups: loggedInUserGroups,
          project_category_type: data?.project_category_type,
          project_id: data?.project_id,
          project_name: data?.project_name,
        })
      );
      setCurrentUser({
        ...data.user,
        groups: loggedInUserGroups,
        project_category_type: data?.project_category_type,
        project_id: data?.project_id,
        project_name: data?.project_name,
      });
      setTokenTimestamp(data);
      window.location.href = `/${localStorage.getItem("projectSlug")}/home`;
    } catch (err) {
      setErrors(err.response?.data);
      const errorMessage =
        err?.response?.data?.non_field_errors?.[0] ||
        "Login failed. Please try again.";

      // Show the toast with the extracted message
      toast.error(errorMessage, {
        position: "top-right",
      });
    }
  };

  return (
    <Container className={styles.SignupBox}>
      {production_name ? (
        <TopBoxSign
          work={production_name}
          title={"Sign In"}
          slug={projectSlug}
        />
      ) : (
        <TopBoxSign work={`SHOT CALLER`} title={"Sign In"} slug={projectSlug} />
      )}
      <Row className={styles.Row}>
        <Col className="my-3 pr-0 pl-3 pl-md-4" xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={door} />
        </Col>
        <Col className="my-auto py-2 p-md-2" xs={10}>
          <Row>
            <Col md={3} className="d-none d-md-block"></Col>
            <Col xs={12} md={6} className="text-center">
              <p className={`${styles.Inner} mb-3`}>
                GUEST
                <br />
                Username - gaffer
                <br />
                Password - silver77
              </p>
              <Container>
                <h1 className={`${styles.Header}`}>Sign in</h1>
                <Form onSubmit={handleSubmit} className={styles.Form}>
                  <Form.Group controlId="username" className="mb-2">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.username?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}

                  <Form.Group controlId="password" className="mb-2">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <div className="text-center">
                    <Button
                      className={`px-0 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </div>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                  ))}
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
                      to={`/${projectSlug}/forget-password`}
                    >
                      Forgot Password ?
                    </Link>
                  </div>
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

export default SignInForm;
