/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Wardrobe Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewWardrobe = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {costume_designer_name, costume_designer_email, costume_designer_phone,
    ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
    wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >WARDROBE </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Costume Designer */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Costume Designer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cosdesign </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_name"
              value={costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_email"
              value={costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_phone"
              value={costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Assistant Costume Designer */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Assistant Costume Designer </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cosdesast  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_name"
              value={ass_costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_email"
              value={ass_costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_phone"
              value={ass_costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Wardrobe Assistant 1*/}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Wardrobe Assistant 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: wardrobe1  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_name"
              value={wardrobe_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_email"
              value={wardrobe_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_phone"
              value={wardrobe_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Wardrobe Assistant 2*/}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Wardrobe Assistant 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: wardrobe2  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_name"
              value={wardrobe_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_email"
              value={wardrobe_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_phone"
              value={wardrobe_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Wardrobe Assistant 3*/}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Wardrobe Assistant 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: wardrobe3  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_name"
              value={wardrobe_assistant_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_email"
              value={wardrobe_assistant_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_phone"
              value={wardrobe_assistant_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Wardrobe Assistant 4*/}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Wardrobe Assistant 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: wardrobe4  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_name"
              value={wardrobe_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_email"
              value={wardrobe_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_phone"
              value={wardrobe_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Wardrobe Assistant 5*/}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Wardrobe Assistant 5</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: wardrobe5  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_name"
              value={wardrobe_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_email"
              value={wardrobe_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_phone"
              value={wardrobe_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
  )
}

export default CrewWardrobe