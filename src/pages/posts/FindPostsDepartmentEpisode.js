/* Page to display the links to find Posts 
   by Department */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { Button, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import {
  useSetCategoryContext,
  useSetDeptContext,
} from "../../contexts/DeptCategoryContext";
import { useRedirect } from "../../hooks/Redirect";
import dep1 from "../../assets/dep1.png";
import dep2 from "../../assets/dep2.png";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";
import dep7 from "../../assets/dep7.png";
import dep8 from "../../assets/dep8.png";
import dep9 from "../../assets/dep9.png";
import dep10 from "../../assets/dep10.png";
import dep11 from "../../assets/dep11.png";
import dep12 from "../../assets/dep12.png";
import dep13 from "../../assets/dep13.png";
import { DeptDropdown } from "../../components/PostDropdown";
import TopBox from "../../components/TopBox";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EpisodeList from "../episodes/EpisodeList";
import { axiosInstance } from "../../api/axiosDefaults";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";

const FindPostsDepartmentEpisode = () => {
  // useRedirect();
  const setDept = useSetDeptContext();
  const setCategory = useSetCategoryContext();

  const history = useHistory();
  const currentUser = useCurrentUser();
  const [episodes, setEpisodes] = useState([]);

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

    return `/${localStorage.getItem(
      "projectSlug"
    )}/findposts/departments?episode=${episode.id}&project=${
      episode.project
    }&episodeTitle=${encodeURIComponent(episode.episode_number)}`;
  }, []);

  /* The following 13 functions take the user to Posts
        * in a particular Department and Category
        * They set the Dept and Category Contexts 
        * This will be read on App.js page and passed
          as a filter to the /departments Route*/
  const handleClickCamera = (category) => {
    setDept("camera");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickSound = (category) => {
    setDept("sound");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickLocation = (category) => {
    setDept("location");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickScript = (category) => {
    setDept("script");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickArt = (category) => {
    setDept("art");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickMakeup = (category) => {
    setDept("make-up");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickWardrobe = (category) => {
    setDept("wardrobe");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickCasting = (category) => {
    setDept("casting");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickPost = (category) => {
    setDept("post");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickProduction = (category) => {
    setDept("production");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickStunts = (category) => {
    setDept("stunts");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickElectric = (category) => {
    setDept("electric");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickUniversal = () => {
    setDept("universal");
    setCategory("");
    history.push(
      `/${localStorage.getItem("projectSlug")}/departments${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  return (
    <div>
      <TopBox title="Find Posts" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>

      {/* Episode layer */}
      <EpisodeList
        episodes={episodes}
        currentUser={currentUser}
        handleEpisodeDelete={handleEpisodeDelete}
        getLink={getLink}
      />
    </div>
  );
};

export default FindPostsDepartmentEpisode;
