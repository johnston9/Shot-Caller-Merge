/* Component to display the deptPost data */
import React, { useEffect, useState } from "react"
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

const DeptPost = (props) => {
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
    image2,
    image3,
    image4,
    image5,
    updated_at,
    is_owner
  } = props

  const host = useHostName()
  const currentUser = useCurrentUser()
  // const is_owner = currentUser?.username === owner
  const history = useHistory()

  console.log(currentUser?.username === owner)

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
    } catch (err) { }
  }


  const [isImage1, setIsImage1] = useState(false);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const [isImage4, setIsImage4] = useState(false);
  const [isImage5, setIsImage5] = useState(false);

  const getContentTypeWithGET = async (url) => {
    const res = await fetch(url, { method: 'GET', cache: 'no-store' });
    return res.headers.get('Content-Type');
  };
  const isImageFile = (fileType) => {
    const acceptedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/tiff",
      "image/svg+xml",
    ];
    return acceptedImageTypes.includes(fileType);
  };
  useEffect(() => {
    const dataURLs = [image1, image2, image3, image4, image5];
    const stateSetters = [setIsImage1, setIsImage2, setIsImage3, setIsImage4, setIsImage5];

    dataURLs?.forEach((url, index) => {
      const setState = stateSetters[index];
      if (url) {
        getContentTypeWithGET(url)
          .then((type) => {
            const isImage = isImageFile(type);
            setState(isImage);
          })
          .catch((err) => {
            setState(false);
          });
      } else {
        setState(false);
      }
    });
  }, [image1, image2, image3, image4, image5]);

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
                    {is_owner === true && (
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
                    {/* icons */}
                    {/* <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
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
                    {/* icons */}
                    {/* <div className='px-0 py-0 d-flex align-items-center justify-content-center' >
                {archive_id ? (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Unarchive</Tooltip>}
                      >
                      <span onClick={handleUnarchive} >
                      <i className={`fas fa-folder ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : currentUser ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <span onClick={handleArchive}>
                      <i className={`far fa-folder-open ${styles.Archive}`} />
                      </span>
                      </OverlayTrigger>
                  ) : (
                      <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Log in please</Tooltip>}
                      >
                      <i className={`far fa-folder-open ${styles.Archive}`} />
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
            </div> */}
                  </Col>
                </Row>
              </div>
            </Col>
            {/* <Col xs={12} lg={6} > 
          <Link to={`/department/posts/${id}`}>
            <Row className={`${styles.Content} mx-0`}>                   
            <Col className={`${styles.Content1} px-0 d-flex align-items-center justify-content-center`}  xs={4}>
            {departments && <span className={`py-2 text-center`} style={{ textTransform: 'capitalize'}}  >{departments} </span>}  
            </Col>
            <Col className={`${styles.Content2} px-0 d-flex align-items-center justify-content-center`} 
              style={{ fontStyle: 'italic' }} xs={8} >
            {title && <span className="d-md-none text-center">{tit}</span>}
            {title && <span className="d-none d-md-block text-center">{tit2}</span>}
            </Col>
          </Row>
          </Link>
          </Col>  */}
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
        {/* <Row className="mb-2">
          <Col xs={12} md={6}>
            {image1 && (
              <>
                <Card.Img src={image1} alt="image1" className="px-3" />
              </>
            )}
          </Col>
          <Col xs={12} md={6}>
            {image2 && (
              <>
                <Card.Img src={image2} alt="image2" />
              </>
            )}
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={12} md={6}>
            {image3 && (
              <>
                <Card.Img src={image3} alt="image3" />
              </>
            )}
          </Col>
          <Col xs={12} md={6}>
            {image4 && (
              <>
                <Card.Img src={image4} alt="image4" />
              </>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-md-block" md={3}></Col>
          <Col xs={12} md={6}>
            {image5 && (
              <>
                <Card.Img src={image5} alt="image5" />
              </>
            )}
          </Col>
        </Row> */}


        <Row className="my-4 g-4">
          {[image1, image2, image3, image4, image5].map((img, index) => {
            const isImage = [isImage1, isImage2, isImage3, isImage4, isImage5][index];
            const previewTitle = `file-preview-${index + 1}`;

            return (
              img && (
                <Col xs={12} md={6} lg={4} key={index} className="my-3">
                  <Card className="shadow-sm h-100">
                    {isImage ? (
                      <figure className="m-0 p-3 text-center">
                        <Card.Img
                          src={img}
                          alt={`image${index + 1}`}
                          className={styles.ImagesLand}
                          style={{
                            maxHeight: "300px",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </figure>
                    ) : (
                      <iframe
                        title={previewTitle}
                        src={img}
                        width="100%"
                        height="300px"
                        style={{
                          border: "none",
                          borderRadius: "8px",
                          padding: "1rem",
                        }}
                      />
                    )}
                    <Card.Footer className="text-muted text-center py-2">
                      Preview {index + 1}
                    </Card.Footer>
                  </Card>
                </Col>
              )
            );
          })}
        </Row>

      </Card>
    </div>
  )
}

export default DeptPost
