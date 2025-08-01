/* Function to check if a user is logged in and redirect them
      to the home page if so */
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useCurrentUser } from "../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../utils/config"
import useHostName from "./useHostName"

export const useRedirectHome = () => {
  const host = useHostName()
  const history = useHistory()
  const user = useCurrentUser()
  useEffect(() => {
    /* Function to check if a user is logged in and redirect them
      to the home page if so */
    const handleMount = async () => {
      if (user) {
        history.push(`/${localStorage.getItem("projectSlug")}/home`)
        console.log("Redirected Home")
      }
    }

    if (host === CLIENT_PROGRAM_HOSTNAME) {
      handleMount()
    }

    // eslint-disable-next-line
  }, [history])
}

export default useRedirectHome
