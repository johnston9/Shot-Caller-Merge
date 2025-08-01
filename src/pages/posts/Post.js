/* Component in PostPage to display the Post data */
import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { axiosInstance, axiosRes } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";
import {
  useSetCategoryContext,
  useSetDeptContext,
  useSetNumberContext,
  useSetSceneContext,
} from "../../contexts/DeptCategoryContext";
// import appStyles from "../../../src/styles/App.module.css";
import useHostName from "../../hooks/useHostName";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
// import appStyles from "../../styles/App.module.css";
import styles from "../../styles/Post.module.css";
import btnStyles from "../../styles/Button.module.css";
import TopBox from "../../components/TopBox";

const Post = (props) => {
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
    archive_id,
    title,
    content,
    scene,
    number,
    departments,
    category,
    image1,
    image2,
    image3,
    image4,
    image5,
    updated_at,
    setPosts,
    episode_number,
  } = props;

  const host = useHostName();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const setSceneId = useSetSceneContext();
  const setDept = useSetDeptContext();
  const setCategory = useSetCategoryContext();
  const setNumber = useSetNumberContext();
  const [showActionMenu, setShowActionMenu] = useState(false);
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  // useEffect(() => {
  //   if ( currentUser &&  currentUser?.groups.length > 0 &&
  //   (currentUser?.groups[0]?.name === "Admincreative" || currentUser?.groups[0]?.name === "Crew")
  //   ) {
  //     // now check where the post is His own post or NOT
  //     if (Number(profile_id) !== Number(currentUser?.profile_id)) {
  //       setShowActionMenu(false);
  //     }
  //   } else {
  //     if (
  //       currentUser &&
  //       currentUser?.groups.length > 0 &&
  //       currentUser?.groups[0]?.name === "Cast"
  //     ) {
  //       // Never show the menu
  //       setShowActionMenu(false);
  //     }
  //   }
  // }, [profile_id, currentUser]);

  useEffect(() => {
    if (
      currentUser &&
      currentUser?.groups.length > 0
    ) {
      const userRole = currentUser.groups[0].name;


      if (userRole === "Admincreative") {
        console.log(currentUser?.profile_id === profile_id)
        // Always show for Admincreative
        if (Number(profile_id) === Number(currentUser?.profile_id)) {
          // setShowActionMenu(false);
          setShowActionMenu(true);
        }
      } else if (userRole === "Crew") {
        // Show only if it's their own post
        if (Number(profile_id) === Number(currentUser?.profile_id)) {
          setShowActionMenu(true);
        }
      } else if (userRole === "Cast") {
        // Never show the menu
        setShowActionMenu(false);
      }
    }
  }, [profile_id, currentUser]);


  const handleGoToScene = () => {
    /* Function to go to the post's Scene page 
           and it's Department Category
        *  Sets the Contexts SceneId, Number, Category 
           ans Dept to be read in App.js*/
    setSceneId(scene);
    setNumber(number);
    setDept(departments);
    setCategory(category);
    history.push(`/${localStorage.getItem("projectSlug")}/dept/category`);
  };

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/posts/${id}/edit${epi && project && episodeTitle && number
        ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}&sceneID=${number}`
        : ""
      }`
    );
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
    } catch (err) { }
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

  // Utility function to detect file type from URL
  const detectFileType = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD" });

      if (!response.ok) {
        console.error("Error fetching file:", response.statusText);
        return "unknown";
      }

      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.startsWith("image/")) {
        return "image";
      }

      if (
        contentType &&
        (contentType === "application/pdf" ||
          contentType.includes("document") ||
          contentType === "application/msword" ||
          contentType ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      ) {
        return "document";
      }

      return "unknown";
    } catch (error) {
      console.error("Error detecting file type:", error);
      return "unknown";
    }
  };

  // Component to render file based on type
  const FileRenderer = ({
    fileUrl,
    altText,
    imageClassName,
    iframeClassName,
  }) => {
    const [fileType, setFileType] = useState("unknown");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkFileType = async () => {
        setIsLoading(true);
        const type = await detectFileType(fileUrl);
        setFileType(type);
        setIsLoading(false);
      };

      checkFileType();
    }, [fileUrl]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (fileType === "image") {
      return (
        <div className="px-2 px-md-4 mb-3">
          <Card.Img src={fileUrl} alt={altText} className={imageClassName} />
        </div>
      );
    } else {
      return (
        <figure>
          <iframe
            title={altText}
            alt={altText}
            className={iframeClassName}
            src={fileUrl}
          />
        </figure>
      );
    }
  };

  return (
    <div className="px-3">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} ml-1 mb-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
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
                      {is_owner ? (
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
                        <>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Comments</Tooltip>}
                          >
                            <Link
                              to={`/${localStorage.getItem(
                                "projectSlug"
                              )}/posts/${id}`}
                            >
                              <i
                                className={`far fa-comments ${styles.Comment}`}
                              />
                            </Link>
                          </OverlayTrigger>
                          <span className="pt-0">{comments_count}</span>
                        </>
                      )}
                      <span className="ml-5"> {updated_at}</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={6} className="my-1">
              <div onClick={() => handleGoToScene()}>
                <Row className={`${styles.Content3} py-2 my-0 mr-1 ml-1`}>
                  <Col xs={12} className={` text-center`}>
                    <Row>
                      <Col className="px-0 mx-0" xs={4}>
                        {number && (
                          <p style={{ fontWeight: "700" }}>Scene {number} </p>
                        )}
                      </Col>
                      <Col className="px-0 mx-0" xs={4}>
                        {departments && (
                          <p style={{ textTransform: "capitalize" }}>
                            {departments}
                          </p>
                        )}
                      </Col>
                      <Col className="px-0 mx-0" xs={4}>
                        {category && (
                          <p style={{ textTransform: "capitalize" }}>
                            {category}{" "}
                          </p>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* edit and date icons small */}
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
                      {is_owner ? (
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
                        <>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Comments</Tooltip>}
                          >
                            <Link
                              to={`/${localStorage.getItem(
                                "projectSlug"
                              )}/posts/${id}`}
                            >
                              <i
                                className={`far fa-comments ${styles.Comment}`}
                              />
                            </Link>
                          </OverlayTrigger>
                          <span className="pt-0">{comments_count}</span>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
        {/* title */}
        <Card.Body className="py-1 px-5 text-center">
          {title && (
            <h4 style={{ fontStyle: "italic" }} className="mb-0 pb-0">
              {title}
            </h4>
          )}
          <hr />
          {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
        <hr />
        <Row className="mb-2 px-5">
          {/* image 1/2 */}
          <Col xs={12} md={6}>
            {image4 && (
              <FileRenderer
                fileUrl={image4}
                altText="image1"
                imageClassName={styles.Images}
                iframeClassName={styles.iFrame}
              />

              // <>
              //   <div className="px-2 px-md-4 mb-3">
              //     <Card.Img
              //       src={image4}
              //       alt="image4"
              //       className={styles.Images}
              //     />
              //   </div>
              // </>
            )}
          </Col>
          <Col xs={12} md={6}>
            {image1 && (
              <FileRenderer
                fileUrl={image1}
                altText="image1"
                imageClassName={styles.Images}
                iframeClassName={styles.iFrame}
              />
              // <>
              //   <div className="px-2 px-md-4 mb-3">
              //     <Card.Img
              //       src={image1}
              //       alt="image1"
              //       className={styles.Images}
              //     />
              //   </div>
              // </>
            )}
          </Col>
          <Col xs={12} md={6}>
            {image2 && (
              <FileRenderer
                fileUrl={image2}
                altText="image3"
                imageClassName={styles.Images}
                iframeClassName={styles.iFrame}
              />

              // <>
              //   <div className="px-2 px-md-4 mb-3">
              //     <Card.Img
              //       src={image2}
              //       alt="image2"
              //       className={styles.Images}
              //     />
              //   </div>
              // </>
            )}
          </Col>
        </Row>
        {/* image 3/4 */}
        <Row className="mb-2 px-5">
          <Col xs={12} md={6}>
            {image3 && (
              <FileRenderer
                fileUrl={image3}
                altText="image3"
                imageClassName={styles.Images}
                iframeClassName={styles.iFrame}
              />

              // <>
              //   <div className="px-2 px-md-4 mb-3">
              //     <Card.Img
              //       src={image3}
              //       alt="image3"
              //       className={styles.Images}
              //     />
              //   </div>
              // </>
            )}
          </Col>
        </Row>
        {/* image 5 */}
        <Row className="mb-2 px-5">
          <Col xs={12} md={6}>
            {image5 && (
              <FileRenderer
                fileUrl={image5}
                altText="image5"
                imageClassName={styles.Images}
                iframeClassName={styles.iFrame}
              />

              // <>
              //   <div className="px-2 px-md-4 mb-3">
              //     <Card.Img
              //       src={image5}
              //       alt="image5"
              //       className={styles.Images}
              //     />
              //   </div>
              // </>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Post;
