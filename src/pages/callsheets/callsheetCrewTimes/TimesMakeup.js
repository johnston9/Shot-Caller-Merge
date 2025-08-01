/* Component to display the Makeup Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesMakeup = ({crewInfoOne, callsheet, setShowMak }) => {

  const {key_hairmakeup_name,
    key_hairstylist_name,
    sfx_makeup_name, 
    sfx_makeup_assistant_name,
    makeup_artist_1_name,
    makeup_artist_2_name,
    makeup_artist_3_name,
    makeup_artist_4_name,
    makeup_artist_5_name, } = crewInfoOne || {};

  const { key_hairmakeup_calltime, key_hairstylist_calltime, sfx_makeup_calltime,
    sfx_makeup_assistant_calltime, makeup_artist_1_calltime, makeup_artist_2_calltime,
    makeup_artist_3_calltime, makeup_artist_4_calltime, makeup_artist_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowMak(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >MAKEUP </h5>
      </div>
        <Row>
        {/* Key Hair/Makeup */}
        {key_hairmakeup_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Key Hair/Makeup</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{key_hairmakeup_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{key_hairmakeup_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Key Hairstylist */}
        {key_hairstylist_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Key Hairstylist</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{key_hairstylist_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{key_hairstylist_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* SFX Makeup */}
        {sfx_makeup_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>SFX Makeup</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{sfx_makeup_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{sfx_makeup_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* SFX Makeup Assist */}
        {sfx_makeup_assistant_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>SFX Makeup Assist</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{sfx_makeup_assistant_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{sfx_makeup_assistant_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Makeup Artist 1 */}
        {makeup_artist_1_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Makeup Artist 1</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{makeup_artist_1_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{makeup_artist_1_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Makeup Artist 2 */}
        {makeup_artist_2_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Makeup Artist 2</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{makeup_artist_2_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{makeup_artist_2_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Makeup Artist 3 */}
        {makeup_artist_3_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Makeup Artist 3</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{makeup_artist_3_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{makeup_artist_3_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Makeup Artist 4 */}
        {makeup_artist_4_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Makeup Artist 4</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{makeup_artist_4_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{makeup_artist_4_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        {/* Makeup Artist 5 */}
        {makeup_artist_5_calltime && 
            (<Col xs={12} md={6}>
            <Row className={` mx-0 `} >
              <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>Makeup Artist 5</p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
                <p className={`my-0 py-0 `}>{makeup_artist_5_name} </p>
              </Col>
              <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
                <p className={`my-0 py-0 `}>{makeup_artist_5_calltime} </p>
              </Col>
            </Row>
            </Col> )
        }
        </Row>
    </div>
  )
}

export default TimesMakeup