// Component to display the Schedule Scene extra info
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
     const { title, dramatic_day, day_night,
            equip_set_props, new_info, action,
            department_info, style } = props
    return (
        <div className={`text-center py-2 mb-2 mx-2 px-2 ${styles.SceneBox}`}>
        <Row className='text-center px-2'>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={12} md={6} >
            <p className={`mb-0 mx-5 `} style={style} >
                D/N - Heading - DD </p>
            <p style={{ textTransform: 'italic' }} 
            className={`mb-0 ${styles.TitleBox3 }`}>
                {day_night} - {title} - {dramatic_day} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1 `} xs={12} md={6}>
            <p className={`mb-0 mx-5`} style={style}>
                Action </p>
            <p className={`mb-0 ${styles.TitleBox3 }`}>{action} </p>
            </Col>
        </Row>
        <Row className='text-center px-2'>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={12} md={6}>
            <p className={`mb-0 mx-5`} style={style}>
                Equip Set Props</p>
            <p className={`mb-0 ${styles.TitleBox3 }`} >{equip_set_props} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={12} md={6}>
            <p className={`mb-0 mx-5`} style={style}>
                New Info</p>
            <p className={`mb-0 ${styles.TitleBox3 }`}>{new_info}</p>
            </Col>
        </Row>
        <Row className='text-center px-2'>
            <Col className={`mx-0 px-0 mb-0 pb-1`}
             xs={12}>
            <p className={`mb-0 mx-5`} style={style}>
                Department Info </p>
            <p className={`mb-0 ${styles.TitleBox3 }`}>{department_info} </p>
            </Col>
        </Row>
        </div>
    )
}

export default SchedSceneInfo