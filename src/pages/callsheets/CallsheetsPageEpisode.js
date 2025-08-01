/* Page to fetch all Callsheets data and render the display info
 * Contains the CallsheetTop component to which it passes the data 
   for each Callsheet cover */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import CallsheetTop from "./CallsheetTop";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EpisodeList from "../episodes/EpisodeList";

import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";

const CallsheetsPageEpisode = ({ filter = "" }) => {
  useRedirect();
  const host = useHostName();
  const [callsheets, setCallsheets] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [episodes, setEpisodes] = useState([]);
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

  const getLink = useCallback((episode) => {
    // Add null/undefined check for episode
    if (!episode) return "/";

    return `/${localStorage.getItem("projectSlug")}/callsheets?episode=${
      episode.id
    }&project=${episode.project}&episodeTitle=${encodeURIComponent(
      episode.episode_number
    )}`;
  }, []);

  return (
    <div>
      <TopBox work="Callsheets" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>

      <EpisodeList
        currentUser={currentUser}
        episodes={episodes}
        getLink={getLink}
        handleEpisodeDelete={handleEpisodeDelete}
      />
    </div>
  );
};

export default CallsheetsPageEpisode;
