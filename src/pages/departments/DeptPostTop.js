/* Component rendered on the DeptPostsPage to display the 
   cover info for each Post
 * When clicked on it opens that Post's DeptPostPage */
import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "../../styles/Post.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { Link, useHistory } from "react-router-dom"
import Avatar from "../../components/Avatar"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import { PostDropdown } from "../../components/PostDropdown"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const DeptPostTop = (props) => {
  const {
    id,
    owner,
    name,
    profile_id,
    profile_image,
    position,
    title,
    departments,
    opened_id,
    updated_at,
    setPosts,
    is_owner
  } = props

  const host = useHostName()
  const currentUser = useCurrentUser()
  // const is_owner = currentUser?.username === owner
  const history = useHistory()

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/department/posts/${id}/edit`
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
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeptOpened = async () => {
    /* Function to create an openedDept instance
           for the Post */
    console.log("openeddept")
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/openedDept/", { post: id })
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the opened_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, opened_id: data.id } : post
          }),
        }))
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/openedDept/`,
          { post: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the opened_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, opened_id: data.id } : post
          }),
        }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Card className={`py-0 mt-1 mb-0`}>
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
                    <div className={`${styles.Content4} pl-2 ml-2`}>
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
                  <Col xs={12}>
                    {/* icons  */}
                    {/* star uses archive_id from drf */}
                    {/* <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>UnStar</Tooltip>}
                      >
                      <span onClick={handleUnStar} >
                      <i className={`fas fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Star</Tooltip>}
                    >
                      <span onClick={handleStar}>
                      <i className={`far fa-star ${styles.Star}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-star ${styles.Star}`} />
                      </OverlayTrigger>
                  )}
                  {is_owner ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>You can't like your own post!</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  ) : like_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unlike</Tooltip>}
                      >
                      <span onClick={handleUnlike} >
                      <i className={`fas fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Like</Tooltip>}
                        >
                      <span onClick={handleLike}>
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-heart ${styles.Heart}`} />
                      </OverlayTrigger>
                  )}
                  <span className='pt-0'>{likes_count}</span>
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Comments</Tooltip>}
                      >
                  <Link to={`/posts/${id}`}>
                  <i className={`far fa-comments ${styles.Comment}`} />
                  </Link>
                  </OverlayTrigger>
                  <span className='pt-0'>{comments_count}</span>
                  <span className='ml-5'> {updated_at}</span>
                </div> */}
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={6} className="my-1">
              <Link
                to={`/${localStorage.getItem(
                  "projectSlug"
                )}/department/posts/${id}`}
              >
                {opened_id ? (
                  <Row
                    className={`${styles.ContentOpened} pt-1 my-0 mr-1 ml-1`}
                  >
                    <Col xs={12} className={` text-center`}>
                      <Row>
                        <Col className="px-0 mx-0" xs={12}>
                          {departments && (
                            <p style={{ textTransform: "capitalize" }}>
                              {departments}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={12}
                          className={`text-center px-0 mx-0 ${styles.Content4}`}
                        >
                          {title && (
                            <span
                              className={`text-center px-0 mx-0 ${styles.ContentTitleOpened}`}
                              style={{ fontStyle: "italic" }}
                            >
                              {" "}
                              {title}
                            </span>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ) : (
                  <Row
                    onClick={handleDeptOpened}
                    className={`${styles.ContentUnOpen} pt-1 my-0 mr-1 ml-1`}
                  >
                    <Col xs={12} className={` text-center`}>
                      <Row>
                        <Col className="px-0 mx-0" xs={12}>
                          {departments && (
                            <p
                              style={{
                                textTransform: "capitalize",
                                color: "#fafafa",
                              }}
                            >
                              {departments}
                            </p>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={12}
                          className={`text-center px-0 mx-0 ${styles.Content4}`}
                        >
                          {title && (
                            <span
                              className={`text-center px-0 mx-0 ${styles.ContentTitleUnOpen}`}
                              style={{ fontStyle: "italic" }}
                            >
                              {" "}
                              {title}
                            </span>
                          )}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                )}
              </Link>
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
                    {/* icons */}
                    {/* star uses archive_id from drf */}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DeptPostTop
