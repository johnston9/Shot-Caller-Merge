/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Post Department and Additional Crew
  Positions crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import styles from "../../../../styles/Callsheets.module.css";
import btnStyles from "../../../../styles/Button.module.css";
import AdditionalPositions2 from "./AdditionalPositions2";

const CrewPostAdditional = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  const [showAddPos2, setShowAddPos2] = useState(false);

  const {fx_name, fx_email, fx_phone,
    editor_name, editor_email, editor_phone,
    add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
    add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
    add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
    add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
    add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
    add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
    add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
    add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
    add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
    add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
  } = postData || {};

  return (
    <div className="text-center">
      {/* POST PRODUCTION */}
      <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 ml-5 mb-0 text-center py-1 ${styles.Bold }`} >POST PRODUCTION </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Editor */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Editor</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: editor</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_name"
              value={editor_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_email"
              value={editor_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_phone"
              value={editor_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* VISUAL EFFECTS */}
      <div>
      <h3 className={`mb-0 py-1 ${styles.SubTitle }`} >VISUAL EFFECTS </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* FX  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >FX</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: specfx</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_name"
              value={fx_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_email"
              value={fx_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_phone"
              value={fx_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* ADDITIONAL CREW POSITIONS 1-10 */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >ADDITIONAL CREW POSITIONS </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Additional Crew Position 1 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew1</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_job"
              value={add_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_name"
              value={add_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_email"
              value={add_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_phone"
              value={add_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew2</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_job"
              value={add_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_name"
              value={add_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_email"
              value={add_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_phone"
              value={add_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew3</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_job"
              value={add_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_name"
              value={add_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_email"
              value={add_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_phone"
              value={add_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew4</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_job"
              value={add_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_name"
              value={add_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_email"
              value={add_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_phone"
              value={add_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 5</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew5</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_job"
              value={add_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_name"
              value={add_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_email"
              value={add_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_phone"
              value={add_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 6 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 6</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew6</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_job"
              value={add_pos_6_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_name"
              value={add_pos_6_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_email"
              value={add_pos_6_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_phone"
              value={add_pos_6_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 7 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 7</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew7</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_job"
              value={add_pos_7_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_name"
              value={add_pos_7_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_email"
              value={add_pos_7_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_phone"
              value={add_pos_7_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 8 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 8</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew8</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_job"
              value={add_pos_8_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_name"
              value={add_pos_8_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_email"
              value={add_pos_8_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_phone"
              value={add_pos_8_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 9 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 9</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrewp9</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_job"
              value={add_pos_9_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_name"
              value={add_pos_9_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_email"
              value={add_pos_9_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_phone"
              value={add_pos_9_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 10 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 10</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew10</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_job"
              value={add_pos_10_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_name"
              value={add_pos_10_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_email"
              value={add_pos_10_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_phone"
              value={add_pos_10_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* ADDITIONAL CREW POSITIONS 11-20 BUTTON */}
      <div className={`py-2 ${styles.White }`}>
      <Row>
      <Col className="text-center" >
      <p>
      Click to add Additional Crew Positions 11 - 20  if needed
      </p>
      <Button
      className={`py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
      onClick={() => setShowAddPos2(showAddPos2 => !showAddPos2)} >Additional Positions 11 - 20
    </Button>
      </Col>
      </Row>
      </div>
      {/* ADDITIONAL CREW POSITIONS 11-20 */}
      {!showAddPos2 ? (
                ""
              ) : (
                <AdditionalPositions2 setShow={setShowAddPos2} 
                postData={postData} handleChange={handleChange}/> 
                ) }
    </div>
  )
}

export default CrewPostAdditional