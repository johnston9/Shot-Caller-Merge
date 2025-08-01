/* Page to fetch all Scenes data and render the cover info 
 * Contains the SceneTop component to which it passes the data
   for each Scene cover */
import React, { useEffect, useLayoutEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import SceneTop from "./SceneTop";
import { useSetActContext } from "../../contexts/ActContext";
import TopBox from "../../components/TopBox";
import r1 from "../../assets/r1.png";
import Information from "./info/Information";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Freeze from "./Freeze";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import FreezeScenes from "./FreezeScenes";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ScenesPage = ({ message, filter = "" }) => {
  const host = useHostName();
  const location = useLocation();
  useRedirect();
  const crewInfoOne = useCrewInfoContext();
  const freeze = crewInfoOne?.freeze || "";
  // const freeze = true;
  const currentUser = useCurrentUser();
  const superAdmin = currentUser?.username === "superAdmin";
  // const superAdmin = true;
  const [scenes, setScenes] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const setAct = useSetActContext();
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(false);
  const [series, setSeries] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [selectedSeriesFreeze, setSelectedSeriesFreeze] = useState("");
  const [selectedEpisodeFreeze, setSelectedEpisodeFreeze] = useState("");

  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const epi = params.get("episode");
  const pro = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const projectType = currentUser?.project_category_type
    ? JSON.parse(currentUser?.project_category_type)
    : null;

  /* The following 4 functions set the Act the useSetActContext
       for which to fetch the Scenes
     * This will be read in App.js and passed as a filter
       to the /act/scenes Route */
  const handleClickAct1 = () => {
    setAct("one");
    history.push(`/${localStorage.getItem("projectSlug")}/act/scenes`);
  };

  const handleClickAct2a = () => {
    setAct("two-a");
    history.push(`/${localStorage.getItem("projectSlug")}/act/scenes`);
  };

  const handleClickAct2b = () => {
    setAct("two-b");
    history.push(`/${localStorage.getItem("projectSlug")}/act/scenes`);
  };

  const handleClickAct3 = () => {
    setAct("three");
    history.push(`/${localStorage.getItem("projectSlug")}/act/scenes`);
  };

  const fetchScenes = async () => {
    setHasLoaded(false);
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(
          `/scenes/?${filter}&search=${query}`
        );
        setScenes(data);
        setHasLoaded(true);
      } else {
        const { data } = await axiosInstance.get(
          projectType !== "Television" && !epi
            ? `${localStorage.getItem(
                "projectSlug"
              )}/scenes/?${filter}&search=${query}`
            : epi
            ? `${localStorage.getItem(
                "projectSlug"
              )}/scenes/?${filter}&search=${query}&episodeId=${epi}`
            : `${localStorage.getItem(
                "projectSlug"
              )}/scenes/?${filter}&search=${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setScenes(data);
        setHasLoaded(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    /* Function to fetch all Scenes */

    const timer = setTimeout(() => {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        fetchScenes();
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchScenes();
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query, filter, selectedEpisode]);

  const clickScript = () => {
    /* Function to take the user to the Script Page */
    history.push(
      `/${localStorage.getItem("projectSlug")}/script${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  useLayoutEffect(() => {
    if (projectType === "Television" && !epi) {
      history.push(
        `/${localStorage.getItem(
          "projectSlug"
        )}/episodes/create?nextPage=scenesPage`
      );
    }
  }, [projectType, history]);

  useEffect(() => {
    if (epi) {
      setSelectedEpisode(epi.toString());
    } else {
      setSelectedEpisode("");
    }
  }, [params, epi]);

  const handleChange = (key, value) => {
    // const searchParams = new URLSearchParams(location.search);

    if (value === "" || value === undefined) {
      // Remove the query param if the value is empty or undefined
      params.delete(key);
    } else {
      // Set the query param to the selected value
      params.set(key, value);
    }

    // Update the URL with the new query params
    history.push({
      pathname: location.pathname,
      search: params.toString(),
    });
  };

  return (
    <div>
      <TopBox
        title="Scenes Workspace"
        episodeTitle={`Episode ${episodeTitle}`}
      />
      <Row className="mb-3">
        <Col xs={4}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mt-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Col>
        <Col xs={4} className="text-center mt-2">
          <Button
            className={`${btnStyles.Button}  ${btnStyles.Bright}`}
            onClick={() => clickScript()}
          >
            {" "}
            Script
          </Button>
        </Col>
        <Col xs={4}>
          <Button
            className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowInfo((showInfo) => !showInfo)}
          >
            INFO
          </Button>
        </Col>
      </Row>
      {!showInfo ? "" : <Information />}
      {/* Freeze component for the Super Admin only */}
      {/* {freeze ? (
        ""
      ) : (
        <Row className="my-3">
          <Col className="text-center" md={{ span: 10, offset: 1 }}>
            <p>
              Scene Numbers may be changed up to a certain point in productions.
            </p>
            <p>The production team will freeze the numbers at that point.</p>
          </Col>
        </Row>
      )} */}

      {/* Add Scene */}
      <Row className="mt-0">
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin" ||
              currentUser?.groups[0]?.name === "Admincreative") && (
              <Button
                onClick={() =>
                  history.push(
                    `/${localStorage.getItem(
                      "projectSlug"
                    )}/scenes/create?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
                  )
                }
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}
              >
                Create Scene
              </Button>
            )}
        </Col>
      </Row>
      {/* search  */}
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

            <div>
              {currentUser?.groups[0]?.name === "Superadmin" && (
                <Row>
                  <FreezeScenes
                    selectedEpisode={selectedEpisode}
                    freezeStatus={scenes?.freeze_status}
                    freezeId={scenes?.freeze_id}
                    fetchScenes={fetchScenes}
                  />
                </Row>
              )}
            </div>
          </Form>
        </Col>
      </Row>
      {projectType !== "Television" && (
        <Row className="mt-1">
          <Col className="text-center" xs={6} md={3}>
            <Button
              className={`py-0 ${btnStyles.Button} ${btnStyles.Back}`}
              onClick={handleClickAct1}
            >
              Act One
            </Button>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <Button
              className={`py-0 ${btnStyles.Button} ${btnStyles.Back}`}
              onClick={handleClickAct2a}
            >
              Act Two A
            </Button>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <Button
              className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Back}`}
              onClick={handleClickAct2b}
            >
              Act Two B
            </Button>
          </Col>
          <Col className="text-center" xs={6} md={3}>
            <Button
              className={`py-0 mt-2 mt-md-0  ${btnStyles.Button} ${btnStyles.Back}`}
              onClick={handleClickAct3}
            >
              Act Three
            </Button>
          </Col>
        </Row>
      )}
      <p
        style={{ textTransform: "uppercase" }}
        className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle}`}
      ></p>
      {/* render scenes */}
      <Row className="h-100 mt-3 px-2">
        {hasLoaded ? (
          <>
            {scenes?.results?.length ? (
              scenes?.results?.map((scene, index) => {
                return (
                  <Col xs={6} sm={4} md={3} lg={2} className="p-1 ">
                    <SceneTop
                      projectType={projectType}
                      episodeTitle={episodeTitle}
                      pro={pro}
                      epi={epi}
                      key={scene.id}
                      {...scene}
                      setScenes={setScenes}
                      style={{
                        backgroundImage:
                          index % 3 === 0
                            ? `url(${r1})`
                            : index % 2 === 0
                            ? `url(${r1})`
                            : `url(${r1})`,
                        objectFit: "fill",
                        width: "auto",
                        repeat: "no-repeat",
                      }}
                    />
                  </Col>
                );
              })
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Row>
    </div>
  );
};

export default ScenesPage;
