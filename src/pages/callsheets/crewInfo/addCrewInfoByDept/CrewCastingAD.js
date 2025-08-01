/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Casting and AD Departments crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewCastingAD = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {ad_1_name, ad_1_email, ad_1_phone,
    ad_2_name, ad_2_email, ad_2_phone,
    ad_3_name, ad_3_email, ad_3_phone,
    ad_4_name, ad_4_email, ad_4_phone,
    ad_5_name, ad_5_email, ad_5_phone,
    pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
    pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
    pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
    pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
    pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
    casting_director_name, casting_director_email, casting_director_phone,
    extras_casting_name, extras_casting_email, extras_casting_phone,
  } = postData || {};
  return (
    <div className="text-center">
      {/* CASTING/EXTRAS */}
      <div className="pb-3">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >CASTING </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Casting Director  */} 
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Casting Director </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >castdir </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_name"
              value={casting_director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_email"
              value={casting_director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_phone"
              value={casting_director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Extras Casting  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Extras Casting </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: xtracas </span> 
      </div>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_name"
              value={extras_casting_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.extras_casting_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_email"
              value={extras_casting_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.extras_casting_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_phone"
              value={extras_casting_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* ASSISTANT DIRECTORS */}
      <div className="pb-3">
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.SubTitle }`} >ASSISTANT DIRECTORS </h3>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* 1st Assistant Director */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >1st Assistant Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astdir1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_name"
              value={ad_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_email"
              value={ad_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_phone"
              value={ad_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 2nd Assistant Director */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >2nd Assistant Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astdir2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_name"
              value={ad_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_email"
              value={ad_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_phone"
              value={ad_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 3rd Assistant Director */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >3rd Assistant Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astdir3</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_name"
              value={ad_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_email"
              value={ad_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_phone"
              value={ad_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 4th Assistant Director */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >4th Assistant Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astdir4</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_name"
              value={ad_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_email"
              value={ad_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_phone"
              value={ad_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 5th Assistant Director */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >5th Assistant Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: astdir5</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_name"
              value={ad_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_email"
              value={ad_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_phone"
              value={ad_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Assistant 1 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production Assistant 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: proast1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_name"
              value={pro_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_email"
              value={pro_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_phone"
              value={pro_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Assistant 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production Assistant 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: proast2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_name"
              value={pro_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_email"
              value={pro_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_phone"
              value={pro_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Assistant 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production Assistant 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: proast3</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_name"
              value={pro_assistant_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_email"
              value={pro_assistant_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_phone"
              value={pro_assistant_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Assistant 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production Assistant 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: proast4</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_name"
              value={pro_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_email"
              value={pro_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_phone"
              value={pro_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Assistant 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Production Assistant 5</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: proast5</span> 
      </div>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_name"
              value={pro_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_email"
              value={pro_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_phone"
              value={pro_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_phone?.map((message, idx) => (
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

export default CrewCastingAD