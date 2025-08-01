/* Page to fetch and display the data and posts for each Profile */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/PostDropdown";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import PostTop from "../posts/PostTop";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/Profile.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function ProfilePage() {
  useRedirect();
  const host = useHostName();
  // const admin = true;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [name, setName] = useState("");
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  // const handleEdit = () => {
  //   history.push(`/profiles/${id}/edit`);
  // };

  // const handleDelete = async () => {
  //   try {
  //     await axiosRes.delete(`/profiles/${id}/`);
  //     history.goBack();
  //   } catch (err) {
  //   }
  // };

  useEffect(() => {
    /* Function to fetch a profile's data and posts
     * and to set the pageProfile in profileData 
       in the ProfileDataContext to the data*/
    const fetchData = async () => {
      try {
        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem("user"));

        // Extract project_id if available
        const projectId = user?.project_id;

        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const [{ data: pageProfile }, { data: profilePosts }] =
            await Promise.all([
              axiosReq.get(`profiles/${id}/`),
              axiosReq.get(`posts/?owner__profile=${id}`),
            ]);
          setProfileData((prevState) => ({
            ...prevState,
            pageProfile: { results: [pageProfile] },
          }));
          setName(pageProfile.name);
          setProfilePosts(profilePosts);
          setHasLoaded(true);
        } else {
          const [{ data: pageProfile }, { data: profilePosts }] =
            await Promise.all([
              axiosInstance.get(
                `${localStorage.getItem("projectSlug")}/profiles/${id}/`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                  withCredentials: true,
                }
              ),
              axiosInstance.get(
                `${localStorage.getItem(
                  "projectSlug"
                )}/profile_posts/?owner__profile=${id}${
                  epi ? `&episode_id=${epi}` : ""
                }&project=${projectId}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                  withCredentials: true,
                }
              ),
            ]);
          setProfileData((prevState) => ({
            ...prevState,
            pageProfile: { results: [pageProfile] },
          }));
          setName(pageProfile.name);
          setProfilePosts(profilePosts);
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const topProfile = (
    <Card>
      <Card.Body className={`${styles.Back2} py-0`}>
        <Row className="text-center">
          <Col lg={3} className="text-lg-left">
            <Image
              className={styles.ProfileImage}
              roundedCircle
              src={profile?.image}
            />
          </Col>
          <Col lg={6}>
            <h2 style={{ textTransform: "capitalize" }} className=" pt-0 mb-0">
              {profile?.name}
            </h2>
            <h4
              style={{ textTransform: "capitalize" }}
              className={`${styles.Position}`}
            >
              {profile?.position}
            </h4>
            <Row className={`${styles.Likes} mx-0 `}>
              {currentUser &&
                currentUser?.groups.length > 0 &&
                currentUser?.groups[0]?.name !== "Cast" && (
                  <>
                    {" "}
                    <Col xs={4} className="my-0 mx-0 px-0">
                      <div>{profile?.posts_count}</div>
                      <div>Posts</div>
                    </Col>
                    <Col xs={4} className="my-0 mx-0 px-0">
                      <div>{profile?.followers_count}</div>
                      <div>Followers</div>
                    </Col>
                    <Col xs={4} className="mx-0 px-0 my-0">
                      <div>{profile?.following_count}</div>
                      <div>Following</div>
                    </Col>
                  </>
                )}
            </Row>
          </Col>
          <Col lg={3} className="mt-1 pb-1 text-lg-right ">
            {is_owner && <ProfileEditDropdown id={profile?.id} />}
            {currentUser &&
              !is_owner &&
              (profile?.following_id ? (
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Black}`}
                  onClick={() => handleUnfollow(profile)}
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Black}`}
                  onClick={() => handleFollow(profile)}
                >
                  follow
                </Button>
              ))}
          </Col>
          {profile?.content && <Col>{profile.content}</Col>}
        </Row>
      </Card.Body>
    </Card>
  );

  const posts = (
    <>
      <h2 style={{ textTransform: "capitalize" }} className="my-3 text-center">
        {" "}
        Posts
      </h2>
      {profilePosts?.results?.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <PostTop key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`${profile?.owner?.toUpperCase()} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <div>
      <TopBox
        title={name}
        episodeTitle={episodeTitle ? `Episode ${episodeTitle}` : null}
      />
      <Button
        onClick={() => history.goBack()}
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      >
        Back
      </Button>
      <Row className="mx-0 my-2">
        <Col className="pb-2 px-0">
          <div className={appStyles.Content}>
            {hasLoaded ? (
              <>
                {topProfile}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" &&
                  posts}
              </>
            ) : (
              <Asset spinner />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProfilePage;
