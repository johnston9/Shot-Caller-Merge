/* Important Info component for the Character Edit page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";

const ImportantEdit = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 8, offset: 2}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center ${styles.Red }`} >IMPORTANT</h5>  
        <p className={`text-center px-3 pt-1 ${styles.Redn }`}>
          All Cast members must be registered.
          </p>     
          <p className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
            As with crew members register each actor using the provided Username for the 
            position. Then send the app link and the Username to the actor telling
            them to log in and "Importantly" change the passsword.
          </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default ImportantEdit