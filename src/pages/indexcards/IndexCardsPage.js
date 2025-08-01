/* Page to fetch all IndexCards data
 * Contains the IndexCards component to which it passes the data 
 * Initially sets data in the state indexCardsAll
 * Contains 3 functions to filter the 1st 90 Cards in groups
   of 30 and one function to filter the rest
 * Contains component IndexCardCreate */
import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import appStyles from "../../App.module.css"
import styles from "../../styles/Indexes.module.css"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import NoResults from "../../assets/no-results.png"
import btnStyles from "../../styles/Button.module.css"
import { useHistory } from "react-router-dom"

import Asset from "../../components/Asset"
import { useRedirect } from "../../hooks/Redirect"
import { Button } from "react-bootstrap"
import TopBox from "../../components/TopBox"
import Info from "./Info"
import IndexCardCreate from "./IndexCardCreate"
import IndexCards from "./IndexCards"
import useHostName from "../../hooks/useHostName"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const IndexCardsPage = () => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  useRedirect("loggedOut")
  const [indexCards, setIndexCards] = useState({ results: [] })
  const [indexCardsAll, setIndexCardsAll] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setErrors] = useState({})
  const [showInfo, setShowInfo] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const history = useHistory()
  const filter = ""
  const [query, setQuery] = useState("")
  const [hasOrder, setHasOrder] = useState(false)

  useEffect(() => {
    /* Function to fetch all Indexcards
     * set states indexCards and indexCardsAll to the data returned */
    const fetchCards = async () => {
      try {
        // TODO: remove for client
        if(host === CLIENT_PROGRAM_HOSTNAME) {
              const { data } = await axiosReq.get(
                `/indexcards/?${filter}&search=${query}`)
              setIndexCards(data)
              setIndexCardsAll(data)
              setHasLoaded(true)
              setHasOrder(false)
        }
        else {
          const { data } = await axiosInstance.get(
                `${localStorage.getItem('projectSlug')}/indexcards/?${filter}&search=${query}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  withCredentials: true,
                }
              )
              setIndexCards(data)
              setIndexCardsAll(data)
              setHasLoaded(true)
              setHasOrder(false)
        }      
      } catch (err) {
        console.log(err)
        if (err.response?.status !== 401) {
          setErrors(err.response?.data)
          setHasLoaded(true)
        }
      }
    }
    setHasLoaded(false)
    const timer = setTimeout(() => {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        fetchCards()
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchCards()
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [hasOrder, query])

  const handleClickAll = () => {
    setIndexCards(indexCardsAll)
  }

  const handleClick1 = () => {
    /* Function to filter the 1st 30 Cards */
    const thirty = indexCardsAll.results.filter(
      (card) => card.number > 0 && card.number < 31
    )
    setIndexCards({ results: thirty })
  }

  const handleClick2 = () => {
    /* Function to filter the 1st 30 Cards */
    const sixty = indexCardsAll.results.filter(
      (card) => card.number > 30 && card.number < 61
    )
    console.log("sixty")
    console.log(sixty)
    setIndexCards({ results: sixty })
  }

  const handleClick3 = () => {
    const ninety = indexCardsAll.results.filter(
      (card) => card.number > 60 && card.number < 91
    )
    console.log("ninety")
    console.log(ninety)
    setIndexCards({ results: ninety })
  }

  const handleClick4 = () => {
    const end = indexCardsAll.results.filter((card) => card.number > 90)
    console.log("end")
    console.log(end)
    setIndexCards({ results: end })
  }

  return (
    <div>
      <TopBox work="Index Cards" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
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
      {/* add */}
      <Row className="mt-0">
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin" ||
              currentUser?.groups[0]?.name === "Admincreative") && (
              <Button
                onClick={() => setShow((show) => !show)}
                className={`${btnStyles.Button} ${btnStyles.Wide2} 
                ${btnStyles.Bright} `}
              >
                Add Index Card
              </Button>
            )}
        </Col>
      </Row>
      {!show ? (
        ""
      ) : (
        <IndexCardCreate
          setShow={setShow}
          setIndexCards={setIndexCards}
          setHasOrder={setHasOrder}
        />
      )}
      {/* search setShowEdit  */}
      <Row>
        <Col className="py-2 text-center" xs={12} md={{ span: 6, offset: 3 }}>
          <Form
            className={`${styles.SearchBar} mt-3`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search by Card Number"
            />
          </Form>
        </Col>
      </Row>
      {/* filter */}
      <Row className="mt-1">
        <Col className="text-center" xs={{ span: 6, offset: 3 }}>
          <Button
            className={`py-0 ${btnStyles.Button} ${btnStyles.Blue} px-5`}
            onClick={() => handleClickAll()}
          >
            All Cards
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center" xs={6} md={3}>
          <Button
            className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => handleClick1()}
          >
            Cards 1 - 30
          </Button>
        </Col>
        <Col className="text-center" xs={6} md={3}>
          <Button
            className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => handleClick2()}
          >
            Cards 31 - 60
          </Button>
        </Col>
        <Col className="text-center" xs={6} md={3}>
          <Button
            className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={handleClick3}
          >
            Cards 61 -90
          </Button>
        </Col>
        <Col className="text-center" xs={6} md={3}>
          <Button
            className={`py-0 mt-2 mt-md-0  ${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={handleClick4}
          >
            Cards 91 - end
          </Button>
        </Col>
      </Row>
      {/* cards */}
      <Row className="py-3">
        <Col>
          {hasLoaded ? (
            <>
              {indexCards.results.length ? (
                <>
                  <IndexCards
                    setIndexCards={setIndexCards}
                    setHasOrder={setHasOrder}
                    indexCards={indexCards}
                  />
                  {/* add */}
                  <Row className="mt-3">
                    <Col className="text-center">
                      {currentUser &&
                        currentUser?.groups.length > 0 &&
                        (currentUser?.groups[0]?.name === "Admin" ||
                          currentUser?.groups[0]?.name === "Superadmin" ||
                          currentUser?.groups[0]?.name === "Admincreative") && (
                          <Button
                            onClick={() => setShow2((show2) => !show2)}
                            className={`${btnStyles.Button}  
                          ${btnStyles.Bright} `}
                          >
                            Add Card
                          </Button>
                        )}
                    </Col>
                  </Row>
                  {!show2 ? (
                    ""
                  ) : (
                    <IndexCardCreate
                      setShow2={setShow2}
                      setIndexCards={setIndexCards}
                      setHasOrder={setHasOrder}
                    />
                  )}
                </>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message="No Results" />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default IndexCardsPage
