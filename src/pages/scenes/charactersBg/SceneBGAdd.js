/* Component in the CharactersBG Component
   to add the Background items */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../../../styles/Scene.module.css"
import btnStyles from "../../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"
import useHostName from "../../../hooks/useHostName"

const SceneBGAdd = ({ id, background, setBackground, setShowBGAdd }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})

  const [postData, setPostData] = useState({
    quantity: "",
    role: "",
    costume: "",
  })

  const { quantity, role, costume } = postData

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const clear = () => {
    setPostData({
      quantity: "",
      role: "",
      costume: "",
    })
    setShowBGAdd(false)
  }

  // useEffect(() => {
  //   const handleMount = async () => {
  //       try {
  //           const { data } = await axiosReq.get(`/scenebgs/?scene_id=${id}`)
  //           setBackground(data);
  //       } catch (err) {
  //           console.log(err);
  //         }
  //   }
  //   handleMount();
  //   }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("scene_id", id)
    formData.append("quantity", quantity)
    formData.append("role", role)
    formData.append("costume", costume)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/scenebgs/", formData)
        setPostData({ quantity: "", role: "", costume: "" })
        setBackground((prevBackground) => ({
          ...prevBackground,
          results: [data, ...prevBackground.results],
        }))
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/scenebgs/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setPostData({ quantity: "", role: "", costume: "" })
        setBackground((prevBackground) => ({
          ...prevBackground,
          results: [data, ...prevBackground.results],
        }))
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-4`}
        onClick={clear}
      >
        Cancel
      </Button>
      <Button
        className={`px-3 px-md-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Add BG
      </Button>
    </div>
  )

  return (
    <div className="px-3 mt-3">
      <div className={`mb-3 ${styles.Back3}`}>
        <Row>
          <Col
            className={`px-0 mb-3 ${styles.Back}`}
            xs={12}
            md={{ span: 8, offset: 2 }}
          >
            <h5 className={`text-center mb-0 py-0 ${styles.SubTitle}`}>
              ADD BG / STANDINGS
            </h5>
            <Form className="text-center" onSubmit={handleSubmit}>
              <Row className="my-2">
                <Col
                  className="d-flex justify-content-center mx-0 px-1"
                  xs={4}
                  md={2}
                >
                  <Form.Group
                    controlId="quantity"
                    className={`${styles.Width} `}
                  >
                    <Form.Label className={`${styles.Bold}`}>
                      Quantity
                    </Form.Label>
                    <Form.Control
                      className={`${styles.Input}`}
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors?.quantity?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                </Col>
                <Col
                  className="d-flex justify-content-center mx-0 px-1"
                  xs={8}
                  md={5}
                >
                  <Form.Group controlId="role" className={`${styles.Width2} `}>
                    <Form.Label className={`${styles.Bold}`}>Role</Form.Label>
                    <Form.Control
                      className={`${styles.Input}`}
                      type="text"
                      name="role"
                      value={role}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors?.role?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                </Col>
                <Col
                  className="d-flex justify-content-center mx-0 px-1"
                  xs={12}
                  md={{ span: 5, offset: 0 }}
                >
                  <Form.Group
                    controlId="costume"
                    className={`${styles.Width2} `}
                  >
                    <Form.Label className={`${styles.Bold}`}>
                      Costume
                    </Form.Label>
                    <Form.Control
                      className={`${styles.Input}`}
                      type="text"
                      name="costume"
                      value={costume}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors?.costume?.map((message, idx) => (
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
    </div>
  )
}

export default SceneBGAdd
