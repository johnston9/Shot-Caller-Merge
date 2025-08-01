/* Info component on the SceneCreateForm */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoCreate = () => {
  return (
    <div>
    <Row className="mb-3">
    <Col className="d-none d-md-block" md={2}></Col>     
    <Col xs={12} md={8} >
    <div className={`text-center px-3 py-2 ${styles.SubTitle2 }`}>
    <p className={`text-center px-3 py-2 ${styles.n }`}>
    Create a Scene by giving it a number and in
    turn creating its Scene page.<br/>
    On the Scene page Breakdown and Charactes/BG info can be added.<br/>
    Also on the Scene page the Scene Script and Storyboard can be 
    added or updated and the Shotlist can be created.
    </p>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default InfoCreate