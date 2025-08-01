import React, { useEffect, useState } from "react";
import TopBox from "../../components/TopBox";
import useRedirect from "../../hooks/Redirect";
import useHostName from "../../hooks/useHostName";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import r1 from "../../assets/r1.png";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Card } from "react-bootstrap";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";

import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import InfoCreate from "./info/InfoCreate";
import ImportCreate from "../scenes/info/ImportCreate";
import toast from "react-hot-toast";
import { SeriesEditDropdown } from "./SeriesEditDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

export default function SeriesCreateForm({ topbox }) {
  const host = useHostName();
  useRedirect();
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [series, setSeries] = useState([]);

  const [postData, setPostData] = useState({
    title: "",
  });

  const { title } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();

    // formData.append("title", title);
    const body = {
      title,
    };

    try {
      const { data } = await axiosInstance.post(
        `${localStorage.getItem("projectSlug")}/scene_series/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      fetchSeries();
      setPostData({ ...postData, title: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create series. Try again");
    }
  };

  const buttons = (
    <div className={`text-center pt-3 mb-3 pb-2 ${styles.White}`}>
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      {currentUser?.groups[0]?.name !== "Crew" && (
        <Button
          className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
          type="submit"
        >
          Create
        </Button>
      )}
    </div>
  );

  const fetchSeries = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${localStorage.getItem("projectSlug")}/scene_series/`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      setSeries(data.results);
    } catch (error) {
      console.log("fetch series error: ", error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div>
      {topbox ? "" : <TopBox title="Create Series" />}
      <Row>
        {/* back bit */}
        <Col xs={4}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Col>
        {/* imp but */}
        <Col xs={4} className="text-center">
          <Button
            className={`py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={() => setShowImp((showImp) => !showImp)}
          >
            IMPORTANT
          </Button>
        </Col>
        {/* info but */}
        <Col className="float-right" xs={4}>
          <Button
            className={`float-right py-0 my-2 ${btnStyles.Blue} ${btnStyles.Button}`}
            onClick={() => setShowInfo((showInfo) => !showInfo)}
          >
            INFO
          </Button>
        </Col>
      </Row>
      {/* showInfo */}
      <Row>
        <Col>{!showInfo ? "" : <InfoCreate />}</Col>
      </Row>
      {/* showImp */}
      <Row>
        <Col>{!showImp ? "" : <ImportCreate />}</Col>
      </Row>
      <h3 className="text-center">Create Series</h3>
      <Form className={`mb-3 ${styles.Back}`} onSubmit={handleSubmit}>
        <Row className="text-center">
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            xs={{ span: 4, offset: 4 }}
          >
            <Form.Group controlId="title" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Title</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div className={`mt-3 ${styles.Container}`}>{buttons}</div>
          </Col>
        </Row>
      </Form>

      <Row style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {series?.length <= 0 ? (
          <div>No series available.</div>
        ) : (
          <>
            {series?.map((series, index) => (
              <div key={series?.id}>
                <Card
                  style={{
                    paddingBottom: "1rem",
                    width: "150px",
                    height: "100px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundImage:
                      index % 3 === 0
                        ? `url(${r1})`
                        : index % 2 === 0
                        ? `url(${r1})`
                        : `url(${r1})`,
                    objectFit: "fill",
                    // width: "auto",
                    repeat: "no-repeat",
                  }}
                  onClick={() =>
                    history.push(
                      `/${localStorage.getItem("projectSlug")}/series/${
                        series?.id
                      }/episodes/create`
                    )
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      padding: "0 1rem 1rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <div></div>
                      {currentUser?.groups[0]?.name !== "Crew" && (
                        <SeriesEditDropdown id={series?.id} />
                      )}
                    </div>
                    <div>{series?.title}</div>
                  </div>
                </Card>
              </div>
            ))}
          </>
        )}
      </Row>
    </div>
  );
}
