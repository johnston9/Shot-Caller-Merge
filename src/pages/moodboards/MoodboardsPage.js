/* Page to fetch all Moodboard data and render the cover info 
 * Contains the MoodboardTop component to which it passes the data
   for each Moodboard cover
 * Contains a search for Moodboards function
 * The word moodshots is used through the app in the urls for 
   Moodboards as it connects with the MootShot App in 
   Shot Caller API in DRF */
import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import MoodboardTop from "./MoodboardTop";
import Info from "./Info";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import styles from "../../styles/Moodboards.module.css";
import btnStyles from "../../styles/Button.module.css";

const MoodboardsPage = ({
  sceneId = "",
  number = "",
  characterRole = "",
  locationPlace = "",
  message,
  filter = "",
}) => {
  const currentUser = useCurrentUser();
  const host = useHostName();
  // useRedirect();
  const [moodshots, setMoodshots] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  // for testing only
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("Loading...");
    const fetchShots = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `moodshots/?${filter}&search=${query}`
          );
          console.log(data);
          setMoodshots(data);
          setHasLoaded(true);
        } else {
          const { data } = await axiosInstance.get(
            `/${localStorage.getItem(
              "projectSlug"
            )}/moodshots/?${filter}&search=${query}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          console.log(data);
          setMoodshots(data);
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        fetchShots();
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchShots();
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, host]);

  return (
    <div>
      <TopBox
        work="Moodboards"
        scene={number}
        title={query}
        title4={locationPlace}
        title3={characterRole}
        episodeTitle={`Episode ${episodeTitle}`}
      />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />}
      {sceneId ? (
        <Row className="mb-3">
          <Col className="text-center">
            <>
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
                        )}/scene/moodshot/create`
                      )
                    }
                    className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}
                  >
                    Add Scene {number} Moodboard
                  </Button>
                )}
            </>
          </Col>
        </Row>
      ) : characterRole ? (
        <Row className="mb-3">
          <Col className="text-center">
            <>
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
                        )}/character/moodshot/create`
                      )
                    }
                    className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}
                  >
                    Add {characterRole} Moodboard
                  </Button>
                )}
            </>
          </Col>
        </Row>
      ) : locationPlace ? (
        <Row className="mb-3">
          <Col className="text-center">
            <>
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
                        )}/location/moodshot/create`
                      )
                    }
                    className={`px-5 py-1 ${btnStyles.Button} ${btnStyles.Bright}`}
                  >
                    Add {locationPlace} Moodboard
                  </Button>
                )}
            </>
          </Col>
        </Row>
      ) : (
        <>
          <Row>
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
                        )}/moodshot/create`
                      )
                    }
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                  >
                    Add Moodboard
                  </Button>
                )}
            </Col>
          </Row>
          <Row>
            <Col
              className="py-2 text-center"
              xs={12}
              md={{ span: 6, offset: 3 }}
            >
              <Form
                className={`${styles.SearchBar} mt-3`}
                onSubmit={(event) => event.preventDefault()}
              >
                <Form.Control
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  className="mr-sm-2"
                  placeholder="Search by Scene Number, Location or Character"
                />
              </Form>
            </Col>
          </Row>
        </>
      )}
      <Row className="mt-3 px-2">
        <Col>
          {hasLoaded ? (
            <>
              {moodshots.results.length ? (
                moodshots.results.map((shot) => (
                  <MoodboardTop key={shot.id} {...shot} />
                ))
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
        </Col>
      </Row>
    </div>
  );
};

export default MoodboardsPage;
