/* Component in the CrewInfo page to display
   the Post Department and Additional Crew Positions crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoPostAdditional = ({crewInfoOne, setShowPos}) => {
  useRedirect();
  const [show, setShow] = useState(false);
  const [showAddit, setShowAddit] = useState(false);

  const {editor_name, editor_email, editor_phone,
    fx_name, fx_email, fx_phone,
    add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
    add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
    add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
    add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
    add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
    add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
    add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
    add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
    add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
    add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
    add_pos_11_job, add_pos_11_name, add_pos_11_email, add_pos_11_phone,
    add_pos_12_job, add_pos_12_name, add_pos_12_email, add_pos_12_phone,
    add_pos_13_job, add_pos_13_name, add_pos_13_email, add_pos_13_phone,
    add_pos_14_job, add_pos_14_name, add_pos_14_email, add_pos_14_phone,
    add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,
    add_pos_16_job, add_pos_16_name, add_pos_16_email, add_pos_16_phone,
    add_pos_17_job, add_pos_17_name, add_pos_17_email, add_pos_17_phone,
    add_pos_18_job, add_pos_18_name, add_pos_18_email, add_pos_18_phone,
    add_pos_19_job, add_pos_19_name, add_pos_19_email, add_pos_19_phone,
    add_pos_20_job, add_pos_20_name, add_pos_20_email, add_pos_20_phone,
     } = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >POST PRODUCTION </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* editor */}
        {editor_name && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Editor</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{editor_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>editor </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{editor_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{editor_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* FX */}
        {fx_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >FX</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{fx_name}</p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>specfx </p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{fx_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{fx_email}</p>
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
          Extra Post Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="post"
                setShow={setShow}  /> 
       ) } 
        <div className={`py-2 ${styles.White }`}>
        </div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <h3 className={`mb-0 text-center py-1 ${styles.Bold }`} >
          ADDITIONAL POSITIONS </h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        {/* Position 1-10 */}
        <div className='px-md-5 pt-2'>
         {/* add pos 1 */}
         {add_pos_1_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_1_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_1_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew1</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_1_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_1_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 2 */}
         {add_pos_2_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_2_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_2_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew2</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_2_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_2_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 3 */}
         {add_pos_3_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_3_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_3_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew3</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_3_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_3_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 4 */}
         {add_pos_4_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_4_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_4_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew4</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_4_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_4_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 5 */}
         {add_pos_5_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_5_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_5_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew5</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_5_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_5_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 6 */}
         {add_pos_6_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_6_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_6_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew6</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_6_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_6_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 7 */}
         {add_pos_7_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_7_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_7_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew7</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_7_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_7_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 8 */}
         {add_pos_8_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_8_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_8_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew8</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_8_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_8_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 9 */}
         {add_pos_9_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_9_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_9_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew9</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_9_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_9_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 10 */}
         {add_pos_10_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_10_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_10_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew10</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_10_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_10_email}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
        {/* Position 11-20 */}
        <div className='px-md-5 pt-2'>
         {/* add pos 11 */}
         {add_pos_11_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_11_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_11_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew11</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_11_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_11_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 12 */}
         {add_pos_12_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_12_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_12_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew12</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_12_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_12_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 13 */}
         {add_pos_13_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_13_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_13_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew13</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_13_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_13_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 14 */}
         {add_pos_14_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_14_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_14_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew14</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_14_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_14_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 15 */}
         {add_pos_15_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_15_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_15_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew15</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_15_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_15_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 16 */}
         {add_pos_16_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_16_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_16_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew16</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_16_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_16_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 17 */}
         {add_pos_17_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_17_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_17_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew17</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_17_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_17_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 18 */}
         {add_pos_18_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_18_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_18_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew18</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_18_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_18_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 19 */}
         {add_pos_19_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_19_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_19_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew19</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_19_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_19_email}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 20 */}
         {add_pos_20_job && 
          (<div className={`${styles.CrewInfoRow}mt-1 pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >{add_pos_20_job}</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_20_name}  </p>
            </Col>
            <Col xs={6} md={3} >
              <p style={{fontStyle: 'italic'}} 
                className={`${styles.CrewInfop} `}>addcrew20</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_20_phone}</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_20_email}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
        {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShowAddit(showAddit => !showAddit)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Other Departments Positions </Button>
        </Col>
      </Row>
      <Row>
      <Col className='text-center my-3' >
      <p>
      Add all non Callsheet positions that do not fit in to any other Department here 
      </p>
      </Col>
      </Row>
      {!showAddit ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="other"
                setShow={setShowAddit}  /> 
       ) } 
    </div>
  )
}

export default InfoPostAdditional