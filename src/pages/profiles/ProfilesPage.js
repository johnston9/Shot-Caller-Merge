/* Page to fetch all Profiles data and render the cover info 
 * Contains the Profile component to which it passes the data 
   for each profile cover */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useRedirect } from "../../hooks/Redirect";
import TopBox from "../../components/TopBox";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import Profile from "./Profile";
import {
  useProfileData,
  useSetQueryContext,
} from "../../contexts/ProfileDataContext";
// import Info from "./Info";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";

const ProfilesPage = () => {
  useRedirect();
  const history = useHistory();

  // get all profiles
  const { profiles } = useProfileData();
  // const [showInfo, setShowInfo] = useState(false);
  const setQuery = useSetQueryContext();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const querySet = () => {
      setQuery(name);
    };
    const timer = setTimeout(() => {
      querySet();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div>
      <TopBox title="Profiles" />
      <Button
        onClick={() => history.goBack()}
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      >
        Back
      </Button>
      {/* <Button
        className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowInfo((showInfo) => !showInfo)}
      >
        INFO
      </Button>
      {!showInfo ? "" : <Info />} */}
      {/* feed */}
      {/* <Row>
        <Col className="text-center">
          <Button
            onClick={() =>
              history.push(
                `/${localStorage.getItem("projectSlug")}/Profilefeed`
              )
            }
            className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
          >
            Feed
          </Button>
        </Col>
      </Row> */}
      {/* form */}
      <Row>
        <Col className="text-center" xs={12} md={{ span: 6, offset: 3 }}>
          <Form
            className={`${styles.SearchBar} mt-3`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={name}
              onChange={(event) => handleChange(event)}
              type="text"
              className="mr-sm-2"
              placeholder="Search by name or position"
            />
          </Form>
        </Col>
      </Row>
      <div className={`mt-3 mx-3`}>
        {/* {hasLoaded ? ( 
                    <> */}
        <Row>
          {profiles?.results?.length ? (
            <>
              {profiles?.results?.map((profile) => (
                <Col
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className="px-2 py-2 p-0 p-lg-2"
                >
                  <Profile key={profile.id} profile={profile} />
                </Col>
              ))}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset src={NoResults} message={"No Results"} />
            </Container>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ProfilesPage;
