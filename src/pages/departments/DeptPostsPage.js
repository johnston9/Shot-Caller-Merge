/* Page to fetch the Depts-Xtra posts data
 * Contains the DeptPostTop component to which it passes the data 
   for each Post cover
 * Contains the InfiniteScroll component
 * The Depts-Xtra App is a seperate posting space
   from the Scenes Workspace for posts by department */
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
import DeptPostCreate from "./DeptPostCreate"
import DeptPostTop from "./DeptPostTop"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

function DeptPostsPage({ deptGeneral, filter = "" }) {
  const currentUser = useCurrentUser();
  
  useRedirect()
  const host = useHostName()
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState({ results: [] })
  // eslint-disable-next-line
  const [error, setErrors] = useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  // const { pathname } = useLocation();
  const history = useHistory()

  const [query, setQuery] = useState("")

  useEffect(() => {
    /* Function to fetch the Depts-Xtra posts */
    const fetchPosts = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `/department/posts/?${filter}&search=${query}`
          )
          setPosts(data)
          setHasLoaded(true)
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem(
              "projectSlug"
            )}/department/posts/?${filter}&search=${query}`,
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
      fetchPosts()
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [filter, query])

  return (
    <div>
      <TopBox work={deptGeneral} title2="Department" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Row>
       {/* {currentUser?.groups[0]?.name === "Crew" ? "" :  */}
       <Col className="text-center">
          <Button
            onClick={() => setShow((show) => !show)}
            className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
          >
            Add Post
          </Button>
          {!show ? (
            ""
          ) : (
            <DeptPostCreate setShow={setShow} deptGeneral={deptGeneral} />
          )}
        </Col>
        
        {/* } */}
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
      <Row className="mt-3">
        <Col>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <DeptPostTop key={post.id} {...post} setPosts={setPosts} />
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

export default DeptPostsPage
