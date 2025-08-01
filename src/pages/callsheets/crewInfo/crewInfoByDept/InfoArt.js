/* Component in the CrewInfo page to display
   the Art Department crew info */
import React, { useState } from 'react';
import { useRedirect } from '../../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../../styles/Button.module.css";
import styles from "../../../../styles/Callsheets.module.css";
import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoArt = ({crewInfoOne, setShowArt}) => {
  useRedirect();

  const [show, setShow] = useState(false);

  const {production_designer_name, production_designer_email, production_designer_phone,
    art_director_name, art_director_email, art_director_phone,
    art_assistant_name, art_assistant_email, art_assistant_phone,
    set_decorator_name, set_decorator_email, set_decorator_phone,
    set_dresser_name, set_dresser_email, set_dresser_phone,
    lead_man_name, lead_man_email, lead_man_phone,
    dresser_name, dresser_email, dresser_phone,
    prop_master_name, prop_master_email, prop_master_phone,
    ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
    prop_buyer_name, prop_buyer_email, prop_buyer_phone,
    armorer_name, armorer_email, armorer_phone,  } = crewInfoOne || {};

  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowArt(false) } >Close</span> 
      <h3 className={`pl-4 ml-md-5 mb-0 text-center py-1 ${styles.Bold }`} >ART DEPT </h3>
      </div>
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
      {/*  production designer */}
      {production_designer_name && 
      (<div className={`${styles.CrewInfoRow} pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Production Designer</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{production_designer_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>prodesign </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{production_designer_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{production_designer_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* art director  */}
      {art_director_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Art Director</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{art_director_name} </p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>artdirect</p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{art_director_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{art_director_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* art assistant */}
      {art_assistant_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Art Assistant</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{art_assistant_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>artassist </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{art_assistant_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{art_assistant_email}</p>
        </Col>
      </Row>
      </div> )
      }
      </div>
      {/* SET DECORATION */}
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <h3 className={` mb-0 text-center py-1 ${styles.Bold }`} >SET DECORATION</h3>
      </div>
      <div className='px-md-5 pt-2'>
      {/* set decorator */}
      {set_decorator_name && 
      (<div className={`${styles.CrewInfoRow} pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Set Decorator</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{set_decorator_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>setdecor </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{set_decorator_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{set_decorator_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* set dresser */}
      {set_dresser_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Set Dresser</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{set_dresser_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>setdress </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{set_dresser_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{set_dresser_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* lead man */}
      {lead_man_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Lead Man</h5> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfoP} `}>{lead_man_name}</p>
      </Col>
      <Col xs={6} md={3} >
        <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>leadman </p>
      </Col>
      <Col xs={6} md={3} >
      <p className={`${styles.CrewInfop} `}>{lead_man_phone}</p>
      </Col>
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{lead_man_email}</p>
      </Col>
      </Row>
      </div> )
      }
      {/* dresser */}
      {dresser_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Dresser</h5> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfoP} `}>{dresser_name}</p>
      </Col>
      <Col xs={6} md={3} >
        <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>dresser </p>
      </Col>
      <Col xs={6} md={3} >
      <p className={`${styles.CrewInfop} `}>{dresser_phone}</p>
      </Col>
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{dresser_email}</p>
      </Col>
      </Row>
      </div> )
      }
      </div>
      {/* PROPERTY */}
      <div className={`py-2 ${styles.White }`}>
      </div>    
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <h3 className={` mb-0 text-center py-1 ${styles.Bold }`} >PROPERTY</h3>
      </div>     
      <div className={`py-2 ${styles.White }`}>
      </div>
      <div className='px-md-5 pt-2'>
      {/* prop master */}
      {prop_master_name && 
      (<div className={`${styles.CrewInfoRow} pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Prop Master</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{prop_master_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>propmast </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{prop_master_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{prop_master_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* ass prop master */}
      {ass_prop_master_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Assist Prop Master</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{ass_prop_master_name}</p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>propast </p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{ass_prop_master_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{ass_prop_master_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* prop buyer */}
      {prop_buyer_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Prop Buyer</h5> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfoP} `}>{prop_buyer_name} </p>
        </Col>
        <Col xs={6} md={3} >
          <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>propbuy</p>
        </Col>
        <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{prop_buyer_phone}</p>
        </Col>
        <Col xs={6} md={3} >
          <p className={`${styles.CrewInfop} `}>{prop_buyer_email}</p>
        </Col>
      </Row>
      </div> )
      }
      {/* armorer name */}
      {armorer_name && 
      (<div className={`${styles.CrewInfoRow} mt-1 pb-3`}>
      <div className='d-flex justify-content-center '>
      <h5 className={`mb-3 mx-5 py-1 text-center ${styles.Width } ${styles.SubTitle2 }`} >Armorer</h5> 
      </div>
      <Row className='text-center' >
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfoP} `}>{armorer_name}</p>
      </Col>
      <Col xs={6} md={3} >
        <p style={{fontStyle: 'italic'}} className={`${styles.CrewInfop} `}>armorer </p>
      </Col>
      <Col xs={6} md={3} >
      <p className={`${styles.CrewInfop} `}>{armorer_phone}</p>
      </Col>
      <Col xs={6} md={3} >
        <p className={`${styles.CrewInfop} `}>{armorer_email}</p>
      </Col>
      </Row>
      </div> )
      }
      </div>
      {/* Extra Positions Button */}
      <Row className='mt-3'>
        <Col className='text-center'>
        <Button onClick={() => setShow(show => !show)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
          Extra Art Dept Positions </Button>
        </Col>
      </Row>
      {!show ? (
          ""
              ) : (
                <ExtraCrewInfo
                dept="art"
                setShow={setShow}  /> 
       ) }      
    </div>
  )
}

export default InfoArt