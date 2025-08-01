/* Component in the CrewInfo page to display
   the Sound Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoSound = ({crewInfoOne, setShowSou}) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showTport, setShowTport] = useState(false);
  const [showVeh, setShowVeh] = useState(false);

  const {sound_mixer_name, sound_mixer_email, sound_mixer_phone,
    boom_operator_name, boom_operator_email, boom_operator_phone,
    sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
    sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
    transport_captain_name, transport_captain_email, transport_captain_phone,
    transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
    transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
    head_driver_name, head_driver_email, head_driver_phone,
    car1_name, car1_email, car1_phone,
    car2_name, car2_email, car2_phone,
    car3_name, car3_email, car3_phone,
    truck1_name, truck1_email, truck1_phone,
    truck2_name, truck2_email, truck2_phone,
    truck3_name, truck3_email, truck3_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`}
       onClick={() => setShowSou(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >
       SOUND </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* sound mixer */}
        {sound_mixer_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Sound Mixer</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{sound_mixer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>soundmix</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_mixer_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_mixer_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* boom operator */}
         {boom_operator_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Boom Operator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{boom_operator_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>boomop </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{boom_operator_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{boom_operator_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sound assistant 1 */}
         {sound_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Sound Assistant 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{sound_assistant_1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}> sound1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_assistant_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sound assistant 2 */}
         {sound_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Sound Assistant 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{sound_assistant_2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}> sound2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_assistant_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_2_email}</p>
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
          Extra Sound Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="sound"
                setShow={setShow}  /> 
       ) } 
         {/* TRANSPORT  */}
         <div className={`py-2 ${styles.White }`}>
        </div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >
        TRANSPORT</h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className='px-md-5 pt-2'>
         {/* transport captain */}
         {transport_captain_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Transport Captain</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{transport_captain_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>trancap </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_captain_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_captain_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* transport manager 1 */}
         {transport_manager_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Transport Mngr 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{transport_manager_1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>transpo1 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_manager_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* transport manager 2 */}
         {transport_manager_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Transport Mngr 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{transport_manager_2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>transpo2 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_manager_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* head driver */}
         {head_driver_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Head Driver</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{head_driver_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>headrive </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{head_driver_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{head_driver_email}</p>
            </Col>
          </Row>
          </div> )
         }
         </div>
         {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowTport(showTport => !showTport)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Transport Dept Positions </Button>
        </Col>
      </Row>
      {!showTport ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="transport"
                setShow={setShowTport}  /> 
       ) } 
         {/* VEHICLES  */}
         <div className={`py-2 ${styles.White }`}>
        </div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >
        VEHICLES</h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className='px-md-5 pt-2'>
         {/* car 1 */}
         {car1_name && 
          (<div className={`${styles.CrewInfoRow } pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Car 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{car1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>carone</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* car 2 */}
         {car2_name && 
          (<div className={`${styles.CrewInfoRow } pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Car 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{car2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>cartwo</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* car 3 */}
         {car3_name && 
          (<div className={`${styles.CrewInfoRow } pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Car 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{car3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>carthree</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car3_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 1 */}
         {truck1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Truck 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{truck1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>truck1 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 2 */}
         {truck2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Truck 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{truck2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>truck2 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 3 */}
         {truck3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Truck 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{truck3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>truck3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck3_email}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
        {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowVeh(showVeh => !showVeh)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Vehicles </Button>
        </Col>
      </Row>
      {!showVeh ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="vehicles"
                setShow={setShowVeh}  /> 
       ) } 
    </div>
  )
}

export default InfoSound