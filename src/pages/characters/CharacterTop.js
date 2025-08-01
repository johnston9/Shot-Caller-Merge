/* Component rendered on the CharactersPage to display the 
   cover info for each Character
 * When clicked on it opens that Character's CharacterPage */
import React from "react"
import { Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import styles from "../../styles/Characters.module.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { PostDropdown } from "../../components/PostDropdown"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const CharacterTop = (props) => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  const { id, role } = props
  const history = useHistory()

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/characters/${id}/edit`
    )
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/characters/${id}/`)
        history.push(`/${localStorage.getItem("projectSlug")}/home`)
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/characters/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        history.push(`/${localStorage.getItem("projectSlug")}/characters`)
      }
    } catch (err) {}
  }

  return (
    <div className="mx-0">
      <Card className={`mx-1 text-center ${styles.Top}`}>
        <Link to={`/${localStorage.getItem("projectSlug")}/characters/${id}`}>
          <Card.Header className={`py-2 ${styles.Top}`}>
            <Row className="d-flex align-items-center">
              <Col className="mx-0 px-0" xs={1}></Col>
              <Col xs={10} className="text-center px-0">
                <h5 className={` ${styles.Titlelist}`}> {role}</h5>
              </Col>
              <Col xs={1} className="text-center mx-0 px-0">
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  (currentUser?.groups[0]?.name === "Admin" ||
                    currentUser?.groups[0]?.name === "Superadmin" ||
                    currentUser?.groups[0]?.name === "Admincreative") && (
                    <PostDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
              </Col>
            </Row>
          </Card.Header>
        </Link>
      </Card>
    </div>
  )
}

export default CharacterTop
