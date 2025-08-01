/* Component in the CrewInfo page to display
   the Production Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const Production = ({crewInfoOne, setShowPro}) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {producer_name, producer_email, producer_phone,
    director_name, director_email, director_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowPro(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >PRODUCTION </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2' >
        {/* DIRECTOR  */} 
        {director_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Director</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3}  >
              <p className={`${styles.CrewInfoP} ${styles.Bold} `}>{director_name} </p>
            </Col>
            <Col className='px-0 px-md-3'  xs={6} md={3}  >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>director </p>
            </Col>
            <Col xs={6} md={3}  >
            <p className={`${styles.CrewInfop} `}>{director_phone}</p>
            </Col>
            <Col className='px-0 px-md-3'  xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{director_email}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* producer */}
        {producer_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Producer</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{producer_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfoP} `}>producer</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{producer_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{producer_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* pro_coordinator */}
        {pro_coordinator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Pro Coordinator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_coordinator_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfoP} `}>procoord</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_coordinator_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_coordinator_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* upm */}
        {upm_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >UPM</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{upm_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>unitpm</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{upm_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{upm_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* travel coordinator */}
        {travel_coordinator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Travel Coordinator</h5> 
          </div>
          <Row className='text-center' >
          <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{travel_coordinator_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>travelco</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{travel_coordinator_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{travel_coordinator_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* production pa */}
        {production_pa_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production PA</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{production_pa_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>produpa</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{production_pa_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{production_pa_email}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* oth production pos 1 */}
        {oth_production_pos_1_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >{oth_production_pos_1_job} </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_1_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>addpropos1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* oth production pos 2 */}
        {oth_production_pos_2_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >{oth_production_pos_2_job} </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_2_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>addpropos2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* oth production pos 3 */}
        {oth_production_pos_3_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >{oth_production_pos_3_job} </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_3_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>addpropos3</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* oth production pos 4 */}
        {oth_production_pos_4_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >{oth_production_pos_4_job} </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>addpropos4</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_4_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* oth production pos 5 */}
        {oth_production_pos_5_job && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >{oth_production_pos_5_job} </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{oth_production_pos_5_name} </p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>addpropos5</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_phone}</p>
            </Col>
            <Col className='px-0 px-md-3' xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{oth_production_pos_5_email}</p>
            </Col>
          </Row>
          </div> )
        }
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* CONTINUITY */}
      <div className="pb-3">
      <h3 className={`text-center mb-0 py-1 ${styles.SubTitle }`} >CONTINUITY</h3>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* script supervisor */}
      <div className='px-md-5 pt-2'>
      {script_supervisor_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Script Supervisor</h5> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{script_supervisor_name} </p>
        </Col>
        <Col className='px-0 px-md-3' xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>scriptsup</p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{script_supervisor_phone}</p>
        </Col>
        <Col className='px-0 px-md-3' xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{script_supervisor_email}</p>
        </Col>
      </Row>
      </div> )
      }
      </div>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* LEGAL */}
      <div className="pb-3">
      <h3 className={`text-center mb-0 py-1 ${styles.SubTitle }`} >LEGAL </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2' >
      {legal_name && 
        (<div className={`${styles.CrewInfoRow} pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Legal</h5> 
        </div>
        <Row className='text-center' >
        <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{legal_name} </p>
          </Col>
          <Col className='px-0 px-md-3' xs={6} md={3} >
            <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>legalcon</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{legal_email}</p>
          </Col>
          <Col className='px-0 px-md-3' xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{legal_phone}</p>
          </Col>
        </Row>
        </div> )
        }
        </div>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* MEDIC / FIRE SAFETY */}
      <div className="pb-3">
      <h3 className={`text-center mb-0 py-1 ${styles.SubTitle }`} >MEDIC / FIRE SAFETY </h3> 
      {/* Set Medic */}
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2' >
      {set_medic_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Set Medic</h5> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{set_medic_name} </p>
        </Col>
        <Col className='px-0 px-md-3' xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}></p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{set_medic_email}</p>
        </Col>
        <Col className='px-0 px-md-3' xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{set_medic_phone}</p>
        </Col>
      </Row>
      </div> )
      }
      </div>
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Production Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="production"
                setShow={setShow}  /> 
       ) } 
  </div>
  )
}

export default Production