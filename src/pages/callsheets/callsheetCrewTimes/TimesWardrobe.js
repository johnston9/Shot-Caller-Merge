/* Component to display the Wardrobe Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesWardrobe = ({crewInfoOne, callsheet, setShowWar }) => {

  const {costume_designer_name, 
    ass_costume_designer_name,
    wardrobe_assistant_1_name,
    wardrobe_assistant_2_name,
    wardrobe_assistant_3_name,
    wardrobe_assistant_4_name,
    wardrobe_assistant_5_name,} = crewInfoOne || {};

  const { costume_designer_calltime, ass_costume_designer_calltime,
    wardrobe_assistant_1_calltime, wardrobe_assistant_2_calltime,
    wardrobe_assistant_3_calltime, wardrobe_assistant_4_calltime,
    wardrobe_assistant_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >WARDROBE </h5>
      </div>
      <Row>
        {/* Costume Designer */}
        {costume_designer_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Costume Designer</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{costume_designer_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{costume_designer_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Assist Costume Design */}
        {ass_costume_designer_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Assist Costume Design</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{ass_costume_designer_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{ass_costume_designer_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Wardrobe Assist 1 */}
        {wardrobe_assistant_1_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Wardrobe Assist 1</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_1_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_1_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Wardrobe Assist 2 */}
        {wardrobe_assistant_2_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Wardrobe Assist 2</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_2_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_2_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Wardrobe Assist 3 */}
        {wardrobe_assistant_3_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Wardrobe Assist 3</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_3_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_3_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Wardrobe Assist 4 */}
        {wardrobe_assistant_4_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Wardrobe Assist 4</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_4_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_4_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
        {/* Wardrobe Assist 5 */}
        {wardrobe_assistant_5_calltime && 
          (<Col xs={12} md={6}>
          <Row className={` mx-0 `} >
            <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>Wardrobe Assist 5</p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_5_name} </p>
            </Col>
            <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_5_calltime} </p>
            </Col>
          </Row>
          </Col> )
        }
      </Row>
    </div>
  )
}

export default TimesWardrobe