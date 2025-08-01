/* Info Component in MoodboardsPage */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Use Moodboards to use to explore and define visual 
              themes.<br/> 
              Create Moodboards for Scenes, Locations and Characters on the Moodboards 
              page or on that element's page.<br/>
              Each element may have a number of Moodshots.<br/> 
              Each Moodboard may be solely for 
              a Scene, Location and Character or may reference the other elements.<br/>
              Moodboards by be used to explore other themes using the title solely. 
            </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info