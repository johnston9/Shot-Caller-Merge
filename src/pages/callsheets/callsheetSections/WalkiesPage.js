/* Component in the Callsheet component to display the Callsheet 
   Walkies info */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const WalkiesPage = (props ) => {
    const {callsheet, setShow} = props;

    const {walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip} = callsheet;
  return (
        <div className='mt-3 mb-5'>
            <div className='d-none d-md-block mt-5'>
                <h4 className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
                style={{ textTransform: 'uppercase' }}>Walkie Channels </h4>
            </div>
            <div className='d-block d-md-none'>
            <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Walkie Channels </h5>
            </div>
            </div>
            <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
            <Row className='px-0'>
                <Col md={3} xs={6}>Production: {walkie_channel_production}</Col>
                <Col md={3} xs={6}>Open: {walkie_channel_open}</Col>
                <Col md={3} xs={6}>Rollover: {walkie_channel_rollover}</Col>
                <Col md={3} xs={6}>Transport: {walkie_channel_transportation}</Col>
                <Col md={3} xs={6}>Art Dept: {walkie_channel_art_dept}</Col>
                <Col md={3} xs={6}>Camera: {walkie_channel_camera}</Col>
                <Col md={3} xs={6}>Electric: {walkie_channel_electric}</Col>
                <Col md={3} xs={6}>Grip: {walkie_channel_grip}</Col>
            </Row>
            <p style={{ textTransform: 'uppercase'}} className={`mb-5 pl-3 pt-1 ${styles.SubTitle }`}></p>
        </div>
  )
}

export default WalkiesPage