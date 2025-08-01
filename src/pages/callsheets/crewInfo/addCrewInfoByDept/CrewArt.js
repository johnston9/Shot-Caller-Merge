/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Art Department crew info */
import React, { useState } from "react";
import { useRedirect } from '../../../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../../styles/Callsheets.module.css";

const CrewArt = ({handleChange, postData, setShow}) => {
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {production_designer_name, production_designer_email, production_designer_phone,
    art_director_name, art_director_email, art_director_phone,
    art_assistant_name, art_assistant_email, art_assistant_phone,
    set_decorator_name, set_decorator_email, set_decorator_phone,
    set_dresser_name, set_dresser_email, set_dresser_phone,
    lead_man_name, lead_man_email, lead_man_phone,
    dresser_name, dresser_email, dresser_phone,
    prop_master_name, prop_master_email, prop_master_phone,
    ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
    prop_buyer_name, prop_buyer_email, prop_buyer_phone,
    armorer_name, armorer_email, armorer_phone,
  } = postData || {};
    
  return (
    <div className="text-center">
    <div >
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >ART DEPT</h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Production Designer */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Production Designer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: prodesign</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_name"
              value={production_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_email"
              value={production_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_phone"
              value={production_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Art Director */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Art Director</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: artdirect</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_name"
              value={art_director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_email"
              value={art_director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_phone"
              value={art_director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Art Assistant */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Art Assistant</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: artassist</span>  
      </div>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_name"
              value={art_assistant_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_email"
              value={art_assistant_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_phone"
              value={art_assistant_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
    <div className={`py-2 ${styles.White }`}>
      </div>
    {/* SET DECORATION */}
    <div >
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >SET DECORATION </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Set Decorator */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Set Decorator</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: setdecor</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_name"
              value={set_decorator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_email"
              value={set_decorator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_phone"
              value={set_decorator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Set Dresser */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Set Dresser</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: setdress</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_name"
              value={set_dresser_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_email"
              value={set_dresser_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_phone"
              value={set_dresser_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Lead Man */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Lead Man</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: leadman</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_name"
              value={lead_man_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_email"
              value={lead_man_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_phone"
              value={lead_man_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/*Dresser */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Dresser</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: dresser</span>  
      </div>
      <Row className="pb-3">
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_name"
              value={dresser_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_email"
              value={dresser_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_phone"
              value={dresser_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* PROPERTY */}
      <div className="pb-3">
      <h3 className={` mb-0 py-1 ${styles.SubTitle }`} >PROPERTY </h3> 
      <div className={`py-2 ${styles.White }`}>
      </div>
      {/* Prop Master */}
      <h5 className={`mb-3 py-1 ${styles.SubTitle2 }`} >Prop Master</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: propmast</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_name"
              value={prop_master_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_email"
              value={prop_master_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_phone"
              value={prop_master_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Assistant Prop Master */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Assistant Prop Master</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: propast</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_name"
              value={ass_prop_master_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_email"
              value={ass_prop_master_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_phone"
              value={ass_prop_master_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Prop Buyer */}
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Prop Buyer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >
        USERNAME: propbuy</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_name" 
           className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_name"
              value={prop_buyer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_email"
              value={prop_buyer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_phone"
              value={prop_buyer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Armorer */} 
      <h5 className={`my-3 py-1 ${styles.SubTitle2 }`} >Armorer</h5> 
      <div>
      <span className={`py-1 px-3 ${styles.SubTitle3 } `} >USERNAME: armorer</span>  
      </div>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_name"
              value={armorer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_email"
              value={armorer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_phone"
              value={armorer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_phone?.map((message, idx) => (
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

export default CrewArt