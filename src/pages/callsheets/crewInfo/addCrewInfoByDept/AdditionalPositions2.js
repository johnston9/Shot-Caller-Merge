/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the X-tra Camera Department crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import styles from "../../../../styles/Callsheets.module.css";
  
  const AdditionalPositions2 = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
  
    const {
        add_pos_11_job, add_pos_11_name, add_pos_11_email, add_pos_11_phone,
        add_pos_12_job, add_pos_12_name, add_pos_12_email, add_pos_12_phone,
        add_pos_13_job, add_pos_13_name, add_pos_13_email, add_pos_13_phone,
        add_pos_14_job, add_pos_14_name, add_pos_14_email, add_pos_14_phone,
        add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,
        add_pos_16_job, add_pos_16_name, add_pos_16_email, add_pos_16_phone,
        add_pos_17_job, add_pos_17_name, add_pos_17_email, add_pos_17_phone,
        add_pos_18_job, add_pos_18_name, add_pos_18_email, add_pos_18_phone,
        add_pos_19_job, add_pos_19_name, add_pos_19_email, add_pos_19_phone,
        add_pos_20_job, add_pos_20_name, add_pos_20_email, add_pos_20_phone,
          } = postData || {};
  
    return (
      <div className="pb-3 text-center">
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >ADDITIONAL CREW POSITIONS 11 - 12 </h3>
        </div>
        <div className={`py-2 ${styles.White }`}>
        </div>
        {/* ADDITIONAL CREW POSITIONS 11-20 */}
      <div className="pb-3">
      {/* Additional Crew Position 11 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 11</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew11</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_11_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_job"
              value={add_pos_11_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_11_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_name"
              value={add_pos_11_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_11_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_email"
              value={add_pos_11_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_11_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_11_phone"
              value={add_pos_11_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_11_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 12 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 12</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew12</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_12_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_job"
              value={add_pos_12_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_12_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_name"
              value={add_pos_12_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_12_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_email"
              value={add_pos_12_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_12_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_12_phone"
              value={add_pos_12_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_12_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 13 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 13</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew13</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_13_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_job"
              value={add_pos_13_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_13_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_name"
              value={add_pos_13_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_13_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_email"
              value={add_pos_13_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_13_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_13_phone"
              value={add_pos_13_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_13_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 14 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 14</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew14</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_14_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_job"
              value={add_pos_14_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_14_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_name"
              value={add_pos_14_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_14_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_email"
              value={add_pos_14_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_14_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_14_phone"
              value={add_pos_14_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_14_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 15 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 15</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew15</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_15_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_15_job"
              value={add_pos_15_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_15_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_15_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_15_name"
              value={add_pos_15_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_15_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_15_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_15_email"
              value={add_pos_15_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_15_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_15_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_15_phone"
              value={add_pos_15_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_15_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 16 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 16</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew16</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_16_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_job"
              value={add_pos_16_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_16_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_name"
              value={add_pos_16_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_16_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_email"
              value={add_pos_16_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_16_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_16_phone"
              value={add_pos_16_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_16_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 17 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 17</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew17</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_17_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_job"
              value={add_pos_17_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_17_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_name"
              value={add_pos_17_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_17_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_email"
              value={add_pos_17_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_17_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_17_phone"
              value={add_pos_17_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_17_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 18 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 18</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew18</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_18_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_job"
              value={add_pos_18_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_18_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_name"
              value={add_pos_18_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_18_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_email"
              value={add_pos_18_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_18_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_18_phone"
              value={add_pos_18_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_18_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 19 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 19</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrewp19</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_19_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_job"
              value={add_pos_19_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_19_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_name"
              value={add_pos_19_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_19_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_email"
              value={add_pos_19_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_19_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_19_phone"
              value={add_pos_19_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_19_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Additional Crew Position 20 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Additional Crew Position 20</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: addcrew20</span> 
      </div>
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_20_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_job"
              value={add_pos_20_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_20_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_name"
              value={add_pos_20_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_20_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_email"
              value={add_pos_20_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_20_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_20_phone"
              value={add_pos_20_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_20_phone?.map((message, idx) => (
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

export default AdditionalPositions2