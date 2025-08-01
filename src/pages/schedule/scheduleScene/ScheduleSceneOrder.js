import React, { useState } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../../../styles/ScheduleCreate.module.css"
import btnStyles from "../../../styles/Button.module.css"
import { Alert } from "react-bootstrap"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"
import useHostName from "../../../hooks/useHostName"

const SchedOrder = (props) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const {
    setShowOrder,
    setHasOrder,
    day_id1,
    day_order_number1,
    start_time1,
    end_time1,
    new_info1,
    id,
  } = props

  const [postData, setPostData] = useState({
    day_order_number: day_order_number1,
    start_time: start_time1,
    end_time: end_time1,
    new_info: new_info1,
    day_id: day_id1,
  })

  const { day_order_number, start_time, end_time, new_info, day_id } = postData

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("day_id", day_id)
    formData.append("day_order_number", day_order_number)
    formData.append("start_time", start_time)
    formData.append("end_time", end_time)
    formData.append("new_info", new_info)
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.put(`/schedule/scenes/${id}/`, formData)
        setShowOrder(false)
        setHasOrder(true)
      } else {
        await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/schedule/scenes/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setShowOrder(false)
        setHasOrder(true)
      }
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const textFields = (
    <div>
      {/* order start end */}
      <Row className="text-center pt-2">
        <Col className="d-flex justify-content-center" xs={12} md={4}>
          <Form.Group controlId="day_order_number" className="mb-2">
            <Form.Label>Day Order Number</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              name="day_order_number"
              value={day_order_number +1}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.day_order_number?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col className="d-flex justify-content-center" md={4} xs={6}>
          <Form.Group controlId="start_time" className="mb-2">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              name="start_time"
              value={start_time}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.start_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col className="d-flex justify-content-center" md={4} xs={6}>
          <Form.Group controlId="end_time" className="mb-2">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              name="end_time"
              value={end_time}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.end_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>
      <hr className="d-none d-md-block" />
      {/* Next/New-info */}
      <Row className="text-center">
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 2 }}>
          <Form.Group controlId="new_info" className="mb-2">
            <Form.Label>Next Info</Form.Label>
            <Form.Control
              className={styles.InputScene}
              type="text"
              name="new_info"
              as="textarea"
              rows={2}
              value={new_info}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.new_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
        <Col md={4}>
          <div className="text-center pb-2 mt-1 mt-md-5">
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => setShowOrder(false)}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
            >
              create
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )

  return (
    <div className={` ${styles.OrderBox}`}>
      <Form onSubmit={handleSubmit}>{textFields}</Form>
    </div>
  )
}

export default SchedOrder
