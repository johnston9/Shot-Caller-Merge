/* Component in LocationPage to display the Location data */
import React from "react"
import Image from "react-bootstrap/Image"
import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import styles from "../../styles/Characters.module.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { PostDropdown } from "../../components/PostDropdown"
import { useSetLocationContext } from "../../contexts/CharLocatContex"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

const Location = (props) => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  const setLocation = useSetLocationContext()
  const {
    id,
    name,
    description,
    filming_address_primary,
    filming_address2,
    filming_address3,
    image1_description,
    image1,
    image2_description,
    image2,
    image3_description,
    image3,
    image4_description,
    image4,
    image5_description,
    image5,
    image6_description,
    image6,
    image7_description,
    image7,
    image8_description,
    image8,
  } = props

  const history = useHistory()

  const handleEdit = () => {
    history.push(`/${localStorage.getItem("projectSlug")}/locations/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/locations/${id}/`)
        history.goBack()
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/locations/${id}/`,
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
      // console.log(err);
    }
  }

  const handleClickMoods = () => {
    /* Functions take the user to the Location's Moodboards
        * They set the Location Context
        * This will be read on App.js page and passed
          as a filter to the /location/moodshots Route */
    setLocation(name)
    history.push(`/${localStorage.getItem("projectSlug")}/location/moodshots`)
  }

  const handleClickAddMoods = () => {
    /* Functions take the user to the Location's Moodboards Create form
        * They set the Location Context
        * This will be read on App.js page and passed
          as a filter to the /location/moodshots/create Route */
    setLocation(name)
    history.push(
      `/${localStorage.getItem("projectSlug")}/location/moodshot/create`
    )
  }

  return (
    <div>
      <div className={`mb-3 ${styles.Header}`}>
        <Row
          className={`${styles.ButtonLine} mt-2 mx-3 d-flex align-items-center `}
        >
          <Col className="text-center mx-0 px-0" xs={1}></Col>
          <Col xs={5} className="text-center mx-0 px-0">
            <h5
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => handleClickMoods()}
            >
              {" "}
              Moodboards
            </h5>
          </Col>
          <Col xs={5} className="text-center mx-0 px-0">
            <h5
              className={`d-sm-none py-0 mb-0 ${styles.Button}`}
              onClick={() => handleClickAddMoods()}
            >
              {" "}
              Add Board
            </h5>
            <h5
              className={`d-none d-sm-block py-0 mb-0 ${styles.Button}`}
              onClick={() => handleClickAddMoods()}
            >
              {" "}
              Add Moodboard
            </h5>
          </Col>
          {
            currentUser?.groups[0]?.name !== "Crew" &&
            <Col className="text-center px-0 mx-0" xs={1}>
              <PostDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            </Col>
          }
        </Row>
        <p className={` pl-3 mb-0 py-1 ${styles.SubTitle}`}></p>
        <div className="px-3">
          <h5
            className="my-3 text-center"
            style={{ textTransform: "uppercase" }}
          >
            INFO
          </h5>
          {/* <h3 className='my-3 text-center'>Info</h3> */}
          <Row className="mb-3 text-center">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}
              >
                DESCRIPTION
              </p>
              <p>{description} </p>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}
              >
                PRIMARY FILMING ADDRESS
              </p>
              <p>{filming_address_primary} </p>
            </Col>
          </Row>
          <Row className="mb-3 text-center">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}
              >
                SECOND FILMING ADDRESS
              </p>
              <p>{filming_address2} </p>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5 `}
              >
                THIRD FILMING ADDRESS
              </p>
              <p>{filming_address3} </p>
            </Col>
          </Row>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mt-3 pl-3 mb-0 py-1 ${styles.SubTitle}`}
          ></p>
          <h5
            className="my-3 text-center"
            style={{ textTransform: "uppercase" }}
          >
            images
          </h5>
          {/* IMAGE 1/2 */}
          <Row className="text-center mb-5">
            <Col xs={12} md={6}>
              {image1 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5 text-center mx-1 mx-sm-5`}
                  >
                    Image 1
                  </p>
                  <Image
                    className={styles.ImagesLand}
                    src={image1}
                    alt="Image 1"
                  />
                </>
              )}
              {image1_description && (
                <>
                  <p className="mt-2">{image1_description} </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {image2 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 2
                  </p>
                  <Image
                    src={image2}
                    alt="Image 2"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image2_description && (
                <>
                  <p className="mt-2">{image2_description} </p>
                </>
              )}
            </Col>
          </Row>
          <hr />
          {/* image 3/4 */}
          <Row className="text-center mb-5">
            <Col xs={12} md={6}>
              {image3 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 3
                  </p>
                  <Image
                    src={image3}
                    alt="Image 3"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image3_description && (
                <>
                  <p className="mt-2">{image3_description} </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {image4 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 4
                  </p>
                  <Image
                    src={image4}
                    alt="Image 4"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image4_description && (
                <>
                  <p className="mt-2">{image4_description} </p>
                </>
              )}
            </Col>
          </Row>
          <hr />
          {/* IMAGE 5/6 */}
          <Row className="text-center mb-5">
            <Col xs={12} md={6}>
              {image5 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 5
                  </p>
                  <Image
                    src={image5}
                    alt="Image 5"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image5_description && (
                <>
                  <p className="mt-2">{image5_description} </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {image6 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 6
                  </p>
                  <Image
                    src={image6}
                    alt="Image 6"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image6_description && (
                <>
                  <p className="mt-2">{image6_description} </p>
                </>
              )}
            </Col>
          </Row>
          <hr />
          {/* IMAGE 7/8 */}
          <Row className="text-center mb-5">
            <Col xs={12} md={6}>
              {image7 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image 7
                  </p>
                  <Image
                    src={image7}
                    alt="Image 7"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image7_description && (
                <>
                  <p className="mt-2">{image7_description} </p>
                </>
              )}
            </Col>
            <Col xs={12} md={6}>
              {image8 && (
                <>
                  <p
                    className={`${styles.BoldTitle} mb-3 text-center mx-1 mx-sm-5`}
                  >
                    Image8{" "}
                  </p>
                  <Image
                    src={image8}
                    alt="Image 8"
                    className={styles.ImagesLand}
                  />
                </>
              )}
              {image8_description && (
                <>
                  <p className="mt-2">{image8_description} </p>
                </>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Location
