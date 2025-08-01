/* Form Page to create a Scene by giving it a number */
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "../../styles/Scene.module.css"
import btnStyles from "../../styles/Button.module.css"
import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import {
  useCrewInfoContext,
  useSetEditCrewInfoContext,
} from "../../contexts/BaseCallContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const Freeze = () => {
  const host = useHostName()
  const crewInfoOne = useCrewInfoContext()
  const frozen = crewInfoOne?.freeze || ""
  // const frozen = true;
  // eslint-disable-next-line
  const [errors, setErrors] = useState({})
  const [postData, setPostData] = useState({
    freeze: "",
  })

  const { freeze } = postData
  const setEditCrewInfo = useSetEditCrewInfoContext()

  const history = useHistory()

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White}`}>
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Freeze
      </Button>
    </div>
  )

  const handleFreeze = () => {
    setPostData({
      freeze: "freeze",
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("freeze", freeze)

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/crewinfonew/", formData)
        setEditCrewInfo(true)
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/crewinfonew/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        setEditCrewInfo(true)
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  return (
    <div>
      {/* Freeze Scene numbers - only to be sceen if not already submitted */}
      {frozen ? (
        <p className="text-center mb-3">
          SCENE NUMBERS HAVE BEEN PERMANENTLY FROZEN AND CANNOT BE CHANGED
        </p>
      ) : (
        <>
          <h5 className={` mt-1 mb-4 text-center ${styles.SubTitle}`}>
            FREEZE
          </h5>
          <Row>
            <Col className="text-center">
              <p>
                The ability to change Scene numbers is available till a certain
                point. You choose when and freeze it. Of course doing so will
                result in all previous Scene Posts ending up in a different
                scene's page so it can be frozen from the beginning if
                necessary.
              </p>
              <p>
                Click the Set Freeze Scenes Button below when you decide to do
                this.
              </p>
              <p>Then click the Freeze Button below to submit.</p>
              <p className="mt-2">
                ONCE DONE IT CANNOT BE UNDONE AND THIS FORM WILL NO LONGER
                APPEAR .
              </p>
            </Col>
          </Row>
          <Form className={`mt-3 mb-5 ${styles.Back}`} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col className="text-center mt-2">
                <Button
                  className={` px-5 py-1 ${btnStyles.Button}  ${btnStyles.Order}`}
                  onClick={() => handleFreeze()}
                >
                  {" "}
                  Set Freeze Scene Numbers
                </Button>
              </Col>
            </Row>
            {buttons}
          </Form>
        </>
      )}
    </div>
  )
}

export default Freeze
