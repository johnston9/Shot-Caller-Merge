/* Important Info component on the CharactersAdd component
   telling users how to add Characters */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoChar = () => {
  return (
    <div>
    <Row className="mb-3">
      <Col className="d-none d-md-block" md={1}></Col>     
      <Col xs={12} md={10} >
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center`} >IMPORTANT</h5>  
        <p>
            New Characters must be added here by the Add New Characters 
          form or on the Character's feature Add Character
          page. This will add them to the Add Scene Character dropdown.
            </p>
        <p className={`text-center px-3 pt-1`}>
          All Characters must be assigned a number. This cannot be changed.
          If necessary the Character can be deleted and given a new number.
          </p>     
         </div>
      </Col>
    </Row>
    </div>
  )
}

export default InfoChar