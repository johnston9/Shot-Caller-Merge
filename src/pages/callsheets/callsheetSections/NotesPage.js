/* Component in the Callsheet component to display the Callsheet 
   Department and Important Notes */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const NotesPage = (props) => {
    const {important_info, transport_info, department_info, setShow} = props;
  return (
    <div className='mt-5'>
    {/* Important Notes */}
    <div>
    <div className='d-block d-md-none'>
    <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
    <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
    <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} > Notes</h5>
    </div>
    </div>
    <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Important Notes</span>
    <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
    <Row className='px-3'>
        <Col className={`px-1 ${styles.Border }`}>
        <p className={`px-1`}>{important_info} </p>
        </Col>
    </Row>
    </div>
    {/* TRANSPORT NOTES */}
    <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Transport Notes</span>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row className='px-3'>
            <Col className={`px-1 ${styles.Border }`}>
            <p className={`px-1`}>{transport_info} </p>
            </Col>
        </Row>
    </div>
    {/* Department Notes */}
    <div className='mt-5'>
    <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Department Notes</span>
    <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
    <Row className='px-3'>
        <Col className={`px-1 ${styles.Border }`}>
        <p className={`px-1`}>{department_info} </p>
        </Col>
    </Row>
    </div>
    </div>
  )
}

export default NotesPage