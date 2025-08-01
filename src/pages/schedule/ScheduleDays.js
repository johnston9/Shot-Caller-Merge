/* Page to fetch the Shooting Schedule Days data and all 
   Schedule Scenes
 * Contains DayTop component to which it passes the
   Day's cover info and the Schedule Scenes
 * Contains the link to the DayCreateForm component
 * Contains the Calendar component */
import React, { useEffect, useLayoutEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useHistory } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import DayTop from "./day/DayTop";
import Info from "./Info";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import "react-calendar/dist/Calendar.css";

const SchedulePages = () => {
  const host = useHostName();
  // useRedirect();
  // eslint-disable-next-line
  const currentUser = useCurrentUser();
  const queryString = window.location.search;

  const projectType = currentUser?.project_category_type
    ? JSON.parse(currentUser?.project_category_type)
    : null;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const [today, setToday] = useState(new Date());
  const [newdate, setNewdate] = useState("");
  const [days, setDays] = useState({ results: [] });
  const [daysScenes, setDaysScenes] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setError] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const filter = "";
  const message = "No Days Added";
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchDays = async () => {
      /* Fetch all Days and all schedule scenes */
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const [{ data: daysData }, { data: scenesData }] = await Promise.all([
            axiosReq.get(`days/?${filter}&search=${query}`),
            axiosReq.get(`schedule/scenes`),
          ]);
          // const { data } = await axiosReq.get(`/days/?${filter}&search=${query}`);
          setDays(daysData);
          setDaysScenes(scenesData);
          setHasLoaded(true);
        } else {
          const [{ data: daysData }, { data: scenesData }] = await Promise.all([
            axiosInstance.get(
              // if epi is present, add it to the query string
              `${localStorage.getItem(
                "projectSlug"
              )}/days/?${filter}&search=${query}${
                epi ? `&episode_ids=${epi}` : ""
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
            axiosInstance.get(
              `${localStorage.getItem("projectSlug")}/schedule/scenes`,
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
          // const { data } = await axiosReq.get(`/days/?${filter}&search=${query}`);
          setDays(daysData);
          setDaysScenes(scenesData);
          setHasLoaded(true);
        }
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    setHasLoaded(false);

    const timer = setTimeout(() => {
      fetchDays();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query, filter]);

  const handleDate = (date) => {
    /* Change the Calander date format to the DRF model's format */
    const formatdate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setNewdate(formatdate);
  };

  return (
    <div>
      <TopBox title="Schedule" episodeTitle={`Episode ${episodeTitle}`} />
      {/* back info */}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />}
      {/* add day */}
      <Row className="mb-3">
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin") && (
              <Button
                onClick={() =>
                  history.push(
                    `/${localStorage.getItem("projectSlug")}/days/create${
                      epi && project && episodeTitle
                        ? `?episodeid=${epi}&project=${project}&episodeTitle=${episodeTitle}`
                        : ""
                    }`
                  )
                }
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
              >
                Create Day
              </Button>
            )}
        </Col>
      </Row>
      {/* calender */}
      <h5 className={`mt-3 text-center py-1 ${styles.SubTitle}`}>
        Shoot Days Calendar
      </h5>
      <div>
        <Row className={`mx-1 py-3`}>
          <Col>
            <div>
              <Row>
                <Col className="d-flex justify-content-center " xs={12} md={6}>
                  <Calendar
                    onChange={(date) => handleDate(date)}
                    value={today}
                  />
                </Col>
                <Col className="p-1" xs={12} md={6}>
                  <Row className="text-center">
                    <Col>
                      <p>
                        Click Calendar dates to find Shoot Days. Dates with a
                        Shooting Day will display. If not nothing will show.
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col
                      xs={{ span: 10, offset: 1 }}
                      md={{ span: 8, offset: 2 }}
                      className="mt-3 text-center"
                    >
                      {days.results.map((day) =>
                        day.date === newdate ? (
                          <DayTop daysScenes={daysScenes} {...day} />
                        ) : (
                          ""
                        )
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <h5 className={`mt-3 text-center py-1 mb-0 ${styles.SubTitle}`}>
        All Shoot Days
      </h5>
      <div>
        <Row>
          <Col
            className="mt-3"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search by Day Number"
              />
            </Form>
          </Col>
        </Row>
        {/* days */}
        <Row className="py-2">
          {hasLoaded ? (
            <>
              {days.results.length ? (
                days.results.map((day) => (
                  <Col
                    xs={{ span: 10, offset: 1 }}
                    sm={{ span: 6, offset: 0 }}
                    md={{ span: 4, offset: 0 }}
                    lg={3}
                    className="py-2"
                  >
                    <DayTop
                      daysScenes={daysScenes}
                      key={day.id}
                      {...day}
                      setDays={setDays}
                      epi={epi}
                      project={project}
                      episodeTitle={episodeTitle}
                    />
                  </Col>
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
        </Row>
      </div>
    </div>
  );
};

export default SchedulePages;
