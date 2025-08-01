/* Important Info component for the Character Create page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const Important = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
        <p className={`text-center px-3 pt-1 ${styles.Redn }`}>
          All Characters must be assigned a number. This cannot be changed.
          If necessary the character should be deleted and given a new number.
          </p>     
          <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
            Actor and costume details are to be added in the Edit Chatacter page
            which is accessible from the Edit button on the Character's Page.
          </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Important