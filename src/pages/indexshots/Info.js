/* Info Component in SeriesPage */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Create an Index Shot Series. Add shots on it's page.
              This can be used to preview the style, look 
              and colour choices for each scene. It can also be used to 
              storyboard a sequence in more detail or show the angles and shooting
              style of one scene.
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info