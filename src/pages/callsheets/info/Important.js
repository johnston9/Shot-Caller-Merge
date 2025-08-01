/* Important Info component on the Crew Info Page
   telling users how to registered crew */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
      <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
      <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
      <p className={`text-center px-3 pt-1 ${styles.Red }`}>
        All Crew Members who you need to access the app and who are 
        to appear on the Callsheet must be registered.
        </p>     
        <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
          Register an account for each crew member 
          using their position's Username.
          Send the Shot Caller link to them with the Username 
          and whatever password you used instructing them 
          to sign in and change their password.
        </p>
        <p>
      The main Crew members' info is to be added in their Department
      from the links below. Here you will find their username.
      </p>
      <p>
      They will all automatially be displayed on each Callsheet Create
      form with an input for their Calltime and will appear in the Callsheet 
      with their personal call times displaying on top for each user.
      </p>
      <p>Some of the links below contain two departments due to size.
        The Post/Additional link holds the Additional crew 
      members section from crew who will appear on the Callsheet.</p>
      <p className="text-center">EXTRA CREW MEMBERS</p>
      <p>
      Extra Crew members may be added individually in the ExtraCrewInfo
      forms on each Department Info page. These will not appear on the Callsheet
      and so will also not have personal call times. </p>
      <p>This form may be used for
      main crew members like producers, writers and the accountants and payroll
      people. It is also for all the extra crew members that would traditionally
      get call times from ther department heads. 
      </p>
      <p>
        You can choose to register them or not and give them any username
        you wish then the follow the process outlined above.
      </p>
      <p>
      Crew members not accociated with a department may be added in the
      ExtraCrewInfo form on the Addition Positions page and will display
      on that page.
      </p>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important