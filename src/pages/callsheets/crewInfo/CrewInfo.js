/* Page to display the crew info by department
 * Contains the InfoProduction, InfoCamera, InfoCompany, InfoCasting,
   InfoLocations, InfoWardrobe, InfoScript, InfoElectric, InfoMakeup,
   InfoArt, InfoSound, InfoStunts and InfoPost components which are
   held in the crewInfoByDept folder to display the info by department */
import React, { useState } from "react"
import { useRedirect } from "../../../hooks/Redirect"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import styles from "../../../styles/Callsheets.module.css"
import btnStyles from "../../../styles/Button.module.css"
import { useHistory } from "react-router-dom"
import { useCrewInfoContext } from "../../../contexts/BaseCallContext"
import CreateOnce from "./CreateOnce"
import InfoProduction from "./crewInfoByDept/InfoProduction"
import InfoCamera from "./crewInfoByDept/InfoCamera"
import InfoCompany from "./crewInfoByDept/InfoCompany"
import InfoCasting from "./crewInfoByDept/InfoCastingAD"
import InfoLocations from "./crewInfoByDept/InfoLocations"
import InfoWardrobe from "./crewInfoByDept/InfoWardrobe"
import InfoScript from "./crewInfoByDept/InfoScriptCater"
import InfoElectric from "./crewInfoByDept/InfoElectricGrip"
import InfoMakeup from "./crewInfoByDept/InfoMakeup"
import InfoArt from "./crewInfoByDept/InfoArt"
import InfoSound from "./crewInfoByDept/InfoSoundTransport"
import InfoStunts from "./crewInfoByDept/InfoStunts"
import InfoPostAdditional from "./crewInfoByDept/InfoPostAdditional"
import TopBox from "../../../components/TopBox"
import Important from "../info/Important"

const CrewInfo = () => {
  useRedirect()
  const history = useHistory()
  const crewInfoOne = useCrewInfoContext()
  console.log(crewInfoOne)
  const [showImp, setShowImp] = useState(false)
  const [showCom, setShowCom] = useState(false)
  const [showPro, setShowPro] = useState(false)
  const [showCam, setShowCam] = useState(false)
  const [showSou, setShowSou] = useState(false)
  const [showLoc, setShowLoc] = useState(false)
  const [showMak, setShowMak] = useState(false)
  const [showEle, setShowEle] = useState(false)
  const [showScr, setShowScr] = useState(false)
  const [showArt, setShowArt] = useState(false)
  const [showCas, setShowCas] = useState(false)
  const [showStu, setShowStu] = useState(false)
  const [showPos, setShowPos] = useState(false)
  const [showWar, setShowWar] = useState(false)
  const { id } = crewInfoOne || {}

  return (
    <div className="mt-3 pb-5">
      <TopBox work="Crew Info" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowImp((showImp) => !showImp)}
      >
        IMPORTANT
      </Button>
      {!showImp ? "" : <Important />}
      {id ? (
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              onClick={() =>
                history.push(
                  `/${localStorage.getItem("projectSlug")}/crewinfo/edit/1`
                )
              }
              className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}
            >
              Add / Edit Crew Members Info
            </Button>
          </Col>
        </Row>
      ) : (
        <CreateOnce />
      )}
      {/* edit */}
      <div className={` mt-3 pt-2 ${styles.White}`}>
        <Row className={`${styles.ButtonLine} mt-0`}>
          <Col
            xs={{ span: 4, offset: 4 }}
            md={{ span: 4, offset: 4 }}
            className="text-center"
          >
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowCom((showCom) => !showCom)}
            >
              {" "}
              Company
            </p>
          </Col>
        </Row>
        <Row className={`${styles.ButtonLine} mt-0`}>
          <Col xs={4} md={2} className="text-center">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowPro((showPro) => !showPro)}
            >
              {" "}
              Production
            </p>
          </Col>
          <Col xs={4} md={2} className="text-center">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowCam((showCam) => !showCam)}
            >
              {" "}
              Camera
            </p>
          </Col>
          <Col xs={4} className="mx-0 pl-4 py-0" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowCas((showCas) => !showCas)}
            >
              {" "}
              Casting/AD
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowLoc((showLoc) => !showLoc)}
            >
              Locations
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowWar((showWar) => !showWar)}
            >
              Wardrobe
            </p>
          </Col>
          <Col xs={4} className="mx-0 px-0 text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowScr((showScr) => !showScr)}
            >
              {" "}
              Script/Catering
            </p>
          </Col>
        </Row>
        <Row className={`${styles.ButtonLine} text-center mt-0`}>
          <Col xs={4} md={2} className="mx-0 px-0 py-0">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowEle((showEle) => !showEle)}
            >
              {" "}
              Electric/Grip
            </p>
          </Col>
          <Col xs={4} md={2} className="mx-0 px-0 py-0">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowMak((showMak) => !showMak)}
            >
              {" "}
              Makeup
            </p>
          </Col>
          <Col xs={4} className="mx-0 px-0 py-0" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowSou((showSou) => !showSou)}
            >
              {" "}
              Sound/Transport
            </p>
          </Col>
          <Col xs={4} className="py-0" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowStu((showStu) => !showStu)}
            >
              Stunts
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowArt((showArt) => !showArt)}
            >
              {" "}
              Art
            </p>
          </Col>
          <Col xs={4} className="mx-0 px-0 py-0" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowPos((showPos) => !showPos)}
            >
              {" "}
              Post/Additional
            </p>
          </Col>
        </Row>
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle}`}></p>
        <div className={`py-1 ${styles.White}`}></div>
      </div>
      <div className="mt-0">
        {/* Info Company */}
        {!showCom ? (
          ""
        ) : (
          <InfoCompany crewInfoOne={crewInfoOne} setShowCom={setShowCom} />
        )}
        {/* Info Production */}
        {!showPro ? (
          ""
        ) : (
          <InfoProduction crewInfoOne={crewInfoOne} setShowPro={setShowPro} />
        )}
        {/* Info Casting */}
        {!showCas ? (
          ""
        ) : (
          <InfoCasting crewInfoOne={crewInfoOne} setShowCas={setShowCas} />
        )}
        {/* Info Locations */}
        {!showLoc ? (
          ""
        ) : (
          <InfoLocations crewInfoOne={crewInfoOne} setShowLoc={setShowLoc} />
        )}
        {/* Info Script  */}
        {!showScr ? (
          ""
        ) : (
          <InfoScript crewInfoOne={crewInfoOne} setShowScr={setShowScr} />
        )}
        {/* Info Electric */}
        {!showEle ? (
          ""
        ) : (
          <InfoElectric crewInfoOne={crewInfoOne} setShowEle={setShowEle} />
        )}
        {/* Info Makeup */}
        {!showMak ? (
          ""
        ) : (
          <InfoMakeup crewInfoOne={crewInfoOne} setShowMak={setShowMak} />
        )}
        {/* Info Sound */}
        {!showSou ? (
          ""
        ) : (
          <InfoSound crewInfoOne={crewInfoOne} setShowSou={setShowSou} />
        )}
        {/* Info Stunts */}
        {!showStu ? (
          ""
        ) : (
          <InfoStunts crewInfoOne={crewInfoOne} setShowStu={setShowStu} />
        )}
        {/* Info Art */}
        {!showArt ? (
          ""
        ) : (
          <InfoArt crewInfoOne={crewInfoOne} setShowArt={setShowArt} />
        )}
        {/* Info Camera */}
        {!showCam ? (
          ""
        ) : (
          <InfoCamera crewInfoOne={crewInfoOne} setShowCam={setShowCam} />
        )}
        {/* Info Post */}
        {!showPos ? (
          ""
        ) : (
          <InfoPostAdditional
            crewInfoOne={crewInfoOne}
            setShowPos={setShowPos}
          />
        )}
        {/* Info Wardrobe  */}
        {!showWar ? (
          ""
        ) : (
          <InfoWardrobe crewInfoOne={crewInfoOne} setShowWar={setShowWar} />
        )}
      </div>
    </div>
  )
}

export default CrewInfo
