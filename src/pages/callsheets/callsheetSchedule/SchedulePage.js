/* Component to display the Schedule on the Callsheet and 
   Callsheet Create and Edit pages
 * Contains the ScheduleScenes component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import ScheduleScene from './ScheduleScene';

const SchedulePage = (props) => {
    const {scenes, setShow, showSideBySide="" } = props;

    /* Functions to get day's shoot page total
       by adding all the scene page lengths  */
    const pages = scenes.results.map((scene) => (
             parseFloat(scene.pages)));
    function addpages(page) {
    return page > 0;
    }
    const pagenumbers = pages.filter(addpages);
    const pagestotal = pagenumbers.reduce((total, a) => total + a, 0);

  return (
    <div className='mt-3'>
        {/* title */}
        <div className='d-none d-md-block'>
        {showSideBySide ? (
        <h4 className={`mt-3 pl-5 py-0 text-center 
        ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>
        Schedule
        <span className={`pt-1 pl-1 ${styles.HSpan } float-right`} >                
        {pagestotal} Pages
        </span> 
        </h4>
        ) : (
            <h4 className={`mt-3 py-0 text-center 
            ${styles.SubTitleSpan }`} 
            style={{ textTransform: 'uppercase' }}>
            <span className={`pt-1 pl-1 ${styles.HSpan } float-left`} >                
            {pagestotal} Pages
            </span>
            Schedule 
            <span className={`pt-1 float-right ${styles.Close }`} 
            onClick={() => setShow(false) } >Close</span>
            </h4>
        )}
        </div>
        {/* mobile title */}
        <div className='d-block d-md-none'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} 
        style={{ textTransform: 'uppercase'}} >Schedule 
        <span className={`${styles.HSpan }`} > {pagestotal} Pages</span></h5>
        </div>
        </div>
        {/* titles */}
        <div className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Scene</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p className='mb-0'>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3} md={3}>
                <p className='mb-0'>Filming Loc</p>                        
                </Col>
                {showSideBySide ? (
                  <>
                  <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                      <p className='mb-0'>Cast</p>
                  </Col>
                  <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                      <p className='mb-0'>Info</p>
                  </Col>
                  </>
                ) : (
                    <>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Pages</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Cast</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Info</p>
                    </Col>
                    </>
                ) }
            </Row>
        </div>
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Scene</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Details</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={1}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Info</p>
                </Col>
            </Row>
        </div>
        {/* scenes */}
        <Row>
            <Col >                   
            {scenes.results.length ? (
                scenes.results.map((scene, index) => (
                    <ScheduleScene
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#dbfaf9' : (index % 2 === 0) ? 
                        'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                        {...scene} 
                        scene={scene}
                        showSideBySide={showSideBySide}
                        key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default SchedulePage