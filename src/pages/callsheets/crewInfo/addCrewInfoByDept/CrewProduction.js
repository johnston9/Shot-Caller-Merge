/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Production Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewProduction = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const { director_name, director_email, director_phone,
    producer_name, producer_email, producer_phone,
    pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
    upm_name, upm_email, upm_phone,
    travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
    production_pa_name, production_pa_email, production_pa_phone,
    script_supervisor_name, script_supervisor_email, script_supervisor_phone,
    legal_name, legal_email, legal_phone,
    set_medic_name, set_medic_email, set_medic_phone,
    oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
    oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
    oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
    oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
    oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
  } = postData || {};

  return (
    <div className="text-center" >
      {/* PRODUCTION className="text-center" */}
      <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >PRODUCTION </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* DIRECTOR */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: director</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="director_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="director_name"
              value={director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="director_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="director_email"
              value={director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.director_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="director_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="director_phone"
              value={director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Producer */}
      <h5 className={`mt-4 mb-3 py-1 ${styles.SubTitle2 }`} >Producer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: producer</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_name"
              value={producer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_email"
              value={producer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_phone"
              value={producer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Coordinator */}
      <h5 className={`mt-4 mb-3 py-1 ${styles.SubTitle2 }`} >Production Coordinator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: procoord</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_name"
              value={pro_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_email"
              value={pro_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_phone"
              value={pro_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* UPM */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >UPM</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: unitpm</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_name"
              value={upm_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_email"
              value={upm_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_phone"
              value={upm_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Travel Coordinator */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Travel Coordinator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: travelco</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_name"
              value={travel_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_email"
              value={travel_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_phone"
              value={travel_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* P.A. */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production PA</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: produpa</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_name"
              value={production_pa_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_email"
              value={production_pa_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_phone"
              value={production_pa_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Production Position 1 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Production Position 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addpro1</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_job"
              value={oth_production_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_name"
              value={oth_production_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_email"
              value={oth_production_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_phone"
              value={oth_production_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Production Position 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Production Position 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addpro2</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_job"
              value={oth_production_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_name"
              value={oth_production_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_email"
              value={oth_production_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_phone"
              value={oth_production_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Production Position 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Production Position 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addpro3</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_job"
              value={oth_production_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_name"
              value={oth_production_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_email"
              value={oth_production_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_phone"
              value={oth_production_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Production Position 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Production Position 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addpro4</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_job"
              value={oth_production_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_name"
              value={oth_production_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_email"
              value={oth_production_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_phone"
              value={oth_production_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Production Position 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Production Position 5</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addpro5</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_job"
              value={oth_production_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="pb-3" >
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_name"
              value={oth_production_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_email"
              value={oth_production_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_phone"
              value={oth_production_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* CONTINUITY */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >CONTINUITY</h3>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Script Supervisor */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Script Supervisor</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: scriptsup</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_name"
              value={script_supervisor_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_email"
              value={script_supervisor_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_phone"
              value={script_supervisor_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* MEDIC / FIRE SAFETY */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >MEDIC / FIRE SAFETY </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Set Medic */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Set Medic</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: setmedic</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_name"
              value={set_medic_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_email"
              value={set_medic_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_phone"
              value={set_medic_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* LEGAL */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >LEGAL </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* legal  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Legal Consultant</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: legalcon</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_name"
              value={legal_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_email"
              value={legal_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_phone"
              value={legal_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
    </div>
  )
}

export default CrewProduction