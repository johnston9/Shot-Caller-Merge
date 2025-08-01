import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import toast from "react-hot-toast";
import { axiosInstance } from "../../api/axiosDefaults";

export default function FreezeScenes({
  selectedSeries,
  selectedEpisode,
  freezeStatus,
  freezeId,
  fetchScenes,
}) {
  const currentUser = useCurrentUser();

  // Television
  const projectCategoryType =
    currentUser?.project_category_type &&
    JSON.parse(currentUser.project_category_type);

  // const [toggleFreeze, setToggleFreeze] = useState(false);

  const handleProjectSceneFreeze = async () => {
    try {
      if (freezeId) {
        // want to edit
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/freeze_scenes/${freezeId}/`,
          {
            project_slug: localStorage?.getItem("projectSlug"),
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
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/freeze_scenes/`,
          {
            project_slug: localStorage?.getItem("projectSlug"),
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
      }

      fetchScenes();
      toast.success("Scenes freezed!");
    } catch (error) {
      console.log("freeze error: ", error);
    }
  };

  const handleFreezeEpisodeScenes = async () => {
    if (!selectedEpisode) {
      toast.error("Episode missing!");
      return;
    }
    try {
      if (freezeId) {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/freeze_scenes/${freezeId}/`,
          {
            project_slug: localStorage?.getItem("projectSlug"),
            episode: Number(selectedEpisode),
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
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/freeze_scenes/`,
          {
            project_slug: localStorage?.getItem("projectSlug"),
            episode: Number(selectedEpisode),
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
      }

      fetchScenes();
      // setSelectedEpisode("");
      // setSelectedSeries("");
      toast.success("Scenes are freezed!");
      // setToggleFreeze(false);
      // setEpisodes(data.episodes);
    } catch (error) {
      console.log("freeze error: ", error);
    }
  };

  const handleProjectSceneUnfreeze = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${localStorage.getItem("projectSlug")}/freeze_scenes/${freezeId}/`,
        {
          project_slug: localStorage?.getItem("projectSlug"),
          is_frozen: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      fetchScenes();
      toast.success("Scenes are unfreezed!");
      // setEpisodes(data.episodes);
    } catch (error) {
      console.log("freeze error: ", error);
    }
  };

  const handleUnFreezeEpisodeScenes = async () => {
    // alert()
    if (!selectedEpisode) {
      toast.error("Episode missing!");
      return;
    }
    try {
      const { data } = await axiosInstance.put(
        `${localStorage.getItem("projectSlug")}/freeze_scenes/${freezeId}/`,
        {
          project_slug: localStorage?.getItem("projectSlug"),
          episode: Number(selectedEpisode),
          is_frozen: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      fetchScenes();
      // setSelectedEpisode("");
      // setSelectedSeries("");
      toast.success("Scenes are unfreezed!");
      // setToggleFreeze(false);
      // setEpisodes(data.episodes);
    } catch (error) {
      console.log("freeze error: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "0.5rem",
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      {projectCategoryType !== "Television" && (
        <Button
          onClick={
            freezeStatus ? handleProjectSceneUnfreeze : handleProjectSceneFreeze
          }
        >
          {freezeStatus ? "Unfreeze" : "Freeze"}
        </Button>
      )}

      {projectCategoryType === "Television" && selectedEpisode && (
        <Button
          onClick={
            freezeStatus
              ? handleUnFreezeEpisodeScenes
              : handleFreezeEpisodeScenes
          }
        >
          {freezeStatus ? "Unfreeze" : "Freeze"}
        </Button>
      )}
    </div>
  );
}
