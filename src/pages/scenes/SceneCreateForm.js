/* Form Page to create a Scene by giving it a number */
import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useHistory, use } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import useRedirect from "../../hooks/Redirect";
import InfoCreate from "./info/InfoCreate";
import ImportCreate from "./info/ImportCreate";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";

function SceneCreateForm({ topbox }) {
  const host = useHostName();
  const user = useCurrentUser();
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const episode = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  // const series = params.get("seriesId");

  const projectType = user?.project_category_type
    ? JSON.parse(user?.project_category_type)
    : null;

  useRedirect();
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [postData, setPostData] = useState({
    number: "",
  });

  const { number } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White}`}>
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      {user?.groups[0]?.name !== "Crew" && (
        <Button
          className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
          type="submit"
        >
          Create
        </Button>
      )}
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    if (projectType === "Television" && episode) {
      formData.append("episode", episode);
    }

    let body;
    if (projectType === "Television" && episode) {
      body = {
        number: Number(number),
        episode: Number(episode),
      };
    } else {
      body = {
        number: Number(number),
      };
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/scenes/", formData);
        history.push(
          `/${localStorage.getItem("projectSlug")}/scenes/${data.id}`
        );
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/scenes/`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        if (projectType === "Television") {
          history.push(
            `/${localStorage.getItem(
              "projectSlug"
            )}/scenes?episode=${episode}&project=${project}&episodeTitle=${episodeTitle}`
          );
        } else {
          history.push(`/${localStorage.getItem("projectSlug")}/scenes`);
        }
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleFreezeEpisodeScenes = async () => {
    if (!episode) {
      toast.error("No episode available");
      return;
    }
    try {
      const { data } = await axiosInstance.post(
        `${localStorage.getItem("projectSlug")}/freeze_scenes/`,
        {
          project_slug: localStorage?.getItem("projectSlug"),
          episode: Number(episode),
          is_frozen: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Scenes are freezed for this series and episodes!");
      // setToggleFreeze(false);
      // setEpisodes(data.episodes);
    } catch (error) {
      console.log("freeze error: ", error);
    }
  };

  useEffect(() => {
    if (!episode && projectType === "Tele") {
      history.push(`/${localStorage.getItem("projectSlug")}/episodes/create`);
    }
  }, [episode]);

  return (
    <div>
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Scene" episodeTitle={`Episode ${episodeTitle}`} />
      )}
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
      {/* {user?.groups[0]?.name === "Superadmin" &&
        projectType === "Television" && (
          <Row
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="button" onClick={handleFreezeEpisodeScenes}>
              Freeze
            </Button>
          </Row>
        )} */}
      <h3 className="text-center">Create Scene</h3>
      <Form className={`mb-3 ${styles.Back}`} onSubmit={handleSubmit}>
        <Row className="text-center">
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            xs={{ span: 4, offset: 4 }}
          >
            <Form.Group controlId="number" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Number</Form.Label>
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
        <Row>
          <Col className="text-center">
            <div className={`mt-3 ${styles.Container}`}>{buttons}</div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SceneCreateForm;
