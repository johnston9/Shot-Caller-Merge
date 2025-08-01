/* Info component for the DeptsGeneral page */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Create and view posts for each department outside of 
                the Primary Scenes Workspace
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info