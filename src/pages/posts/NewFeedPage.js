import React, { useEffect, useState } from "react";
import useHostName from "../../hooks/useHostName";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useHistory } from "react-router-dom";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { Button, Container } from "react-bootstrap";
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

const NewFeedPage = (
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setHasLoaded(false);
        const user = JSON.parse(localStorage.getItem("user"));
        const userPk = user?.pk;

        let data;
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const response = await axiosReq.get(
            `posts/?${filter}&search=${query}`
          );
          data = response.data;
        } else {
          const response = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/${
              profilePath ? "profile_posts" : "posts"
            }/?${filter}${profilePath && query ? `&search=${query}` : ""}${
              epi ? `&episode_id=${epi}&all_posts=true` : ""
            }`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          data = response.data;
        }

        if (!data?.results || data.results.length === 0) {
          console.warn("No results found in API response.");
          setPosts({ results: [] });
          setHasLoaded(true);
          return;
        }

        // Filter out posts owned by the current user
        let processedData = data.results.filter(
          (post) => post.profile_id !== userPk
        );


        // Additional filtering and sorting
        if (category === "requirements") {
          processedData = processedData.sort((a, b) => a.number - b.number);
        }

        if (!profilePath && query) {
          processedData = processedData.filter(
            (post) =>
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.name.toLowerCase().includes(query.toLowerCase())
          );
        }

        setPosts({ results: processedData });
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    };

    const timer = setTimeout(fetchPosts, 500);
    return () => clearTimeout(timer);
  }, [filter, query]);

  return (
    <div>
      <TopBox
        work="Feed"
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

export default NewFeedPage;
