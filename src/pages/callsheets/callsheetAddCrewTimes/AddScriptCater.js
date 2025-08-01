/* Form to add the Script and Catering Departments Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddScriptCater = ({crewInfoOne, handleChange, postData, setShowScr }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

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
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SCRIPT </h5>
      </div>
      <div className='mt-3'>
        {/* writer */}
        {writer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Writer</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{writer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="writer_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="writer_calltime"
                value={writer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.writer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* CATERING  */}
         <div className={`mx-5 mb-3 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >CATERING </h5>
         </div>
         {/* catering co 1 */}
         {catering_co_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Catering Co 1</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_1_calltime"
                value={catering_co_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* catering co 2 */}
         {catering_co_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Catering Co 2</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_2_calltime"
                value={catering_co_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* catering co 3 */}
         {catering_co_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Catering Co 3</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_3_calltime"
                value={catering_co_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* CRAFT SERVICES */}
         <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >CRAFT SERVICES </h5>
         </div>
         {/* craft service */}
         {craft_service_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Craft Service</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{craft_service_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="craft_service_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="craft_service_calltime"
                value={craft_service_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.craft_service_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* crafty ass */}
         {crafty_ass_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Crafty Assistant</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{crafty_ass_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="crafty_ass_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="crafty_ass_calltime"
                value={crafty_ass_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.crafty_ass_calltime?.map((message, idx) => (
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

export default AddScriptCater