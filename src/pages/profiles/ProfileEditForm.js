/* Form Page to edit a Profile */
import React, { useState, useEffect, useRef } from "react"
import { useHistory, useParams } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"
import TopBox from "../../components/TopBox"

const ProfileEditForm = () => {
  // useRedirect()
  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()
  const { id } = useParams()
  const history = useHistory()
  const imageFile = useRef()

  const [profileData, setProfileData] = useState({
    name: "",
    position: "",
    content: "",
    image: "",
    phone_number: "",
    email: "",
    username: "",
    call_time_username: "",
  })
  const { name, position, content, image, phone_number, call_time_username } =
    profileData

  const [errors, setErrors] = useState({})

  useEffect(() => {
    /* Function to fetch a profile and set the profileData 
       to the data returned */
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          // TODO: remove for client
          const { data } = await axiosInstance.get(
            `/${localStorage.getItem("projectSlug")}/profiles/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          const {
            name,
            position,
            content,
            image,
            phone_number,
            call_time_username,
          } = data
          setProfileData({
            name,
            position,
            content,
            image,
            phone_number,
            call_time_username,
          })
        } catch (err) {
          history.push(`/${localStorage.getItem("projectSlug")}/signin`)
        }
      } else {
        history.push(`/${localStorage.getItem("projectSlug")}/signin`)
      }
    }

    handleMount()
  }, [currentUser, history, id])

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("content", content)
    formData.append("position", position)
    formData.append("phone_number", phone_number)

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0])
    }

    try {
      const { data } = await axiosInstance.put(
        `/${localStorage.getItem("projectSlug")}/profiles/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      )
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }))
      history.goBack()
    } catch (err) {
      setErrors(err.response?.data)
    }
  }

  const textFields = (
    <>
      <Form.Group controlId="name" className="mb-2">
        <Form.Label className="p-1">Name</Form.Label>
        <Form.Control
          type="text"
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
      <Form.Group controlId="phone_number" className="mb-2">
        <Form.Label className="p-1">Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone_number"
          value={phone_number}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="email" className="mb-2">
        <Form.Label className="p-1">Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={currentUser?.email}
          onChange={handleChange}
          disabled={true}
        />
      </Form.Group>
      <Form.Group controlId="username" className="mb-2">
        <Form.Label className="p-1">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={currentUser?.username}
          onChange={handleChange}
          disabled={true}
        />
      </Form.Group>
      <Form.Group controlId="call_time_username" className="mb-2">
        <Form.Label className="p-1">Call Time Username</Form.Label>
        <Form.Control
          type="text"
          name="call_time_username"
          value={call_time_username}
          onChange={handleChange}
          disabled={true}
        />
      </Form.Group>
      {errors?.phone_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="position" className="mb-2">
        <Form.Label className="p-1">Position</Form.Label>
        <Form.Control
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.position?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Additional</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={3}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Row>
        <Col className="mt-3">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-3`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 px-3`}
            type="submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  )

  return (
    <Container>
      <TopBox title="Profile" />
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
            <Container className={appStyles.Content}>
              <Form.Group>
                {image && (
                  <figure>
                    <Image src={image} fluid />
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
                <Form.Control
                  type="file"
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  }}
                />
              </Form.Group>
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
          <Col
            md={5}
            lg={6}
            className="d-none d-md-block p-0 p-md-2 text-center"
          >
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ProfileEditForm
