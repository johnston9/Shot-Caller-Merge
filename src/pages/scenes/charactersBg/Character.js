/* Component in the CharacterBG Component to display the
   Character info
 * Contains the SceneCharacterEdit component */
import React from "react"
import styles from "../../../styles/Scene.module.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { useState } from "react"
import { PostDropdown } from "../../../components/PostDropdown"
import SceneCharacterEdit from "./SceneCharacterEdit"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"
import useHostName from "../../../hooks/useHostName"
import { useCurrentUser } from "../../../contexts/CurrentUserContext"

const Character = ({
  id,
  admin,
  cast_number,
  role,
  costume,
  character,
  setCharacters,
  handleMount,
}) => {
  const host = useHostName()
  const [showEditForm, setShowEditForm] = useState(false)
  const currentUser = useCurrentUser()

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/scenecharacters/${id}/`)
        handleMount()
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/scenecharacters/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        handleMount()
      }
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <div className={` mx-4 px-2`}>
      <Row>
        <Col className={`${styles.TitleBox3} text-center px-0 mx-0`} xs={2}>
          <p>{cast_number} </p>
        </Col>
        <Col className={`${styles.TitleBox5} pl-1 pr-0 mx-0`}>
          <p>{role} </p>
        </Col>
        {admin ? (
          <>
            <Col xs={currentUser?.groups[0]?.name !== "Crew" ? 4 : 3} className={`${styles.TitleBox3} px-0 mx-0`}>
              {costume ? <p className="pl-2">{costume} </p> : ""}
            </Col>
            {
              currentUser?.groups[0]?.name !== "Crew" &&
              <Col className={`${styles.TitleBox4} text-center px-0 mx-0`} xs={1}>
                <PostDropdown
                  className="pb-2"
                  handleEdit={() => setShowEditForm(true)}
                  handleDelete={handleDelete}
                />
              </Col>
            }
          </>
        ) : (
          <Col xs={3} className={`${styles.TitleBox4} px-0 mx-0`}>
            {costume ? <p className="pl-2">{costume} </p> : ""}
          </Col>
        )}
      </Row>
      {/* edit */}
      {showEditForm ? (
        <SceneCharacterEdit
          character={character}
          id={id}
          handleMount={handleMount}
          setCharacters={setCharacters}
          setShowEditForm={setShowEditForm}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default Character
