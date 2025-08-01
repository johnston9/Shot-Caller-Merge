/* Page to display each the IndexShot full size
 * Contains the IndexShotEdit component */
import React, { useEffect, useState } from "react"
import { Button, Col, Image, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { useParams, useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { useRedirect } from "../../hooks/Redirect"
import styles from "../../styles/Indexes.module.css"
import btnStyles from "../../styles/Button.module.css"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const IndexShotsFullSize = () => {
  useRedirect()
  const host = useHostName()
  const [shot, setShot] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setError] = useState({})
  const { id } = useParams()
  const { number, content, image } = shot
  const history = useHistory()

  useEffect(() => {
    const fetchshot = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/indexshots/${id}`)
          setShot(data)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/indexshots/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          setShot(data)
        }
      } catch (err) {
        setError(err)
        console.log(err)
      }
    }
    fetchshot()
  }, [id])


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
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Card className={`text-center `}>
        <Card.Header className={`pt-2 pb-1 ${styles.Top}`}>
          <Row>
            <Col className="mx-0 px-0" xs={1}></Col>
            <Col xs={10} className="mx-0 px-0 text-center">
              <h5 className={` ${styles.Titlelist}`}>{number}</h5>
            </Col>
            <Col xs={1} className="text-center mx-0 px-0">
              {/* <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        /> */}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col className="text-center mt-2" xs={12}>
              {/* {image && (
                <>
                  <div className="px-1 mb-3">
                    <Image
                      className={styles.ImagesFull}
                      src={image}
                      alt="image"
                      height="500"
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
      </Card>
    </div>
  )
}

export default IndexShotsFullSize
