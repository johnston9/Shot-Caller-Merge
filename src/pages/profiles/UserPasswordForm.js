/* Form Page to edit a Profile Password */
import React, { useEffect, useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

import { useHistory, useParams } from "react-router-dom"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"
import toast from "react-hot-toast"

const UserPasswordForm = () => {
  useRedirect()
  const history = useHistory()
  const { id } = useParams()
  const currentUser = useCurrentUser()

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  })
  const { new_password1, new_password2 } = userData

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push(`/${localStorage.getItem("projectSlug")}/signin`)
    }
  }, [currentUser, history, id])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!new_password1 || !new_password2) {
      toast.error("Both password fields are required.");
      return;
    }

    // Check if passwords match
    if (new_password1 !== new_password2) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      const res = await axiosInstance.post("/dj-rest-auth/password/change/", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      })
      // console.log(res.data.detail)
      if (res.error?.response?.data === undefined) {
        toast.success(`${res.data.detail}`)
        setTimeout(() => {
          history.goBack()
        }, 2000)
      } else {
        const errorData = res.error?.response?.data;
        if (errorData) {
          Object.entries(errorData).forEach(([field, messages]) => {
            messages.forEach((message) => {
              toast.error(`${field}: ${message}`)
            })
          })
        } else {
          toast.error("An unexpected error occurred.")
        }
      }
    } catch (err) {
      console.log(err)
      setErrors(err.response?.data)
    }
  }

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            <Button
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default UserPasswordForm
