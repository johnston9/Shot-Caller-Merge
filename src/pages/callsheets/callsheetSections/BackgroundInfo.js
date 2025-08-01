/* Component in the Background component to display the Callsheet 
   the extra background info  */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/Callsheets.module.css";

const BackgroundInfo = (props) => {
    const { scenes1, set1, costumes1 } = props
  return (
    <div>
        <Row className='text-center px-3 mx-0'>
          <Col className={`mx-0 px-0 `} xs={2}>
          <div className={` ${styles.TitleBox2}`}>
          <p style={{ textTransform: 'uppercase' }} className={`py-0 mb-0 ${styles.TitleBox}`}>Set</p>
          </div>
          <div className={` ${styles.Border}`}>
          <p className={`mb-0 mx-0 py-2`}>{set1}</p>  
          </div>                      
          </Col>
          <Col className={`mx-0 px-0`} xs={4}>
          <div className={` ${styles.TitleBox2}`}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0 ${styles.TitleBox}`}>Scenes</p>
          </div>
          <div className={` ${styles.Border}`}>
          <p className={`mb-0 mx-0 py-2`}>{scenes1}</p> 
          </div>                       
          </Col>
          <Col className={`text-center mx-0 px-0 `} xs={6}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0  ${styles.TitleBox}`}>Costumes</p>
          <div className={` ${styles.Border}`}>
          <p className={`mb-0 mx-0 py-2 `}>{costumes1}</p>
          </div>
          </Col>               
      </Row>
    </div>
  )
}

export default BackgroundInfo