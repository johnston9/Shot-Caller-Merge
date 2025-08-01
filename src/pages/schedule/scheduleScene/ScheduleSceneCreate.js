/* Form Component in the DayPage to create a Schedule Scene 
   both from prefilled data from the Scene and from a number of new inputs 
 * Contains functions to display scenes by Act or Location Order
 * Once a Scene is selected it passes the scene data and the postData state
   to ScheduleSceneItem component
 * The ScheduleSceneItem component prefills the postData state
   with the main Scene data  */
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import ScheduleSceneItem from "./ScheduleSceneItem";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";

const SceneScheduleCreate = ({
  xday,
  xdate,
  setShow,
  setHasOrder,
  epi,
  project,
  episodeTitle,
  day_id,
}) => {
  const host = useHostName();
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [scenes, setScenes] = useState({ results: [] });
  const projectType = currentUser?.project_category_type
    ? JSON.parse(currentUser?.project_category_type)
    : null;

  const [postData, setPostData] = useState({
    scene_id: "",
    day_order_number: "",
    number: "",
    act: "",
    title: "",
    start_time: "",
    end_time: "",
    int_ext: "",
    day_night: "",
    time: "",
    pages: "",
    action: "",
    dramatic_day: "",
    location: "",
    location_detail: "",
    filming_location: "",
    location_address: "",
    department_info: "",
    equip_set_props: "",
    next: "",
    new_info: "",
  });

  const {
    day_order_number,
    scene_id,
    number,
    act,
    title,
    int_ext,
    start_time,
    end_time,
    day_night,
    time,
    action,
    pages,
    dramatic_day,
    location,
    location_detail,
    filming_location,
    location_address,
    equip_set_props,
    department_info,
    next,
    new_info,
  } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (day_order_number === "" || !day_order_number) {
      toast.error("Day Order Number is required");
      return;
    }

    formData.append("scene_id", postData.scene_id);
    formData.append("day_id", id);
    formData.append("day", xday);
    formData.append("date", xdate);
    formData.append("day_order_number", day_order_number);
    formData.append("number", number);
    formData.append("act", act);
    formData.append("title", title);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);
    formData.append("int_ext", int_ext);
    formData.append("day_night", day_night);
    formData.append("time", time);
    formData.append("pages", pages);
    formData.append("action", action);
    formData.append("dramatic_day", dramatic_day);
    formData.append("location", location);
    formData.append("location_detail", location_detail);
    formData.append("filming_location", filming_location);
    formData.append("location_address", location_address);
    formData.append("equip_set_props", equip_set_props);
    formData.append("department_info", department_info);
    formData.append("next", next);
    formData.append("new_info", new_info);
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.post("/schedule/scenes/", formData);
        setShow(false);
        setHasOrder(true);
      } else {
        await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/schedule/scenes/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setShow(false);
        setHasOrder(true);
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div>
      {/* order start end */}
      <Row>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center p-0 p-md-2"
        >
          <Form.Group
            controlId="day_order_number"
            className={`${styles.Width2} `}
          >
            <Form.Label className="p-1">
              <span className="d-md-none">Order Number</span>
              <span className="d-none d-md-block">Day Order Number</span>
            </Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="day_order_number"
              value={day_order_number}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.day_order_number?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="start_time" className={`${styles.Width2} `}>
            <Form.Label className="p-1">Start Time</Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="start_time"
              value={start_time}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.start_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="end_time" className={`${styles.Width2} `}>
            <Form.Label className="p-1">End Time</Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="end_time"
              value={end_time}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.end_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      {/* Filming Location - Location Address */}
      <Row>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group
            controlId="filming_location"
            className={`${styles.Width2} `}
          >
            <Form.Label className="p-1">Filming Location</Form.Label>
            <Form.Control
              className={`${styles.Input}`}
              type="text"
              name="filming_location"
              value={filming_location}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.filming_location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group
            controlId="location_address"
            className={`${styles.Width2} `}
          >
            <Form.Label className="p-1">Location Address</Form.Label>
            <Form.Control
              className={`${styles.InputScene}`}
              type="text"
              name="location_address"
              as="textarea"
              rows={2}
              value={location_address}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.location_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      {/* Next new info */}
      <Row>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="next" className={`${styles.Width2} `}>
            <Form.Label className="p-1">Next</Form.Label>
            <Form.Control
              className={`${styles.InputScene}`}
              type="text"
              name="next"
              as="textarea"
              rows={2}
              value={next}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.next?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="new_info" className={`${styles.Width2} `}>
            <Form.Label className="p-1">New Info</Form.Label>
            <Form.Control
              className={`${styles.InputScene}`}
              type="text"
              name="new_info"
              as="textarea"
              rows={2}
              value={new_info}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.new_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
    </div>
  );

  const buttons = (
    <div className="mt-3">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-4 px-md-5 mr-2`}
        onClick={() => setShow((show) => !show)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 ml-2`}
        type="submit"
      >
        Add Scene
      </Button>
    </div>
  );

  /* The following 5 function fetch scenes by Act or Location order */
  const fetchScenesLoc = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `/scenes/?ordering=location&search=${query}`
        );
        setScenes(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/scenes/?ordering=location&search=${query}${
            epi && day_id ? `&episode_ids=${epi}&day_id=${day_id}` : ""
          }`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const fetchScenesOne = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(`/scenes/?act=one&search=${query}`);
        setScenes(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/scenes/?act=one&search=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchScenesTwoA = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `/scenes/?act=two-a&search=${query}`
        );
        setScenes(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/scenes/?act=two-a&search=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
      }
    } catch (err) {}
  };

  const fetchScenesTwoB = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `scenes/?act=two-b&search=${query}`
        );
        setScenes(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/scenes/?act=two-b&search=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchScenesThree = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `scenes/?act=three&search=${query}`
        );
        setScenes(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem(
            "projectSlug"
          )}/scenes/?act=three&search=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* The following 5 function handle the click to the
     above functions to fetch scenes by Act or Location order */
  const handleClickLoc = () => {
    fetchScenesLoc();
  };

  const handleClick1 = () => {
    fetchScenesOne();
  };

  const handleClick2 = () => {
    fetchScenesTwoA();
  };

  const handleClick3 = () => {
    fetchScenesTwoB();
  };

  const handleClick4 = () => {
    fetchScenesThree();
  };

  return (
    <div>
      <h4 className={`text-center mx-3 pb-0 mb-3 ${styles.SubTitle}`}>
        ADD SCENE{" "}
      </h4>
      <div className={`px-3 mx-3 pb-3 ${styles.ScenesBox} `}>
        <p className="text-center pt-2">FIND SCENE BY LOCATION AND OR SEARCH</p>
        {projectType !== "Television" && (
          <Row className="mt-3">
            <Col xs={6} md={3} className="text-center">
              <Button
                onClick={handleClick1}
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}
              >
                Act One
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <Button
                onClick={handleClick2}
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}
              >
                Act Two A
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center pt-2 pt-md-0">
              <Button
                onClick={handleClick3}
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}
              >
                Act Two B
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center pt-2 pt-md-0">
              <Button
                onClick={handleClick4}
                className={`${btnStyles.Button} ${btnStyles.Wide3} ${btnStyles.Bright}`}
              >
                Act Three
              </Button>
            </Col>
          </Row>
        )}
        <Row className="my-2">
          <Col xs={12} className="text-center">
            <Button
              onClick={handleClickLoc}
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
            >
              Location
            </Button>
          </Col>
        </Row>
        {/* search  */}
        <p className="text-center">
          For precise search enter value before clicking above
        </p>
        <Row>
          <Col className="mt-2" xs={12} sm={{ span: 6, offset: 3 }}>
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search by scene number, title or location"
              />
            </Form>
          </Col>
        </Row>
      </div>
      {/* scenes */}
      {scenes.results.length ? (
        <>
          <div className={`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
            <p className={`text-center pt-2 px-5 mb-3`}>
              SELECT SCENE AND ADD SHOOTING INFO BELOW
            </p>
            <Row>
              {scenes.results.map((scene) => (
                <Col xs={12} md={6}>
                  <ScheduleSceneItem
                    setPostData={setPostData}
                    scene={scene}
                    {...scene}
                    key={scene.id}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <div className={`px-3 mx-3 mt-3 mb-4 pb-3 ${styles.ScenesBox} `}>
            <Row className="mt-3 pt-3">
              <Col>
                <h4
                  className={`d-none d-md-block text-center px-5 mb-0 ${styles.SubTitle}`}
                >
                  SCENE{" "}
                  <span className={`${styles.BlueNumber} `}>{number} </span>
                  SHOOTING INFO{" "}
                </h4>
                <h4
                  className={`d-block d-md-none text-center px-5 mb-0 ${styles.SubTitle}`}
                >
                  SCENE{" "}
                  <span className={`${styles.BlueNumber} `}>{number} </span>
                </h4>
              </Col>
            </Row>
            <Form
              className={`text-center px-3 ${styles.FormBox} `}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col xs={12} className="p-0 p-md-2">
                  {textFields}
                  {buttons}
                </Col>
              </Row>
            </Form>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SceneScheduleCreate;
