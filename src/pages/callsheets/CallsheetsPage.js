/* Page to fetch all Callsheets data and render the display info
 * Contains the CallsheetTop component to which it passes the data 
   for each Callsheet cover */
import React, { useEffect, useLayoutEffect, useState } from "react";

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
import CallsheetTop from "./CallsheetTop";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";

const CallsheetsPage = ({ filter = "" }) => {
  useRedirect();
  const host = useHostName();
  const [callsheets, setCallsheets] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();
  const queryString = window.location.search;
  // Television
  const projectType =
    currentUser?.project_category_type &&
    JSON.parse(currentUser.project_category_type);

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  useEffect(() => {
    /* Function to fetch all the Callsheets data */
    const fetchCallsheets = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `callsheetsnew/?${filter}${query ? `&search=${query}/` : ""}`
          );
          setCallsheets(data);
          setHasLoaded(true);
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/callsheetsnew/?${filter}${
              query ? `&search=${query}` : ""
            }${epi ? `&episode_ids=${epi}` : ""}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          setCallsheets(data);
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
      fetchCallsheets();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query]);

  useLayoutEffect(() => {
    if (projectType === "Television" && !epi) {
      history.push(
        `/${localStorage.getItem(
          "projectSlug"
        )}/episodes/create?nextPage=callsheets`
      );
    }
  }, [projectType, history]);

  return (
    <div>
      <TopBox work="Callsheets" episodeTitle={`Episode ${episodeTitle}`} />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <h4
        style={{ textTransform: "uppercase" }}
        className={`mt-1 text-center mt-1 mb-2 pl-3 py-1 ${styles.SubTitle}`}
      >
        CALLSHEETS
      </h4>
      <Row className="text-center d-none d-md-block">
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {currentUser &&
            currentUser?.groups.length > 0 &&
            currentUser?.groups[0]?.name !== "Cast" && (
              <p>
                Add all crew members to the Crew Info page. Create Callsheets
                from their scheduling page. Add to them or edit them from here
                or their Schedule page.
              </p>
            )}
        </Col>
      </Row>
      {/* search  */}
      <Row>
        <Col className="mt-3 text-center" xs={12} md={{ span: 6, offset: 3 }}>
          <Form
            className={`${styles.SearchBar} mt-1`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2 text-center"
              placeholder="Search by Day or Date"
            />
          </Form>
        </Col>
      </Row>
      {/* callsheets */}
      <Row className="h-100 mt-3 mb-5 mx-2">
        {hasLoaded ? (
          <>
            {callsheets.results.length ? (
              callsheets.results.map((callsheet) => {
                return (
                  <Col xs={4} sm={3} lg={2} className="p-0 p-lg-2">
                    <CallsheetTop key={callsheet.id} {...callsheet} />
                  </Col>
                );
              })
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message="No Results" />
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

export default CallsheetsPage;
