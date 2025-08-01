/* Component in ShotListPage to display the data for each Shot
 * Contains the ShotInfo and ShotImage components
 * Contains the ShotListEdit component */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { Button } from "react-bootstrap";
import { PostDropdown } from "../../../components/PostDropdown";
import ShotInfo from "./ShotInfo";
import ShotImage from "./ShotImage";
import ShotListEdit from "./ShotListEdit";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const Shot = (props) => {
  const currentUser = useCurrentUser();
  const host = useHostName();
  const [showInfo, setShowInfo] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [shotNew, setShotNew] = useState({
    id: "",
    scene_id: "",
    scene_number: "",
    shot_number: "",
    size: "",
    angle: "",
    movement: "",
    screen_time: "",
    camera: "",
    lens: "",
    script_length: "",
    description: "",
    equipment: "",
    script_ref: "",
    storyboard_refs: "",
    fx: "",
    focus_pulls: "",
    lighting: "",
    audio: "",
    image: "",
    notes:''
  });

  const { shotAll, handleMount, setAddShot, style } = props;
  const {
    id,
    scene_id,
    scene_number,
    shot_number,
    size,
    angle,
    movement,
    screen_time,
    camera,
    lens,
    script_length,
    script_ref,
    storyboard_refs,
    description,
    equipment,
    fx,
    focus_pulls,
    lighting,
    audio,
    image,
    framing,
    notes,
    order_number
  } = shotAll;

  useEffect(() => {
    setShotNew({
      id,
      scene_id,
      scene_number,
      shot_number,
      size,
      angle,
      movement,
      screen_time,
      camera,
      lens,
      script_length,
      script_ref,
      storyboard_refs,
      description,
      equipment,
      fx,
      focus_pulls,
      lighting,
      audio,
      image,
      framing,
      notes
    });
    // eslint-disable-next-line
  }, []);

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/shotlists/${id}/`);
        handleMount();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/shotlists/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        handleMount();
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div style={style} className={`${styles.Bold}`}>
      {/* medium*/}
      <div className="d-none d-md-block">
        <Row className="py-2 text-center mx-0">
          <Col className={`pl-2 ${styles.TitleBox2}`} xs={1} md={1}>
            <Button
              onClick={() => setShowInfo((showInfo) => !showInfo)}
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              Info
            </Button>
          </Col>
          <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">{order_number+1}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">{size}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">{framing}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={4} md={4}>
            <p className="mb-0">{description}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">{angle} </p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p>{movement}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={currentUser?.groups[0]?.name === "Crew" ? 2 : 1} md={currentUser?.groups[0]?.name === "Crew" ? 2 : 1}>
            <Button
              onClick={() => setShowImg((showImg) => !showImg)}
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              Image/File
            </Button>
          </Col>
          {/* edit */}
          {currentUser?.groups[0]?.name === "Crew" ? '' : <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <PostDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          </Col>}
        </Row>
      </div>
      {/* mobile*/}
      <div className="d-block d-md-none">
        <Row className="py-2 text-center mx-0">
          <Col className={`px-0 mx-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <Button
              onClick={() => setShowInfo((showInfo) => !showInfo)}
              className={`pr-2 ${btnStyles.Button} ${btnStyles.Blue}`}
            >
              I
            </Button>
          </Col>
          <Col className={`${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0 pl-1">{order_number+1}</p>
          </Col>
          <Col className={`px-0 mx-0 ${styles.TitleBox2}`} xs={2} md={2}>
            <p className={`${styles.Para2}`}>{size}</p>
            <p className={`${styles.Para2}`}>{framing}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
            <p className="mb-0">{description}</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
            <p className="mb-0">{angle} </p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <Button
              onClick={() => setShowImg((showImg) => !showImg)}
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              I
            </Button>
          </Col>
          <Col className={`px-0 mx-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <div>
              {/* edit */}
              {currentUser &&
                currentUser?.groups.length > 0 &&
                (currentUser?.groups[0]?.name === "Admin" ||
                  currentUser?.groups[0]?.name === "Superadmin" ||
                  currentUser?.groups[0]?.name === "Admincreative") && (
                  <PostDropdown
                    handleEdit={() => setShowEditForm(true)}
                    handleDelete={handleDelete}
                  />
                )}
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>{!showInfo ? "" : <ShotInfo {...shotNew} />}</Col>
      </Row>
      <Row>
        <Col>{!showImg ? "" : <ShotImage image={image} />}</Col>
      </Row>
      <Row>
        <Col>
          {showEditForm ? (
            <ShotListEdit
              shotNew={shotNew}
              shot_number={shot_number}
              setShotNew={setShotNew}
              setAddShot={setAddShot}
              id={id}
              handleMount={handleMount}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Shot;
