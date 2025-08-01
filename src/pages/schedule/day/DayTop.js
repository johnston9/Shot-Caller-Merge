/* Component in the ScheduleDays page to display each day's data
   and the number and location of each of that day's schedule scenes
 * When clicked on it opens that Day's DayPage */
import React from "react";

import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { PostDropdown } from "../../../components/PostDropdown";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";

import styles from "../../../styles/Days.module.css";

const DayTop = (props) => {
  const host = useHostName();
  const { id, day, date, daysScenes, epi, project, episodeTitle } = props;

  const currentUser = useCurrentUser();
  const history = useHistory();

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/edit/days/${id}${
        epi && project && episodeTitle
          ? `?episodeid=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/days/${id}/`);
        history.push(`/${localStorage.getItem("projectSlug")}/days/`);
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/days/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.push(
          `/${localStorage.getItem("projectSlug")}/days${
            epi && project && episodeTitle
              ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
              : ""
          }`
        );
      }
    } catch (err) {}
  };

  return (
    <div>
      <Card className={`text-center `}>
        <Card.Header className={`pt-2 pb-1 ${styles.Top}`}>
          <Row>
            <Col className="mx-0 px-0" xs={1}></Col>
            <Col
              xs={10}
              className="mx-0 px-0 text-center d-flex align-items-center justify-content-center"
            >
              <p className={` ${styles.Titlelist}`}>
                Day {day} - {date}
              </p>
            </Col>
            <Col xs={1} className="text-center mx-0 px-0">
              {currentUser &&
                currentUser?.groups.length > 0 &&
                (currentUser?.groups[0]?.name === "Admin" ||
                  currentUser?.groups[0]?.name === "Superadmin") && (
                  <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className={`p-1 ${styles.Bottom}`}>
          {currentUser &&
          currentUser?.groups.length > 0 &&
          currentUser?.groups[0]?.name !== "Cast" ? (
            <Link
              to={`/${localStorage.getItem("projectSlug")}/day/${id}${
                epi && project && episodeTitle
                  ? `?episodeid=${epi}&project=${project}&episodeTitle=${episodeTitle}`
                  : ""
              }`}
            >
              <Col>
                <div className={` ${styles.SceneLoc}`}>
                  {/* filter the scenes for that day */}
                  {daysScenes.results.length
                    ? daysScenes.results.map((scene) =>
                        scene.day_id === id ? (
                          <span className={` ${styles.Titledetail}`}>
                            {scene.number} - {scene.location},{" "}
                          </span>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              </Col>
            </Link>
          ) : (
            <Col>
              <div className={` ${styles.SceneLoc}`}>
                {/* filter the scenes for that day */}
                {daysScenes.results.length
                  ? daysScenes.results.map((scene) =>
                      scene.day_id === id ? (
                        <span className={` ${styles.Titledetail}`}>
                          {scene.number} - {scene.location},{" "}
                        </span>
                      ) : (
                        ""
                      )
                    )
                  : ""}
              </div>
            </Col>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default DayTop;
