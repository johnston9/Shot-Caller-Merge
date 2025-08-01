/* Context file to fetch all Profiles
 * handleFollow and unhandleFollow functions
   Which use the followHelper function in utils
 * query context is just used to reload after selection is changed */
import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance, axiosReq, axiosRes } from "../api/axiosDefaults";
import { followHelper, unfollowHelper } from "../utils/utils";
import { useSetCurrentUser } from "./CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config";
import useHostName from "../hooks/useHostName";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const QueryContext = createContext();
export const SetQueryContext = createContext();
export const useQueryContext = () => useContext(QueryContext);
export const useSetQueryContext = () => useContext(SetQueryContext);

export const ProfileDataProvider = ({ children }) => {
  const host = useHostName();
  // eslint-disable-next-line
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [profileData, setProfileData] = useState({
    // This is used on the Profile page
    pageProfile: { results: [] },
    profiles: { results: [] },
  });

  const currentUser = useSetCurrentUser();

  const handleFollow = async (clickedProfile) => {
    /* Function to create a follow item if a users clicks Follow
         and update the states to reflect this */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/followers/", {
          followed: clickedProfile.id,
        });

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/followers/`,
          {
            followed: clickedProfile.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    /* Function to remove a follow item if a users clicks unFollow
         and update the states to reflect this */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
        }));
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/followers/${
            clickedProfile.following_id
          }/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
        }));
      }
    } catch (err) {}
  };

  useEffect(() => {
    /* Function to fetch all Profiles */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `profiles/?ordering=-followers_count&search=${query}`
          );
          setProfileData((prevState) => ({
            ...prevState,
            profiles: data,
          }));
          setHasLoaded(true);
        } else {
          if (localStorage.getItem("accessToken")) {
            const { data } = await axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/profiles/?ordering=-followers_count&search=${query}`,
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
            setProfileData((prevState) => ({
              ...prevState,
              profiles: data,
            }));
            setHasLoaded(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser, query, localStorage.getItem("accessToken")]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        <QueryContext.Provider value={query}>
          <SetQueryContext.Provider value={setQuery}>
            {children}
          </SetQueryContext.Provider>
        </QueryContext.Provider>
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
