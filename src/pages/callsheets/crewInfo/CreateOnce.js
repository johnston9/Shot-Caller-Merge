/* Component in CrewInfo page used to inform the user about 
   creating the initial Crew Info dataset 
 * This component will display only once before the Crew
   Info Create page has been submitted*/
import React from "react"
import { useRedirect } from "../../../hooks/Redirect"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import styles from "../../../styles/Callsheets.module.css"
import btnStyles from "../../../styles/Button.module.css"
import { useHistory } from "react-router-dom"

const CreateOnce = () => {
  useRedirect()
  const history = useHistory()
  return (
    <div className={`${styles.Important} py-2 mx-5 my-3`}>
      <h3 className={`text-center  ${styles.ImportantText}`}>
        INITIALIZE THE COMPANY AND CREWINFO PAGE{" "}
      </h3>
      <p className={`text-center  ${styles.ImportantText}`}>
        The Create Crew Info Page Button is used to create the page. <br />{" "}
        After that all new info and edits can be done by using the Edit Info
        Button.{" "}
      </p>
      {/* crew info create button*/}
      <Row className=" mt-2 text-center">
        <Col>
          <Button
            onClick={() =>
              history.push(
                `/${localStorage.getItem("projectSlug")}/crewinfo/create`
              )
            }
            className={`mb-2 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Shed}`}
          >
            Create Crew Info Page
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreateOnce
