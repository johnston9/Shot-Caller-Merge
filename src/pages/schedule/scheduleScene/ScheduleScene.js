/* Component on the DayPage to display each Schedule Scene's data
 * Contains the ScheduleSceneInfo conponent to display the scenes extra info
 * Contains the ScheduleSceneCharacters conponent to display the scenes Characters
 * Contains the ScheduleSceneOrder conponent to re-order the Scenes shooting position  */
import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { PostDropdown } from "../../../components/PostDropdown";
import ScheduleSceneCharactersBG from "./ScheduleSceneCharactersBG";
import ScheduleSceneInfo from "./ScheduleSceneInfo";
import ScheduleSceneOrder from "./ScheduleSceneOrder";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

import styles from "../../../styles/ScheduleCreate.module.css";
import btnStyles from "../../../styles/Button.module.css";

const ScheduleScene = (props) => {
  const currentUser = useCurrentUser();
  const host = useHostName();
  const history = useHistory();
  const queryString = window.location.search;

  const projectType = currentUser?.project_category_type
    ? JSON.parse(currentUser?.project_category_type)
    : null;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episodeid");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  const [show, setShow] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const {
    sceneAll,
    scene_id,
    id,
    day_id,
    number,
    int_ext,
    start_time,
    end_time,
    admin,
    location,
    filming_location,
    day_night,
    action,
    pages,
    callsheetshed,
    next,
    day_order_number,
    setHasOrder,
    style,
    showSideBySide,
    new_info,
  } = props;


  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/schedule/scenes/edit/${id}${epi && project && episodeTitle
        ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
        : ""
      }`
    );
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/schedule/scenes/${id}/`);
        setHasOrder(true);
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/schedule/scenes/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setHasOrder(true);
      }
    } catch (err) { }
  };

  return (
    <div style={style} className={` ${styles.Bold}`}>
      <div className="d-none d-md-block">
        <Row className="pt-2 text-center mx-0">
          {admin ? (
            <>
              <Col
                className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`}
                xs={1}
                md={1}
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Re-Order</Tooltip>}
                >
                  {currentUser &&
                    currentUser?.groups.length > 0 &&
                    (currentUser?.groups[0]?.name === "Admin" ||
                      currentUser?.groups[0]?.name === "Superadmin") ? (
                    <Button
                      onClick={() => setShowOrder((showOrder) => !showOrder)}
                      className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-3`}
                    >
                      {day_order_number+1}
                    </Button>
                  ) : (
                    <Button
                      // onClick={() => setShowOrder((showOrder) => !showOrder)}
                      className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-3`}
                    >
                      {day_order_number+1}
                    </Button>
                  )}
                </OverlayTrigger>
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  (currentUser?.groups[0]?.name === "Admin" ||
                    currentUser?.groups[0]?.name === "Superadmin") && (
                    <PostDropdown
                      className={`${styles.Drop}`}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
              </Col>
              <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">{start_time}</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">{number}</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                <p style={{ textTransform: "uppercase" }} className="mb-0">
                  {int_ext}. {location}
                </p>
                <p className="mb-0">{action}</p>
              </Col>
            </>
          ) : (
            <>
              <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">{start_time}</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">{number}</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                <p style={{ textTransform: "uppercase" }} className="mb-0">
                  {int_ext}. {location}
                </p>
                <p className="mb-0">{action}</p>
              </Col>
            </>
          )}
          <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">{day_night}</p>
          </Col>
          <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
            <p className="mb-0">{filming_location}</p>
          </Col>
          <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p>{pages}</p>
          </Col>
          {/* cast */}
          {showSideBySide ? (
            <Col xs={1} md={1} className="mx-0 px-0">
              <Button
                onClick={() => setShow((show) => !show)}
                className={`${btnStyles.Button} ${btnStyles.Shed}`}
              >
                C
              </Button>
            </Col>
          ) : (
            <Col xs={1} md={1} className="mx-0 px-0">
              <Button
                onClick={() => setShow((show) => !show)}
                className={`${btnStyles.Button} ${btnStyles.Shed}`}
              >
                Cast
              </Button>
            </Col>
          )}
          {showSideBySide ? (
            <Col className={`mx-0 px-0 `} xs={1} md={1}>
              <Button
                onClick={() => setShowInfo((showInfo) => !showInfo)}
                className={`${btnStyles.Button} ${btnStyles.Shed}`}
              >
                I
              </Button>
            </Col>
          ) : (
            <Col className={`mx-0 px-0 `} xs={1} md={1}>
              <Button
                onClick={() => setShowInfo((showInfo) => !showInfo)}
                className={`${btnStyles.Button} ${btnStyles.Shed}`}
              >
                Info
              </Button>
            </Col>
          )}
        </Row>
        {/* Order  */}
        {!showOrder ? (
          ""
        ) : (
          <ScheduleSceneOrder
            id={id}
            day_order_number1={day_order_number}
            start_time1={start_time}
            end_time1={end_time}
            new_info1={new_info}
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
          />
        )}
        {/* cast  */}
        {!show ? "" : <ScheduleSceneCharactersBG scene_id={scene_id} />}
        {/* info */}
        <Row>
          <Col>
            {!showInfo ? "" : <ScheduleSceneInfo style={style} {...sceneAll} />}
          </Col>
        </Row>
        {/* next getBeginNext*/}
        {next ? (
          <Row className="px-3">
            <Col className={`mb-0 py-2 ${styles.Next1}`}>
              <p className="mb-0">Next: {next} </p>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </div>
      {/* mobile */}
      <div className="d-block d-md-none">
        {/* schedule */}
        <Row className="text-center mx-0 px-0">
          <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
            <p className={`mb-0  ${styles.TitleBox2}`}>{start_time}</p>
          </Col>
          <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
            <p className="mb-0">{number}</p>
          </Col>
          <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
            <p style={{ textTransform: "uppercase" }} className="mb-0">
              {int_ext}. {location} {day_night}
            </p>
            <p className="mb-0">{action}</p>
          </Col>
        </Row>
        <hr className=" my-1"></hr>
        {/* sechedule */}
        <Row className="mt-2 mx-0 px-0 text-center">
          {/* order */}
          {admin ? (
            <>
              {callsheetshed ? (
                <Col xs={2}></Col>
              ) : (
                <>
                  <Col className={`mx-0 px-0 mt-0 pt-0`} xs={2}>
                    <Button
                      onClick={() => setShowOrder((showOrder) => !showOrder)}
                      className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-3`}
                    >
                      {day_order_number}
                    </Button>
                  </Col>
                </>
              )}
            </>
          ) : (
            <>
              <Col xs={2}></Col>
            </>
          )}
          {/* info styles.Info */}
          <Col className={`mx-0 pl-0 pr-2 text-right`} xs={4}>
            <p
              onClick={() => setShowInfo((showInfo) => !showInfo)}
              className={`${styles.Info}`}
            //    className={`${btnStyles.Button} ${btnStyles.Shed} py-0 px-1`}
            >
              INFO
            </p>
          </Col>
          {/* cast */}
          <Col className={`text-left mx-0 pr-0 pl-2 `} xs={4}>
            <p
              onClick={() => setShow((show) => !show)}
              className={`${styles.Info}`}
            >
              CAST
            </p>
          </Col>
          {admin ? (
            <>
              {callsheetshed ? (
                <Col xs={2}></Col>
              ) : (
                <Col className={`text-center mx-0 px-0 mt-0 pt-0`} xs={2}>
                  {
                    !["Crew","Admincreative"].includes(currentUser?.groups[0]?.name) &&
                    <PostDropdown
                      className={`${styles.Drop}`}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  }
                </Col>
              )}
            </>
          ) : (
            <>
              <Col xs={2}></Col>
            </>
          )}
        </Row>
        {/* Order  */}
        {!showOrder ? (
          ""
        ) : (
          <ScheduleSceneOrder
            id={id}
            day_order_number1={day_order_number}
            start_time1={start_time}
            end_time1={end_time}
            new_info1={new_info}
            day_id1={day_id}
            setShowOrder={setShowOrder}
            setHasOrder={setHasOrder}
          />
        )}
        {/* cast */}
        {!show ? "" : <ScheduleSceneCharactersBG scene_id={scene_id} />}
        {/* info */}
        <Row>
          <Col>{!showInfo ? "" : <ScheduleSceneInfo {...sceneAll} />}</Col>
        </Row>
        {/* next */}
        {next ? (
          <Row>
            <Col className={`mb-0 py-2 ${styles.Next1}`}>
              <p className="mb-0">Next: {next} </p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className={`mb-0 pt-1 ${styles.Next1}`}></Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default ScheduleScene;

// {callsheetshed ? (
//     <>
//     <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{start_time}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{number}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
//         <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
//         <p className='mb-0'>{action}</p>
//     </Col>
//     </>
// ) : (
//     <>
//     <Col className={`mx-0 px-0 mt-0 pt-0 ${styles.TitleBox2}`} xs={1} md={1}>
//     <OverlayTrigger
//         placement="top"
//         overlay={<Tooltip>Re-Order</Tooltip>}
//         >
//         <Button onClick={() => setShowOrder(showOrder => !showOrder)}
//             className={`${btnStyles.Button} ${btnStyles.Shed} py-0 `}>
//             {day_order_number}
//         </Button>
//     </OverlayTrigger>
//         <PostDropdown
//             className={`${styles.Drop }`}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//         />
//     </Col>
//     <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{start_time}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
//         <p className='mb-0'>{number}</p>
//     </Col>
//     <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
//         <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
//         <p className='mb-0'>{action}</p>
//     </Col>
//     </>
// )}
