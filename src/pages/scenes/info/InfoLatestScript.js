/* Info component on the LatestScript Component */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoLatestScript = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>Uploat the entire project script for each re-write here.
            Only PDF will be accepted.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoLatestScript