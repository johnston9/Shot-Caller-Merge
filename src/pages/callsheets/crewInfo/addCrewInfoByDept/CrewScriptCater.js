/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Script and Catering Departments crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewScriptCater = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {writer_name, writer_email, writer_phone,
    catering_co_1_name, catering_co_1_email, catering_co_1_phone,
    catering_co_2_name, catering_co_2_email, catering_co_2_phone,
    catering_co_3_name, catering_co_3_email, catering_co_3_phone,
    craft_service_name, craft_service_email, craft_service_phone,
    crafty_ass_name, crafty_ass_email, crafty_ass_phone,
  } = postData || {};

  return (
    <div className="text-center">
      {/* SCRIPT */}
      <div className="mb-3">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 ml-4 mb-0 text-center py-1 ${styles.Bold }`} >SCRIPT </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Writer  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Writer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: writer</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_name"
              value={writer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_email"
              value={writer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_phone"
              value={writer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* CATERING */}
      <div>
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >CATERING </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Catering Company 1 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Catering Company 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cater1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_name"
              value={catering_co_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_email"
              value={catering_co_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_phone"
              value={catering_co_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Catering Company 2 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Catering Company 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cater2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_name"
              value={catering_co_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_email"
              value={catering_co_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_phone"
              value={catering_co_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Catering Company 3 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Catering Company 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cater3</span> 
      </div> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_name"
              value={catering_co_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_email"
              value={catering_co_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_phone"
              value={catering_co_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>        
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* CRAFT SERVICES */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >CRAFT SERVICES </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Craft Service  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Craft Service </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: crafts</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_name"
              value={craft_service_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_email"
              value={craft_service_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_phone"
              value={craft_service_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Crafty Assistant  */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Crafty Assistant</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: crafty</span> 
      </div> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_name"
              value={crafty_ass_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_email"
              value={crafty_ass_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_phone"
              value={crafty_ass_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_phone?.map((message, idx) => (
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

export default CrewScriptCater