/* Component rendered on the PostsPage to display the 
   cover info for each Post
 * When clicked on it opens that Post's PostPage */
import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { axiosInstance, axiosRes } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";
import useHostName from "../../hooks/useHostName";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";

import styles from "../../styles/Post.module.css";

const PostTop = (props) => {
  const host = useHostName();
  const {
    id,
    owner,
    name,
    position,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    opened_id,
    archive_id,
    title,
    number,
    departments,
    category,
    updated_at,
    setPosts,
    episode_number,
    is_owner,
  } = props;

  console.log("number", number);

  const currentUser = useCurrentUser();
  const Loggedinuserid = JSON.parse(localStorage.getItem("user") || "{}")?.pk;
  const history = useHistory();
  const [showActionMenu, setShowActionMenu] = useState(true);
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const handleEdit = () => {
    history.push(`/${localStorage.getItem("projectSlug")}/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/posts/${id}/`);
        history.goBack();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/posts/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (
      currentUser &&
      currentUser?.groups.length > 0 &&
      (currentUser?.groups[0]?.name === "Admincreative" ||
        currentUser?.groups[0]?.name === "Crew")
    ) {
      // now check where the post is His own post or NOT
      if (Number(profile_id) !== Number(currentUser?.profile_id)) {
        setShowActionMenu(false);
      }
    } else {
      if (
        currentUser &&
        currentUser?.groups.length > 0 &&
        currentUser?.groups[0]?.name === "Cast"
      ) {
        // Never show the menu
        setShowActionMenu(false);
      }
    }
  }, [profile_id, currentUser]);

  const handleOpened = async () => {
    /* Function to create an opened instance
           for the Post */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/opened/", { post: id });
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the opened_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, opened_id: data.id } : post;
          }),
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/opened/`,
          { post: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the opened_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, opened_id: data.id } : post;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleStar = async () => {
    /* Function to Star a Post 
         * Creates an archives instance for the Post as the 
           Archives App in Shot Caller DRF is used for the Star feature */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/archives/", { post: id });
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the archives_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, archive_id: data.id } : post;
          }),
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/archives/`,
          { post: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the archives_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, archive_id: data.id } : post;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnStar = async () => {
    /* Function to unStar a Post 
         * Deletes an archives instance for the Post as the 
           Archives App in Shot Caller DRF is used for the Star feature */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/archives/${archive_id}/`);
        setPosts((prevPosts) => ({
          // Delete the archives_id for the post in the posts state
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, archive_id: null } : post;
          }),
        }));
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/archives/${archive_id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPosts((prevPosts) => ({
          // Delete the archives_id for the post in the posts state
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id ? { ...post, archive_id: null } : post;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    /* Function to create a likes instance for a Post */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosRes.post("/likes/", { post: id });
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the likes_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
              : post;
          }),
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/likes/`,
          { post: id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPosts((prevPosts) => ({
          // Update the post in the posts state with the likes_id
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
              : post;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    /* Function to delete a likes instance for a Post */
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.delete(`/likes/${like_id}/`);
        setPosts((prevPosts) => ({
          // Delete the likes_id for the post in the posts state
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? { ...post, likes_count: post.likes_count - 1, like_id: null }
              : post;
          }),
        }));
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/likes/${like_id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPosts((prevPosts) => ({
          // Delete the likes_id for the post in the posts state
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? { ...post, likes_count: post.likes_count - 1, like_id: null }
              : post;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                    {showActionMenu && (
                      <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    {/* icons */}
                    <div className="px-0 py-0 d-flex align-items-center justify-content-center">
                      {/* star uses archive_id from drf */}
                      {archive_id ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>UnStar</Tooltip>}
                        >
                          <span onClick={handleUnStar}>
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
                      {Loggedinuserid === owner || is_owner === true ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>You can't like your own post!</Tooltip>
                          }
                        >
                          <i className={`far fa-heart ${styles.Heart}`} />
                        </OverlayTrigger>
                      ) : like_id ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Unlike</Tooltip>}
                        >
                          <span onClick={handleUnlike}>
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
                      <span className="pt-0">{likes_count}</span>
                      {showActionMenu && (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Comments</Tooltip>}
                        >
                          <Link
                            to={`/${localStorage.getItem(
                              "projectSlug"
                            )}/posts/${id}${
                              epi && project && episodeTitle && number
                                ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                                : ""
                            }`}
                          >
                            <i
                              className={`far fa-comments ${styles.Comment}`}
                            />
                          </Link>
                        </OverlayTrigger>
                      )}
                      {showActionMenu && (
                        <span className="pt-0">{comments_count}</span>
                      )}
                      <span className="ml-5"> {updated_at}</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={6} className="my-1">
              <Link
                to={`/${localStorage.getItem("projectSlug")}/posts/${id}${
                  epi && project && episodeTitle && number
                    ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                    : ""
                }`}
              >
                {opened_id ? (
                  <Row
                    className={`${styles.ContentOpened} pt-1 my-0 mr-1 ml-1`}
                  >
                    <Col xs={12} className={` text-center`}>
                      <Row>
                        <Col className="px-0 mx-0" xs={4}>
                          {number && (
                            <p style={{ fontWeight: "700" }}>Scene {number} </p>
                          )}
                        </Col>
                        <Col className="px-0 mx-0" xs={4}>
                          {episode_number && (
                            <p style={{ fontWeight: "700" }}>
                              Episode {episode_number}{" "}
                            </p>
                          )}
                        </Col>
                        <Col className="px-0 mx-0" xs={4}>
                          {departments && (
                            <p style={{ textTransform: "capitalize" }}>
                              {departments} {category}
                            </p>
                          )}
                        </Col>
                        {/* <Col className="px-0 mx-0" xs={4}>
                          {category && (
                            <p style={{ textTransform: "capitalize" }}>
                          
                            </p>
                          )}
                        </Col> */}
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
                    onClick={handleOpened}
                    className={`${styles.ContentUnOpen} pt-1 my-0 mr-1 ml-1`}
                  >
                    <Col xs={12} className={`text-center`}>
                      <Row>
                        <Col className="px-0 mx-0" xs={4}>
                          {number && (
                            <p style={{ fontWeight: "700" }}>Scene {number} </p>
                          )}
                        </Col>
                        <Col className="px-0 mx-0" xs={4}>
                          {episode_number && (
                            <p style={{ fontWeight: "700" }}>
                              Episode {episode_number}{" "}
                            </p>
                          )}
                        </Col>
                        <Col className="px-0 mx-0" xs={4}>
                          {departments && (
                            <p style={{ textTransform: "capitalize" }}>
                              {departments} {""} {category}
                            </p>
                          )}
                        </Col>
                        {/* <Col className="px-0 mx-0" xs={4}>
                          {category && (
                            <p style={{ textTransform: "capitalize" }}>
                              {category} {departments}
                            </p>
                          )}
                        </Col> */}
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
                    {showActionMenu && (
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
                    <div className="px-0 py-0 d-flex align-items-center justify-content-center">
                      {/* star uses archive_id from drf */}
                      {archive_id ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>UnStar</Tooltip>}
                        >
                          <span onClick={handleUnStar}>
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
                      {Loggedinuserid === owner || is_owner === true ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>You can't like your own post!</Tooltip>
                          }
                        >
                          <i className={`far fa-heart ${styles.Heart}`} />
                        </OverlayTrigger>
                      ) : like_id ? (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Unlike</Tooltip>}
                        >
                          <span onClick={handleUnlike}>
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
                      <span className="pt-0">{likes_count}</span>
                      {/* {showActionMenu && ( */}
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Comments</Tooltip>}
                        >
                          <Link
                            to={`/${localStorage.getItem(
                              "projectSlug"
                            )}/posts/${id}${
                              epi && project && episodeTitle && number
                                ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
                                : ""
                            }`}
                          >
                            <i
                              className={`far fa-comments ${styles.Comment}`}
                            />
                          </Link>
                        </OverlayTrigger>
                      {/* )} */}
                      {/* {showActionMenu && ( */}
                        <span className="pt-0">{comments_count}</span>
                      {/* )} */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostTop;
