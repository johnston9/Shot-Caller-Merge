/* Form to add the Locations Department Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddLocations = ({crewInfoOne, handleChange, postData, setShowLoc }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {location_mngr_name, 
    location_ass_1_name,
    location_ass_2_name,
    location_ass_3_name,
    location_ass_4_name,
    location_security_name, } = crewInfoOne || {};

  const { location_mngr_calltime, location_ass_1_calltime, location_ass_2_calltime,
    location_ass_3_calltime, location_ass_4_calltime,
    location_security_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowLoc(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >LOCATIONS </h5>
      </div>
      <div className='mt-3'>
        {/* location mngr */}
        {location_mngr_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Location Mngr</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_mngr_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_mngr_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_mngr_calltime"
                value={location_mngr_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_mngr_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* location security */}
         {location_security_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Location Security</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_security_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_security_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_security_calltime"
                value={location_security_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_security_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 1 */}
         {location_ass_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 1</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_ass_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_ass_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_ass_1_calltime"
                value={location_ass_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_ass_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 2 */}
         {location_ass_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 2</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_ass_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_ass_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_ass_2_calltime"
                value={location_ass_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_ass_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 3 */}
         {location_ass_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 3</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_ass_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_ass_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_ass_3_calltime"
                value={location_ass_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_ass_3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 4 */}
         {location_ass_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 4</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{location_ass_4_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="location_ass_4_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="location_ass_4_calltime"
                value={location_ass_4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location_ass_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         </div>
    </div>
  )
}

export default AddLocations