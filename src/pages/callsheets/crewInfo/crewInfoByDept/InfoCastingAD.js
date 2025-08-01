/* Component in the CrewInfo page to display
   the Camera Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from "../../../../styles/Callsheets.module.css";
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoCasting = ({crewInfoOne, setShowCas }) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showAd, setShowAd] = useState(false);

  const {casting_director_name, casting_director_email, casting_director_phone,
    extras_casting_name, extras_casting_email, extras_casting_phone,
    ad_1_name, ad_1_email, ad_1_phone,
    ad_2_name, ad_2_email, ad_2_phone,
    ad_3_name, ad_3_email, ad_3_phone,
    ad_4_name, ad_4_email, ad_4_phone,
    ad_5_name, ad_5_email, ad_5_phone,
    pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
    pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
    pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
    pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
    pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,} = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowCas(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >CASTING</h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* casting director */}
        {casting_director_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Casting Director</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{casting_director_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>castdir</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{casting_director_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{casting_director_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* extras casting */}
        {extras_casting_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Extras Casting</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{extras_casting_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>xtracas </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{extras_casting_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{extras_casting_email}</p>
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
          Extra Casting Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="casting"
                setShow={setShow}  /> 
       ) } 
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >ASSITANT DIRECTORS </h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className='px-md-5 pt-2'>
        {/* 1st AD */}
        {ad_1_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >1st AD</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{ad_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>astdir1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ad_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ad_1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* 2nd AD */}
        {ad_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >2nd AD</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{ad_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>astdir2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ad_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ad_2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* 3rd AD */}
        {ad_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >3rd AD</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{ad_3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>astdir3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ad_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ad_3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* 4th AD */}
        {ad_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >4th AD</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{ad_4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>astdir4 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ad_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ad_4_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* 5th AD */}
        {ad_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >5th AD</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{ad_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>astdir5</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{ad_5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{ad_5_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 1 */}
        {pro_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Assistant 1</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_assistant_1_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>proast1 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_1_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 2 */}
        {pro_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Assistant 2</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_assistant_2_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>proast2 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_2_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 3 */}
        {pro_assistant_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Assistant 3</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_assistant_3_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>proast3 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_3_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 4 */}
        {pro_assistant_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Assistant 4</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_assistant_4_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>proast4 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_4_email}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 5 */}
        {pro_assistant_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Assistant 5</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{pro_assistant_5_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>proast5 </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_5_email}</p>
            </Col>
          </Row>
          </div> )
        }
        mmmmmm
        {/* pro assistant 2 */}
        {pro_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Camera Operator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Pro Assistant 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>{pro_assistant_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_2_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 3 */}
        {pro_assistant_3_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Camera Operator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Pro Assistant 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>{pro_assistant_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_3_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 4 */}
        {pro_assistant_4_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Camera Operator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Pro Assistant 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>{pro_assistant_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_4_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* pro assistant 5 */}
        {pro_assistant_5_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Camera Operator</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Pro Assistant 5</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>{pro_assistant_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{pro_assistant_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{pro_assistant_5_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        </div>
        {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowAd(showAd => !showAd)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra AD Positions </Button>
        </Col>
      </Row>
      {!showAd ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="ad"
                setShow={setShowAd}  /> 
       ) } 
    </div>
  )
}

export default InfoCasting