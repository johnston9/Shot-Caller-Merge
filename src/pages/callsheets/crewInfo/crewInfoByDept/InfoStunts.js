/* Component in the CrewInfo page to display
   the Stunts Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoStunts = ({crewInfoOne, setShowStu}) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
    stunts_1_name, stunts_1_email, stunts_1_phone,
    stunts_2_name, stunts_2_email, stunts_2_phone,
    stunts_3_name, stunts_3_email, stunts_3_phone,
    stunts_4_name, stunts_4_email, stunts_4_phone,
    stunts_5_name, stunts_5_email, stunts_5_phone,} = crewInfoOne || {};
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowStu(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >STUNTS </h5>
      </div>
      <div className='mt-3'>
        {/* Stunt Coordinator */}
        {stunt_coordinator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunt Coordinator</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunt_coordinator_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunt_coordinator_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunt_coordinator_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* stunts 1 */}
         {stunts_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunts 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunts_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* stunts 2 */}
         {stunts_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunts 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunts_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* stunts 3 */}
         {stunts_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunts 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunts_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* stunts 4 */}
         {stunts_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunts 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunts_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* stunts 5 */}
         {stunts_5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Stunts 5</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{stunts_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{stunts_5_phone}</p>
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
          Extra Stunt Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="stunt"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoStunts