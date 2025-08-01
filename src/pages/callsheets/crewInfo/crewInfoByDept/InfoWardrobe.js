/* Component in the CrewInfo page to display
   the Wardrobe Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoWardrobe = ({setShowWar, crewInfoOne}) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {costume_designer_name, costume_designer_email, costume_designer_phone,
    ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
    wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >WARDROBE </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* Costume Designer */}
        {costume_designer_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Costume Designer</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{costume_designer_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>cosdesign </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{costume_designer_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{costume_designer_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* ass costume designer */}
         {ass_costume_designer_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Assistant Costume Design </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}></p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>cosdesast</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ass_costume_designer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ass_costume_designer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 1 */}
         {wardrobe_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Wardrobe Assistant 1 </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{wardrobe_assistant_1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>wardrobe1 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 2 */}
         {wardrobe_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
           ${styles.SubTitle2 }`} >Wardrobe Assistant 2 </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{wardrobe_assistant_2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>wardrobe2 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 3 */}
         {wardrobe_assistant_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Wardrobe Assistant 3 </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{wardrobe_assistant_3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>wardrobe3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_3_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 4 */}
         {wardrobe_assistant_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Wardrobe Assistant 4 </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{wardrobe_assistant_4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>wardrobe4 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_4_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* wardrobe assistant 5 */}
         {wardrobe_assistant_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Wardrobe Assistant 5 </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{wardrobe_assistant_5_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>wardrobe5 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{wardrobe_assistant_5_email}</p>
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
          Extra Wardrobe Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="wardrobe"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoWardrobe