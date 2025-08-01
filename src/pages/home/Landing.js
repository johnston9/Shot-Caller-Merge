/* Landing Page containing message to sign in or sign up
 * User will be redirected to the Home page if logged in already
 * The Gmail mobile browser issue is affecting the 
   useCurrentUser request on mobile */
import React from "react"
import { Link } from "react-router-dom"
import door from "../../assets/door.png"
import rightdoor from "../../assets/rightdoor.png"
import TopBox from "../../components/TopBox"
import styles from "../../styles/Home.module.css"
import { useRedirectHome } from "../../hooks/RedirectHome"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
// eslint-disable-next-line
import {
  useCurrentUser,
  useRedirect,
  useSignin,
  useToken,
} from "../../contexts/CurrentUserContext"
import { useCrewInfoContext } from "../../contexts/BaseCallContext"
import { getRefreshToken } from "../../utils/utils"

const Landing = () => {
  // useRedirectHome();
  const crewInfoOne = useCrewInfoContext()
  const production_name = crewInfoOne?.production_name || ""
  /* Values to be used testing the Gmail mobile browser issue */
  // eslint-disable-next-line
  const production_company_name = crewInfoOne.production_company || ""
  // eslint-disable-next-line
  const token = useToken()
  // eslint-disable-next-line
  const redirect = useRedirect()
  // eslint-disable-next-line
  const signintoken = getRefreshToken()
  // eslint-disable-next-line
  const signindata = useSignin()
  // eslint-disable-next-line
  const currentUser = useCurrentUser()

  return (
    <Container className={`px-2 ${styles.Background}`}>
      {production_name ? (
        <TopBox work={production_name} />
      ) : (
        <TopBox work={`SHOT CALLER`} />
      )}
      {/* VALUES USED WHEN TESTING THE GMAIL BROWSER ISSUE
             useToken, signintoken, useSignin, useRedirect, currentUser */}
      {/* <div className={`my-3 ${styles.Black} px-3`}>
          {signindata ? (<p className={`${styles.White}`}>
           {signindata} intercept works 
           </p>) : ("") }
          {signintoken ? (<p className={`${styles.White}`}>
           {signintoken} signin token
           </p>) : ("") }
          {token ? (<p className={`${styles.White}`}>
           {token.access} inter-refresh
          </p>) : ("") }
          {currentUser ? (<p className={`${styles.White}`}>
           {currentUser.username}
          </p>) : ("") }
          {production_name ? (<p className={`${styles.White}`}>
           {production_name}
          </p>) : ("") }
          {production_company_name ? (<p className={`${styles.White}`}>
           {production_company_name}
          </p>) : ("") }
          {redirect ? (
            {redirect}
          ) : ("") }
          {currentUser ? (<p className={`${styles.White}`}>
           {currentUser.username}
          </p>) : ("") }
          </div> */}
      <Row className={`my-3 ${styles.Row}`}>
        <Col className="my-3 pr-0 pl-3 pl-md-4" xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={door} />
        </Col>
        <Col className="my-auto py-2 p-md-2" xs={10}>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <p className={`${styles.Inner} text-center my-3`}>
                Guest, please click Sign In and use the login details there
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="d-none d-md-block"></Col>
            <Col xs={12} md={6}>
              <Link to={`signin`}>
                <div className={`px-2  ${styles.Landingbox}`}>
                  <h5 className="py-3 text-center">Sign in</h5>
                </div>
              </Link>
              <Link to={`/signup`}>
                <div className={`px-2 mt-3 ${styles.Landingbox}`}>
                  <h5 className="py-3 text-center">Sign up</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col className={`my-3 pl-0 pr-3 pr-md-4`} xs={1}>
          <Image className={`${styles.FillerImagel}`} src={rightdoor} />
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
