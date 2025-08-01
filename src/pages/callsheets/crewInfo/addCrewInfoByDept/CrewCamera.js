/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Camera Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewCamera = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {dop_name, dop_email, dop_phone,
    camera_operator_name, camera_operator_email, camera_operator_phone,
    camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
    camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
    dit_name, dit_email, dit_phone,
    steadicam_name, steadicam_email, steadicam_phone,
    camera_pa_name, camera_pa_email, camera_pa_phone,
    oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
    oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
    oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
    oth_camera_pos_4_job, oth_camera_pos_4_name, oth_camera_pos_4_email, oth_camera_pos_4_phone,
    oth_camera_pos_5_job, oth_camera_pos_5_name, oth_camera_pos_5_email, oth_camera_pos_5_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >CAMERA </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Director of Photography */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Director of Photography</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: dophoto</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_name"
              value={dop_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_email"
              value={dop_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_phone"
              value={dop_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Camera Operator */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Camera Operator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: camerop</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_name"
              value={camera_operator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_email"
              value={camera_operator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_phone"
              value={camera_operator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 1st Assistant Camera */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >1st Assistant Camera</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astcam1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_name"
              value={camera_ass_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_email"
              value={camera_ass_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_phone"
              value={camera_ass_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 2nd Assistant Camera */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >2nd Assistant Camera</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astcam2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_name"
              value={camera_ass_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_email"
              value={camera_ass_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_phone"
              value={camera_ass_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* DIT */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >DIT</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: digitec</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_name"
              value={dit_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_email"
              value={dit_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_phone"
              value={dit_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Steadicam */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Steadicam Operator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: steadicam</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_name"
              value={steadicam_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_email"
              value={steadicam_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_phone"
              value={steadicam_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Camera PA */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Camera PA</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: camerapa</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_name"
              value={camera_pa_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_email"
              value={camera_pa_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_phone"
              value={camera_pa_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Camera Position 1 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Camera Position 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcam1</span> 
      </div> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_job"
              value={oth_camera_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_name"
              value={oth_camera_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_email"
              value={oth_camera_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_phone"
              value={oth_camera_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Camera Position 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Camera Position 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcam2</span> 
      </div> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_job"
              value={oth_camera_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_name"
              value={oth_camera_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_email"
              value={oth_camera_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_phone"
              value={oth_camera_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Camera Position 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Camera Position 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcam3</span> 
      </div> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_job"
              value={oth_camera_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_name"
              value={oth_camera_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_email"
              value={oth_camera_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_phone"
              value={oth_camera_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Camera Position 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Camera Position 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcam4</span> 
      </div> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_4_job"
              value={oth_camera_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_4_name"
              value={oth_camera_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_4_email"
              value={oth_camera_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_4_phone"
              value={oth_camera_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Camera Position 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Camera Position 5</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcam5</span> 
      </div> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_5_job"
              value={oth_camera_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_5_name"
              value={oth_camera_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_5_email"
              value={oth_camera_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_5_phone"
              value={oth_camera_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row> 
      </div>
  )
}

export default CrewCamera