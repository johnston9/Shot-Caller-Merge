/* Component in the CallCast component to display the Callsheet 
   the extra cast info */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/Callsheets.module.css";

const CallCastInfo = (props) => {
    const { contact1, inst1 } = props
  return (
    <div className='text-center px-0 my-0 py-0 '>
        <Row className='text-center px-0 mx-3'>
          <Col className={`mx-0 px-0`} xs={4}>
          <div className={` ${styles.TitleBox2}`}>
          <p style={{ textTransform: 'uppercase' }} className={`my-0 py-0 ${styles.TitleBox}`}>Contact</p> 
          </div> 
          <div className={` ${styles.Border}`}>
          <p className={`mb-0 mx-0 py-2`}>{contact1}</p>   
          </div>                     
          </Col>
          <Col className={`text-center mx-0 px-0` } xs={8}>
          <p style={{ textTransform: 'uppercase' }} className={`my-0 py-0  ${styles.TitleBox}`}>Requirements</p> 
          <div className={` ${styles.Border}`}>
          <p className={`mb-0 mx-0 py-2`}>{inst1}</p>   
          </div> 
          </Col>               
      </Row>
    </div>
  )
}

export default CallCastInfo