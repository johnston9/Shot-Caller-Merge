/* Component in IndexShots to display each the IndexShot
 * Contains a link to IndexShotsFullSize to view the Image full size
 * Contains the IndexShotEdit component */
import React, { useEffect, useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { PostDropdown } from "../../components/PostDropdown"
import styles from "../../styles/Characters.module.css"
import IndexShotEdit from "./IndexShotEdit"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

const IndexShot = (props) => {
  const host = useHostName()
  const [showEdit, setShowEdit] = useState(false)
  const { id, number, content, image, shot, setHasOrder, setIndexShots, series_id } = props
  const currentUser = useCurrentUser()

  const handleEdit = () => {
    setShowEdit(true)
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/indexshots/${id}/`)
        setHasOrder(true)
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/indexshots/${id}/`,
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
    } catch (err) { }
  }

  const [contentType, setContentType] = useState(null);

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

  const getContentTypeWithGET = async (url) => {
    try {
      const res = await fetch(url, { method: "GET", cache: "no-store" });
      return res.headers.get("Content-Type");
    } catch (err) {
      console.error("Error fetching content type:", err);
      return null;
    }
  };

  useEffect(() => {
    if (shot?.image) {
      getContentTypeWithGET(image).then(setContentType);
    }
  }, [shot?.image]);
  return (
    <div>
      <Card className={`text-center p-0 ${styles.Top}`}>
        <Card.Header className={`py-0 ${styles.Top}`}>
          {/* className={` ${styles.Titledetail }`} */}
          <Row>
            <Col className="mx-0 px-0" xs={1}></Col>
            <Col
              xs={10}
              className="mx-0 px-0 
                    d-flex align-items-center justify-content-center"
            >
              <h5 className={` ${styles.Titlelist}`}>{number}</h5>
            </Col>
            {
              currentUser?.groups[0]?.name !== "Crew" &&
              <Col xs={1} className="text-center mx-0 px-0 py-0">
                <div>
              <PostDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
                </div>

              </Col>
            }
          </Row>
        </Card.Header>
        <Link
          to={`/${localStorage.getItem(
            "projectSlug"
          )}/indexshots/fullsize/${id}`}
        >
          <Card.Body className={`text-center p-0 `}>
            <Row>
              <Col className="text-center mt-0" xs={12}>
                {/* {image && (
                  <>
                    <div className="px-0 mb-0">
                      <Image
                        className={styles.Images}
                        src={image}
                        alt="image"
                        height="200"
                      />
                    </div>
                  </>
                )} */}
                {shot?.image && contentType && (
                  <>
                    {isImageFile(contentType) ? (
                      <div className="px-0 mb-3">
                        <Image
                          className={styles.Images}
                          src={shot.image}
                          alt="shot"
                          height="200"
                          rounded
                        />
                      </div>
                    ) : contentType === "application/pdf" ? (
                      <iframe
                        src={shot.image}
                        title="pdf"
                        width="100%"
                        height="500"
                        style={{ border: "1px solid #ccc" }}
                      />
                    ) : (
                      <p>Unsupported file type: {contentType}</p>
                    )}
                  </>)}
                {content && (
                  <>
                    <p>{content} </p>
                  </>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Link>
      </Card>
      {
        currentUser?.groups[0]?.name !== "Crew" &&
        <>
          {!showEdit ? (
            ""
          ) : (
            <IndexShotEdit
              setIndexShots={setIndexShots}
              shot={shot}
              series_id={series_id}
              id={id}
              setShowEdit={setShowEdit}
              setHasOrder={setHasOrder}
            />
          )}
        </>
      }
    </div>
  )
}
export default IndexShot
