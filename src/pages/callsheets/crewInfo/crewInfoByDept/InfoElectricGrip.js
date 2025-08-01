/* Component in the CrewInfo page to display
   the Electric Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoElectric = ({crewInfoOne, setShowEle}) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showGrip, setShowGrip] = useState(false);

  const {gaffer_name, gaffer_email, gaffer_phone,
    best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
    electric_3_name, electric_3_email, electric_3_phone,
    electric_4_name, electric_4_email, electric_4_phone,
    keygrip_name, keygrip_email, keygrip_phone,
    best_boy_grip_name, best_boy_grip_email, best_boy_grip_phone,
    dolly_grip_name, dolly_grip_email, dolly_grip_phone,
    swing_ge1_name, swing_ge1_email, swing_ge1_phone,
    swing_ge2_name, swing_ge2_email, swing_ge2_phone,
    swing_ge3_name, swing_ge3_email, swing_ge3_phone,
    swing_ge4_name, swing_ge4_email, swing_ge4_phone,
    swing_ge5_name, swing_ge5_email, swing_ge5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowEle(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >ELECTRIC </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* gaffer */}
        {gaffer_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Gaffer</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{gaffer_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>gaffer </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{gaffer_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{gaffer_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* best boy electric */}
         {best_boy_electric_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >BB Electric</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{best_boy_electric_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>bbelect </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{best_boy_electric_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_electric_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* 3rd electric */}
         {electric_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >3rd Electric</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{electric_3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>elect3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{electric_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_3_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* 4th electric */}
         {electric_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >4TH Electric</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{electric_4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>elect4 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{electric_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_4_email}</p>
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
          Extra Electric Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="electric"
                setShow={setShow}  /> 
       ) } 
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >GRIP </h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className='px-md-5 pt-2'>
         {/* keygrip */}
        {keygrip_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Keygrip</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{keygrip_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
              className={`${styles.CrewInfop} `}>keygrip</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{keygrip_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{keygrip_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* best boy grip */}
        {best_boy_grip_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >BB Grip</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{best_boy_grip_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}> bbgrip</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{best_boy_grip_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_grip_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* dolly grip */}
        {dolly_grip_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Dolly Grip</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{dolly_grip_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>dolgrip </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{dolly_grip_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{dolly_grip_email}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* swing ge 1 */}
        {swing_ge1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Swing G/E 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{swing_ge1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>swing1 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 2 */}
        {swing_ge2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Swing G/E 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{swing_ge2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>swing2 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 3 */}
        {swing_ge3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Swing G/E 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{swing_ge3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>swing3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 4 */}
        {swing_ge4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Swing G/E 4</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{swing_ge4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>swing4 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge4_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 5 */}
        {swing_ge5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Swing G/E 5</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{swing_ge5_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>swing5 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge5_email}</p>
            </Col>
          </Row>
          </div> )
        }
        </div>
        {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowGrip(showGrip => !showGrip)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Grip Positions </Button>
        </Col>
      </Row>
      {!showGrip ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="grip"
                setShow={setShowGrip}  /> 
       ) } 
    </div>
  )
}

export default InfoElectric