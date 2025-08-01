/* Form component to edit Background items */
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

const EditBack = (props) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})

  const {
    setBgNew,
    setShowEdit,
    id1,
    day_id1,
    qty1,
    type1,
    call1,
    scenes1,
    set1,
    costumes1,
  } = props

  const [postData, setPostData] = useState({
    day_id: day_id1,
    qty: qty1,
    type: type1,
    call: call1,
    scenes: scenes1,
    set: set1,
    costumes: costumes1,
  })

  const { day_id, qty, type, call, scenes, set, costumes } = postData

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
    formData.append("type", type)
    formData.append("call", call)
    formData.append("scenes", scenes)
    formData.append("set", set)
    formData.append("costumes", costumes)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(
          `/backgroundcallsnew/${id1}/`,
          formData
        )
        const { id, day_id, qty, type, call, scenes, set, costumes } = data
        setBgNew({
          id1: id,
          day_id1: day_id,
          qty1: qty,
          type1: type,
          call1: call,
          scenes1: scenes,
          set1: set,
          costumes1: costumes,
        })
        setShowEdit((showEdit) => !showEdit)
      } else {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/backgroundcallsnew/${id1}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        const { id, day_id, qty, type, call, scenes, set, costumes } = data
        setBgNew({
          id1: id,
          day_id1: day_id,
          qty1: qty,
          type1: type,
          call1: call,
          scenes1: scenes,
          set1: set,
          costumes1: costumes,
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
      <h5 className={`text-center py-0 mx-5  ${styles.SubTitle}`}>
        EDIT BG / STAND-INS
      </h5>
      <Form className="text-center" onSubmit={handleSubmit}>
        {/* qty call set scenes*/}
        <Row className="mx-0">
          <Col className="d-flex justify-content-center mx-0" xs={3}>
            <Form.Group controlId="qty" className={`${styles.Width} `}>
              <Form.Label className={`${styles.Bold}`}>Qty</Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="qty"
                value={qty}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.qty?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
            <Form.Group controlId="call" className={`${styles.Width} `}>
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
          <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
            <Form.Group controlId="set" className={`${styles.Width} `}>
              <Form.Label className={`${styles.Bold}`}>Set</Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="set"
                value={set}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.set?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
            <Form.Group controlId="scenes" className={`${styles.Width} `}>
              <Form.Label className={`${styles.Bold}`}>Scenes</Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="scenes"
                value={scenes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.scenes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* type costume */}
        <Row className="text-center mx-0">
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6}>
            <Form.Group controlId="type" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Type</Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="type"
                value={type}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.type?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6}>
            <Form.Group controlId="costumes" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Costumes</Form.Label>
              <Form.Control
                className={`${styles.Input}`}
                type="text"
                name="costumes"
                value={costumes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.costumes?.map((message, idx) => (
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
    </div>
  )
}

export default EditBack
