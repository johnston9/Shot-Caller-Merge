/* Component on the DayPage to calculate the day's pages total */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";

const Pages = ({scenes}) => {

    /*Function to calculate the day's pages total */
    const pages = scenes.map((scene) => (
        parseFloat(scene.pages)));
    function addpages(page) {
    return page > 0;
    }
    const pagenumbers = pages.filter(addpages);
    const pagestotal = pagenumbers.reduce((total, a) => total + a, 0);

  return (
    <div>
      <Row>
        <Col>
        <h5 className={`mb-3 pl-2 ${styles.SubTitle }`}>
          Schedule <span className={`${styles.HSpan }`}>{pagestotal} Pages </span> 
        </h5>
        </Col>
      </Row>
         </div>
  )
}

export default Pages