/* Info component on ContactUs, (emails sending) component on the Callsheet
   telling users what info will be sent  */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoSendEmails = () => {
  return (
    <div>
        <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >INFO</h5>  
          <p>On Clicking Send the an email will be sent to all Crew 
            members. It will also be sent to all Cast members that are called for that day. </p>
            <p>The email will contain the information in the form below, the 
                URL to this page, the Shootday and Shootdate, the Production
                title and your Company info.</p>
            <p>
                There is also an empty input box for additional info, e.g.
                that this is the latest revised callsheet.
            </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoSendEmails