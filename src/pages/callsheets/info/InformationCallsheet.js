/* Info component on the Create and Callsheet form
   telling users that the Add Cast and Add Background forms are 
   seperate from the main Callsheet form */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const Information = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>
        The Add Cast and Add Background forms are seperate from the main 
        Callsheet form below and allow each cast member or BG item to be added individually.
        They may be used here before submitting it or on the Edit page. 
        <br /> 
        The schedule is provided to facilitate this and to view other Scene 
        information like Department Info. The Add Cast and BG forms can 
        also be viewed beside the Schedule. <br />
        The Callsheet is divided into FIVE sections: TIMES, INFO, 
        LOCATIONS, WALKIES and CREW CALLS.  </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information