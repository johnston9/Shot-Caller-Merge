/* Page to fetch all the Latest Posts
 * Latest is a department choice in the Depts-Xtra app
   So all requests are to department */
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
import InfiniteScroll from "react-infinite-scroll-component"
import { fetchMoreData } from "../../utils/utils"
import { useRedirect } from "../../hooks/Redirect"
import { Button } from "react-bootstrap"
import TopBox from "../../components/TopBox"
import LatestTop from "./LatestTop"
import LatestCreate from "./LatestCreate"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

function LatestsPage() {
  const host = useHostName()
  const currentUser = useCurrentUser()
  useRedirect()
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setErrors] = useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  const history = useHistory()

  const [query, setQuery] = useState("")

  useEffect(() => {
    /* Page to fetch all the Latest Posts
     * Latest is a department choice in the Depts-Xtra app
       So all requests are to department */
    const fetchPosts = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `department/posts/?departments=latest&search=${query}`
          )
          setPosts(data)
          setHasLoaded(true)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem(
              "projectSlug"
            )}/department/posts/?departments=latest&search=${query}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          )
          setPosts(data)
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
        fetchPosts()
      } else {
        if (localStorage.getItem("accessToken")) {
          fetchPosts()
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  return (
    <div>
      <TopBox work="Latest Buzz" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Row>
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
                Add Latest Buzz
              </Button>
            )}
          {!show ? "" : <LatestCreate setShow={setShow} />}
        </Col>
      </Row>
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
              placeholder="Search by username or post title"
            />
          </Form>
        </Col>
      </Row>
      <Row className="mt-3 px-2">
        <Col>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <LatestTop key={post.id} {...post} setPosts={setPosts} />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
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
        </Col>
      </Row>
    </div>
  )
}

export default LatestsPage
