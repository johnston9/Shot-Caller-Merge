import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import portrait8 from "../../../assets/storyboards/portrait8.pdf";

const Template2 = ({setOpen2}) => {
  return (
    <div>
    <Row className="mt-3">
    <Col xs={12} className='text-center'>
    <h5 className={`${styles.SubTitle }`}>
    8 PANEL PORTRAIT
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setOpen2(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <div className={`${styles.Frame}`}>
    <iframe title="Storyboard Template 2" src={portrait8} 
    className={appStyles.iframeFull} alt="Storyboard Template 2"  />
    </div>
    </div>
  )
}

export default Template2