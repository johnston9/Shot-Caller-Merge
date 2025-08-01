/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Location Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewLocations = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {location_mngr_name, location_mngr_email, location_mngr_phone,
    location_ass_1_name, location_ass_1_email, location_ass_1_phone,
    location_ass_2_name, location_ass_2_email, location_ass_2_phone,
    location_ass_3_name, location_ass_3_email, location_ass_3_phone,
    location_ass_4_name, location_ass_4_email, location_ass_4_phone,
    location_security_name, location_security_email, location_security_phone,
  } = postData || {};

  return (
    <div className="text-center pb-3">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right py-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 ml-4 mb-0 text-center py-1 ${styles.Bold }`} >LOCATIONS </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Location Mngr  */} 
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Location Manager</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locmngr </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_name"
              value={location_mngr_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_email"
              value={location_mngr_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_phone"
              value={location_mngr_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Location Assistant 1  */} 
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Location Assistant 1 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locast1  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_name"
              value={location_ass_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_email"
              value={location_ass_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_phone"
              value={location_ass_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Location Assistant 2  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Location Assistant 2 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locast2  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_name"
              value={location_ass_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_email"
              value={location_ass_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_phone"
              value={location_ass_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Location Assistant 3  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Location Assistant 3 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locast3  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_name"
              value={location_ass_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_email"
              value={location_ass_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_phone"
              value={location_ass_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Location Assistant 4  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Location Assistant 4 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locast4  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_name"
              value={location_ass_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_email"
              value={location_ass_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_phone"
              value={location_ass_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Location Security  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Location Security </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: locsecur  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_name"
              value={location_security_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_email"
              value={location_security_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_phone"
              value={location_security_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
  )
}

export default CrewLocations