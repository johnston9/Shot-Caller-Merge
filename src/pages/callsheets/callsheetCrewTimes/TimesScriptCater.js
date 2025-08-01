/* Component to display the Script and Catering Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesScriptCater = ({crewInfoOne, callsheet, setShowScr }) => {

  const {writer_name, 
    catering_co_1_name,
    catering_co_2_name,
    catering_co_3_name,
    craft_service_name,
    crafty_ass_name, 
  } = crewInfoOne || {};

  const { writer_calltime,
    catering_co_1_calltime,
    catering_co_2_calltime,
    catering_co_3_calltime,
    craft_service_calltime,
    crafty_ass_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SCRIPT </h5>
      </div>
      <Row>
      {/* Writer */}
      {writer_calltime && 
        (<Col xs={12} md={6}>
        <Row className={` mx-0 `} >
          <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>Writer</p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>{writer_name} </p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
            <p className={`my-0 py-0 `}>{writer_calltime} </p>
          </Col>
        </Row>
        </Col> )
      }
      </Row>
      {/* Additional */}
      <div className={`mt-0 text-center ${styles.Back3 }`}>
        <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >CATERING / CRAFT </h5>
      </div>
      <Row>
      {/* Catering Co 1 */}
      {catering_co_1_calltime && 
        (<Col xs={12} md={6}>
        <Row className={` mx-0 `} >
          <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>Catering Co 1</p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
            <p className={`my-0 py-0 `}>{catering_co_1_name} </p>
          </Col>
          <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
            <p className={`my-0 py-0 `}>{catering_co_1_calltime} </p>
          </Col>
        </Row>
      </Col> )
      }
      {/* Catering Co 2 */}
      {catering_co_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Catering Co 2</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{catering_co_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{catering_co_2_calltime} </p>
            </Col>
          </Row>
        </Col> )
      }
      {/* Catering Co 3 */}
      {catering_co_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Catering Co 3</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{catering_co_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{catering_co_3_calltime} </p>
            </Col>
          </Row>
        </Col> )
      }
      {/* CRAFT SERVICES */}
      <div className={`mx-5 mt-0 text-center ${styles.Back3 }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >CRAFT SERVICES </h5>
      </div>
      {/* Craft Service */}
      {craft_service_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Craft Service</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{craft_service_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{craft_service_calltime} </p>
            </Col>
          </Row>
        </Col> )
      }
      {/* Crafty Assist*/}
      {crafty_ass_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Crafty Assistant</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{crafty_ass_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{crafty_ass_calltime} </p>
            </Col>
          </Row>
        </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesScriptCater