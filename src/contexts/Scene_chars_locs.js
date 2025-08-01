// Context file to fetch all Scenes, Characters and all Locations
import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance, axiosReq } from "../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config";
import useHostName from "../hooks/useHostName";

export const ScenesContext = createContext();
export const SetScenesContext = createContext();
export const useScenesContext = () => useContext(ScenesContext);
export const useSetScenesContext = () => useContext(SetScenesContext);

export const CharactersContext = createContext();
export const SetCharactersContext = createContext();
export const useCharactersContext = () => useContext(CharactersContext);
export const useSetCharactersContext = () => useContext(SetCharactersContext);

export const LocationsContext = createContext();
export const SetLocationsContext = createContext();
export const useLocationsContext = () => useContext(LocationsContext);
export const useSetLocationsContext = () => useContext(SetLocationsContext);

export const ScenesCharactersLocationsProvider = ({ children }) => {
  const host = useHostName();
  const [scenes, setScenes] = useState({ results: [] });
  const [characters, setCharacters] = useState({ results: [] });
  const [locations, setLocations] = useState({ results: [] });

  const fetchScenes = async () => {
    /* Function to fetch all scenes */

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(`/scenes/`);
        setScenes(data);
      } else {
        if (localStorage.getItem("accessToken")) {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/scenes/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          setScenes(data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCharacters = async () => {
    /* Function to fetch all characters */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(`characters/`);
        setCharacters(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem("projectSlug")}/characters/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setCharacters(data);
      }
    } catch (err) {}
  };

  const fetchLocations = async () => {
    /* Function to fetch all locations */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.get(`/locations/`);
        setLocations(data);
      } else {
        const { data } = await axiosInstance.get(
          `${localStorage.getItem("projectSlug")}/locations/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setLocations(data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (host === CLIENT_PROGRAM_HOSTNAME) {
      fetchScenes();
      fetchCharacters();
      fetchLocations();
    } else {
      if (localStorage.getItem("accessToken")) {
        fetchScenes();
        fetchCharacters();
        fetchLocations();
      }
    }
  }, [host]);

  return (
    <ScenesContext.Provider value={scenes}>
      <SetScenesContext.Provider value={setScenes}>
        <CharactersContext.Provider value={characters}>
          <SetCharactersContext.Provider value={setCharacters}>
            <LocationsContext.Provider value={locations}>
              <SetLocationsContext.Provider value={setLocations}>
                {children}
              </SetLocationsContext.Provider>
            </LocationsContext.Provider>
          </SetCharactersContext.Provider>
        </CharactersContext.Provider>
      </SetScenesContext.Provider>
    </ScenesContext.Provider>
  );
};
