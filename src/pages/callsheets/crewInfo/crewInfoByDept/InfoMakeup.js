/* Component in the CrewInfo page to display
   the Makeup Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoMakeup = ({crewInfoOne, setShowMak }) => {
  useRedirect();
  const [show, setShow] = useState(false);

  const {key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
    key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
    sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
    sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
    makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
    makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
    makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
    makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
    makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >MAKEUP </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* key hairmakeup */}
        {key_hairmakeup_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Key Hair/Makeup</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{key_hairmakeup_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>keymake </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{key_hairmakeup_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairmakeup_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* key hairstylist */}
         {key_hairstylist_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Key Hairstylist</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{key_hairstylist_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>keyhair </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{key_hairstylist_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{key_hairstylist_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sfx makeup */}
         {sfx_makeup_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >SFX Makeup</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{sfx_makeup_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>fxmake </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sfx_makeup_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sfx makeup ass*/}
         {sfx_makeup_assistant_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >SFX Makeup Assistant </h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{sfx_makeup_assistant_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>fxmakast</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sfx_makeup_assistant_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 1 */}
         {makeup_artist_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Makeup Artist 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{makeup_artist_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>makeup1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 2 */}
         {makeup_artist_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Makeup Artist 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{makeup_artist_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>makeup2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 3 */}
         {makeup_artist_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Makeup Artist 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{makeup_artist_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>makeup3</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_3_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 4 */}
         {makeup_artist_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Makeup Artist 4</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{makeup_artist_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>makeup4</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_4_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* makeup artist 5 */}
         {makeup_artist_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } 
          ${styles.SubTitle2 }`} >Makeup Artist 5</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{makeup_artist_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>makeup5</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{makeup_artist_5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{makeup_artist_5_email}</p>
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
          Extra Art Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="make-up"
                setShow={setShow}  /> 
       ) } 
    </div>
  )
}

export default InfoMakeup