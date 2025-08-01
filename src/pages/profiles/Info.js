/* Info component on the ProfilesPage */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Click on a Profile's "follow" button to add them to 
                your feed.
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info