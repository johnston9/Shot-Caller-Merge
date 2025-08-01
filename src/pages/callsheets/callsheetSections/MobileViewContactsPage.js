/* Component in the Callsheet component to display the Callsheet 
   Company Contact info in mobile */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const ContactsPage = (props) => {
    const {crewInfoOne, setShow} = props;
    const {production_company, company_phone, company_email,
        company_address_line_1, company_address_line_2, company_address_line_3,
        company_address_line_4,
        director_name, director_phone,
        producer_name, producer_phone,
        pro_coordinator_name, pro_coordinator_phone,
        upm_name, upm_phone,
        ad_1_name, ad_1_phone,
        dop_name, dop_phone,
        set_medic_name, set_medic_phone,} = crewInfoOne;
  return (
    <div className='mt-3'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Contacts </h5>
        </div>
        <Row>
        <Col xs={12} >
            <div >
            <Row className='mb-1'>
              <Col xs={{span: 10, offset: 0}}>
              <p className={`mb-0 ${styles.Bold} `} >Production Company: </p>
              <h5 className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{production_company} </h5>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{company_address_line_1} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{company_address_line_2} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{company_address_line_3} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>{company_address_line_4} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>Phone {company_phone} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAqua}`}>Email {company_email} </p>
              </Col>
            </Row>
            </div>
            <div className='mt-3'>
            {/* Producer */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Producer:</span > </p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{producer_name} - {producer_phone} </p>
              </Col>
            </Row>
            {/* pro-cor */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Pro Cord:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{pro_coordinator_name} - {pro_coordinator_phone}</p>
              </Col>
            </Row>
            {/* Director */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Director:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`}>{director_name} - {director_phone} </p>
              </Col>
            </Row>
            {/* 1st AD */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>1st AD:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`}>{ad_1_name} - {ad_1_phone} </p>
              </Col>
            </Row>
            {/* DOP */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>DOP:</span > </p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{dop_name} - {dop_phone} </p>
              </Col>
            </Row>
            {/* UPM */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>UPM:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`}>{upm_name} - {upm_phone} </p>
              </Col>
            </Row>
            {/* SET MEDIC */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>SET MEDIC:</span > </p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{set_medic_name} - {set_medic_phone} </p>
              </Col>
            </Row>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactsPage