/* Form Page to edit a Day */
import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";

import "react-datepicker/dist/react-datepicker.css";
import styles from "../../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../../styles/Button.module.css";

const DayEdit = () => {
  const host = useHostName();
  useRedirect();
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState("");
  const [postData, setPostData] = useState({
    day: "",
  });
  const { day } = postData;

  const history = useHistory();
  const { id } = useParams();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const epi = params.get("episodeid");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  useEffect(() => {
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/days/${id}/`);
          const { day, date } = data;

          setPostData({ day });
          setStartDate(date);
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/days/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const { day, date } = data;

          setPostData({ day });
          setStartDate(date);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const handleDate = (date) => {
    const newdate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setStartDate(newdate);
  };

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("day", day);
    formData.append("date", startDate);
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.put(`/days/${id}/`, formData);
        history.goBack();
      } else {
        await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/days/${id}/`,
          {
            day: day,
            date: startDate,
            episode: epi,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.goBack();
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
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Edit
      </Button>
    </div>
  );

  return (
    <div>
      <TopBox title="Edit Day" episodeTitle={`Episode ${episodeTitle}`} />
      <Button
        onClick={() => history.goBack()}
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      >
        Back
      </Button>
      <Form
        className={`${styles.Back} mt-4 mb-3 text-center`}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mt-3">Edit Day</h3>
        <p className={` mb-0 py-1 ${styles.SubTitle}`}></p>
        <Row>
          <Col xs={6} className="p-0 p-md-2 d-flex justify-content-center ">
            <Form.Group controlId="day" className={`${styles.Width} `}>
              <Form.Label className={`${styles.Bold}`}>Day</Form.Label>
              <Form.Control
                type="text"
                name="day"
                value={day}
                className={`${styles.Input}`}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.day?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="p-0 p-md-2" xs={6}>
            <Form.Group controlId="date">
              <Form.Label className={`${styles.Bold}`}>Date</Form.Label>
              <DatePicker
                className={`${styles.Input}`}
                value={startDate}
                onChange={(date) => handleDate(date)}
              />
            </Form.Group>
            {errors?.date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* buttons */}
        <Row>
          <Col>
            <div className={` my-3`}>{buttons} </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default DayEdit;
