/* Form component to edit Cast items */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../../styles/Callsheets.module.css"
import btnStyles from "../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert"

import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const EditCast = (props) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})

  const {
    setShowEdit,
    setCastNew,
    id1,
    day_id1,
    cast_number1,
    role1,
    artist1,
    contact1,
    swf1,
    pickup1,
    call1,
    hmw1,
    on_set1,
    inst1,
  } = props

  const [postData, setPostData] = useState({
    day_id: day_id1,
    cast_number: cast_number1,
    role: role1,
    artist: artist1,
    contact: contact1,
    swf: swf1,
    pickup: pickup1,
    call: call1,
    hmw: hmw1,
    on_set: on_set1,
    inst: inst1,
  })

  const {
    day_id,
    cast_number,
    role,
    artist,
    contact,
    swf,
    pickup,
    call,
    hmw,
    on_set,
    inst,
  } = postData

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
    formData.append("cast_number", cast_number)
    formData.append("role", role)
    formData.append("artist", artist)
    formData.append("contact", contact)
    formData.append("swf", swf)
    formData.append("pickup", pickup)
    formData.append("call", call)
    formData.append("hmw", hmw)
    formData.append("on_set", on_set)
    formData.append("inst", inst)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(`castcallsnew/${id1}/`, formData)
        const {
          id,
          day_id,
          cast_number,
          role,
          artist,
          contact,
          swf,
          pickup,
          call,
          hmw,
          on_set,
          inst,
        } = data
        setCastNew({
          id1: id,
          day_id1: day_id,
          cast_number1: cast_number,
          role1: role,
          artist1: artist,
          contact1: contact,
          swf1: swf,
          pickup1: pickup,
          call1: call,
          hmw1: hmw,
          on_set1: on_set,
          inst1: inst,
        })
        setShowEdit((showEdit) => !showEdit)
      } else {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/castcallsnew/${id1}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        const {
          id,
          day_id,
          cast_number,
          role,
          artist,
          contact,
          swf,
          pickup,
          call,
          hmw,
          on_set,
          inst,
        } = data
        setCastNew({
          id1: id,
          day_id1: day_id,
          cast_number1: cast_number,
          role1: role,
          artist1: artist,
          contact1: contact,
          swf1: swf,
          pickup1: pickup,
          call1: call,
          hmw1: hmw,
          on_set1: on_set,
          inst1: inst,
        })
        setShowEdit((showEdit) => !showEdit)
      }
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }
  const buttons = (
    <div className="mb-2 text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => setShowEdit((showEdit) => !showEdit)}
      >
        Cancel
      </Button>
      <Button
        className={`px-4 ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Edit
      </Button>
    </div>
  )

  return (
    <div>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }}>
          <h5 className={`text-center my-2 py-0 mx-5  ${styles.SubTitle}`}>
            EDIT CHARACTER
          </h5>
          <Form className="text-center" onSubmit={handleSubmit}>
            {/* number swf pickup call hmw on_set */}
            <Row className="mx-0">
              <Col
                className="d-flex justify-content-center ml-4 ml-sm-5 px-0 px-sm-1"
                xs={2}
              >
                <Form.Group controlId="swf" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>SWF</Form.Label>
                  <Form.Control
                    className={`${styles.Input}`}
                    type="text"
                    name="swf"
                    value={swf}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.swf?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col
                className="d-flex justify-content-center mx-0 px-0 px-sm-1"
                xs={2}
              >
                <Form.Group controlId="pickup" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>PU</Form.Label>
                  <Form.Control
                    className={`${styles.Input}`}
                    type="text"
                    name="pickup"
                    value={pickup}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.pickup?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col
                className="d-flex justify-content-center mx-0 px-0 px-sm-1"
                xs={2}
              >
                <Form.Group controlId="call" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>Call</Form.Label>
                  <Form.Control
                    className={`${styles.Input}`}
                    type="text"
                    name="call"
                    value={call}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.call?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col className=" -flex justify-content-centermx-0 px-0" xs={2}>
                <Form.Group controlId="hmw" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>H/M/W</Form.Label>
                  <Form.Control
                    className={`${styles.Input}`}
                    type="text"
                    name="hmw"
                    value={hmw}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.hmw?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
              <Col
                className="d-flex justify-content-center mx-0 px-0 px-sm-1"
                xs={2}
              >
                <Form.Group controlId="on_set" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>
                    <span className="d-none d-sm-block">Set</span>
                    <span className="d-sm-none">Set</span>
                  </Form.Label>
                  <Form.Control
                    className={`${styles.Input}`}
                    type="text"
                    name="on_set"
                    value={on_set}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.on_set?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            <Row>
              <Col
                className="d-flex justify-content-center px-1"
                xs={{ span: 10, offset: 1 }}
              >
                <Form.Group controlId="inst" className={`${styles.Width95} `}>
                  <Form.Label className={`${styles.Bold}`}>Inst</Form.Label>
                  <Form.Control
                    className={`d-block d-md-none ${styles.InputScene}`}
                    as="textarea"
                    rows={1}
                    type="text"
                    name="inst"
                    value={inst}
                    onChange={handleChange}
                  />
                  <Form.Control
                    className={`d-none d-md-block ${styles.InputScene}`}
                    as="textarea"
                    rows={1}
                    type="text"
                    name="inst"
                    value={inst}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.inst?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Col>
            </Row>
            {/* buttons */}
            <Row>
              <Col className="text-center">
                <div className={`mt-3 `}>{buttons}</div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default EditCast
