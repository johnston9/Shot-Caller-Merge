/* Page to containing links to the 12 Depts-Xtra departments */
import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useSetDeptGeneralContext } from "../../contexts/DeptCategoryContext"
import { useRedirect } from "../../hooks/Redirect"
import styles from "../../styles/Scene.module.css"
import btnStyles from "../../styles/Button.module.css"
import dep1 from "../../assets/dep1.png"
import dep2 from "../../assets/dep2.png"
import dep3 from "../../assets/dep3.png"
import dep4 from "../../assets/dep4.png"
import dep5 from "../../assets/dep5.png"
import dep6 from "../../assets/dep6.png"
import dep7 from "../../assets/dep7.png"
// eslint-disable-next-line
import dep8 from "../../assets/dep8.png"
import dep9 from "../../assets/dep9.png"
import dep10 from "../../assets/dep10.png"
import dep11 from "../../assets/dep11.png"
import dep12 from "../../assets/dep12.png"
import dep13 from "../../assets/dep13.png"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import TopBox from "../../components/TopBox"
import Info from "./Info"

const DeptsGeneral = () => {
  useRedirect()
  const setDeptGeneral = useSetDeptGeneralContext()
  const [showInfo, setShowInfo] = useState(false)
  const history = useHistory()

  const handleClick = (dept) => {
    setDeptGeneral(dept)
    history.push(`/${localStorage.getItem("projectSlug")}/department/posts`)
  }

  return (
    <div>
      <TopBox title="Departments" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />}
      <Card className={` ${styles.Scene} p-0`}>
        <Card.Header className={`${styles.Header} p-0`}>
          <h5
            style={{ textTransform: "uppercase" }}
            className={`text-center pl-5 py-1 ${styles.SubTitle}`}
          >
            Depts Xtra
          </h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} lg={3}>
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("camera")}
                >
                  <Card.Img src={dep2} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Camera
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3}>
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("sound")}
                >
                  <Card.Img src={dep3} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Sound
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("location")}
                >
                  <Card.Img src={dep4} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Location
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("script")}
                >
                  <Card.Img src={dep5} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Script
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("art")}
                >
                  <Card.Img src={dep6} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Art
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("make-up")}
                >
                  <Card.Img src={dep7} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Hair Makeup
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("wardrobe")}
                >
                  <Card.Img src={dep9} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Wardrobe
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("casting")}
                >
                  <Card.Img src={dep1} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Casting
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("post")}
                >
                  <Card.Img src={dep10} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Post
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("production")}
                >
                  <Card.Img src={dep11} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Production
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("stunts")}
                >
                  <Card.Img src={dep12} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Stunts
                  </Card.Title>
                </Card>
              </div>
            </Col>
            <Col xs={4} lg={3} className="px-1 px-sm-3">
              <div className={`${styles.DeptDiv} px-1 px-sm-3`}>
                <Card
                  className={`${styles.Dept}`}
                  onClick={() => handleClick("electric")}
                >
                  <Card.Img src={dep13} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Electric
                  </Card.Title>
                </Card>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DeptsGeneral
