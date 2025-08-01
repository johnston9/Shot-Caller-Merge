/* Component in the CrewInfo page to display
   the Company info */
import React from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';

const InfoCompany = ({crewInfoOne, setShowCom}) => {
  useRedirect();
  const {production_name, production_company, company_phone, company_email,
    company_address_line_1, company_address_line_2, company_address_line_3,
    company_address_line_4, company_logo, total_shoot_days} = crewInfoOne || {};

  return (
    <div className='mt-0'>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} 
        onClick={() => setShowCom(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 d-none d-md-block ${styles.Bold }`} >
        PRODUCTION COMPANY </h3>
      <h3 className={`pl-4 ml-5 mb-0 text-center py-1 
       d-md-none ${styles.Bold }`} >
        COMPANY </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
        {/* logo */}
        <Row className='mt-3'>
          <Col >
          <div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center d-none d-md-block ${styles.Width } 
            ${styles.SubTitle2 }`} >Production Company and Logo</h5> 
          <h5 className={`mb-3 mx-4 py-1 text-center d-md-none ${styles.Width } 
            ${styles.SubTitle2 }`} > Company and Logo</h5> 
          </div>
          { company_logo && 
            (<div className={` pb-3`}>
            <Row className='text-center' >
              <Col xs={{span: 10, offset: 1 }} >
                <div className='px-1'>
                <Image className={styles.Logo} src={company_logo} alt="logo" />
                </div>
              </Col>
            </Row>
            </div> )
          }
          { production_company && 
          (<div >
          <Row className='text-center' >
            <Col xs={{span: 10, offset: 1 }} >
              <h5 style={{textTransform: 'uppercase', fontWeight: '700'}} 
                className={`${styles.CrewInfoP} `}
                >{production_company}</h5>
            </Col>
          </Row>
          </div> )
          }
          </div>
          </Col>
        </Row> 
        {/* Address */}
        <Row className='mt-3'>
          <Col >
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Company Address</h5> 
          </div>
          </Col>
        </Row>
        <div className={`${styles.CrewInfoRow} pb-3`}>
        <Row className='text-center'>
          <Col md={6}>
          { company_address_line_1 && 
          (<p className="mb-0">
          {company_address_line_1}
          </p> )
          }
          { company_address_line_2 && 
          (<p className="mb-0">
          {company_address_line_2}
          </p> )
          }
          </Col>
          <Col md={6}>
          { company_address_line_3 && 
          (<p className="mb-0">
          {company_address_line_3}
          </p> )
          }
          { company_address_line_4 && 
          (<p className="mb-0">
          {company_address_line_4}
          </p> )
          }
          </Col>
        </Row>
        </div>
        {/* phone */}
        <Row className='mt-3'>
          <Col md={6}>
          {/* company phone */}
          { company_phone && 
            (<div className={`${styles.CrewInfoRow} pb-3`}>
            <div className='d-flex justify-content-center '>
            <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width95 } 
              ${styles.SubTitle2 }`} >Company Phone</h5> 
            </div>
            <Row className='text-center' >
              <Col xs={{span: 10, offset: 1 }} >
                <p className={`${styles.CrewInfop} `}
                  >{company_phone}</p>
              </Col>
            </Row>
            </div> )
          }
          </Col>
          <Col md={6}>
          { company_email && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width } 
            ${styles.SubTitle2 }`} >Company Email</h5> 
          </div>
          <Row className='text-center' >
              <Col xs={{span: 10, offset: 1 }} >
                <p className={`${styles.CrewInfop} `}
                  >{company_email}</p>
              </Col>
            </Row>
          </div> )
          }
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6}>
          {/* production name */}
          { production_name && 
            (<div className={`${styles.CrewInfoRow} pb-3`}>
            <div className='d-flex justify-content-center '>
            <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width95 } 
              ${styles.SubTitle2 }`} >Production Name</h5> 
            </div>
            <Row className='text-center' >
              <Col xs={{span: 10, offset: 1 }} >
                <h5 style={{textTransform: 'uppercase', fontStyle: 'italic', fontWeight: '700'}} 
                  className={`${styles.CrewInfoP} `}
                  >{production_name}</h5>
              </Col>
            </Row>
            </div> )
          }
          </Col>
          <Col md={6}>
          { total_shoot_days && 
          (<div className={`${styles.CrewInfoRow} pb-3`}>
          <div className='d-flex justify-content-center '>
          <h5 className={`mb-3 mx-4 py-1 text-center ${styles.Width95 } 
            ${styles.SubTitle2 }`} >Total Shoot Days</h5> 
          </div>
          <Row className='text-center' >
            <Col xs={{span: 10, offset: 1 }} >
              <h5 style={{textTransform: 'uppercase', fontWeight: '700'}} 
                className={`${styles.CrewInfoP} `}
                >{total_shoot_days}</h5>
            </Col>
          </Row>
          </div> )
          }
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InfoCompany