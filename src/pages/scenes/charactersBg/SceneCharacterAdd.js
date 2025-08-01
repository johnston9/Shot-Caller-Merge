/* Component in the CharactersAdd Component
   to add the Scene characters */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../../../styles/Scene.module.css"
import btnStyles from "../../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert"
import DropdownButton from "react-bootstrap/DropdownButton"
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults"
import { useCharactersContext } from "../../../contexts/Scene_chars_locs"
import { Dropdown } from "react-bootstrap"
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config"
import useHostName from "../../../hooks/useHostName"

const SceneCharacterAdd = ({ id, setCharacters }) => {
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const charactersContext = useCharactersContext()

  const [postData, setPostData] = useState({
    cast_number: "",
    role: "",
    costume: "",
  })

  const { cast_number, role, costume } = postData

  const setData = (character) => {
    /* set the postData to the Character's data 
         from the Select form */
    const role = character.role || ""
    const number = character.number || ""

    setPostData({
      cast_number: number,
      role: role,
      costume: "",
    })
  }

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  const clear = () => {
    // clear the postData
    setPostData({
      cast_number: "",
      role: "",
      costume: "",
    })
  }

  // useEffect(() => {
  //   const handleMount = async () => {
  //       try {
  //           const { data } = await axiosReq.get(`/scenecharacters/?scene_id=${id}`)
  //           setCast(data);
  //       } catch (err) {
  //         }
  //   }
  //   handleMount();
  //   }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("scene_id", id)
    formData.append("cast_number", cast_number)
    formData.append("role", role)
    formData.append("costume", costume)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/scenecharacters/", formData)
        // clear the postData
        setPostData({ cast_number: "", role: "", costume: "" })
        // update character state
        setCharacters((prevChars) => ({
          ...prevChars,
          results: [data, ...prevChars.results],
        }))
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/scenecharacters/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        // clear the postData
        setPostData({ cast_number: "", role: "", costume: "" })
        // update character state
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
        Create
      </Button>
    </div>
  )

  return (
    <div className={` ${styles} mt-3 px-3 `}>
      <div>
        {/* Dropdown DropButt */}
        <Row>
          <Col
            className={`px-0 mb-3 ${styles.Back}`}
            xs={12}
            md={{ span: 8, offset: 2 }}
          >
            <h5 className={`text-center mb-0 py-0 ${styles.SubTitle}`}>
              ADD SCENE CHARACTER
            </h5>
            <Form className="text-center px-3" onSubmit={handleSubmit}>
              <Row>
                <Col xs={8} md={4}>
                  <p className={`text-center mb-0 ${styles.Bold}`}>
                    SELECT CHARACTER
                  </p>
                  <DropdownButton
                    id="dropdown-basic-button"
                    className={`pt-1 pl-2 ${styles.DropButt}`}
                    title="Select"
                  >
                    {charactersContext.results.length &&
                      charactersContext.results.map((character) => (
                        <Dropdown.Item
                          onClick={() => setData(character)}
                          key={character.id}
                        >
                          {character.role}
                        </Dropdown.Item>
                      ))}
                  </DropdownButton>
                </Col>
                <Col xs={4} md={2}>
                  <p className={`text-center mb-0 ${styles.Bold}`}>Number</p>
                  <p className={`mt-2 py-1 ${styles.White}`}>{cast_number}</p>
                </Col>
                <Col xs={8} md={4}>
                  <p className={`text-center mb-0 ${styles.Bold}`}>Role</p>
                  <p className={`mt-2 py-1 ${styles.White}`}>{role}</p>
                </Col>
                <Col
                  xs={4}
                  md={2}
                  className="d-flex justify-content-center mx-0 px-1"
                >
                  <Form.Group
                    controlId="costume"
                    className={`${styles.Width2} ml-2 `}
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
            {/* <Row className="py-2">
          <Col xs={12} md={6}>
          <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold }`}>
          SELECT CHARACTER
        </p>
          <DropdownButton id="dropdown-basic-button" 
          className={`pt-1 pl-2 ${styles.DropButt}`} title="Select">
          {charactersContext.results.length && (
                charactersContext.results.map((character) => (
                  <Dropdown.Item onClick={() => setData(character) } 
                  key={character.id} >{character.role}</Dropdown.Item>
                ) )) }
          </DropdownButton>
          </Col>
      </Row> */}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SceneCharacterAdd
