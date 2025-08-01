/* Page to fetch the Shooting Schedule Days data and all 
   Schedule Scenes
 * Contains DayTop component to which it passes the
   Day's cover info and the Schedule Scenes
 * Contains the link to the DayCreateForm component
 * Contains the Calendar component */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import toast from "react-hot-toast";
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
import EpisodeList from "../episodes/EpisodeList";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import "react-calendar/dist/Calendar.css";

const ScheduleDaysEpisode = () => {
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
  const [episodes, setEpisodes] = useState([]);
  const [daysScenes, setDaysScenes] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setError] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const filter = "";
  const message = "No Days Added";
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(false);

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
    }
  };

  const handleDate = (date) => {
    /* Change the Calander date format to the DRF model's format */
    const formatdate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setNewdate(formatdate);
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

    return `/${localStorage.getItem("projectSlug")}/days?episode=${
      episode.id
    }&project=${episode.project}&episodeTitle=${encodeURIComponent(
      episode.episode_number
    )}`;
  }, []);

  return (
    <div>
      <TopBox title="Schedule" />
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

      <EpisodeList
        currentUser={currentUser}
        episodes={episodes}
        getLink={getLink}
        handleEpisodeDelete={handleEpisodeDelete}
      />
    </div>
  );
};

export default ScheduleDaysEpisode;
