/* Info component on the Create and Edit Callsheet forms
   telling users to enter the City name and the ISO3166
   2-letter country code  */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InformationWeather = () => {
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >IMPORTANT</h5>  
        <p className={`${styles.P}`}>
            For Weather Location please put the city's name, comma, space and 2-letter country code 
            (ISO3166)<br/> Example - London, GB or New York, US</p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InformationWeather