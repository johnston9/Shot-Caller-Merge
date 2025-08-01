/* Component to display the Elactric and Grip Departments
   Calltimes on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesElectricGrip = ({crewInfoOne, callsheet, setShowEle }) => {

  const {gaffer_name, 
    best_boy_electric_name, 
    electric_3_name,
    electric_4_name,
    keygrip_name, 
    best_boy_grip_name, 
    dolly_grip_name, 
    swing_ge1_name,
    swing_ge2_name,
    swing_ge3_name,
    swing_ge4_name,
    swing_ge5_name,} = crewInfoOne || {};

  const { gaffer_calltime, best_boy_electric_calltime, electric_3_calltime,
    electric_4_calltime, keygrip_calltime, best_boy_grip_calltime,
    dolly_grip_calltime, swing_ge1_calltime, swing_ge2_calltime,
    swing_ge3_calltime, swing_ge4_calltime, swing_ge5_calltime,
    } = callsheet;
  return (
    <div>
      <div className={`mt-0 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowEle(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >ELECTRIC </h5>
      </div>
      <Row>
      {/* Gaffer */}
      {gaffer_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Gaffer</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{gaffer_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{gaffer_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
      {/* BB Electric */}
      {best_boy_electric_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>BB Electric</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{best_boy_electric_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{best_boy_electric_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* 3rd Electric */}
      {electric_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>3rd Electric</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{electric_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{electric_3_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* 4th Electric */}
      {electric_4_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>4th Electric</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{electric_4_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{electric_4_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      </Row>
      {/* GRIP */}
      <div className={` mt-0 text-center ${styles.Back3 }`}>
          <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >GRIP </h5>
      </div>
      <Row>
      {/* Keygrip */}
      {keygrip_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Keygrip</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{keygrip_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{keygrip_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Best Boy Grip */}
      {best_boy_grip_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Best Boy Grip</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{best_boy_grip_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{best_boy_grip_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Dolly Grip */}
      {dolly_grip_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Dolly Grip</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{dolly_grip_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{dolly_grip_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Swing G/E 1 */}
      {swing_ge1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Swing G/E 1</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{swing_ge1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{swing_ge1_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Swing G/E 2 */}
      {swing_ge2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Swing G/E 2</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{swing_ge2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{swing_ge2_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Swing G/E 3 */}
      {swing_ge3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Swing G/E 3</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{swing_ge3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{swing_ge3_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Swing G/E 4 */}
      {swing_ge4_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Swing G/E 4</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{swing_ge4_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{swing_ge4_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* Swing G/E 5 */}
      {swing_ge5_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Swing G/E 5</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{swing_ge5_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{swing_ge5_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesElectricGrip