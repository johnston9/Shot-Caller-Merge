/* Component to fetch the Advanced Schedule data
 * Contain the Advanced Schedule to which it passses the data
 * Note: The Advanced Schedule is the first half of the next day's schedule*/
import React, { useEffect, useState } from "react";

import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import AdvancedSchedule from "./AdvancedSchedule";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";

const AdvancedSchedPage = (props) => {
  const host = useHostName();
  const { setShow, advancedDay } = props;
  const queryString = window.location.search;
  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  // eslint-disable-next-line
  const [hasLoaded, setHasLoaded] = useState("");
  const [dayInfo, setDayInfo] = useState({ results: [] });
  const [advancedSchedule, setAdvancedSchedule] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});

  useEffect(() => {
    /* Fetch day data and day schedule scenes data for the advancedDay */
    const fetchAdvancedSchedule = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const [{ data: dayGet }, { data: scenes }] = await Promise.all([
            axiosReq.get(`/days/?day=${advancedDay}`),
            axiosReq.get(`/schedule/scenes/?day=${advancedDay}`),
          ]);
          setDayInfo(dayGet);
          setAdvancedSchedule(scenes);
          setHasLoaded(true);
        } else {
          const [{ data: dayGet }, { data: scenes }] = await Promise.all([
            axiosInstance.get(
              `${localStorage.getItem("projectSlug")}/days/?day=${advancedDay}${
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
              `${localStorage.getItem(
                "projectSlug"
              )}/schedule/scenes/?day=${advancedDay}`,
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
          setDayInfo(dayGet);
          setAdvancedSchedule(scenes);
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
    fetchAdvancedSchedule();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AdvancedSchedule
        setShow={setShow}
        dayInfo={dayInfo.results[0]}
        scenes={advancedSchedule.results}
      />
    </div>
  );
};

export default AdvancedSchedPage;
