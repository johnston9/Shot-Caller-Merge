/* Form Page to create a Location */
import React, { useRef, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Asset from "../../components/Asset"

import Upload from "../../assets/upload.png"
import styles from "../../styles/PostCreateEditForm.module.css"
import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Button.module.css"
import Image from "react-bootstrap/Image"
import Alert from "react-bootstrap/Alert"

import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import TopBox from "../../components/TopBox"
import { useRedirect } from "../../hooks/Redirect"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const LocationsCreate = ({ topbox }) => {
  useRedirect()
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    filming_address_primary: "",
    filming_address2: "",
    filming_address3: "",
    image1_description: "",
    image1: "",
    image2_description: "",
    image2: "",
    image3_description: "",
    image3: "",
    image4_description: "",
    image4: "",
    image5_description: "",
    image5: "",
    image6_description: "",
    image6: "",
    image7_description: "",
    image7: "",
    image8_description: "",
    image8: "",
  })

  const {
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
  } = postData

  const imageInput1 = useRef(null)
  const imageInput2 = useRef(null)
  const imageInput3 = useRef(null)
  const imageInput4 = useRef(null)
  const imageInput5 = useRef(null)
  const imageInput6 = useRef(null)
  const imageInput7 = useRef(null)
  const imageInput8 = useRef(null)

  const history = useHistory()

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image1)
      setPostData({
        ...postData,
        image1: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image2)
      setPostData({
        ...postData,
        image2: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image3)
      setPostData({
        ...postData,
        image3: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image4)
      setPostData({
        ...postData,
        image4: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image5)
      setPostData({
        ...postData,
        image5: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage6 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image6)
      setPostData({
        ...postData,
        image6: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage7 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image7)
      setPostData({
        ...postData,
        image7: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleChangeImage8 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image8)
      setPostData({
        ...postData,
        image8: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("name", name)
    formData.append("description", description)
    formData.append("filming_address_primary", filming_address_primary)
    formData.append("filming_address2", filming_address2)
    formData.append("filming_address3", filming_address3)
    formData.append("image1_description", image1_description)
    formData.append("image2_description", image2_description)
    formData.append("image3_description", image3_description)
    formData.append("image4_description", image4_description)
    formData.append("image5_description", image5_description)
    formData.append("image6_description", image6_description)
    formData.append("image7_description", image7_description)
    formData.append("image8_description", image8_description)
    if (imageInput1.current.files[0]) {
      formData.append("image1", imageInput1.current.files[0])
    }
    if (imageInput2.current.files[0]) {
      formData.append("image2", imageInput2.current.files[0])
    }
    if (imageInput3.current.files[0]) {
      formData.append("image3", imageInput3.current.files[0])
    }
    if (imageInput4.current.files[0]) {
      formData.append("image4", imageInput4.current.files[0])
    }
    if (imageInput5.current.files[0]) {
      formData.append("image5", imageInput5.current.files[0])
    }
    if (imageInput6.current.files[0]) {
      formData.append("image6", imageInput6.current.files[0])
    }
    if (imageInput7.current.files[0]) {
      formData.append("image7", imageInput7.current.files[0])
    }
    if (imageInput8.current.files[0]) {
      formData.append("image8", imageInput8.current.files[0])
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.post("/locations/", formData)
        history.push(`/${localStorage.getItem("projectSlug")}/locations/`)
      } else {
        await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/locations/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        history.push(`/${localStorage.getItem("projectSlug")}/locations/`)
      }
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  )

  return (
    <div>
      {topbox ? "" : <TopBox title="Create Location" />}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} text-left my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Container className={`${appStyles.Content} ${styles.Container}`}>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <h3 className="text-center">Name</h3>
          <p className="text-center">
            Quick Add Name for scene dropdown.
            <br />
            Location extra details only added on the Scene Page.{" "}
          </p>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Form.Group controlId="name" className="mb-2">
                <Form.Label className="d-none p-1">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.name?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`mb-4 mt-3 `}>{buttons} </div>
            </Col>
          </Row>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mt-3 mb-2  pl-3 mb-0 py-1 ${styles.SubTitle}`}
          ></p>
          <h3 className="text-center my-3">Details</h3>
          {/*  details */}
          <Row className="text-center">
            <Col xs={6} className="px-0">
              <Form.Group controlId="description" className="mb-2 px-2">
                <Form.Label className={styles.Bold}>Description</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="px-0">
              <Form.Group
                controlId="filming_address_primary"
                className="px-2 mb-2"
              >
                <Form.Label className={styles.Bold}>
                  Filming Address 1
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="filming_address_primary"
                  value={filming_address_primary}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.filming_address_primary?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <hr />
          <Row className="text-center">
            <Col xs={6} className="px-0">
              <Form.Group controlId="filming_address2" className="mb-2 px-2">
                <Form.Label className={styles.Bold}>
                  Filming Address 2
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  type="text"
                  name="filming_address2"
                  value={filming_address2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.filming_address2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="px-0">
              <Form.Group controlId="filming_address3" className="mb-2 px-2">
                <Form.Label className={styles.Bold}>
                  Filming Address 3
                </Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={2}
                  name="filming_address3"
                  value={filming_address3}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.filming_address3?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          {/* images */}
          <p
            style={{ textTransform: "uppercase" }}
            className={`mt-3 mb-2  pl-3 mb-0 py-1 ${styles.SubTitle}`}
          ></p>
          <h3 className="text-center my-3">Images</h3>
          {/* location 1/2 */}
          <Row className="mb-3 text-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="image1_description" className="mb-2">
                <Form.Label className={styles.Bold}> Image1 </Form.Label>
                <Form.Control
                  placeholder="Image 1 description"
                  type="text"
                  name="image1_description"
                  as="textarea"
                  rows={3}
                  value={image1_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image1_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image1 */}
              <Container
                className={`${appStyles.Content} d-flex flex-column justify-content-center`}
              >
                <Form.Group className="text-center pt-3">
                  {image1 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image1}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage1}
                    ref={imageInput1}
                  />
                </Form.Group>
                {errors?.image1?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="image2_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image2 </Form.Label>
                <Form.Control
                  placeholder="Image2 description"
                  type="text"
                  name="image2_description"
                  as="textarea"
                  rows={3}
                  value={image2_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image2_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 2 */}
              <Container
                className={`${appStyles.Content} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image2 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image2}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload2"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className="my-1" htmlFor="image-upload2">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload2"
                    accept="image/*"
                    onChange={handleChangeImage2}
                    ref={imageInput2}
                  />
                </Form.Group>
                {errors?.image2?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 2 """" */}
              </Container>
            </Col>
          </Row>
          <hr />
          {/* location 3/4  */}
          <Row className="mt-5 mb-3 text-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="image3_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image3</Form.Label>
                <Form.Control
                  placeholder="Image3 description"
                  type="text"
                  name="image3_description"
                  as="textarea"
                  rows={2}
                  value={image3_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image3_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 3 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image3 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image3}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload3"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload3">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload3"
                    accept="image/*"
                    onChange={handleChangeImage3}
                    ref={imageInput3}
                  />
                </Form.Group>
                {errors?.image3?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 3 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="image4_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image4</Form.Label>
                <Form.Control
                  placeholder="image4 description"
                  type="text"
                  name="image4_description"
                  as="textarea"
                  rows={2}
                  value={image4_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image4_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 4 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image4 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image4}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload4"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload4">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload4"
                    accept="image/*"
                    onChange={handleChangeImage4}
                    ref={imageInput4}
                  />
                </Form.Group>
                {errors?.image4?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 4 """" */}
              </Container>
            </Col>
          </Row>
          <hr />
          {/* location 5/6 */}
          <Row className="mt-5 mb-3 text-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="image5_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image5</Form.Label>
                <Form.Control
                  placeholder="image5 description"
                  type="text"
                  name="image5_description"
                  as="textarea"
                  rows={2}
                  value={image5_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image5_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 5 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image5 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image5}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload5"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload5">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload5"
                    accept="image/*"
                    onChange={handleChangeImage5}
                    ref={imageInput5}
                  />
                </Form.Group>
                {errors?.image5?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 5  """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="image6_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image6 </Form.Label>
                <Form.Control
                  placeholder="image6 description"
                  type="text"
                  name="image6_description"
                  as="textarea"
                  rows={2}
                  value={image6_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image6_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 6 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image6 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image6}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload6"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload6">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload6"
                    accept="image/*"
                    onChange={handleChangeImage6}
                    ref={imageInput6}
                  />
                </Form.Group>
                {errors?.image6?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 6 """" */}
              </Container>
            </Col>
          </Row>
          <hr />
          {/* location 7/8 */}
          <Row className="mt-5 mb-3 text-center">
            <Col xs={12} md={6}>
              <Form.Group controlId="image7_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image7</Form.Label>
                <Form.Control
                  placeholder="image7 description"
                  type="text"
                  name="image7_description"
                  as="textarea"
                  rows={2}
                  value={image7_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image7_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 7 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image7 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image7}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload7"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload7">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload7"
                    accept="image/*"
                    onChange={handleChangeImage7}
                    ref={imageInput7}
                  />
                </Form.Group>
                {errors?.image7?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 7 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="image8_description" className="mb-2">
                <Form.Label className={styles.Bold}>Image8</Form.Label>
                <Form.Control
                  placeholder="Image8 description"
                  type="text"
                  name="image8_description"
                  as="textarea"
                  rows={2}
                  value={image8_description}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.image8_description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* image 8 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {image8 ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image8}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload8"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload8">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload8"
                    accept="image/*"
                    onChange={handleChangeImage8}
                    ref={imageInput8}
                  />
                </Form.Group>
                {errors?.image8?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 8 """" */}
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className={`${styles.Container} mt-3`}>
                {buttons}{" "}
              </Container>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default LocationsCreate
