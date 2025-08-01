/* Component in ScenePage to display the Scene data
 * Contains the CharactersBG, Breakdown, Script, ShotlistPage,
   Storyboard, WorkspaceGuideForm and WorkspaceGuideEdit components 
   each of which deals with a section of the Scene data
 * Potential change to the department images:
   A/ The categories Finals, Shooting and Info will be removed
   B/ The actual image when clicked opens the dropdowm menu
   c/ The department images will be changed to have a top half
    and bottom half both slightly differently shaded by opacity.
    The top one will say Requirements and the other Workspace both 
    with links to these Post pages. */
import React, { useState } from "react";

import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import {
  useSetCategoryContext,
  useSetDeptContext,
  useSetNumberContext,
  useSetSceneContext,
} from "../../contexts/DeptCategoryContext";
import dep1 from "../../assets/dep1.png";
import dep2 from "../../assets/dep2.png";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";
import dep7 from "../../assets/dep7.png";
import dep8 from "../../assets/dep8.png";
import dep9 from "../../assets/dep9.png";
import dep10 from "../../assets/dep10.png";
import dep11 from "../../assets/dep11.png";
import dep12 from "../../assets/dep12.png";
import dep13 from "../../assets/dep13.png";
import { DeptDropdown, PostDropdown } from "../../components/PostDropdown";
import ShotlistPage from "./shotlistStoryboard/ShotlistPage";
import WorkspaceGuideForm from "./WorkspaceGuideForm";
import WorkspaceGuideEdit from "./WorkspaceGuideEdit";
import Breakdown from "./breakdown/Breakdown";
import Storyboard from "./shotlistStoryboard/Storyboard";
import TopBox from "../../components/TopBox";
import InfoScenePage from "./info/InfoScenePage";
import InfoWorkspace from "./info/InfoWorkspace";
import Script from "./scriptAndSceneScript/ScriptScene";
import CharactersBG from "./charactersBg/CharactersBG";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import StoryboardforSList from "./shotlistStoryboard/StoryboardforSList";

const Scene = (props) => {
  const host = useHostName();
  const currentUser = useCurrentUser();
  const [showScript, setShowScript] = useState(false);
  const [showlist, setShowlist] = useState(false);
  const [showBreak, setShowBreak] = useState(false);
  const [showCharactersBG, setShowCharactersBG] = useState(false);
  const [showstory, setShowstory] = useState(false);
  const [showStoryShot, setShowStoryShot] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showGuideEdit, setShowGuideEdit] = useState(false);
  const setSceneId = useSetSceneContext();
  const setNumber = useSetNumberContext();
  const setDept = useSetDeptContext();
  const setCategory = useSetCategoryContext();
  const {
    id,
    number,
    storyboard,
    script,
    workspace_guide,
    admin,
    scene,
    setScene,
    episodeTitle,
    pro,
    epi,
  } = props;
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(false);
  const [showWorkInfo, setShowWorkInfo] = useState(false);

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/scenes/${id}/edit${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/scenes/${id}/`);
        history.goBack();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/scenes/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.goBack();
      }
    } catch (err) {}
  };

  /* The following 13 functions take the user to that Scenes 
       department and category the choose by setting the 
       useSetCategoryContext, useSetDeptContext, useSetNumberContext,
       and useSetSceneContext 
     * These values will be read in App.js and passed as a filter
       to The /dept/category Route */

  const handleClickCamera = (category) => {
    // return;
    setSceneId(id);
    setNumber(number);
    setDept("camera");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickSound = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("sound");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickLocation = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("location");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickScript = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("script");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickArt = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("art");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickMakeup = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("make-up");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickWardrobe = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("wardrobe");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickCasting = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("casting");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickPost = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("post");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickProduction = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("production");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickStunts = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("stunts");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickElectric = (category) => {
    setSceneId(id);
    setNumber(number);
    setDept("electric");
    setCategory(category);
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickUniversal = () => {
    setSceneId(id);
    setNumber(number);
    setDept("universal");
    setCategory("");
    history.push(
      `/${localStorage.getItem("projectSlug")}/dept/category${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleClickMoods = () => {
    /* Function to open the Scene MoodBoards page
       * Sets the SceneId and Number contexts
         These values will be read in App.js and passed as a filter
         to the /scene/moodshots Route */
    setSceneId(id);
    setNumber(number);
    history.push(
      `/${localStorage.getItem("projectSlug")}/scene/moodshots${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const clickScript = () => {
    /* Function to open the Scene Script page
       * Sets the SceneId context
         This values will be read in App.js and passed as a filter
         to the /script/scene/${id} Route */
    setSceneId(id);
    history.push(
      `/${localStorage.getItem("projectSlug")}/script/scene/${id}${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const clickStory = () => {
    setSceneId(id);
    history.push(
      `/${localStorage.getItem("projectSlug")}/story/scene/${id}${
        epi && pro && episodeTitle
          ? `?episode=${epi}&project=${pro}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  return (
    <div>
      {scene && (
        <>
          <TopBox
            title={`Scene ${number} `}
            episodeTitle={`Episode ${episodeTitle}`}
          />
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
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
          {!showInfo ? "" : <InfoScenePage />}
          <div className={` ${styles.Header}`}>
            <div className="d-none d-md-block">
              <Row className={`${styles.ButtonLine} mt-2 mx-3`}>
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col md={1}>
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => clickScript()}
                      >
                        {" "}
                        Script
                      </p>
                    </Col>
                  )}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col md={2} className="text-center">
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()}
                      >
                        {" "}
                        Moodboards
                      </p>
                    </Col>
                  )}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col md={2} className="text-center">
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowBreak((showBreak) => !showBreak)}
                      >
                        {" "}
                        Breakdown
                      </p>
                    </Col>
                  )}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col md={2} className="text-center">
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() =>
                          setShowCharactersBG(
                            (showCharactersBG) => !showCharactersBG
                          )
                        }
                      >
                        Characters/BG
                      </p>
                    </Col>
                  )}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col className="text-center" md={2}>
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => clickStory()}
                      >
                        {" "}
                        Storyboard
                      </p>
                    </Col>
                  )}
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  currentUser?.groups[0]?.name !== "Cast" && (
                    <Col className="text-center" md={1}>
                      <p
                        className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => setShowlist((showlist) => !showlist)}
                      >
                        Shotlist
                      </p>
                    </Col>
                  )}
                <Col className="text-center" md={1}>
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() =>
                      setShowStoryShot((showStoryShot) => !showStoryShot)
                    }
                  >
                    {" "}
                    Story/Shot
                  </p>
                </Col>
                <Col className="text-center" md={1}>
                  {currentUser &&
                    currentUser?.groups.length > 0 &&
                    currentUser?.groups[0]?.name !== ("Cast" && 'Crew') && (
                      <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    )}
                </Col>
              </Row>
            </div>
            <div className="d-md-none">
              <Row className={`${styles.ButtonLine} mt-2`}>
                <Col xs={2}></Col>
                <Col xs={4} className="text-center">
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() => setShowBreak((showBreak) => !showBreak)}
                  >
                    {" "}
                    Breakdown
                  </p>
                </Col>
                <Col xs={4} className="text-center">
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() => setShowScript((showScript) => !showScript)}
                  >
                    {" "}
                    Script
                  </p>
                </Col>
                <Col className="text-center" xs={2}>
                  <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={1}></Col>
                <Col xs={5} className="text-center">
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() => handleClickMoods()}
                  >
                    {" "}
                    Moodboards
                  </p>
                </Col>
                <Col xs={4} className="text-center">
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() =>
                      setShowCharactersBG(
                        (showCharactersBG) => !showCharactersBG
                      )
                    }
                  >
                    Characters/BG
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center" xs={4}>
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() => setShowstory((showstory) => !showstory)}
                  >
                    {" "}
                    Storyboard
                  </p>
                </Col>
                <Col className="text-center" xs={4}>
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() => setShowlist((showlist) => !showlist)}
                  >
                    Shotlist
                  </p>
                </Col>
                <Col className="text-center" xs={4}>
                  <p
                    className={`py-0 mb-0 ${styles.Button}`}
                    onClick={() =>
                      setShowStoryShot((showStoryShot) => !showStoryShot)
                    }
                  >
                    {" "}
                    Story/Shot
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          {/* Breakdown CharactersBG Script Moodboards 
                  Storyboard Slotlist ShotStory */}
          <div>
            {!showBreak ? (
              ""
            ) : (
              <Breakdown
                id={id}
                scene={scene}
                {...scene}
                setShowBreak={setShowBreak}
                setScene={setScene}
              />
            )}
            {!showCharactersBG ? (
              ""
            ) : (
              <CharactersBG
                id={id}
                setShowCharactersBG={setShowCharactersBG}
                admin={admin}
              />
            )}
            {!showScript ? (
              ""
            ) : (
              <Script
                scene={scene}
                script={script}
                setShowScript={setShowScript}
                setScene={setScene}
              />
            )}
            {!showstory ? (
              ""
            ) : (
              <Storyboard
                storyboard={storyboard}
                setShowstory={setShowstory}
                scene={scene}
                setScene={setScene}
              />
            )}
            {!showlist ? (
              ""
            ) : (
              <ShotlistPage setShowlist={setShowlist} scene={scene} />
            )}
            {!showStoryShot ? (
              ""
            ) : (
              <Row>
                 <Col xs={12} lg={6}>
                  <StoryboardforSList storyboard={storyboard} />
                </Col>
                <Col xs={6}>
                  <ShotlistPage setShowlist={setShowStoryShot} scene={scene} />
                </Col>
              </Row>
            )}
          </div>
          {/* workspace */}
          <h5
            style={{ textTransform: "uppercase" }}
            className={`mt-1 mb-1 pl-3 py-2 ${styles.SubTitle} text-center`}
          >
            SCENE WORKSPACE
          </h5>
          {/* Guide all */}
          <div>
            <Row>
              <Col>
                {currentUser &&
                  currentUser?.groups.length > 0 &&
                  (currentUser?.groups[0]?.name === "Admin" ||
                    currentUser?.groups[0]?.name === "Superadmin" ||
                    currentUser?.groups[0]?.name === "Admincreative") && (
                    <>
                      {workspace_guide ? (
                        <Button
                          className={`px-sm-4 py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
                          onClick={() =>
                            setShowGuideEdit((showGuideEdit) => !showGuideEdit)
                          }
                        >
                          Edit Guide
                        </Button>
                      ) : (
                        <Button
                          className={` py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
                          onClick={() =>
                            setShowGuide((showGuide) => !showGuide)
                          }
                        >
                          Add Guide
                        </Button>
                      )}
                    </>
                  )}
                <Button
                  className={`float-right py-0 mt-1 ${btnStyles.GreyDark} ${btnStyles.Button}`}
                  onClick={() =>
                    setShowWorkInfo((showWorkInfo) => !showWorkInfo)
                  }
                >
                  INSTRUCTIONS
                </Button>
              </Col>
            </Row>
            {!showWorkInfo ? (
              ""
            ) : (
              <InfoWorkspace setShowWorkInfo={setShowWorkInfo} />
            )}
            <Row className="mb-2">
              <Col md={1}></Col>
              <Col className="mx-0 px-0" xs={12} md={10}>
                {!showGuide ? (
                  ""
                ) : (
                  <WorkspaceGuideForm
                    className="my-2"
                    id={id}
                    number={number}
                    setShowGuide={setShowGuide}
                    setScene={setScene}
                  />
                )}
                {!showGuideEdit ? (
                  ""
                ) : (
                  <WorkspaceGuideEdit
                    className="my-2"
                    id={id}
                    number={number}
                    setShowGuideEdit={setShowGuideEdit}
                    setScene={setScene}
                  />
                )}
              </Col>
            </Row>
            {/* guide */}
            <Row>
              <Col sm={{ span: 10, offset: 1 }}>
                <div className={`my-3 pb-0 ${styles.Guide}`}>
                  <p
                    style={{ textTransform: "uppercase" }}
                    className={`pb-0 mb-1 text-center ${styles.GuideTitle}`}
                  >
                    Workspace Guide
                  </p>
                  <div
                    className={`text-center mt-2 px-3 pb-0 ${styles.GuideBox}`}
                  >
                    {workspace_guide}{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* Department Image links Original */}
          {/* Note: Potential changes see trial code below*/}
          <div>
            <Row className={`mt-1`}>
              <Col xs={4}></Col>
              <Col className="px-1 px-md-2" xs={4}>
                <Card
                  className={` ${styles.CardBox}`}
                  onClick={() => handleClickUniversal()}
                >
                  <Card.Img
                    height={100}
                    className={`text-center ${styles.UniImg}`}
                    src={dep8}
                    alt="Card image"
                  />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Universal
                  </Card.Title>
                </Card>
              </Col>
            </Row>
            <Row className="px-2">
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox} px-0`}>
                  <Card.Img src={dep2} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Camera
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickCamera(category)}
                    className={` ${styles.Drop}`}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep3} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Sound
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickSound(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep4} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Location
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickLocation(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep5} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Script
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickScript(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep6} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Art
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickArt(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep7} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Makeup
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickMakeup(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep9} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Wardrobe
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickWardrobe(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep1} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Casting
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickCasting(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep10} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Post
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickPost(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep11} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Production
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickProduction(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep12} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Stunts
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickStunts(category)}
                  />
                </Card>
              </Col>
              <Col className="px-1 px-md-2" xs={4} md={3} lg={2}>
                <Card className={` ${styles.CardBox}`}>
                  <Card.Img src={dep13} alt="Card image" />
                  <Card.Title className={`text-center ${styles.Title}`}>
                    Electric
                  </Card.Title>
                  <DeptDropdown
                    handleClick={(category) => handleClickElectric(category)}
                  />
                </Card>
              </Col>
            </Row>
          </div>
          {/* Department Image links - NEW TRIAL code*/}
          {/* Potential changes to the department images:
                  A/ The categories Finals, Shooting and Info will be removed
                  B/ The actual image when clicked opens the dropdowm menu
                  C/ Or the department images will be changed to have a top half
                    and bottom half both slightly differently shaded by opacity.
                    The top one will say Requirements and the other Workspace both 
                    with links to these Post pages.  */}
          {/* <div>
              <Row className={`mt-1`} >
                  <Col xs={4}  ></Col>
                  <Col className='px-1 px-md-2' xs={4} >
                    <Card className={` ${styles.CardBox}`} onClick={() => handleClickUniversal()}>
                    <Card.Img height={100} className={`text-center ${styles.UniImg}`} src={dep8} alt="Card image" />
                    <Card.Title className={`text-center ${styles.Title}`} >Universal</Card.Title>
                    </Card>
                  </Col>
                  </Row>
                  <Row className='px-2' >
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={ `px-0`} >
                      <Card.Img src={dep2} alt="Card image" className='px-0'/>
                      <Card.ImgOverlay className='px-0 text-center ' >
                      <Card.Title 
                      className={` ${styles.DeptImageBox}  px-0`} >
                        Requirements</Card.Title>
                      <Card.Title 
                      className={` ${styles.DeptImageBox} mt-4 px-0`} >
                        Workspace</Card.Title>
                      </Card.ImgOverlay>
                      <Card.Title className={`text-center ${styles.Title}`} >Camera</Card.Title>
                      <DeptDropdown  handleClick={(category) => handleClickCamera(category) }
                                      className={` ${styles.Drop}`} />
                          
                      </Card> 
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep3} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Sound</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickSound(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep4} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Location</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickLocation(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep5} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Script</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickScript(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep6} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Art</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickArt(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep7} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Makeup</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickMakeup(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep9} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Wardrobe</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickWardrobe(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep1} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Casting</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickCasting(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep10} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Post</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickPost(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep11} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Production</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickProduction(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep12} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Stunts</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickStunts(category) } />
                      </Card>
                    </Col>
                    <Col className='px-1 px-md-2' xs={4} md={3} lg={2} >
                      <Card className={` ${styles.CardBox}`}>
                      <Card.Img src={dep13} alt="Card image" />
                      <Card.Title className={`text-center ${styles.Title}`} >Electric</Card.Title>
                      <DeptDropdown handleClick={(category) => handleClickElectric(category) } />
                      </Card>
                    </Col>
                  </Row>
              </div> */}
        </>
      )}
    </div>
  );
};

export default Scene;
