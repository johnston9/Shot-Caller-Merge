/* Form component to add extra crew members by department 
   These won't be on the Callsheet*/
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import ExtraCrewMember from "./ExtraCrewMember";
import Alert from "react-bootstrap/Alert";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import toast from "react-hot-toast";

const ExtraCrewInfo = (props) => {
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const [crew, setCrew] = useState({ results: [] });
  const { setShow, dept } = props;
  const currentUser = useCurrentUser();
  const admin = currentUser?.username === "admin";
  // const admin = true;

  const [postData, setPostData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
  });

  const { name, position, email, phone } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const clear = () => {
    /* Function to clear Character values */
    setPostData({
      name: "",
      position: "",
      email: "",
      phone: "",
    });
  };

  /* function to fetch the extra crew */
  const handleMount = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `/extracrewinfo/?departments=${dept}`
        );
        setCrew(data);
        console.log(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/extracrewinfo/?departments=${dept}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setCrew(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
    // eslint-disable-next-line
  }, [dept]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error(`Enter a valid email address`, {
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("departments", dept);
    formData.append("email", email);
    formData.append("phone", phone);

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/extracrewinfo/", formData);
        console.log(data);
        setPostData({
          name: "",
          position: "",
          departments: "",
          email: "",
          phone: "",
        });
        setCrew((prevCrew) => ({
          ...prevCrew,
          results: [data, ...prevCrew.results],
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/extracrewinfo/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        console.log(data);
        setPostData({
          name: "",
          position: "",
          departments: "",
          email: "",
          phone: "",
        });
        setCrew((prevCrew) => ({
          ...prevCrew,
          results: [data, ...prevCrew.results],
        }));
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const buttons = (
    <div className="mb-5 pb-3 text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
        onClick={clear}
      >
        Cancel
      </Button>
      <Button
        className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Add Cast
      </Button>
    </div>
  );

  return (
    <div className={`my-5 `}>
      <h4
        className={`mt-3 pl-5 py-0 text-center ${styles.SubTitle}`}
        style={{ textTransform: "uppercase" }}
      >
        EXTRA {dept} POSITIONS{" "}
        <span
          className={`pt-1 float-right ${styles.Close}`}
          onClick={() => setShow(false)}
        >
          Close
        </span>{" "}
      </h4>
      <h5 className={`text-center px-3 py-3 ${styles.Red}`}>
        Important: These Crew Members will not be on the Callsheet
      </h5>
      {/* Form */}
      <div className={`mb-3 ${styles.Back3} mx-3`}>
        <p className={`my-3 text-center ${styles.SubTitle}`}>
          ADD NEW POSITION
        </p>
        <Form className="text-center" onSubmit={handleSubmit}>
          {/* position  */}
          <Row className="mx-0 my-3">
            <Col
              className="d-flex justify-content-center mx-0 px-1"
              xs={6}
              md={3}
            >
              <Form.Group controlId="position" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Position</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="position"
                  value={position}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.position?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col
              className="d-flex justify-content-center mx-0 px-1"
              xs={6}
              md={3}
            >
              <Form.Group controlId="name" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Name</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col
              className="d-flex justify-content-center mx-0 px-1"
              xs={6}
              md={3}
            >
              <Form.Group controlId="email" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Email</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col
              className=" d-flex justify-content-center mx-0 px-1"
              xs={6}
              md={3}
            >
              <Form.Group controlId="phone" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Phone</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.phone?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          {buttons}
        </Form>
      </div>
      {/* crew */}
      <div className="text-center">
        <span className={`my-3 text-center py-1 px-5 ${styles.SubTitle}`}>
          POSITIONS
        </span>
      </div>
      <Row className="py-2">
        <Col xs={12}>
          {crew.results.length
            ? crew.results.map((crewone) => (
                <ExtraCrewMember
                  key={crewone.id}
                  {...crewone}
                  handleMount={handleMount}
                  crewone={crewone}
                  admin={admin}
                />
              ))
            : ""}
        </Col>
      </Row>
    </div>
  );
};

export default ExtraCrewInfo;
