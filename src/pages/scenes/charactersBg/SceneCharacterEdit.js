/* Component in the Character Component
   to edit the Scene characters */
import React, { useEffect, useState } from "react"
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

const CharacterEdit = ({ setShowEditForm, setCharacters, id }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const [postData, setPostData] = useState({
    scene_id: "",
    cast_number: "",
    role: "",
    costume: "",
  })

  const { scene_id, cast_number, role, costume } = postData

  useEffect(() => {
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/scenecharacters/${id}/`)
          const { scene_id, cast_number, role, costume } = data

          setPostData({
            scene_id,
            cast_number,
            role,
            costume,
          })
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/scenecharacters/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          const { scene_id, cast_number, role, costume } = data

          setPostData({
            scene_id,
            cast_number,
            role,
            costume,
          })
        }
      } catch (err) {
        console.log(err)
      }
    }

    handleMount()
  }, [id])

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("scene_id", scene_id)
    formData.append("cast_number", cast_number)
    formData.append("role", role)
    formData.append("costume", costume)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(`/scenecharacters/${id}/`, formData)
        setShowEditForm(false)
        // handleMount();
        setCharacters((prevChars) => ({
          ...prevChars,
          results: [data, ...prevChars.results],
        }))
      } else {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/scenecharacters/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setShowEditForm(false)
        // handleMount();
        setCharacters((prevChars) => ({
          ...prevChars,
          results: [data, ...prevChars.results],
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
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => setShowEditForm((showEditForm) => !showEditForm)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3`}
        type="submit"
      >
        Edit
      </Button>
    </div>
  )

  return (
    <div className={`${styles.Back} mx-0 px-0 mt-2 mb-3 pt-2`}>
      <Form onSubmit={handleSubmit}>
        <Row className="">
          <Col className="px-0" xs={6}>
            <p className={`text-center mb-0 ${styles.Bold}`}>Edit Costume</p>
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6}>
            <Form.Group controlId="costume" className={`${styles.Width} ml-2 `}>
              {/* <Form.Label className={`${styles.Bold}`} ></Form.Label> */}
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
        <Row>
          <Col className="my-3 text-center">{buttons}</Col>
        </Row>
      </Form>
    </div>
  )
}

export default CharacterEdit
