/* Component in the CrewInfo page to display
   the Locations Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoLocations = ({crewInfoOne, setShowLoc}) => {
  useRedirect();
  const [show, setShow] = useState(false);
  
  const {location_mngr_name, location_mngr_email, location_mngr_phone,
    location_ass_1_name, location_ass_1_email, location_ass_1_phone,
    location_ass_2_name, location_ass_2_email, location_ass_2_phone,
    location_ass_3_name, location_ass_3_email, location_ass_3_phone,
    location_ass_4_name, location_ass_4_email, location_ass_4_phone,
    location_security_name, location_security_email, location_security_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowLoc(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >LOCATIONS </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* location mngr */}
        {location_mngr_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Mngr</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{location_mngr_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>locmngr </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_mngr_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_mngr_email}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* location security */}
        {location_security_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Security</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{location_security_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>locsecur </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_security_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_security_email}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* location ass 1 */}
        {location_ass_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Assistant 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}> {location_ass_1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}> locast1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* location ass 2 */}
        {location_ass_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Assistant 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{location_ass_2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}> locast2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* location ass 3 */}
        {location_ass_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Assistant 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}> {location_ass_3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}> locast3</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* location ass 4 */}
        {location_ass_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Location Assistant 4</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}> {location_ass_4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}> locast4</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_4_email}</p>
            </Col>
          </Row>
          </div> )
        }
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Locations Department Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="location"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoLocations