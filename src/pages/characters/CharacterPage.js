/* Page to fetch the data for each Character
 * Contains the Character Component to which it passes the data */
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { useRedirect } from "../../hooks/Redirect"
import Button from "react-bootstrap/Button"
import btnStyles from "../../styles/Button.module.css"
import Character from "./Character"
import TopBox from "../../components/TopBox"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const CharacterPage = () => {
  useRedirect()
  const host = useHostName()
  const { id } = useParams()
  const [character, setCharacter] = useState({ results: [] })
  const history = useHistory()
  const [title, setTitle] = useState("")

  useEffect(() => {
    /* Function to fetch the Character data */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq(`/characters/${id}`)
          const role = data.role
          setTitle(role)
          setCharacter({ results: [data] })
        } else {
          const { data } = await axiosInstance(
            `${localStorage.getItem("projectSlug")}/characters/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          const role = data.role
          setTitle(role)
          setCharacter({ results: [data] })
        }
      } catch (err) {
        console.log(err)
      }
    }
    handleMount()
  }, [id])

  return (
    <div>
      <TopBox title={title} />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Character {...character.results[0]} />
    </div>
  )
}

export default CharacterPage
