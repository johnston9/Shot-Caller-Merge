/* Form Page to create a Moodboard
 * The word moodshots is used through the app in the urls for moodboards */
import React, { useRef, useState } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Asset from "../../components/Asset"

import Upload from "../../assets/upload.png"
import styles from "../../styles/Scene.module.css"
import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Button.module.css"
import Image from "react-bootstrap/Image"
import Alert from "react-bootstrap/Alert"
import Info from "./Info"

import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import TopBox from "../../components/TopBox"
import { useRedirect } from "../../hooks/Redirect"
import Asset2 from "../../components/Asset2"
import {
  useCharactersContext,
  useLocationsContext,
  useScenesContext,
} from "../../contexts/Scene_chars_locs"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"
import toast from "react-hot-toast"

const MoodboardCreate = ({
  sceneId = "",
  number = "",
  characterRole = "",
  locationPlace = "",
}) => {
  useRedirect()
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const [showInfo, setShowInfo] = useState(false)
  const [postData, setPostData] = useState({
    scene: sceneId,
    sceneNumber: number,
    title: "",
    content: "",
    character: characterRole,
    location: locationPlace,
    image1: null, // will hold file
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image1Preview: null, // for URL.createObjectURL()
    image2Preview: null,
    image3Preview: null,
    image4Preview: null,
    image5Preview: null,

  })

  const {
    scene,
    sceneNumber,
    title,
    content,
    character,
    location,
    image1,
    image2,
    image3,
    image4,
    image5,
  } = postData

  const imageInput1 = useRef(null)
  const imageInput2 = useRef(null)
  const imageInput3 = useRef(null)
  const imageInput4 = useRef(null)
  const imageInput5 = useRef(null)

  const history = useHistory()

  const scenes = useScenesContext()
  const characters = useCharactersContext()
  const locations = useLocationsContext()

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  // const handleChangeImage1 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image1)
  //     setPostData({
  //       ...postData,
  //       image1: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image1 ${image1}`)
  //     console.log(URL.createObjectURL(event.target.files[0]))
  //   }
  // }

  // const handleChangeImage2 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image2)
  //     setPostData({
  //       ...postData,
  //       image2: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image2 ${image2}`)
  //   }
  // }

  // const handleChangeImage3 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image3)
  //     setPostData({
  //       ...postData,
  //       image3: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image3 ${image3}`)
  //   }
  // }

  // const handleChangeImage4 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image4)
  //     setPostData({
  //       ...postData,
  //       image4: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image4 ${image4}`)
  //   }
  // }

  // const handleChangeImage5 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image5)
  //     setPostData({
  //       ...postData,
  //       image5: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image5 ${image5}`)
  //   }
  // }



  const handleChangeImage1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image1Preview) {
        URL.revokeObjectURL(postData.image1Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image1: file,
        image1Preview: previewUrl,
      }));
    }
  };

  const handleChangeImage2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image2Preview) {
        URL.revokeObjectURL(postData.image2Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image2: file,
        image2Preview: previewUrl,
      }));
    }
  };
  const handleChangeImage3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image3Preview) {
        URL.revokeObjectURL(postData.image3Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image3: file,
        image3Preview: previewUrl,
      }));
    }
  };
  const handleChangeImage4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image4Preview) {
        URL.revokeObjectURL(postData.image4Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image4: file,
        image4Preview: previewUrl,
      }));
    }
  };

  const handleChangeImage5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image5Preview) {
        URL.revokeObjectURL(postData.image5Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image5: file,
        image5Preview: previewUrl,
      }));
    }
  };

  const handleChangeScene = (event) => {
    const scene = event.target.value.split("_")[0]
    const number = event.target.value.split("_")[1]
    setPostData({
      ...postData,
      scene: scene,
      sceneNumber: number,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("scene", scene)
    formData.append("number", sceneNumber)
    formData.append("title", title)
    formData.append("content", content)
    formData.append("character", character)
    formData.append("location", location)
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

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const data = await axiosReq.post("/moodshots/", formData)
        if (data?.success === false) {
          toast.error(data?.error?.response?.data.non_field_errors[0], {
            duration: 3000,
            position: "top-right",
          });
        }
        else {
          toast.success(`Moodboard created successfully!`, {
            duration: 3000,
            position: "top-right",
          });
          history.goBack()
        }
      } else {
        const data = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/moodshots/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )

        if (data?.success === false) {
          toast.error(data?.error?.response?.data.non_field_errors[0], {
            duration: 3000,
            position: "top-right",
          });
        }
        else {
          toast.success(`Moodboard created successfully!`, {
            duration: 3000,
            position: "top-right",
          });
          history.goBack()
        }
      }
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const dropfields = (
    <div>
      <Row>
        <Col xs={4} className="text-center">
          {/* scene */}
          <Form.Group controlId="scenedrop" className="mb-2">
            <Form.Label className={`${styles.Bold} `}>Scene</Form.Label>
            <Form.Control
              as="select"
              name="scene"
              className={styles.InputChar}
              value={scene.id}
              onChange={handleChangeScene}
              aria-label="scene select"
            >
              <option value=""></option>
              {scenes.results.length &&
                scenes.results.map((scene) => (
                  <option key={scene.id} value={`${scene.id}_${scene.number}`}>
                    {scene.number} - {scene.location} "{scene.title}"
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          {errors?.scene?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={4} className="text-center">
          {/* location */}
          <Form.Group controlId="locationdrop" className="mb-2">
            <Form.Label className={`${styles.Bold} `}>Location</Form.Label>
            <Form.Control
              as="select"
              name="location"
              className={styles.InputChar}
              value={location}
              onChange={handleChange}
              aria-label="location select"
            >
              <option></option>
              {locations.results.length &&
                locations.results.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={4} className="text-center">
          {/* character */}
          <Form.Group controlId="characterdrop" className="mb-2">
            <Form.Label className={`${styles.Bold} `}>Character</Form.Label>
            <Form.Control
              as="select"
              name="character"
              className={styles.InputChar}
              value={character}
              onChange={handleChange}
              aria-label="character select"
            >
              <option></option>
              {characters.results.length &&
                characters.results.map((character) => (
                  <option key={character.id} value={character.role}>
                    {character.role}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          {errors?.character?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
    </div>
  )

  const scenePage = (
    <div>
      <Row>
        <Col xs={6}>
          {/* character */}
          <Form.Group controlId="characterdrop" className="mb-2">
            <Form.Label className="p-1 d-none"></Form.Label>
            <Form.Control
              as="select"
              name="character"
              className={styles.InputChar}
              value={character}
              onChange={handleChange}
              aria-label="character select"
            >
              <option>Character</option>
              {characters.results.length &&
                characters.results.map((character) => (
                  <option key={character.id} value={character.role}>
                    {character.role}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          {errors?.character?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col xs={6}>
          {/* location */}
          <Form.Group controlId="locationdrop" className="mb-2">
            <Form.Label className="p-1 d-none"></Form.Label>
            <Form.Control
              as="select"
              name="location"
              className={styles.InputChar}
              value={location}
              onChange={handleChange}
              aria-label="location select"
            >
              <option>Location</option>
              {locations.results.length &&
                locations.results.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
    </div>
  )

  const textFields = (
    <div>
      <Form.Group controlId="title" className="mt-3 text-center mb-2">
        <Form.Label className={`${styles.Bold} `}>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          className={styles.InputScene}
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="content" className="mt-3 mb-2 text-center">
        <Form.Label className={`${styles.Bold} `}>Content</Form.Label>
        <Form.Control
          className={styles.InputScene}
          placeholder="Content"
          type="text"
          name="content"
          as="textarea"
          rows={2}
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  )

  const buttons = (
    <div className="text-center mb-3">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 ml-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  )

  return (
    <div>
      <TopBox title="Create Moodboard" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />}
      {/* <div>
                {sceneId ? (
                  <>
                  <h3 className={`mt-1 mb-3 py-1 text-center ${styles.SubTitle }`}>Scene {number} Moodboards</h3>
                  <Row>
                  <Col xs={1} md={2}></Col>
                    <Col xs={10} md={8}>
                        <p> Add Character and or Location to add the Moodboard 
                          to their pages too</p>
                    </Col>
                    </Row>
                    </>
                  ) : character ? (
                    <>
                    <h3 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}>{character} Moodboards</h3>
                      </>
                  ) : location ? (
                    <>
                  <h3 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}>{location} Moodboards</h3>
                    </>
                  ) : (
                    <h3 className={`mt-1 mb-4 pl-3 py-1 text-center ${styles.SubTitle }`}>
                      Create Moodboard
                    </h3>
                  ) }
            </div> */}
      <h5 className={`mt-1 mb-2 py-1 text-center ${styles.SubTitle}`}>
        {sceneNumber && <span>Scene {sceneNumber} </span>}
        {location && <span> {location} </span>}
        {character && <span> {character} </span>}
      </h5>
      <Form className="mt-3 px-3" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="p-0 p-md-2">
            <Container className={`${appStyles.Content} ${styles.Container}`}>
              {sceneId ? (
                <>{scenePage}</>
              ) : characterRole ? (
                <></>
              ) : locationPlace ? (
                <></>
              ) : (
                <>{dropfields}</>
              )}

              {textFields}
            </Container>
          </Col>
          <Col className="pt-2 p-0 p-md-2" md={6}>
            <Container
              className={`${appStyles.Content2} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                {/* {image1 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image1} rounded />
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
                    <Asset src={Upload} message="Upload First Image" />
                  </Form.Label>
                )} */}

                {postData.image1Preview ? (
                  postData.image1?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image1Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image1Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload1"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}


                <Form.Control
                  type="file"
                  id="image-upload1"
                  accept="image/*,application/pdf"
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
        </Row>
        <Row>
          <Col md={6}>
            {/* image 2 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group>
                {postData.image2Preview ? (
                  postData.image2?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image2Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload2"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image2Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload2"
                      >
                        Change the image
                      </Form.Label>

                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload2"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload2"
                  accept="image/*,application/pdf"
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
          <Col md={6}>
            {/* image 3 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group>
                {postData.image3Preview ? (
                  postData.image3?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image3Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image3Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload3"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*,application/pdf"
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
        </Row>
        <Row>
          <Col md={6}>
            {/* image 4 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group>
                {/* {image4 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image4} rounded />
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
                  <Form.Label
                    className="ml-5 pl-4 pl-md-2 my-1"
                    htmlFor="image-upload4"
                  >
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Fourth Image"
                    />
                  </Form.Label>
                )} */}
                {postData.image4Preview ? (
                  postData.image4?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image4Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image4Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload4"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*,application/pdf"
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
          <Col md={6}>
            {/* image 5 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group>
                {postData.image5Preview ? (
                  postData.image5?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image5Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image5Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload5"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload5"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage5}
                  ref={imageInput5}
                />
              </Form.Group>
              {errors?.image5?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 5 """" */}
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
    </div>
  )
}

export default MoodboardCreate
