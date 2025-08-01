/* Info component on the Scene Component
   for the Workspace Guide */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const InfoWorkspace = ({setShowWorkInfo}) => {
  return (
    <div>
      <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}> 
        <div className={`mt-0 text-center pb-2 `}>
            <span className={`float-right ${styles.Close }`} 
            onClick={() => setShowWorkInfo(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >Instructions </h5>
            </div>
        <p>Use the Workspace Guide to indicate which
                Departments Workspaces will be used for this Scene.
                The Universal Workspace can be used for all work on the scene or
                in conjunction with one or a number of departments.
                 Use the Guide to indicate which.
             </p>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoWorkspace