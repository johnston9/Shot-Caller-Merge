/* Component in the Callsheet component to display the Callsheet 
   Hospital info in mobile
 * Contains the Map component to display Google maps */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import Map from '../../../components/Map';
import goo_map from "../../../assets/goo-map.png";
import { Image } from 'react-bootstrap';
import { useState } from 'react';

const HospitalPage = ({callsheet, setShow}) => {
    const [showHosMap, setShowHosMap] = useState(false);
    const {nearest_hospital, hospital_address_line_1,
        hospital_address_line_2, hospital_address_line_3, 
        hospital_address_line_4} = callsheet;
    const hospital_address = `${nearest_hospital}, ${hospital_address_line_1}, ${hospital_address_line_2}`;

  return (
    <div>
        <div className={`mb-3 ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-0 text-center`} style={{ textTransform: 'uppercase'}} >Nearest Hospital </h5>
        </div>
        <div >
            <Row className='mb-1'>
              <Col xs={9}>
              <p className={`mb-0 ${styles.Bold} text-center `} >Address: </p>
              <h5 className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{nearest_hospital} </h5>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_1} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_2} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_3} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{hospital_address_line_4} </p>
              </Col>
              <Col className={`mx-0 `} xs={3} >
              <p className={`mb-0 ${styles.Bold} text-center `} >Map: </p>
              <Image src={goo_map} alt="google maps" height="50"
              className={`mt-1 ${styles.Map}`}
              onClick={() => setShowHosMap(showHosMap => !showHosMap)} ></Image>
              </Col>
            </Row>
            <Row>
            <Col>
            {!showHosMap ? (
              ""
                  ) : (
                    <Map address={hospital_address}  /> 
                    ) }
            </Col>
            </Row>
            </div>
    </div>
  )
}

export default HospitalPage