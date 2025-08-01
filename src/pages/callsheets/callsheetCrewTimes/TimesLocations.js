/* Component to display the Locations Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesLocations = ({crewInfoOne, callsheet, setShowLoc }) => {

  const {location_mngr_name, 
    location_ass_1_name,
    location_ass_2_name,
    location_ass_3_name,
    location_ass_4_name,
    location_security_name, } = crewInfoOne || {};

  const { location_mngr_calltime, location_ass_1_calltime, location_ass_2_calltime,
    location_ass_3_calltime, location_ass_4_calltime,
    location_security_calltime,
    } = callsheet;
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowLoc(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >LOCATIONS </h5>
      </div>
      <Row>
      {/* Location Mngr */}
      {location_mngr_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Location Mngr</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_mngr_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_mngr_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Location Security */}
        {location_security_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Location Security</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_security_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_security_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Loc Assistant 1 */}
        {location_ass_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Loc Assistant 1</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_ass_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_ass_1_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Loc Assistant 2 */}
        {location_ass_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Loc Assistant 2</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_ass_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_ass_2_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Loc Assistant 3 */}
        {location_ass_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Loc Assistant 3</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_ass_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_ass_3_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Loc Assistant 4 */}
        {location_ass_4_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Loc Assistant 4</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{location_ass_4_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{location_ass_4_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
      </Row>
    </div>
  )
}

export default TimesLocations