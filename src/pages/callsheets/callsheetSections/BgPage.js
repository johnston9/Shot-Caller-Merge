/* Component in the Callsheet to display the Callsheet Background 
   items passed down from the Callsheet
 * Contains the Background component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import Background from './Background';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';

const BgPage = (props) => {
    const admin = true;
    const { background, setShow, handleMount } = props;
    const currentUser = useCurrentUser();

    return (
        <div className='my-5'>
            {/* MEDIUM */}
            <div className='d-none d-md-block'>
                <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan}`}
                    style={{ textTransform: 'uppercase' }}>BG / STANDINS</span>
                {/* titles */}
                <Row >
                    <Col md={6}>
                        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                <p className='mb-0'>Qty</p>
                            </Col>
                            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                <p className='mb-0'>Call</p>
                            </Col>
                            {admin ? (
                                <>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                                        <p className='mb-0'>Type</p>
                                    </Col>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={!["Cast", "Crew","Admincreative"].includes(currentUser?.groups[0]?.name) ? 1 : 2} md={currentUser?.groups[0]?.name !== "Cast" ? 2 : 1}>
                                        <p className='mb-0'>Info</p>
                                    </Col>
                                    {
                                        !["Cast", "Crew","Admincreative"].includes(currentUser?.groups[0]?.name) &&
                                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                                            <p className='mb-0'>Ed</p>
                                        </Col>
                                    }
                                </>
                            ) : (
                                <>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                                        <p className='mb-0'>Type</p>
                                    </Col>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                        <p className='mb-0'>Info</p>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                <p className='mb-0'>Qty</p>
                            </Col>
                            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                <p className='mb-0'>Call</p>
                            </Col>
                            {admin ? (
                                <>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                                        <p className='mb-0'>Type</p>
                                    </Col>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={!["Cast", "Crew", "Admincreative"].includes(currentUser?.groups[0]?.name) ? 1 : 2} md={!["Cast", "Crew","Admincreative"].includes(currentUser?.groups[0]?.name) ? 1 : 2}>
                                        <p className='mb-0'>Info</p>
                                    </Col>
                                    {
                                        !["Cast","Crew", "Admincreative"].includes(currentUser?.groups[0]?.name) &&
                                        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                                            <p className='mb-0'>Ed</p>
                                        </Col>
                                    }
                                </>
                            ) : (
                                <>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                                        <p className='mb-0'>Type</p>
                                    </Col>
                                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                                        <p className='mb-0'>Info</p>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                </Row>
                {/* items  */}
                <Row>
                    {background.results.length ? (
                        background.results.map((back, index) => (
                            <Col md={6} >
                                <Background
                                    style={{
                                        backgroundColor: (index % 3 === 0)
                                            ? '#f6fffe' : (index % 2 === 0) ?
                                                'rgb(246 254 245)' : 'rgb(254 249 254)'
                                    }}
                                    {...back}
                                    admin={admin}
                                    handleMount={handleMount}
                                    back={back}
                                    key={back.id} />
                            </Col>
                        ))) : ("")}
                </Row>
            </div>
            {/* MOBILE */}
            <div className='d-block d-md-none'>
                <div className={`mb-3 text-center ${styles.SubTitle}`}>
                    <span className={`float-right ${styles.Close}`} onClick={() => setShow(false)} >Close</span>
                    <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase' }} >BG / Stand-ins (total) </h5>
                </div>
                {/* titles */}
                <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                        <p className='mb-0'>Qty</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                        <p className='mb-0'>Call</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                        <p className='mb-0'>Type</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Info</p>
                    </Col>
                </Row>
                {/* items */}
                {/* items background */}
                <Row>
                    {background.results.length ? (
                        background.results.map((back, index) => (
                            <Col md={12} >
                                <Background
                                    style={{
                                        backgroundColor: (index % 3 === 0)
                                            ? '#f6fffe' : (index % 2 === 0) ?
                                                'rgb(246 254 245)' : 'rgb(254 249 254)'
                                    }}
                                    {...back}
                                    admin={admin}
                                    back={back}
                                    key={back.id} />
                            </Col>
                        ))) : ("")}
                </Row>
            </div>
        </div>
    )
}

export default BgPage