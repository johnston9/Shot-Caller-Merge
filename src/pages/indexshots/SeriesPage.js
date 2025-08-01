/* Page to fetch all IndexShot Series data and render the cover info
 * Contains the SeriesTop component to which it passes the data
   for each Series cover
 * An IndexShot series is a series of Images
 * Contains the IndexShotCreate component
 * Contains the Info component */
import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import styles from "../../styles/Scene.module.css"
import btnStyles from "../../styles/Button.module.css"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import NoResults from "../../assets/no-results.png"
import Asset from "../../components/Asset"
import { useRedirect } from "../../hooks/Redirect"
import appStyles from "../../App.module.css"
import { Button } from "react-bootstrap"
import TopBox from "../../components/TopBox"
import { useHistory } from "react-router-dom"
import Info from "./Info"
import SeriesTop from "./SeriesTop"
import SeriesCreateForm from "./SeriesCreateForm"
import useHostName from "../../hooks/useHostName"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const SeriesPage = () => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  useRedirect()
  const [series, setSeries] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setError] = useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  const [query, setQuery] = useState("")
  const filter = ""
  const message = "No Series Added"
  const history = useHistory()
  const [showInfo, setShowInfo] = useState(false)
  const [show, setShow] = useState(false)
  // eslint-disable-next-line
  const [hasOrder, setHasOrder] = useState(false)

  useEffect(() => {
    /* Function to fetch the Series data */
    const fetchseries = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `/series/?${filter}&search=${query}`
          )
          setSeries(data)
          setHasLoaded(true)
          setHasOrder(true)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem(
              "projectSlug"
            )}/series/?${filter}&search=${query}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          setSeries(data)
          setHasLoaded(true)
          setHasOrder(true)
        }
      } catch (err) {
        setError(err)
        console.log(err)
      }
    }
    setHasLoaded(false)

    const timer = setTimeout(() => {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        fetchseries()
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchseries()
        }
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [query, filter])

  return (
    <div>
      <TopBox title="Index Shots" />
      {/* add  */}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />}
      {/* Create setHasOrder={setHasOrder}*/}
      <Row className="my-3">
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin" ||
              currentUser?.groups[0]?.name === "Admincreative") && (
              <Button
                onClick={() => setShow((show) => !show)}
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
              >
                Create Series
              </Button>
            )}
        </Col>
      </Row>
      {!show ? (
        ""
      ) : (
        <SeriesCreateForm setShow={setShow} setSeries={setSeries} />
      )}
      {/* Series */}
      <div className={`mx-1 mt-3 mb-3 `}>
        <h5 className={`text-center mt-3 ${styles.SubTitle}`}>
          Index Shots Series
        </h5>
        <Row>
          <Col
            className="my-3"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search by Series Name"
              />
            </Form>
          </Col>
        </Row>
        {/* series d-flex justify-content-center*/}
        <Row className="py-2">
          {hasLoaded ? (
            <>
              {series.results.length ? (
                series.results.map((seri) => (
                  <Col xs={12} sm={6} md={4} lg={4} className="py-2">
                    <SeriesTop
                      seri={seri}
                      key={seri.id}
                      setHasOrder={setHasOrder}
                      {...seri}
                      setSeries={setSeries}
                    />
                  </Col>
                ))
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Row>
      </div>
    </div>
  )
}

export default SeriesPage
