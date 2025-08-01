/* Component in the Scene Component to fetch 
   all ShotList data for a Scene
 * Contains the Shot component to which it passes the data
   for each Shot in the Shotlist
 * Contains the ShotListCreate component  */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import ShotListCreate from "./ShotListCreate";
import Asset from "../../../components/Asset";
import NoResults from "../../../assets/no-results.png";
import Shot from "./Shot";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const ShotlistPage = ({ scene, setShowlist }) => {
  const currentUser = useCurrentUser();
  const host = useHostName();
  const { id } = useParams();
  const [addShot, setAddShot] = useState(false);
  const [shotlist, setShotlist] = useState({ results: [] });
  const handleMount = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq(`/shotlists/?scene_id=${id}`);
        setShotlist(data);
        setIsSavingOrder(false)
      } else {
        // &ordering=day_order_number
        const { data } = await axiosInstance(`${localStorage.getItem("projectSlug")}/shotlists/?scene_id=${id}`);
        setShotlist(data);
        setIsSavingOrder(false)
      }
    } catch (err) {
      console.log(`err ${err}`);
    }
  };

  useEffect(() => {
    handleMount();
    // eslint-disable-next-line
  }, [id , addShot]);

  const [isDragging, setIsDragging] = useState(false);
  const [isSavingOrder, setIsSavingOrder] = useState(false);

  const [shotId, setShortId] = useState({ id: '', scene_id: '' })
  const handleDragEnd = async (result) => {
    setIsDragging(false);
    if (!result.destination) return;

    const updatedResults = Array.from(shotlist.results);
    const [movedItem] = updatedResults.splice(result.source.index, 1);
    updatedResults.splice(result.destination.index, 0, movedItem);

    // // Optimistically update the UI
    setShotlist((prev) => ({
      ...prev,
      results: updatedResults,
    }));

    try {
      setIsSavingOrder(true);
      const newIndex = result.destination.index;
      const sourceID = result.source.index;
      // const movedShot = updatedResults[newIndex];

      const apiURL =
        host === CLIENT_PROGRAM_HOSTNAME
          ? `/shotlists/bulk-ordering/`
          : `${localStorage.getItem("projectSlug")}/shotlists/bulk-ordering/`;

      await axiosInstance.post(
        apiURL,
        {
          order_number: newIndex,
          left_number: sourceID,
          shortlist_id: shotId?.id,
          scene_id: shotId?.scene_id,
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
    }
    finally {
      setIsSavingOrder(false);
    }

  };

  return (
    <div className="mb-5">
      <Row>
        <Col xs={12} className="text-center">
          <h5 className={`mb-3 pl-5 py-1 ${styles.SubTitle}`}>
            SHOTLIST
            <span
              style={{ textTransform: "none" }}
              className={`float-right ${styles.Close} pt-1`}
              onClick={() => setShowlist(false)}
            >
              Close
            </span>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin" ||
              currentUser?.groups[0]?.name === "Admincreative") && (
              <Button
                onClick={() => setAddShot((addShot) => !addShot)}
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
              >
                Add Shot
              </Button>
            )}
          {!addShot ? (
            ""
          ) : (
            <ShotListCreate
              setAddShot={setAddShot}
              setShotlist={setShotlist}
              handleMount={handleMount}
              scene={scene}
            />
          )}
        </Col>
      </Row>
      {/* titles */}
      <div className="d-none d-md-block">
        <Row
          style={{ textTransform: "uppercase" }}
          className={`mt-3 ${styles.TitleBox} text-center mx-0`}
        >
          <Col className={`px-0 ${styles.TitleBox2} `} xs={1} md={1}>
            <p className="mb-0">Info</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">Shot #</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">Size</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">Frame</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={4} md={4}>
            <p className="mb-0">Description</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">Angle</p>
          </Col>
          <Col className={`px-0  ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0">Move</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={currentUser?.groups[0]?.name === "Crew" ? 2 : 1} md={currentUser?.groups[0]?.name === "Crew" ? 2 : 1}>
            <p className="mb-0">Image/File</p>
          </Col>
          {
            currentUser?.groups[0]?.name === "Crew" ? null :
              <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className="mb-0">Edit</p>
              </Col>
          }
        </Row>
      </div>
      {/* mobile */}
      <div className="d-block d-md-none">
        <Row
          style={{ textTransform: "uppercase" }}
          className={`mt-3 ${styles.TitleBox} text-center mx-0`}
        >
          <Col className={`px-0 ${styles.TitleBox2} `} xs={1} md={1}>
            <p className={`ml-1 mb-0`}>In</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className="mb-0"># </p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={2} md={2}>
            <p className="mb-0">Sz/Fr</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={4} md={4}>
            <p className="mb-0">Detail</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2}`} xs={3} md={3}>
            <p className="mb-0">Ang/Mv</p>
          </Col>
          <Col className={`px-0 ${styles.TitleBox2} `} xs={1} md={1}>
            <p className="pl-1 mb-0"></p>
          </Col>
        </Row>
      </div>
      {/* shots */}
      <Row className="w-100 position-relative">
        <DragDropContext onDragEnd={handleDragEnd}
          onDragStart={(start) => {
            const draggedItem = shotlist?.results?.find(
              (item) => String(item.id) === start.draggableId
            );
            if (draggedItem) {
              setShortId({ id: draggedItem.id, scene_id: draggedItem.scene_id })
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
          <Droppable droppableId="shotlist-droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="w-100" style={{ width: "100%", position: 'relative', left: '15px' }}>
                {shotlist?.results?.map((shot, index) => (
                  <Draggable key={shot.id} draggableId={String(shot.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Shot
                          style={{
                            backgroundColor:
                              index % 3 === 0
                                ? "#dbfaf9"
                                : index % 2 === 0
                                  ? "rgb(223 254 240)"
                                  : "rgb(248 241 249)",
                          }}
                          key={shot.id}
                          handleMount={handleMount}
                          shotAll={shot}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </Row>
      <hr />
    </div>
  );
};

export default ShotlistPage;
