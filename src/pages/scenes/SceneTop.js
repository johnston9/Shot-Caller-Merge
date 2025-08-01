/* Component rendered on the ScenesPage to display the 
   cover info for each Scene
 * When clicked on it opens that Scenes's ScenePage */
import React from "react";

import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/Scene.module.css";

const SceneTop = (props) => {
  const host = useHostName();
  const {
    id,
    number,
    title,
    action,
    location,
    style,
    epi,
    pro,
    episodeTitle,
    projectType,
  } = props;
  const currentUser = useCurrentUser();
  const history = useHistory();

  const handleEdit = () => {
    if (projectType === "Television") {
      history.push(
        `/${localStorage.getItem(
          "projectSlug"
        )}/scenes/${id}/edit?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
      );
    } else {
      history.push(`/${localStorage.getItem("projectSlug")}/scenes/${id}/edit`);
    }
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/scenes/${id}/`);
        history.goBack();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/scenes/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        toast.success("Scenes deleted!");
      }
    } catch (err) {}
  };

  return (
    <div>
      <Card className={`text-center ${styles.SceneCard}`}>
        <div className={`mb-0 px-2 py-1`}>
          <Row className="mx-0 d-flex align-items-center ">
            <Col className="mx-0 px-0" xs={1}></Col>
            <Col xs={10} className="mx-0 px-0 text-center">
              <Link
                to={
                  projectType === "Television"
                    ? `/${localStorage.getItem(
                        "projectSlug"
                      )}/scenes/${id}?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
                    : `/${localStorage.getItem("projectSlug")}/scenes/${id}`
                }
              >
                <div>
                  <h5 className={` ${styles.Grey}`}>Scene {number}</h5>
                </div>
              </Link>
            </Col>
            <Col xs={1} className={`mx-0 px-0 ${styles.Drop}`}>
              {currentUser &&
                currentUser?.groups.length > 0 &&
                (currentUser?.groups[0]?.name === "Admin" ||
                  currentUser?.groups[0]?.name === "Superadmin" ||
                  currentUser?.groups[0]?.name === "Admincreative") && (
                  <PostDropdown
                    // className="float-left"
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
            </Col>
          </Row>
          <Link
            to={
              projectType === "Television"
                ? `/${localStorage.getItem(
                    "projectSlug"
                  )}/scenes/${id}?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
                : `/${localStorage.getItem("projectSlug")}/scenes/${id}`
            }
          >
            <div className={` ${styles.Div25}`}>
              <span className={styles.Italics}>{title}</span>
            </div>
          </Link>
        </div>
        {/* Body */}
        <Card.Body style={style} className="py-1 px-0">
          <Link
            to={
              projectType === "Television"
                ? `/${localStorage.getItem(
                    "projectSlug"
                  )}/scenes/${id}?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
                : `/${localStorage.getItem("projectSlug")}/scenes/${id}`
            }
          >
            <div className={` ${styles.Div50} px-0`}>
              {/* <span className={styles.Italics }>{title}</span> */}
              <Card.Text
                style={{ fontWeight: "700" }}
                className={` ${styles.Grey} px-0`}
              >
                {location}
              </Card.Text>
            </div>
            <div className={`px-0 ${styles.Div50}`}>
              <p className={` ${styles.Grey}`}>{action}</p>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SceneTop;
