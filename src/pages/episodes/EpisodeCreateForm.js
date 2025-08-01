import React, { useCallback, useEffect, useState } from "react";

import { useHistory, useParams, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import TopBox from "../../components/TopBox";
import useRedirect from "../../hooks/Redirect";
import useHostName from "../../hooks/useHostName";
import r1 from "../../assets/r1.png";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import InfoCreate from "./info/InfoCreate";
import ImportCreate from "../scenes/info/ImportCreate";
import { EpisodeEditDropdown } from "./EpisodeEditDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EpisodeList from "./EpisodeList";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";

export default function EpisodeCreateForm({ topbox }) {
  const host = useHostName();
  useRedirect();
  const history = useHistory();
  const currentUser = useCurrentUser();
  const params = useParams();
  const queryString = window.location.search;
  const qp = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const nextPage = qp.get("nextPage");
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  const [postData, setPostData] = useState({
    number: "",
    title: "",
  });

  const { number, title } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();

    // formData.append("number", number);
    const body = {
      episode_number: number,
      title: title,
      // series: params?.seriesId,
    };

    try {
      const { data } = await axiosInstance.post(
        `${localStorage.getItem("projectSlug")}/scene_episodes/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      setPostData({ ...postData, number: "", title: "" });
      fetchEpisodes();
    } catch (error) {
      console.log(error);
      toast.error("Failed to create series. Try again");
    }

    // return console.log([...formData]);
  };

  const handleEpisodeDelete = async (episodeId) => {
    try {
      const { data } = await axiosInstance.delete(
        `${localStorage.getItem("projectSlug")}/scene_episodes/${episodeId}/`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Episode deleted!");
      fetchEpisodes();
      // setSeries(data.results);
    } catch (error) {
      toast.error("Failed to delete episode!");
      console.log("Delete episode error: ", error);
    }
  };

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White}`}>
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      {currentUser?.groups[0]?.name !== "Crew" && (
        <Button
          className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
          type="submit"
        >
          Create
        </Button>
      )}
    </div>
  );

  const fetchEpisodes = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${localStorage.getItem("projectSlug")}/scene_episodes/`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      setEpisodes(data.results);
      // setProjectId(data.project);
    } catch (error) {
      console.log("fetch series error: ", error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const getLink = useCallback(
    (episode) => {
      // Add null/undefined check for episode
      if (!episode) return "/";

      if (nextPage === "scenesPage") {
        return `/${localStorage.getItem("projectSlug")}/scenes?episode=${episode.id
          }&project=${episode.project}&episodeTitle=${encodeURIComponent(
            episode.episode_number
          )}`;
      } else if (nextPage === "days") {
        return `/${localStorage.getItem("projectSlug")}/days?episode=${episode.id
          }&project=${episode.project}&episodeTitle=${encodeURIComponent(
            episode.episode_number
          )}`;
      } else if (nextPage === "callsheets") {
        return `/${localStorage.getItem("projectSlug")}/callsheets?episode=${episode.id
          }&project=${episode.project}&episodeTitle=${encodeURIComponent(
            episode.episode_number
          )}`;
      } else if (nextPage === "findposts") {
        return `/${localStorage.getItem(
          "projectSlug"
        )}/findposts/departments?episode=${episode.id}&project=${episode.project
          }&episodeTitle=${encodeURIComponent(episode.episode_number)}`;
      } else {
        return `/${localStorage.getItem("projectSlug")}/scenes`;
      }
    },
    [nextPage]
  );

  return (
    <div>
      {topbox ? "" : <TopBox title="Episodes" />}
      <Row>
        {/* back bit */}
        <Col xs={4}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Col>
        {/* imp but */}
        <Col xs={4} className="text-center">
          <Button
            className={`py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={() => setShowImp((showImp) => !showImp)}
          >
            IMPORTANT
          </Button>
        </Col>
        {/* info but */}
        <Col className="float-right" xs={4}>
          <Button
            className={`float-right py-0 my-2 ${btnStyles.Blue} ${btnStyles.Button}`}
            onClick={() => setShowInfo((showInfo) => !showInfo)}
          >
            INFO
          </Button>
        </Col>
      </Row>
      {/* showInfo */}
      <Row>
        <Col>{!showInfo ? "" : <InfoCreate />}</Col>
      </Row>
      {/* showImp */}
      <Row>
        <Col>{!showImp ? "" : <ImportCreate />}</Col>
      </Row>
      {
        currentUser?.groups[0]?.name !== "Crew" &&
        <>
          <h3 className="text-center">Create Episodes</h3>
          <Form className={`mb-3 ${styles.Back}`} onSubmit={handleSubmit}>
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center p-0 p-md-2"
                xs={{ span: 4, offset: 4 }}
              >
                <Form.Group controlId="number" className={`${styles.Width2} `}>
                  <Form.Label className={`${styles.Bold}`}>
                    Episode Number
                  </Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    name="number"
                    value={number}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.number?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center p-0 p-md-2"
                xs={{ span: 4, offset: 4 }}
              >
                <Form.Group controlId="title" className={`${styles.Width2} `}>
                  <Form.Label className={`${styles.Bold}`}>Title</Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.title?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className={`mt-3 ${styles.Container}`}>{buttons}</div>
              </Col>
            </Row>
          </Form>
        </>
      }


      <EpisodeList
        episodes={episodes}
        currentUser={currentUser}
        handleEpisodeDelete={handleEpisodeDelete}
        getLink={getLink}
      />
    </div>
  );
}
