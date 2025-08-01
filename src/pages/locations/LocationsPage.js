/* Page to fetch all Locations data and render the cover info 
 * Contains the LocationTop component to which it passes the data
   for each Location cover */
import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import appStyles from "../../App.module.css"
import styles from "../../styles/PostsPage.module.css"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import NoResults from "../../assets/no-results.png"
import btnStyles from "../../styles/Button.module.css"
import { useHistory } from "react-router-dom"

import Asset from "../../components/Asset"
import { useRedirect } from "../../hooks/Redirect"
import { Button } from "react-bootstrap"
import TopBox from "../../components/TopBox"
import LocationTop from "./LocationTop"
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

const LocationsPage = () => {
  const host = useHostName()
  const currentUser = useCurrentUser()
  // useRedirect()
  const [locations, setLocations] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setErrors] = useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  const history = useHistory()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/locations/?&search=${query}`)
          console.log(data)
          setLocations(data)
          setHasLoaded(true)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem(
              "projectSlug"
            )}/locations/?&search=${query}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          console.log(data)
          setLocations(data)
          setHasLoaded(true)
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
        fetchLocations()
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchLocations()
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  return (
    <div>
      <TopBox title="Locations" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      {/* add location  */}
      <Row>
        <Col className="text-center">
          {currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin" ||
              currentUser?.groups[0]?.name === "Admincreative") && (
              <Button
                onClick={() =>
                  history.push(
                    `/${localStorage.getItem("projectSlug")}/locations/create`
                  )
                }
                className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
              >
                Add Location
              </Button>
            )}
        </Col>
      </Row>
      {/* search */}
      <Row className="px-3">
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
              placeholder="Search by Location name"
            />
          </Form>
        </Col>
      </Row>
      <Row className="h-100 px-4">
        {hasLoaded ? (
          <>
            {locations.results.length ? (
              locations.results.map((location) => (
                <Col xs={6} sm={4} md={4} lg={3} className="py-2 p-0 mx-0">
                  <LocationTop key={location.id} {...location} />
                </Col>
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} />
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
  )
}

export default LocationsPage
