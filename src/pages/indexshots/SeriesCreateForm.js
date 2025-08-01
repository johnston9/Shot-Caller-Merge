/* Form Page on the SeriesPage to create a Series
 * A Series is the name and content description of a series of
   IndexShots */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../../styles/PostCreateEditForm.module.css"
import btnStyles from "../../styles/Button.module.css"
import { Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const SeriesCreateForm = ({ setSeries, setShow }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})

  const [postData, setPostData] = useState({
    name: "",
    content: "",
  })
  const { name, content } = postData

  const history = useHistory()

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("name", name)
    formData.append("content", content)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/series/", formData)
        console.log(data)
        setSeries((prevSeries) => ({
          ...prevSeries,
          results: [data, ...prevSeries.results],
        }))
        setShow(false)
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/series/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        console.log(data)
        setSeries((prevSeries) => ({
          ...prevSeries,
          results: [data, ...prevSeries.results],
        }))
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pr-3 `}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 pl-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  )

  return (
    <div>
      <Form className={`${styles.Back} mt-4 mx-5`} onSubmit={handleSubmit}>
        <h5 className={`text-center mt-0 ${styles.SubTitle}`}>Create Series</h5>
        <Row className="text-center">
          <Col
            xs={12}
            md={{ span: 6, offset: 3 }}
            className="p-0 p-md-2 d-flex justify-content-center "
          >
            <Form.Group controlId="name" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Series Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                className={`${styles.Input}`}
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
        <Row className="text-center">
          <Col
            xs={12}
            md={{ span: 8, offset: 2 }}
            className="p-0 p-md-2 d-flex justify-content-center"
          >
            <Form.Group controlId="content" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>
                Series Content
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                as="textarea"
                name="content"
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
          </Col>
        </Row>
        {/* buttons */}
        <Row>
          <Col>
            <div className={` my-3`}>{buttons} </div>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SeriesCreateForm
