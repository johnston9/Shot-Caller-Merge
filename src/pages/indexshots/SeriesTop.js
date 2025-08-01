/* Component rendered on the SeriesPage to display the 
   cover info for each Series of IndexShots
 * When clicked on it opens that Series's IndexShots page
 * Contains the SeriesEditForm */
import React, { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { PostDropdown } from "../../components/PostDropdown"
import styles from "../../styles/Characters.module.css"
import btnStyles from "../../styles/Button.module.css"
import Content from "./Content"
import SeriesEditForm from "./SeriesEditForm"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const SeriesTop = (props) => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  const [showEdit, setShowEdit] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const { id, name, content, seri, setHasOrder, setSeries } = props

  const handleEdit = () => {
    setShowEdit(true)
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/series/${id}/`)
        setHasOrder(true)
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/series/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setHasOrder(true)
      }
    } catch (err) {}
  }

  return (
    <div>
      <Card className={`text-center `}>
        <Card.Header className={`pt-2 pb-1 ${styles.Top}`}>
          <Row className="d-flex align-items-center">
            <Col className="mx-0 px-0" xs={1}>
              <Button
                className={`float-right py-0  ${btnStyles.White} ${btnStyles.Button}`}
                onClick={() => setShowContent((showContent) => !showContent)}
              >
                I
              </Button>
            </Col>
            <Col xs={10} className="mx-0 text-center">
              <Link
                to={`/${localStorage.getItem("projectSlug")}/indexshots/${id}`}
              >
                <div>
                  <h5
                    style={{ color: "white" }}
                    className={` ${styles.Titlelist}`}
                  >
                    {name}
                  </h5>
                </div>
              </Link>
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
          <Row>
            <Col className="px-0">
              {!showContent ? "" : <Content content={content} />}
            </Col>
          </Row>
        </Card.Header>
      </Card>
      {!showEdit ? (
        ""
      ) : (
        <SeriesEditForm
          setSeries={setSeries}
          seri={seri}
          name1={name}
          id={id}
          setShowEdit={setShowEdit}
          setHasOrder={setHasOrder}
        />
      )}
    </div>
  )
}

export default SeriesTop
