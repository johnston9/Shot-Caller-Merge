/* Page to fetch the data for each Scene
 * Contains the Scene Component to which it passes the data */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import Scene from "./Scene";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useSetSceneContext } from "../../contexts/DeptCategoryContext";

const ScenePage = () => {
  const host = useHostName();
  const setSceneContext = useSetSceneContext();
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const epi = params.get("episode");
  const pro = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  useRedirect();
  const { id } = useParams();
  const [scene, setScene] = useState({ results: [] });
  const admin = true;

  useEffect(() => {
    /* Fetch each Scene */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq(`scenes/${id}`);
          setScene({ results: [data] });
        } else {
          const { data } = await axiosInstance(
            `${localStorage.getItem("projectSlug")}/scenes/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          setScene({ results: [data] });
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();

    if (id) {
      setSceneContext(id);
    }
  }, [id]);

  return (
    <div>
      <Row className="h-100">
        <Col>
          <Scene
            {...scene.results[0]}
            scene={scene.results[0]}
            setScene={setScene}
            admin={admin}
            episodeTitle={episodeTitle}
            pro={pro}
            epi={epi}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ScenePage;
