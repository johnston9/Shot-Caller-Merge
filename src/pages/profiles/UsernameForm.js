/* Form Page to edit a Profile UserName */
import React, { useEffect, useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

import { useHistory, useParams } from "react-router-dom"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"

const UsernameForm = () => {
  useRedirect()
  const [username, setUsername] = useState("")
  const [errors, setErrors] = useState({})

  const history = useHistory()
  const { id } = useParams()

  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username)
    } else {
      history.push(`/${localStorage.getItem("projectSlug")}/signin`)
    }
  }, [currentUser, history, id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // TODO: remove for client
      await axiosInstance.put("/dj-rest-auth/user/", {
        username,
      })
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }))
      history.goBack()
    } catch (err) {
      console.log(err)
      setErrors(err.response?.data)
    }
  }

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
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
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default UsernameForm
