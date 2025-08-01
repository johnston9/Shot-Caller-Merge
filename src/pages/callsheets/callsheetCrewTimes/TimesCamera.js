/* Component to display the Camera Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesCamera = ({crewInfoOne, callsheet, setShowCam }) => {

  const { dop_name, 
    camera_operator_name, 
    camera_ass_1_name, 
    camera_ass_2_name,
    dit_name, 
    steadicam_name, 
    camera_pa_name, 
    oth_camera_pos_1_job, oth_camera_pos_1_name, 
    oth_camera_pos_2_job, oth_camera_pos_2_name, 
    oth_camera_pos_3_job, oth_camera_pos_3_name,
        } = crewInfoOne || {};

  const { dop_calltime, camera_operator_calltime, camera_ass_1_calltime,
    camera_ass_2_calltime, dit_calltime, steadicam_calltime, camera_pa_calltime,
    oth_camera_pos_1_calltime, oth_camera_pos_2_calltime, 
    oth_camera_pos_3_calltime,} = callsheet ;

  return (
    <div>
      <div className={`mt-0 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowCam(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CAMERA </h5>
      </div>
      <Row>
        {/* DOP */}
        {dop_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>DOP</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{dop_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{dop_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* Camera Operator */}
         {camera_operator_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Camera Operator</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{camera_operator_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{camera_operator_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* 1st AC */}
         {camera_ass_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>1st AC</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{camera_ass_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{camera_ass_1_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* 2nd AC */}
         {camera_ass_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>2nd AC</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{camera_ass_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{camera_ass_2_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* DIT */}
         {dit_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>DIT</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{dit_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{dit_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* Steadicam */}
         {steadicam_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Steadicam</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{steadicam_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{steadicam_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* Camera PA */}
         {camera_pa_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Camera PA</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{camera_pa_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{camera_pa_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* oth camera pos 1 */}
         {oth_camera_pos_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_1_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_1_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* oth camera pos 2 */}
         {oth_camera_pos_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_2_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_2_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
         {/* oth camera pos 3 */}
         {oth_camera_pos_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_3_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{oth_camera_pos_3_calltime} </p>
            </Col>
          </Row>
          </Col> )
         }
      </Row>
    </div>
  )
}

export default TimesCamera