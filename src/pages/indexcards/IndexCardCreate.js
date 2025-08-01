/* Component in IndexCardsPage to create an IndexCard */
import React, { useState } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../../styles/Indexes.module.css"
import btnStyles from "../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert"
import { axiosReq, axiosInstance } from "../../api/axiosDefaults"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const IndexCardCreate = ({ setShow, setHasOrder, id }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const [postData, setPostData] = useState({
    number: "",
    story: "",
    style: "",
  })

  const { number, story, style } = postData

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("number", number)
    formData.append("story", story)
    formData.append("style", style)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.post("/indexcards/", formData)
        setHasOrder(true)
        setShow(false)
      } else {
        await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/indexcards/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setHasOrder(true)
        setShow(false)
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
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
        onClick={() => setShow(false)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-4`}
        type="submit"
      >
        Create
      </Button>
    </div>
  )

  return (
    <div className="mt-3">
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <Form
            className={`text-center mb-4 px-3 ${styles.Back}`}
            onSubmit={handleSubmit}
          >
            <h5
              className={`text-center mb-4 pl-3 py-1 ${styles.SubTitle}`}
              style={{ textTransform: "uppercase" }}
            >
              Create Index Card
            </h5>
            <Row>
              <Col
                xs={{ span: 6, offset: 3 }}
                className="d-flex justify-content-center"
              >
                <Form.Group
                  controlId="number"
                  className={`${styles.Width2} text-center`}
                >
                  <Form.Label className={`${styles.Bold} `}>Number</Form.Label>
                  <Form.Control
                    className={styles.Input}
                    type="text"
                    name="number"
                    value={number}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.number?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                md={6}
                className="p-0 p-md-2 d-flex justify-content-center"
              >
                <Form.Group controlId="story" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>Story</Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.InputScene}
                    as="textarea"
                    name="story"
                    rows={2}
                    value={story}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.story?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col
                xs={12}
                md={6}
                className="p-0 p-md-2 d-flex justify-content-center"
              >
                <Form.Group controlId="style" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>Style</Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.InputScene}
                    as="textarea"
                    name="style"
                    rows={2}
                    value={style}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.style?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={` my-3`}>{buttons} </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default IndexCardCreate
