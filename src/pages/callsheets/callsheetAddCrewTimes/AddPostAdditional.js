/* Form to add the Post Department and Additional Crew Calltimes to the Callsheet
   From the Callsheet Create and Edit pages */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddPostAdditional = ({crewInfoOne, handleChange, postData, setShowPos }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

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
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >POST </h5>
      </div>
      <div className='mt-3'>
        {/* editor */}
        {editor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Editor</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{editor_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="editor_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="editor_calltime"
                value={editor_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.editor_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* fx */}
        {fx_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>FX</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{fx_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="fx_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="fx_calltime"
                value={fx_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.fx_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >ADDITIONAL POSITIONS </h5>
        </div>
        {/* add pos 1 */}
        {add_pos_1_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_1_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_1_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_1_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_1_calltime"
              value={add_pos_1_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 2 */}
        {add_pos_2_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_2_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_2_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_2_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_2_calltime"
              value={add_pos_2_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 3 */}
        {add_pos_3_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_3_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_3_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_3_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_3_calltime"
              value={add_pos_3_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 4 */}
        {add_pos_4_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_4_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_4_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_4_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_4_calltime"
              value={add_pos_4_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 5 */}
        {add_pos_5_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_5_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_5_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_5_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_5_calltime"
              value={add_pos_5_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 6 */}
        {add_pos_6_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_6_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_6_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_6_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_6_calltime"
              value={add_pos_6_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 7 */}
        {add_pos_7_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_7_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_7_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_7_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_7_calltime"
              value={add_pos_7_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 8 */}
        {add_pos_8_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_8_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_8_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_8_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_8_calltime"
              value={add_pos_8_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 9*/}
        {add_pos_9_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_9_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_9_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_9_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_9_calltime"
              value={add_pos_9_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 10 */}
        {add_pos_10_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_10_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_10_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_10_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_10_calltime"
              value={add_pos_10_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* Additional Posiitions 11-20 */}
        {/* add pos 11 */}
        {add_pos_11_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_11_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_11_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_11_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_11_calltime"
              value={add_pos_11_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 12 */}
        {add_pos_12_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_12_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_12_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_12_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_12_calltime"
              value={add_pos_12_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 13 */}
        {add_pos_13_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_13_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_13_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_13_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_13_calltime"
              value={add_pos_13_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 14 */}
        {add_pos_14_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_14_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_14_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_14_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_14_calltime"
              value={add_pos_14_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 15 */}
        {add_pos_15_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_15_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_15_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_5_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_15_calltime"
              value={add_pos_15_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_15_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 16 */}
        {add_pos_16_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_16_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_16_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_16_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_16_calltime"
              value={add_pos_16_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 17 */}
        {add_pos_17_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_17_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_17_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_17_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_17_calltime"
              value={add_pos_17_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 18 */}
        {add_pos_18_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_18_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_18_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_18_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_18_calltime"
              value={add_pos_18_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 19*/}
        {add_pos_19_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_19_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_19_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_19_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_19_calltime"
              value={add_pos_19_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        {/* add pos 20 */}
        {add_pos_20_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_20_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_20_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_20_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_20_calltime"
              value={add_pos_20_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_calltime?.map((message, idx) => (
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

export default AddPostAdditional