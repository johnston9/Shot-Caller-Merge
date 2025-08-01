/* Important Info component on the SceneCreateForm
   telling users that Scene Numbers can never be changed */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const ImportCreate = () => {
  return (
    <div>
    <Row className="mb-3">
      <Col className="d-none d-md-block" md={2}></Col>     
      <Col xs={12} md={8} >
        <div className={` px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center px-3 py-2 ${styles.Crimson }`}>
      Scene Numbers can never be changed once created.</h5>
      <h5 className={`text-center px-3 py-2 ${styles.Bold }`}> To add new 
      Scenes between Scenes use decimals as follows</h5>
      <hr/>
      <div className="pl-5">
      <Row>
      <Col xs={4}>
      <p>
      Scene between
      </p>
      <p>
      Scene between
      </p>
      <p>
      Scene between
      </p>
      <p>
      Scene between
      </p>
      </Col>
      <Col xs={2}>
      <p>
      7
      </p>
      <p>
      7.5
      </p>
      <p>
      7
      </p>
      <p>
      7
      </p>
      </Col>
      <Col xs={2}>
      <p>
      and
      </p>
      <p>
      and
      </p>
      <p>
      and
      </p>
      <p>
      and
      </p>
      </Col>
      <Col xs={2}>
      <p>
      8
      </p>
      <p>
      8
      </p>
      <p>
      7.5
      </p>
      <p>
      7.25
      </p>      
      </Col>
      <Col xs={2}>
      <p>
      7.5
      </p>
      <p>
      7.75
      </p>
      <p>
      7.25
      </p>
      <p>
      7.125
      </p>       
      </Col>
      </Row>
      <hr/>
      <p>
      This can go on indefinitly 7.06, 7.03, 7.015, 7.005 etc.
      </p>
      </div>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default ImportCreate