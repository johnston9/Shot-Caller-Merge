import React from 'react'
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Character = ({cast_number, role, costume}) => {

    return ( 
        <div className={`${styles.n} mx-4 px-2` }>
        <Row >
        <Col className={`${styles.TitleBox3} text-center px-0 mx-0`} xs={2} >
        <p >{cast_number} </p>
        </Col>
        <Col xs={8} className={`${styles.TitleBox3} text-center px-0 mx-0`}>
        <p >{role} </p>
        </Col>
        <Col xs={2} className={`${styles.TitleBox3} text-center px-0 mx-0`} >
        {costume ? (<p >{costume} </p>) : ("") }
        </Col>
        </Row>
        <hr className='py-0 my-0' />
        </div>
    )
}

export default Character