/* Component in the CrewInfo page to display
   the Script Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoSsript = ({crewInfoOne, setShowScr }) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showCraft, setShowCraft] = useState(false);

  const {writer_name, writer_email, writer_phone,
    catering_co_1_name, catering_co_1_email, catering_co_1_phone,
    catering_co_2_name, catering_co_2_email, catering_co_2_phone,
    catering_co_3_name, catering_co_3_email, catering_co_3_phone,
    craft_service_name, craft_service_email, craft_service_phone,
    crafty_ass_name, crafty_ass_email, crafty_ass_phone,
  } = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >SCRIPT </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* writer */}
        {writer_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Writer</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{writer_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}}
                className={`${styles.CrewInfop} `}>writer</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{writer_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{writer_email}</p>
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
          Extra Script Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="script"
                setShow={setShow}  /> 
       ) } 
      {/* CATERING  */}
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >
      CATERING</h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* catering co 1 */}
        {catering_co_1_name && 
        (<div className={`${styles.CrewInfoRow} pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Catering CO 1</h5> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{catering_co_1_name}</p>
          </Col>
          <Col xs={6} md={3} >
            <p style={{fontStyle: 'italic'}}
              className={`${styles.CrewInfop} `}>cater1 </p>
          </Col>
          <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{catering_co_1_phone}</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_1_email}</p>
          </Col>
        </Row>
        </div> )
        }
        {/* catering co 2 */}
        {catering_co_2_name && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Catering CO 2</h5> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{catering_co_2_name}</p>
          </Col>
          <Col xs={6} md={3} >
            <p style={{fontStyle: 'italic'}}
              className={`${styles.CrewInfop} `}>cater2 </p>
          </Col>
          <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{catering_co_2_phone}</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_2_email}</p>
          </Col>
        </Row>
        </div> )
        }
        {/* catering co 3 */}
        {catering_co_3_name && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Catering CO 3</h5> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{catering_co_3_name} </p>
          </Col>
          <Col xs={6} md={3} >
            <p style={{fontStyle: 'italic'}}
              className={`${styles.CrewInfop} `}>cater3</p>
          </Col>
          <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{catering_co_3_phone}</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_3_email}</p>
          </Col>
        </Row>
        </div> )
        }
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowCat(showCat => !showCat)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Catering Dept Positions </Button>
        </Col>
      </Row>
      {!showCat ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="catering"
                setShow={setShowCat}  /> 
       ) } 
      {/* CRAFT SERVICES */}
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >
      CRAFT SERVICES </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* craft service */}
        {craft_service_name && 
        (<div className={`${styles.CrewInfoRow} pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Craft Service</h5> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{craft_service_name}</p>
          </Col>
          <Col xs={6} md={3} >
            <p style={{fontStyle: 'italic'}}
              className={`${styles.CrewInfop} `}>crafts </p>
          </Col>
          <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{craft_service_phone}</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{craft_service_email}</p>
          </Col>
        </Row>
        </div> )
        }
        {/* crafty ass */}
      {crafty_ass_name && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
        <div className='d-flex justify-content-center '>
        <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Crafty Assistant</h5> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfoP} `}>{crafty_ass_name}</p>
          </Col>
          <Col xs={6} md={3} >
            <p style={{fontStyle: 'italic'}}
              className={`${styles.CrewInfop} `}> crafty</p>
          </Col>
          <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{crafty_ass_phone}</p>
          </Col>
          <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{crafty_ass_email}</p>
          </Col>
        </Row>
        </div> )
        }
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowCraft(showCraft => !showCraft)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Craft Dept Positions </Button>
        </Col>
      </Row>
      {!showCraft ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="craft"
                setShow={setShowCraft}  /> 
       ) } 
    </div>
  )
}

export default InfoSsript