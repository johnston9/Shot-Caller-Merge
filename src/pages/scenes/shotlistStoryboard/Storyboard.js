/* Component in the Scene Component to fetch 
   the StoryBoard for a Scene
 * Contains the StoryBoardUpload component  */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import Asset from "../../../components/Asset";
import NoResults from "../../../assets/no-results.png";
import StoryBoardUpload from "./StoryBoardUpload";
import StoryInfo from "./StoryInfo";
import Templates from "./Templates";
import StoryboardURL from "./StoryboardURL";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { SetSceneContext } from "../../../contexts/DeptCategoryContext";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";

const Storyboard = () => {
  const currentUser = useCurrentUser();
  const [showInfo, setShowInfo] = useState(false);
  const [addStory, setAddStory] = useState(false);
  const [addURL, setAddURL] = useState(false);
  const [templates, setTemplates] = useState(false);
  // eslint-disable-next-line
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  const [postData, setPostData] = useState({
    storyboard: "",
    number: "",
    storyboard_url: "",
  });
  const [storyboard, setStoryboard] = useState(null);
  const host = useHostName();
  const [scene, setScene] = useState({ results: [] });
  const admin = true;
  const [fileName, setFileName] = useState("");
  const [storyboard_url, setStoryboard_url] = useState("");
  const [number1, setNumber1] = useState(null);



  useEffect(() => {
    const handleMount = async () => {
      try {
        let response;

        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq(`scenes/${id}`);
          response = data;
        } else {
          const { data } = await axiosInstance(
            `${localStorage.getItem("projectSlug")}/scenes/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          response = data;
        }

        // Store the full scene data and also store "storyboard" separately
        setScene({ results: [response] });
        setStoryboard(response.storyboard); // Store only the storyboard value
        setNumber1(response.number);
        setStoryboard_url(response.storyboard_url);
      
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);
  return (
    <div className="mb-5">
      <Row>
        <Col xs={12} className="text-center">
          <h5 className={`py-1 ${styles.SubTitle}`}>STORYBOARD PAGE</h5>
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <Button
            className={`float-right ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowInfo((showInfo) => !showInfo)}
          >
            INFO
          </Button>
        </Col>
      </Row>
      {/* tabs */}
      <div className="d-block d-md-none">
        <Row>
          <Col xs={6} className="text-center px-0">
            <Button
              onClick={() => setTemplates((templates) => !templates)}
              className={`${btnStyles.Button}  ${btnStyles.Bright} px-3`}
            >
              Templates
            </Button>
          </Col>
          <Col xs={6} className="text-center px-0">
            <Button
              onClick={() => setAddURL((addURL) => !addURL)}
              className={`${btnStyles.Button}  ${btnStyles.Bright} `}
            >
              Storyboard URL
            </Button>
          </Col>
        </Row>
        {currentUser?.groups[0]?.name === "Crew" ? "" : <Row>
          <Col xs={{ span: 8, offset: 2 }} className="text-center px-0">
            <Button
              onClick={() => setAddStory((addStory) => !addStory)}
              className={`${btnStyles.Button}  ${btnStyles.Bright}`}
            >
              Add Storyboard
            </Button>
          </Col>
        </Row>}
      </div>
      <div className="d-none d-md-block">
        <Row>
          <Col xs={4} className="text-center px-0">
            <Button
              onClick={() => setTemplates((templates) => !templates)}
              className={`${btnStyles.Button}  ${btnStyles.Bright} px-3`}
            >
              Templates
            </Button>
          </Col>
          {currentUser?.groups[0]?.name === "Crew" ? <Col xs={4} className="text-center px-0"></Col> : <Col xs={4} className="text-center px-0">
            <Button
              onClick={() => setAddStory((addStory) => !addStory)}
              className={`${btnStyles.Button}  ${btnStyles.Bright}`}
            >
              Add Storyboard
            </Button>
          </Col>}
          <Col xs={4} className="text-center px-0">
            <Button
              onClick={() => setAddURL((addURL) => !addURL)}
              className={`${btnStyles.Button}  ${btnStyles.Bright} `}
            >
              Storyboard URL
            </Button>
          </Col>
        </Row>
      </div>
      {!showInfo ? "" : <StoryInfo />}
      {!addStory ? (
        ""
      ) : (
        <StoryBoardUpload
          setAddStory={setAddStory}
          id={id}
          storyboard1={storyboard}
          number={number1}
          fileName1={fileName}
        />
      )}
      {!templates ? "" : <Templates setTemplates={setTemplates} />}
      {!addURL ? (
        ""
      ) : (
        <StoryboardURL
          setAddURL={setAddURL}
          id={id}
          storyboard_url={storyboard_url}
          number={number1}
        />
      )}
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h5 className={`py-0 ${styles.SubTitle}`}>STORYBOARD</h5>
          <>
            {storyboard ? (
              <div className={`${styles.Frame}`}>
                <iframe
                  title="Storyboard"
                  src={storyboard}
                  className={appStyles.iframeFull}
                  alt="Storyboard"
                />
              </div>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message="No Storyboard Added" />
              </Container>
            )}
          </>
        </Col>
      </Row>{" "}
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <hr className={`${styles.Break1}`} />
        </Col>
      </Row>
    </div>
  );
};

export default Storyboard;
