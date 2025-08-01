/* Component in the SceneScheduleCreate component that is passed 
the postData state which it prefills with the Scene data */
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/ScheduleSceneItem.module.css";

const ScheduleSceneItem = (props) => {
    const {setPostData, scene} = props

    // eslint-disable-next-line
    const [newData, setNewData] = useState({
        day_order_number: "",
        start_time: "",
        end_time: "",
        location_address: "",
        new_info: "",
        next: "",
        })

    const { day_order_number, location_address, start_time, end_time,
        new_info, next,  } = newData;

    const { id, number, title, act, int_ext, day_night, time,
        pages, action, dramatic_day,
        location_detail, location, filming_location,
        equip_set_props, department_info, } = scene;

    const handleClick = () => {
        /* sets the postData state with the Scene data */   
        setPostData({
            scene_id: id,
            day_order_number: day_order_number,
            number: number,
            act: act,
            title: title,
            start_time: start_time,
            end_time: end_time,
            int_ext: int_ext,
            day_night: day_night,
            time: time,
            pages: pages,
            action: action,
            dramatic_day: dramatic_day,
            location: location,
            location_detail: location_detail,
            filming_location: filming_location,
            location_address: location_address,
            department_info: department_info,
            equip_set_props: equip_set_props,
            next: next,
            new_info: new_info,
        });
    }

    return (
        <div className={`mx-4 mb-2 ${styles.SchedItem}`} >
        <Row>
        <Col xs={2} className={`text-center mx-0 py-2 ${styles.ItemNu}`}>
        <p >{number}</p>
        </Col>
        <Col xs={10} onClick={handleClick} className={`mx-0 py-2 ${styles.Item}`}>
        <p><span style={{ textTransform: 'uppercase'}}>{location}</span> - <span className={`${styles.Italic}`} >{title}</span></p>
        </Col>
        </Row>
        </div>
    )
}

export default ScheduleSceneItem
