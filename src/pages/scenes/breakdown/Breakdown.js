/* Component in the Scene Component to display the 
   Scene Breakdown info */
import React from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";

const Breakdown = (props) => {
  const currentUser = useCurrentUser();
  const projectType = currentUser?.project_category_type
    ? JSON.parse(currentUser?.project_category_type)
    : null;

  const history = useHistory();
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const episode = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/scenes/${id}/edit${
        episode && project && episodeTitle
          ? `?episode=${episode}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const {
    id,
    title,
    act,
    int_ext,
    day_night,
    time,
    location,
    location_detail,
    pages,
    action,
    filming_location,
    shooting_date,
    dramatic_day,
    equip_set_props,
    department_info,
    setShowBreak,
  } = props;
  return (
    <div className="pb-5">
      <h5
        style={{ textTransform: "uppercase" }}
        className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle}`}
      >
        Scene breakdown
        <span
          style={{ textTransform: "none" }}
          className={`float-right ${styles.Close}`}
          onClick={() => setShowBreak(false)}
        >
          Close
        </span>
      </h5>
      <Row>
        {currentUser &&
          currentUser?.groups.length > 0 &&
          (currentUser?.groups[0]?.name === "Admin" ||
            currentUser?.groups[0]?.name === "Superadmin" ||
            currentUser?.groups[0]?.name === "Admincreative") && (
            <Col className="text-center py-3">
              <Button
                className={` py-0  ${btnStyles.Back} ${btnStyles.Button}`}
                onClick={handleEdit}
              >
                ADD / EDIT
              </Button>
            </Col>
          )}
      </Row>
      <Row>
        <Col
          className="text-center"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <p
            className={`${styles.BoldTitle} 
                text-center mx-1 mx-sm-5`}
          >
            TITLE
          </p>
          <p>{title} </p>
        </Col>
      </Row>
      <Row className="mt-3">
        {projectType !== "Television" && (
          <Col className="text-center" xs={6}>
            <p
              className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
            >
              ACT
            </p>
            <p style={{ textTransform: "capitalize" }}>{act} </p>
          </Col>
        )}
        <Col className="text-center" xs={6}>
          <p
            className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
          >
            PAGES
          </p>
          <p>{pages} </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center" xs={6}>
          <p
            className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
          >
            DRAMATIC DAY
          </p>
          <p>{dramatic_day} </p>
        </Col>
        <Col className="text-center" xs={6}>
          <p
            className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
          >
            TIME
          </p>
          <p>{time} </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center" xs={6}>
          <p
            className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
          >
            LOCATION
          </p>
          <p style={{ textTransform: "uppercase" }}>
            {int_ext && `${int_ext}.`} {location} {location_detail}{" "}
            {day_night && `- ${day_night}`}
          </p>
        </Col>
        <Col className="text-center" xs={6}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            ACTION
          </p>
          <p>{action} </p>
        </Col>
      </Row>
      {/* shoot info */}
      <Row>
        <Col xs={12} md={6}>
          <Row className="mt-3">
            <Col className="text-center" xs={12}>
              <p
                className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
              >
                SHOOT INFO{" "}
              </p>
              <p>
                {shooting_date} {filming_location}{" "}
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row className="mt-3">
            <Col className="text-center" xs={12}>
              <p
                className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
              >
                EQUIPMENT SET PROPS
              </p>
              <p>{equip_set_props} </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Col
          className="text-center"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <p
            className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}
          >
            DEPARTMENTS INFO{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" xs={{ span: 10, offset: 1 }}>
          <p>{department_info} </p>
        </Col>
      </Row>
    </div>
  );
};

export default Breakdown;
