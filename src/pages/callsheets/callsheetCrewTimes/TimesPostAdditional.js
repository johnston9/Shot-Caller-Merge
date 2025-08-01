/* Component to display the Post Department and Additional Crew
   Calltimes on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesPostAdditional = ({crewInfoOne, callsheet, setShowPos }) => {

  const {editor_name,
    fx_name, 
    add_pos_1_job, add_pos_1_name,
    add_pos_2_job, add_pos_2_name,
    add_pos_3_job, add_pos_3_name,
    add_pos_4_job, add_pos_4_name,
    add_pos_5_job, add_pos_5_name,
    add_pos_6_job, add_pos_6_name,
    add_pos_7_job, add_pos_7_name,
    add_pos_8_job, add_pos_8_name,
    add_pos_9_job, add_pos_9_name,
    add_pos_10_job, add_pos_10_name,
    add_pos_11_job, add_pos_11_name,
    add_pos_12_job, add_pos_12_name,
    add_pos_13_job, add_pos_13_name,
    add_pos_14_job, add_pos_14_name,
    add_pos_15_job, add_pos_15_name,
    add_pos_16_job, add_pos_16_name,
    add_pos_17_job, add_pos_17_name,
    add_pos_18_job, add_pos_18_name,
    add_pos_19_job, add_pos_19_name,
    add_pos_20_job, add_pos_20_name,
     } = crewInfoOne || {};

  const { editor_calltime, fx_calltime,
    add_pos_1_calltime,
    add_pos_2_calltime,
    add_pos_3_calltime,
    add_pos_4_calltime,
    add_pos_5_calltime,
    add_pos_6_calltime,
    add_pos_7_calltime,
    add_pos_8_calltime,
    add_pos_9_calltime,
    add_pos_10_calltime,
    add_pos_11_calltime,
    add_pos_12_calltime,
    add_pos_13_calltime,
    add_pos_14_calltime,
    add_pos_15_calltime,
    add_pos_16_calltime,
    add_pos_17_calltime,
    add_pos_18_calltime,
    add_pos_19_calltime,
    add_pos_20_calltime,
    } = callsheet;
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >POST </h5>
      </div>
      {/* Editor */}
      {editor_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Editor</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{editor_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{editor_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* FX */}
      {fx_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>FX</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{fx_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{fx_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
      {/* Additional Positions */}
      <div className={`mt-3 text-center ${styles.Back3 }`}>
          <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >ADDITIONAL POSITIONS </h5>
      </div>
      <Row>
      {/* add pos 1 */}
      {add_pos_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_1_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_1_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 2 */}
      {add_pos_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_2_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_2_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 3 */}
      {add_pos_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_3_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_3_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 4 */}
      {add_pos_4_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_4_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_4_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_4_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 5 */}
      {add_pos_5_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_5_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_5_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_5_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 6 */}
      {add_pos_6_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_6_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_6_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_6_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 7 */}
      {add_pos_7_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_7_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_7_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_7_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 8 */}
      {add_pos_8_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_8_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_8_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_8_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 9 */}
      {add_pos_9_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_9_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_9_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_9_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 10 */}
      {add_pos_10_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_10_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_10_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_10_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      </Row>
      {/* add pos 11-20 */}
      <Row>
      {/* add pos 11 */}
      {add_pos_11_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_11_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_11_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_11_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 12 */}
      {add_pos_12_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_12_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_12_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_12_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 13 */}
      {add_pos_13_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_13_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_13_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_13_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 14 */}
      {add_pos_14_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_14_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_14_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_14_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 15 */}
      {add_pos_15_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_15_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_15_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_15_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 16 */}
      {add_pos_16_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_16_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_16_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_16_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 17 */}
      {add_pos_17_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_17_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_17_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_17_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 18 */}
      {add_pos_18_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_18_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_18_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_18_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 1 */}
      {add_pos_19_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_19_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_19_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_19_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      {/* add pos 20 */}
      {add_pos_20_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_20_job} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{add_pos_20_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{add_pos_20_calltime} </p>
            </Col>
          </Row>
          </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesPostAdditional