/* Important Info component on the BreakdownAddEditForm
   telling users to used decimal instead of eights */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";

const Important = () => {
  return (
    <div>
        <Row className="my-3">
      <Col className="d-none d-md-block" md={2}></Col>     
      <Col xs={12} md={8} >
      <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}> 
      <h5 className={`text-center px-3 pt-1 ${styles.Crimson }`}>
        USE DECIMAL FOR PAGES INPUT FIELD, INSTEAD OF EIGHTS
        </h5>     
        <p className={`${styles.Bold}`}>Converter</p>
        <hr/>
      <Row>
      <Col xs={6}>
      <Row>
      <Col xs={2}></Col>
      <Col xs={2}>
      <p>
      1/8
      </p>
      <p>
      2/8
      </p>
      <p>
      3/8
      </p>
      <p>
      4/8
      </p>
      </Col>
      <Col xs={2}>
      <p>
      =
      </p>
      <p>
      =
      </p>
      <p>
      =
      </p>
      <p>
      =
      </p>
      </Col>
      <Col xs={2}>
      <p>
      .125
      </p>
      <p>
      .25
      </p>
      <p>
      .375
      </p>
      <p>
      .5
      </p>
      </Col>
      <Col xs={4}></Col>
      </Row>
      </Col>
      <Col xs={6}>
      <Row>
      <Col xs={2}></Col>
      <Col xs={2}>
      <p>
      5/8
      </p>
      <p>
      6/8
      </p>
      <p>
      7/8
      </p>
      <p>
      8/8
      </p>
      </Col>
      <Col xs={2}>
      <p>
      =
      </p>
      <p>
      =
      </p>
      <p>
      =
      </p>
      <p>
      =
      </p>
      </Col>
      <Col xs={2}>
      <p>
      .625
      </p>
      <p>
      .75
      </p>
      <p>
      .875
      </p>
      <p>
      1
      </p>
      </Col>
      <Col xs={4}></Col>
      </Row>
      </Col>
      </Row>
      <hr/>
      <p>E.g. For 3 3/8 pages put 3.375</p>
      </div>
      </Col>
    </Row>
    </div>
  )
}

export default Important