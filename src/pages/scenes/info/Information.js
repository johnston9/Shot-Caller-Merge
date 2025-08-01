/* Info component on the ScenesPage */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const Information = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
        <p>All Breakdowns, Storyboards, 
          Shotlists and Workspaces are done by Scene. 
          Start by adding a Scene here.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Information