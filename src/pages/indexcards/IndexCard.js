/* Component in IndexCards to display each the Card */
import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { axiosReq, axiosInstance } from "../../api/axiosDefaults"
import { PostDropdown } from "../../components/PostDropdown"
import styles from "../../styles/Indexes.module.css"
import IndexCardEdit from "./IndexCardEdit"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const IndexCard = (props) => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  const [showEdit, setShowEdit] = useState(false)
  const { setHasOrder, card, setIndexCards } = props

  const { id, number, story, style } = card

  const handleEdit = () => {
    setShowEdit(true)
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/indexcards/${id}/`)
        setHasOrder(true)
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/indexcards/${id}/`,
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
        <Card.Header className={`pt-2 pb-0 ${styles.Top}`}>
          <Row>
            <Col className="mx-0 px-0" xs={1}></Col>
            <Col xs={10} className="mx-0 px-0 text-center">
              <h5 className={` ${styles.Titlelist}`}>{number}</h5>
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
        <Card.Body className="p-0">
          <Row>
            <Col className="text-center mt-0" xs={12}>
              {story && (
                <div className="text-center px-1 mb-1">
                  <p>STORY</p>
                  <p>{story} </p>
                </div>
              )}
              {style && (
                <div className="text-center px-1 mb-1">
                  <p>STYLE</p>
                  <p>{style} </p>
                </div>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {!showEdit ? (
        ""
      ) : (
        <IndexCardEdit
          setIndexCards={setIndexCards}
          card={card}
          number={number}
          id={id}
          setShowEdit={setShowEdit}
          setHasOrder={setHasOrder}
        />
      )}
    </div>
  )
}

export default IndexCard
