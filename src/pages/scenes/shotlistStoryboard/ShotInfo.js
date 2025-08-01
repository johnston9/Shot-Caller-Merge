/* Component in the Shot component to display 
   extra info for each Shot */
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import btnStyles from "../../../styles/Button.module.css";
import styles from "../../../styles/Scene.module.css";
import { Button } from "react-bootstrap";
import ShotImage from "./ShotImage";

const ShotInfo = (props) => {
  const {
    fx,
    focus_pulls,
    lighting,
    camera,
    lens,
    equipment,
    script_ref,
    storyboard_refs,
    audio,
    image,
    int_ext,
    frame_rate,
    location,
    actors,
    notes,
    day_night,
  } = props;
  const [showImg, setShowImg] = useState(false);
  return (
    <div className={`${styles.InfoBack} mx-3 pt-3`}>
      {/* camera lens location */}
      <Row className="mt-1">
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            CAMERA
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{camera} </p>
          </div>
        </Col>
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            LENS
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{lens} </p>
          </div>
        </Col>
        <Col className={`text-center`} xs={12} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            LOCATION
          </p>
          <div className={`${styles.Para}`}>
            <p
              style={{ textTransform: "uppercase" }}
              className={`${styles.Role}`}
            >
              {int_ext} {location} - {day_night}{" "}
            </p>
          </div>
        </Col>
      </Row>
      {/* break */}
      <Row>
        <Col xs={12}>
          <hr className={`${styles.Break1} mt-0 mb-0`} />
        </Col>
      </Row>
      {/* audio equipment subject */}
      <Row className="mt-3">
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            AUDIO
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{audio} </p>
          </div>
        </Col>
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            EQUIPMENT
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{equipment} </p>
          </div>
        </Col>
        <Col className={`text-center`} xs={12} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            SUBJECT
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{actors} </p>
          </div>
        </Col>
      </Row>
      {/* break */}
      <Row>
        <Col xs={12}>
          <hr className={`${styles.Break1} mt-0 mb-0`} />
        </Col>
      </Row>
      {/* Equipment frame rate lighting  */}
      <Row className="mt-3">
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            FOCUS PULLS
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{focus_pulls} </p>
          </div>
        </Col>
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            FRAME RATE
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{frame_rate} </p>
          </div>
        </Col>
        <Col className={`text-center`} xs={12} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            LIGHTING
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{lighting}</p>
          </div>
        </Col>
      </Row>
      {/* break */}
      <Row>
        <Col xs={12}>
          <hr className={`${styles.Break1} mt-0 mb-0`} />
        </Col>
      </Row>
      {/* script ref story ref FX/VFX */}
      <Row className="mt-3">
        <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            SCRIPT REF
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{script_ref} </p>
          </div>
        </Col>
        <Col
          className={`${styles.BorderRight} px-0 mx-0 text-center`}
          xs={6}
          md={4}
        >
          <p
            className={`${styles.BoldTitle} d-none d-md-block
            mb-2 text-center mx-1 mx-md-5`}
          >
            STORYBOARD REF
          </p>
          <p
            className={`${styles.BoldTitle} d-block d-md-none
            mb-2 text-center mx-1 mx-sm-5`}
          >
            STORYB. REF
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{storyboard_refs} </p>
          </div>
        </Col>
        <Col className={`text-center`} xs={12} md={4}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            FX/VFX
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{fx} </p>
          </div>
        </Col>
      </Row>
      {/* break */}
      <Row>
        <Col xs={12}>
          <hr className={`${styles.Break1} mt-0 mb-0`} />
        </Col>
      </Row>
      {/* notes */}
      <Row className="mt-3">
        <Col className={`text-center`} xs={12} md={{ span: 8, offset: 2 }}>
          <p
            className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}
          >
            NOTES
          </p>
          <div className={`${styles.Para}`}>
            <p className={`${styles.Role}`}>{notes} </p>
          </div>
        </Col>
      </Row>
      {/* break */}
      <Row>
        <Col xs={12}>
          <hr className={`${styles.Break1} mt-0 mb-0`} />
        </Col>
      </Row>
      {/* image */}
      <Row>
        <Col className={`text-center mt-3`} xs={{ span: 4, offset: 4 }}>
          <Button
            onClick={() => setShowImg((showImg) => !showImg)}
            className={`${btnStyles.Button} ${btnStyles.Blue} px-2 d-block d-md-none `}
          >
            Image
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{!showImg ? "" : <ShotImage image={image} />}</Col>
      </Row>
      <hr className="mt-4" />
    </div>
  );
};

export default ShotInfo;
