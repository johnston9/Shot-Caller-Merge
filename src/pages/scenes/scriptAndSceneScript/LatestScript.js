/* Component holding the Latest Project Script accessed from a link
   on the ScenesPage 
 * Contains the LatestScriptAdd Component
 * Contains the LatestScriptUpload Component
 * The Latest Script is the entire Project's Script  
   whereas Script Scene is a Scene's Script */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import { useRedirect } from "../../../hooks/Redirect";
import Asset from "../../../components/Asset";
import NoResults from "../../../assets/no-results.png";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import InfoLatestScript from "../info/InfoLatestScript";
import LatestScriptUpload from "./LatestScriptUpload";
import LatestScriptAdd from "./LatestScriptAdd";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";

const LatestScript = () => {
  const host = useHostName();
  useRedirect();
  const currentUser = useCurrentUser();
  const admin = true;
  const history = useHistory();
  const [addScript, setAddScript] = useState(false);
  const [editScript, setEditScript] = useState(false);
  const [showScriptInfo, setShowScriptInfo] = useState(false);
  const [scriptData, setScriptData] = useState({ results: [] });
  let script1 = scriptData?.results[0] || "";
  const draft = script1?.draft || "";
  let script = script1?.script || "";
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  console.log(script);
  const latest_changes = script1?.latest_changes || "";
  const notes = script1?.notes || "";
  const id = script1?.id || "";
  const [fileName, setFileName] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  const getFilename = (path) => {
    /* Function to get the script filename */
    const paths = path?.split("/");
    const name = paths?.length - 1;
    return paths[name];
  };

  useEffect(() => {
    script1 = scriptData?.results[0] || "";
  }, [scriptData]);
  useEffect(() => {
    script = script1?.script || "";
  }, [script1]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/script/`);
          // console.log(data);
          // console.log(data.results[0].script);
          setScriptData(data);
          /* Function to get the script filename */
          if (data.results[0].script) {
            const file = getFilename(data.results[0].script);
            setFileName(file);
          }
          setHasLoaded(true);
        } else {

          const projectSlug = localStorage.getItem("projectSlug");
          const accessToken = localStorage.getItem("accessToken");
          let url = `${projectSlug}/script/`;
          if (epi) { url += `?episode_ids=${epi}` }

          const { data } = await axiosInstance.get(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          });
          setScriptData(data);
          /* Function to get the script filename */
          // 
          if (data?.results) {
            const file = getFilename(data?.results[0]?.script);
            setFileName(file);
          }
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);

  return (
    <div>
      {hasLoaded ? (
        <>
          <Row className="my-1">
            <Col xs={4}>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Col>
            {admin ? (
              <>
                {script ? (
                  <>
                    <Col className="text-center" xs={4}>
                      {
                        currentUser?.groups[0]?.name !== "Crew" &&
                        <Button
                          onClick={() =>
                            setEditScript((editScript) => !editScript)
                          }
                          className={`${btnStyles.Button}  ${btnStyles.Bright}`}
                        >
                          {fileName ? "Add / Update Script" : "Add Latest Script"}
                        </Button>
                      }
                    </Col>
                    <Col xs={4}>
                      <Button
                        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
                        onClick={() =>
                          setShowScriptInfo((showScriptInfo) => !showScriptInfo)
                        }
                      >
                        INFO
                      </Button>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col className="text-center" xs={4}>
                      {currentUser?.groups[0]?.name !== "Crew" && (
                        <Button
                          onClick={() =>
                            setAddScript((addScript) => !addScript)
                          }
                          className={`${btnStyles.Button}  ${btnStyles.Bright}`}
                        >
                          Add Script
                        </Button>
                      )}
                    </Col>
                    <Col xs={4}>
                      <Button
                        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
                        onClick={() =>
                          setShowScriptInfo((showScriptInfo) => !showScriptInfo)
                        }
                      >
                        INFO
                      </Button>
                    </Col>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </Row>
          {!showScriptInfo ? "" : <InfoLatestScript />}
          <Row>
            <Col className="text-center">
              {!addScript ? (
                ""
              ) : (
                <LatestScriptAdd setAddScript={setAddScript} />
              )}
              {!editScript ? (
                ""
              ) : (
                <LatestScriptUpload
                  id={id}
                  draft1={draft}
                  script1={script}
                  fileName1={fileName}
                  latest_changes1={latest_changes}
                  notes1={notes}
                  setEditScript={setEditScript}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <>
                <h5
                  style={{ textTransform: "uppercase" }}
                  className={`mt-1 mb-3 pl-3 py-1 ${styles.SubTitle} text-center`}
                >
                  SCRIPT {draft}
                </h5>
                {script ? (
                  <>
                    <Row>
                      <Col xs={6}>
                        <p className={`text-center ${styles.Bold}`}>
                          Latest Changes
                        </p>
                        <p className={`text-center ${styles.Back}`}>
                          {latest_changes}
                        </p>
                      </Col>
                      <Col xs={6}>
                        <p className={`text-center ${styles.Bold}`}>Notes</p>
                        <p className={`text-center ${styles.Back}`}>{notes}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className={`${styles.Frame} mt-2`}>
                          <iframe
                            title="Script"
                            src={script}
                            className={appStyles.iframeFull}
                            alt="Script"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Link to={{ pathname: script }} target="_blank">
                        VIEW SCRIPT
                      </Link>
                    </div>
                  </>
                ) : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults} message="No Results" />
                  </Container>
                )}
              </>
            </Col>
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

export default LatestScript;
