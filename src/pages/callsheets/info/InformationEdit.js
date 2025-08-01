/* Info component on the Edit Callsheet form
   telling users that the Add Cast and Add Background forms are 
   seperate from the main Callsheet form */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InformationEdit = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>The Add Cast and Add Background forms here are seperate from the main 
        Callsheet form below and must be used before submitting the it. They allow each cast member 
        or background item to be added individually. The schedule is provided
        to facilitate this and can also be viewed beside these forms.</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InformationEdit