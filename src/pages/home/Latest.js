/* Component in the LatestPage to display the post's data
 * Latest is a department choice in the Depts-Xtra app */
import React from "react"
import Card from "react-bootstrap/Card"

import styles from "../../styles/Post.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { Link, useHistory } from "react-router-dom"
import Avatar from "../../components/Avatar"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import { PostDropdown } from "../../components/PostDropdown"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const Latest = (props) => {
  const {
    id,
    owner,
    name,
    profile_id,
    profile_image,
    departments,
    position,
    title,
    content,
    image1,
    updated_at,
  } = props

  const host = useHostName()
  const currentUser = useCurrentUser()
  const is_owner = currentUser?.username === owner
  const history = useHistory()

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/latest/post/${id}/edit`
    )
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/department/posts/${id}/`)
        history.goBack()
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/department/posts/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        history.goBack()
      }
    } catch (err) {}
  }

  return (
    <div>
      <Card className="px-3">
        <Card.Body className={`py-0 px-0 ${styles.PostTop}`}>
          <Row className={`d-flex align-items-center pt-0 pb-0 my-0`}>
            <Col xs={12} sm={3} className="my-0">
              {/* small */}
              <div className="d-none d-sm-block">
                <Row>
                  <Col xs={3} className="pl-3 pr-0">
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/profiles/${profile_id}`}
                    >
                      <Avatar src={profile_image} height={45} />
                    </Link>
                  </Col>
                  <Col xs={9} className="pl-2 pr-0">
                    <div className={`${styles.Content4} pl-2 ml-3`}>
                      <p>
                        <span className="">{name} </span>
                      </p>
                      <p>
                        <span className="ml-0 ">{position}</span>
                      </p>
                    </div>
                    <div></div>
                  </Col>
                </Row>
              </div>
              {/* mobile */}
              <div className="d-sm-none">
                <Row className="pb-0 mb-0">
                  <Col className="d-flex align-items-center pt-2 pb-0" xs={2}>
                    <Link
                      to={`/${localStorage.getItem(
                        "projectSlug"
                      )}/profiles/${profile_id}`}
                    >
                      <Avatar src={profile_image} height={45} />
                    </Link>
                  </Col>
                  <Col xs={8} className="text-center">
                    <p>
                      <span className="">{name}</span>
                    </p>
                    <p className="">{position}</p>
                  </Col>
                  <Col xs={2} className="d-flex align-items-center">
                    {is_owner && (
                      <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center" xs={12}>
                    <p> {updated_at}</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={6} className="my-1">
              <Row className={`${styles.Content3} pt-1 my-0 mr-1 ml-1`}>
                <Col xs={12} className={` text-center`}>
                  <Row>
                    <Col className="px-0 mx-0 py-2" xs={12}>
                      {departments && (
                        <p style={{ textTransform: "capitalize" }}>
                          {departments}
                        </p>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/* edit and date small */}
            <Col xs={12} sm={3} className="my-0 ">
              <div className="d-none d-sm-block">
                <Row>
                  <Col
                    sm={3}
                    className="d-flex align-items-center px-0 float-right"
                  >
                    {is_owner && (
                      <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Col>
                  <Col className="pl-0 pr-0" sm={9}>
                    <p className={`text-center  ${styles.Date}`}>
                      {updated_at}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <hr />
        <Card.Body className="pt-1">
          {title && (
            <Card.Title style={{ fontStyle: "italic" }} className="text-center">
              {title}
            </Card.Title>
          )}
          <hr />
          {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
        <hr />
        <Row className="mb-2">
          {/* image 1/2 */}
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            {image1 && (
              <>
                <Card.Img src={image1} alt="image1" className="px-3" />
              </>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Latest
