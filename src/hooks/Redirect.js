/* useRedirect function to direct non logged in users to the landing page
 * Fix needed - Gmail mobile browser issue: 
   The app does not work when the link is clicked in Gmail. 
   The DRF tail logs show 401 for requests
   If the link in Gmail is pressed so as to offer an open in 
   browser option the app does work.
 * The Gmail mobile browser issue was affecting the original code which
   used a request to see if there is a refresh token
 * It is also affecting the request to dj-rest-auth/user which I used
   to replace the refresh token request 
 * FIX NEEDED REFRESH ISSUE
   I attempted to use the useCurrenrUser instead of making continued
   request but on REFRESH this returned null */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance, axiosRes } from "../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config";
import useHostName from "./useHostName";

export const useRedirect = () => {
  const host = useHostName();
  const history = useHistory();
  /* Function to check if a user is logged in and redirect them
      back to the landing page if not */
  const handleMount = async () => {
    try {
      if (!localStorage.getItem("accessToken")) {
        history.push(`/${localStorage.getItem("projectSlug")}/signin`);
      }
    } catch (err) {
      history.push(`/${localStorage.getItem("projectSlug")}/signin`);
      console.log(` Redirected to Landing`);
    }
  };
  useEffect(() => {
    if (host === CLIENT_PROGRAM_HOSTNAME) {
      handleMount();
    } else {
      handleMount();
    }

    // eslint-disable-next-line
  }, [localStorage.getItem("projectSlug")]);
};

export default useRedirect;
