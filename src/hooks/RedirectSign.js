/* Fix needed - for the gmail mobile browser issue
 * useRedirectSign function to direct a logged in user to the landing page
   when they go to the Signin or Sign up pages
 * The catch block throws an error because of the mobile gmail 
   browser issue not allowing posts and returned a 404
   so it is commented out */
import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config"
import useHostName from "./useHostName"

export const useRedirectSign = (userAuthStatus) => {
  const host = useHostName()
  const history = useHistory()
  useEffect(() => {
    /* Function to check if a user is logged in and redirect they
      back to the landing page if so */
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/")
        // if user is logged in
        history.push(`/${localStorage.getItem("projectSlug")}/home`)
        console.log(`RedirectSign loggedIn ${data}`)
      } catch (err) {
        console.log("RedirectSign NOT loggedIn")
      }
    }

    if (host === CLIENT_PROGRAM_HOSTNAME) {
      handleMount()
    }
  }, [history, userAuthStatus, host])
}

export default useRedirectSign
