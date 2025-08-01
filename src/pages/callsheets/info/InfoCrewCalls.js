/* Info component on the Callsheet form
   telling users how to set the Unit Call to all crew members
   call times */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoCrewCalls = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
          <p>Clicking the SET UNIT CALL button will give every Crew member a call time
            set to the Unit Call. This can then be changed individually for each Crew member </p>
            <p> After clicking the Create button below the Crew Call Times can then be added or edited
          on the Edit page.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoCrewCalls