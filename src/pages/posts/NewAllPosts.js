import React, { useEffect, useState } from "react";
import useHostName from "../../hooks/useHostName";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useHistory } from "react-router-dom";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { Button, Container} from "react-bootstrap";
import styles from "../../styles/PostsPage.module.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import NoResults from "../../assets/no-results.png";
import Row from "react-bootstrap/Row";
import btnStyles from "../../styles/Button.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { fetchMoreData } from "../../utils/utils";
import PostTop from "./PostTop";

const NewAllPosts = (
  allposts,
  liked,
  message,
  sceneId = "",
  number = "",
  dept,
  category = "",
  filter = ""
) => {
  const host = useHostName();
  useRedirect();
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const episodeTitle = params.get("episodeTitle");
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [error, setErrors] = useState({});
  const epi = params.get("episode");
  const pathname = window.location.pathname;
  const profilePath = pathname.includes("Profilefeed");
  const archivePath = pathname.includes("archived");
  const likedPath = pathname.includes("liked");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(
            `posts/?${filter}&search=${query}`
          );
          if (category === "requirements") {
            const reqData = data.results.sort((a, b) => a.number - b.number);
            setPosts(reqData);
          }
          setPosts(data);
          setHasLoaded(true);
          console.log(data);
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/${
              profilePath ? "profile_posts" : "posts"
            }/?${filter}${profilePath && query ? `&search=${query}` : ""}${
              epi ? `&episode_id=${epi}` : ""
            }`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );

          let processedData = data;
          if (category === "requirements") {
            processedData.results = processedData.results.sort(
              (a, b) => a.number - b.number
            );
          }

          if (archivePath) {
            processedData.results = processedData.results.filter(
              (post) => post.archive_id !== null
            );
          }

          if (likedPath) {
            processedData.results = processedData.results.filter(
              (post) => post.like_id !== null
            );
          }

          if (!profilePath && query) {
            processedData.results = processedData.results.filter(
              (post) =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.name.toLowerCase().includes(query.toLowerCase())
            );
          }

          setPosts(processedData);
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [filter, query]);

  return (
    <div>
      <TopBox
        work="All Posts"
        episodeTitle={episodeTitle ? `Episode ${episodeTitle}` : null}
      />

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>

      <Row>
        <Col className="mt-2 text-center" xs={12} md={{ span: 6, offset: 3 }}>
          <Form
            className={`${styles.SearchBar} mt-3`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2 text-center"
              placeholder="Search by username or post title"
            />
          </Form>
        </Col>
      </Row>

      <Row className="mb-3 mt-2 px-2">
        <Col>
          {hasLoaded ? (
            <>
              {posts.results.length > 0 ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <PostTop key={post.id} {...post} setPosts={setPosts} />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
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
        </Col>
      </Row>
    </div>
  );
};

export default NewAllPosts;
