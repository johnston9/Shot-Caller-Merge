/* Form Page in the scene Component to add the Scene Workspace Guide */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../../styles/Scene.module.css"
import btnStyles from "../../styles/Button.module.css"
import { Alert } from "react-bootstrap"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const WorkspaceGuideForm = ({ setShowGuide, setScene, id, number }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})

  const [postData, setPostData] = useState({
    workspace_guide: "",
  })
  const { workspace_guide } = postData

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("number", number)
    formData.append("workspace_guide", workspace_guide)
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(`/scenes/${id}/`, formData)
        setShowGuide(false)
        setScene({ results: [data] })
      } else {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/scenes/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setShowGuide(false)
        setScene({ results: [data] })
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => setShowGuide(false)}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  )

  return (
    <Row>
      <Col md={1} className="d-none d-md-block"></Col>
      <Col md={10}>
        <div className={`mt-3 px-3 ${styles.Guide}`}>
          <div className={`mt-0 text-center mb-0 ${styles.SubTitle}`}>
            {/* <span className={`float-right ${styles.Close }`} 
            onClick={() => setShowGuide(false) } >Close</span>  */}
            <h5
              className={`text-center`}
              style={{ textTransform: "uppercase" }}
            >
              Add Guide{" "}
            </h5>
          </div>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="workspace_guide" className="mb-2">
                  <Form.Label className="p-1 d-none"></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className={styles.InputScene}
                    name="workspace_guide"
                    as="textarea"
                    rows={3}
                    value={workspace_guide}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.workspace_guide?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row>
              <Col>{buttons}</Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default WorkspaceGuideForm
