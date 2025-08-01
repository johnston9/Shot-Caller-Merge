/* StoryInfo Info component on the Storyboard component */
   import React from "react";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   
   const StoryInfo = () => {
     return (
       <div>
       <Row className="mb-3 mt-3">
         <Col className="d-none d-md-block" md={1}></Col>     
         <Col xs={12} md={10} >
           <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
           <h5 className={`text-center`} >INFO</h5>  
           <p className="pb-2">
           Use the "Add/Change Storyboard" tab to upload Storyboard files
           in the Upload Storyboard form.
           </p>
           <p className="pb-2">
           Use the "Download Template" tab to download a Storyboard template 
           from the two stock ones if one is needed.
           </p>
           <p className="pb-2">
           Use the "Add/Change URL" tab to add or change the Storyboard Video URL
           if one exists.
           </p>
            </div>
         </Col>
       </Row>
       </div>
     )
   }

export default StoryInfo