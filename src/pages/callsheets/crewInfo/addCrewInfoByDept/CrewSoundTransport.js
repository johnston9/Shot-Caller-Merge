/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Sound and Transport Departments crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewSoundTransport = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {sound_mixer_name, sound_mixer_email, sound_mixer_phone,
    boom_operator_name, boom_operator_email, boom_operator_phone,
    sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
    sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
    transport_captain_name, transport_captain_email, transport_captain_phone,
    transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
    transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
    head_driver_name, head_driver_email, head_driver_phone,
    car1_name, car1_email, car1_phone,
    car2_name, car2_email, car2_phone,
    car3_name, car3_email, car3_phone,
    truck1_name, truck1_email, truck1_phone,
    truck2_name, truck2_email, truck2_phone,
    truck3_name, truck3_email, truck3_phone,
    
  } = postData || {};

  return (
    <div className="text-center">
      {/* SOUND */}
      <div className="pb-3">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 ml-4 text-center py-1 ${styles.Bold }`} >SOUND </h3>
      </div>
      <div className={`py-1 ${styles.White }`}>
      </div>
      {/* Sound Mixer */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Sound Mixer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: soundmix</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_name"
              value={sound_mixer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_email"
              value={sound_mixer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_phone"
              value={sound_mixer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Boom Operator */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Boom Operator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: boomop</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_name"
              value={boom_operator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_email"
              value={boom_operator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_phone"
              value={boom_operator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Sound Assistant */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Sound Assistant 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: sound1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_name"
              value={sound_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_email"
              value={sound_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_phone"
              value={sound_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Sound Assistant 2 */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Sound Assistant 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: sound2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_name"
              value={sound_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_email"
              value={sound_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_phone"
              value={sound_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* TRANSPORTATION */}
      <div>
      <h3 className={`py-1 mb-0 ${styles.SubTitle }`} >TRANSPORTATION </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Transport Captain  */} 
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Transport Captain</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: trancap</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_name"
              value={transport_captain_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_email"
              value={transport_captain_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_phone"
              value={transport_captain_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Transport Manager 1  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Transport Manager 1</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: transpo1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_name"
              value={transport_manager_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_email"
              value={transport_manager_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_phone"
              value={transport_manager_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Transport Manager 2  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Transport Manager 2</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: transpo1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_name"
              value={transport_manager_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_email"
              value={transport_manager_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_phone"
              value={transport_manager_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Head Driver  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Head Driver</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: headrive</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_name"
              value={head_driver_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_email"
              value={head_driver_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_phone"
              value={head_driver_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* VEHICLES */}
      <div>
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >VEHICLES </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Car 1  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 1 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: carone</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_name"
              value={car1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_email"
              value={car1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_phone"
              value={car1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row >
      {/* Car 2 */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 2 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: cartwo</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_name"
              value={car2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_email"
              value={car2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_phone"
              value={car2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Car 3  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Car 3 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: carthree</span> 
      </div> 
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_name"
              value={car3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_email"
              value={car3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_phone"
              value={car3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Truck 1  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 1 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck1</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_name"
              value={truck1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_email"
              value={truck1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_phone"
              value={truck1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Truck 2  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 2 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck2</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_name"
              value={truck2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_email"
              value={truck2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_phone"
              value={truck2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Truck 3  */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Truck 3 </h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: truck3</span> 
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_name"
              value={truck3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_email"
              value={truck3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_phone"
              value={truck3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>
    </div>
  )
}

export default CrewSoundTransport