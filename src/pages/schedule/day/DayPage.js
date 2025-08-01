/* Page to fetch the Day's data and it's schedule scenes data
 * Contains the ScheduleScene to which it passes the 
   schedule scenes data
 * Also fetches the day's Callsheet data to decide whether to 
   show an Add Callsheet or View Callsheet
 * Contains the Pages component to calculate the days's pages length */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { useRedirect } from "../../../hooks/Redirect";
import ScheduleSceneCreate from "../scheduleScene/ScheduleSceneCreate";
import ScheduleScene from "../scheduleScene/ScheduleScene";
import TopBox from "../../../components/TopBox";
import Asset from "../../../components/Asset";
import Pages from "../Pages";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

import styles from "../../../styles/DayPage.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DayPage = () => {
  // useRedirect()
  const currentUser = useCurrentUser();
  // Television
  const projectCategoryType =
    currentUser?.project_category_type &&
    JSON.parse(currentUser.project_category_type);
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episodeid");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  const host = useHostName();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  // eslint-disable-next-line
  const [dayData, setDayData] = useState({ results: [] });
  const [dayScenes, setDayScenes] = useState({ results: [] });
  const [callsheet, setCallsheet] = useState({ results: [] });
  const [dataDay, setDataDay] = useState("");
  const [dataDate, setDataDate] = useState("");
  const history = useHistory();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasOrder, setHasOrder] = useState(false);
  const admin = true;

  const handleMount = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const [{ data: dayGet }, { data: scenes }, { data: callsheetdata }] =
          await Promise.all([
            axiosReq.get(`days/${id}/`),
            axiosReq.get(`schedule/scenes/?day_id=${id}`),
            axiosReq.get(`callsheetsnew/?day_id=${id}`),
          ]);
        setDayData({ results: [dayGet] });
        setDayScenes(scenes);
        setCallsheet(callsheetdata);
        // setDayContext(dayGet.day);
        setDataDay(dayGet.day);
        setDataDate(dayGet.date);
        setHasLoaded(true);
        setHasOrder(false);
        setIsSavingOrder(false)
      } else {
        const [{ data: dayGet }, { data: scenes }, { data: callsheetdata }] =
          await Promise.all([
            axiosInstance.get(
              `${localStorage.getItem("projectSlug")}/days/${id}/`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/schedule/scenes/?day_id=${id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/callsheetsnew/?day_id=${id}${epi ? `&episode_ids=${epi}` : ""
              }`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
          ]);
        setIsSavingOrder(false)
        setDayData({ results: [dayGet] });
        setDayScenes(scenes);
        setCallsheet(callsheetdata);
        // setDayContext(dayGet.day);
        setDataDay(dayGet.day);
        setDataDate(dayGet.date);
        setHasLoaded(true);
        setHasOrder(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleMount();
  }, [id, hasOrder]);

  const [isDragging, setIsDragging] = useState(false);
  const [isSavingOrder, setIsSavingOrder] = useState(false);

  const [shotId, setShortId] = useState({ id: '', day_id: '' })
  const handleSceneDragEnd = async (result) => {
    setIsDragging(false);
    if (!result.destination) return;

    const updatedResults = Array.from(dayScenes?.results);
    const [movedItem] = updatedResults.splice(result.source.index, 1);
    updatedResults.splice(result.destination.index, 0, movedItem);

    // Optimistically update the UI
    setDayScenes((prev) => ({
      ...prev,
      results: updatedResults,
    }));

    try {
      setIsSavingOrder(true);
      const newIndex = result.destination.index;
      // const movedShot = updatedResults[newIndex];
      const sourceID = result.source.index;

      const apiURL =
        host === CLIENT_PROGRAM_HOSTNAME
          ? `/schedule/bulk-ordering//`
          : `${localStorage.getItem("projectSlug")}/schedule/bulk-ordering/`;

      await axiosInstance.post(
        apiURL,
        // { day_order_number: newIndex + 1 },
        // "schedule_id": 146,
        // "day_order_number": 1,
        // "day_id": 92,
        // "left_number":2
        {
          day_order_number: newIndex,
          left_number: sourceID,
          day_id: shotId?.day_id,
          schedule_id: shotId?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );
      handleMount();
    } catch (error) {
      console.error("Error updating moved shot", error);
    } finally {
      setIsSavingOrder(false);
    }
  }
  return (
    <div className="mb-5">
      <TopBox
        work={`Shoot Day ${dataDay}`}
        title2={dataDate}
        episodeTitle={`Episode ${episodeTitle}`}
      />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      {hasLoaded ? (
        <>
          {/* add scene - view/add Callsheet*/}
          <Row className="my-4">
            {currentUser &&
              currentUser?.groups.length > 0 &&
              (currentUser?.groups[0]?.name === "Admin" ||
                currentUser?.groups[0]?.name === "Superadmin") && (
                <Col xs={6} className="text-center">
                  <Button
                    onClick={() => setShow((show) => !show)}
                    className={`px-4 px-sm-5 ${btnStyles.Button} ${btnStyles.Bright}`}
                  >
                    Add Scene
                  </Button>
                </Col>
              )}
            {/* {projectCategoryType === "Television" &&
                 currentUser &&
                 currentUser?.groups.length > 0 &&
                 (currentUser?.groups[0]?.name === "Admin" ||
                   currentUser?.groups[0]?.name === "Superadmin") && (
                   <Col xs={6} className="text-center">
                     <Button
                       onClick={() =>
                         history.push(
                           `/${localStorage.getItem(
                             "projectSlug"
                           )}/episodes/create`
                         )
                       }
                       className={`px-4 px-sm-5 ${btnStyles.Button} ${btnStyles.Bright}`}
                     >
                       Add Scene
                     </Button>
                   </Col>
                 )} */}
            {callsheet.results.length ? (
              <Col xs={6} className="text-center">
                <Link
                  className={`p-1`}
                  to={`/${localStorage.getItem(
                    "projectSlug"
                  )}/callsheets/${id}${epi && project && episodeTitle
                    ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
                    : ""
                    }`}
                >
                  <Button
                    className={`px-2 px-sm-4 ${btnStyles.Button} ${btnStyles.Bright}`}
                  >
                    View Callsheet
                  </Button>
                </Link>
              </Col>
            ) : (
              <>
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  (currentUser?.groups[0]?.name === "Admin" ||
                    currentUser?.groups[0]?.name === "Superadmin") ? (
                  <Col xs={6} className="text-center">
                    <Link
                      className={`p-1`}
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/callsheet/create/${id}${epi && project && episodeTitle
                        ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
                        : ""
                        }`}
                    >
                      <Button
                        className={`px-2 px-sm-4 ${btnStyles.Button} ${btnStyles.Bright}`}
                      >
                        Create Callsheet
                      </Button>
                    </Link>
                  </Col>
                ) : null}
              </>
            )}
          </Row>
          {!show ? (
            ""
          ) : (
            <ScheduleSceneCreate
              xday={dataDay}
              setShow={setShow}
              setHasOrder={setHasOrder}
              xdate={dataDate}
              epi={epi}
              project={project}
              episodeTitle={`Episode ${episodeTitle}`}
              day_id={id}
            />
          )}
          <Pages scenes={dayScenes.results} />
          {/* titles*/}
          <div className="d-none d-md-block">
            <Row
              style={{ textTransform: "uppercase" }}
              className={`text-center mx-0  ${styles.TitleBox}`}
            >
              {admin ? (
                <>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={1}
                    md={1}
                  >
                    <p className="mb-0 pl-2">Edit</p>
                  </Col>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={1}
                    md={1}
                  >
                    <p className="mb-0">Time</p>
                  </Col>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={1}
                    md={1}
                  >
                    <p className="mb-0">Scene</p>
                  </Col>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={3}
                    md={3}
                  >
                    <p className="mb-0">Details</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={1}
                    md={1}
                  >
                    <p className="mb-0">Times</p>
                  </Col>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={1}
                    md={1}
                  >
                    <p className="mb-0">Scene</p>
                  </Col>
                  <Col
                    className={`mx-0 px-0 ${styles.TitleBox2}`}
                    xs={4}
                    md={4}
                  >
                    <p className="mb-0">Details</p>
                  </Col>
                </>
              )}
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">D/N</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className="mb-0">Filming</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">Pages</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">Cast</p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">Info</p>
              </Col>
            </Row>
          </div>
          {/* mobile */}
          <div className="d-block d-md-none">
            <Row className="text-center mx-0 px-0">
              <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={`mb-0  ${styles.TitleBox}`}
                >
                  Time
                </p>
              </Col>
              <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={`mb-0  ${styles.TitleBox}`}
                >
                  Scene
                </p>
              </Col>
              <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={8}>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={`mb-0 text-center ${styles.TitleBox}`}
                >
                  Details
                </p>
              </Col>
            </Row>
          </div>
          <Row className="position-relative">
            <DragDropContext onDragEnd={handleSceneDragEnd}
              onDragStart={(start) => {
                const draggedItem = dayScenes?.results?.find(
                  (item) => String(item.id) === start.draggableId
                );
                if (draggedItem) {
                  setShortId({ id: draggedItem.id, day_id: draggedItem.day_id })
                  setIsDragging(true);
                }
              }}
            >
              {(isDragging || isSavingOrder) && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              )}
              <Droppable droppableId="schedule-scenes-droppable">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ width: "98%", position: 'relative', left: '15px' }}
                  >
                    {dayScenes?.results?.length > 0 &&
                      dayScenes?.results?.map((scene, index) => {
                        const backgroundColor =
                          index % 3 === 0
                            ? "#dbfaf9"
                            : index % 2 === 0
                              ? "rgb(223 254 240)"
                              : "rgb(248 241 249)";

                        return (
                          <Draggable
                            key={scene.id}
                            draggableId={String(scene.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <ScheduleScene
                                  key={scene.id}
                                  admin={admin}
                                  style={{ backgroundColor }}
                                  {...scene}
                                  day_id={id}
                                  sceneAll={scene}
                                  setHasOrder={setHasOrder}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

          </Row>
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </div>
  );
};

export default DayPage;
