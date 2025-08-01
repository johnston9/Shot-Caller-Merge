/* Context file to fetch the crew data and crew emails
 * The EditCrewInfoContext is used to refetch the data on edit */
import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance, axiosReq } from "../api/axiosDefaults";
import useHostName from "../hooks/useHostName";
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config";

export const CrewInfoContext = createContext();
export const SetCrewInfoContext = createContext();
export const useCrewInfoContext = () => useContext(CrewInfoContext);
export const useSetCrewInfoContext = () => useContext(SetCrewInfoContext);

export const CrewEmailsContext = createContext();
export const SetCrewEmailsContext = createContext();
export const useCrewEmailsContext = () => useContext(CrewEmailsContext);
export const useSetCrewEmailsContext = () => useContext(SetCrewEmailsContext);

export const EditCrewInfoContext = createContext();
export const SetEditCrewInfoContext = createContext();
export const useEditCrewInfoContext = () => useContext(EditCrewInfoContext);
export const useSetEditCrewInfoContext = () =>
  useContext(SetEditCrewInfoContext);

export const CrewInfoProvider = ({ children }) => {
  const host = useHostName();
  const [editCrewInfo, setEditCrewInfo] = useState(false);
  const [crewInfo, setCrewInfo] = useState({ results: [] });
  const [emails, setEmails] = useState({ results: [] });

  const fetchCrewInfo = async () => {
    /* function to fetch the crew info */
    if (localStorage.getItem("accessToken")) {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`crewinfonew/`);
          setCrewInfo(data.results[0]);
          /* function to filter all the crew emails to new array */
          let emailArray = [];
          for (const [key, value] of Object.entries(data.results[0])) {
            if (key.includes("email") && value.length > 0) {
              emailArray.push(value);
            }
          }
          setEmails(emailArray);
          setEditCrewInfo(false);
        } else {
          if (localStorage.getItem("accessToken")) {
            const { data } = await axiosInstance.get(
              `${localStorage.getItem("projectSlug")}/crewinfonew/`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            );
            setCrewInfo(data?.results[0]);
            if (!data?.results || data?.results?.length <= 0) return;
            /* function to filter all the crew emails to new array */
            let emailArray = [];
            for (const [key, value] of Object.entries(data.results[0])) {
              if (key.includes("email") && value.length > 0) {
                emailArray.push(value);
              }
            }
            setEmails(emailArray);
            setEditCrewInfo(false);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchCrewInfo();
  }, [editCrewInfo]);

  return (
    <CrewInfoContext.Provider value={crewInfo}>
      <SetCrewInfoContext.Provider value={setCrewInfo}>
        <CrewEmailsContext.Provider value={emails}>
          <SetCrewEmailsContext.Provider value={setEmails}>
            <EditCrewInfoContext.Provider value={editCrewInfo}>
              <SetEditCrewInfoContext.Provider value={setEditCrewInfo}>
                {children}
              </SetEditCrewInfoContext.Provider>
            </EditCrewInfoContext.Provider>
          </SetCrewEmailsContext.Provider>
        </CrewEmailsContext.Provider>
      </SetCrewInfoContext.Provider>
    </CrewInfoContext.Provider>
  );
};
