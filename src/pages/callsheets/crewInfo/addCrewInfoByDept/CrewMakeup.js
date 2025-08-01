/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Makeup Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewMakeup = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
    key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
    sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
    sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
    makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
    makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
    makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
    makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
    makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
  } = postData || {};

  return (
    <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right py-1 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >MAKEUP </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Key Hair and Makeup */} 
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Key Hair and Makeup</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: keymake</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_name"
              value={key_hairmakeup_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_email"
              value={key_hairmakeup_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_phone"
              value={key_hairmakeup_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Key Hair Stylist Wigs */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Key Hair Stylist and Wigs</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: keyhair  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_name"
              value={key_hairstylist_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_email"
              value={key_hairstylist_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_phone"
              value={key_hairstylist_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* SFX Makeup */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >SFX Makeup</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: fxmake  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_name"
              value={sfx_makeup_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_email"
              value={sfx_makeup_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_phone"
              value={sfx_makeup_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* SFX Makeup Assistant */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >SFX Makeup Assistant</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: fxmakast  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_name"
              value={sfx_makeup_assistant_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_email"
              value={sfx_makeup_assistant_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_phone"
              value={sfx_makeup_assistant_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Makeup Artist 1 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Makeup Artist 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: makeup1  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_name"
              value={makeup_artist_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_email"
              value={makeup_artist_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_phone"
              value={makeup_artist_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Makeup Artist 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Makeup Artist 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: makeup2  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_name"
              value={makeup_artist_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_email"
              value={makeup_artist_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_phone"
              value={makeup_artist_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Makeup Artist 3 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Makeup Artist 3</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: makeup3  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_name"
              value={makeup_artist_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_email"
              value={makeup_artist_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_phone"
              value={makeup_artist_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Makeup Artist 4 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Makeup Artist 4</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: makeup4  </span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_name"
              value={makeup_artist_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_email"
              value={makeup_artist_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_phone"
              value={makeup_artist_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Makeup Artist 5 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Makeup Artist 5 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: makeup5  </span> 
      </div> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_name"
              value={makeup_artist_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_email"
              value={makeup_artist_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_phone"
              value={makeup_artist_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
  )
}

export default CrewMakeup