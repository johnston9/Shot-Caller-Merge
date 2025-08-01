import React, { useEffect, useState } from "react";
import TopBox from "../../components/TopBox";
import useRedirect from "../../hooks/Redirect";
import useHostName from "../../hooks/useHostName";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Card } from "react-bootstrap";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";

import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import InfoCreate from "./info/InfoCreate";
import ImportCreate from "../scenes/info/ImportCreate";
import toast from "react-hot-toast";

export default function SeriesEditForm({ topbox }) {
  const host = useHostName();
  useRedirect();
  const history = useHistory();
  const params = useParams();
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [series, setSeries] = useState(null);

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
      //   description: "",
    };

    // return console.log([...formData]);
    try {
      const { data } = await axiosInstance.put(
        `${localStorage.getItem("projectSlug")}/scene_series/${
          params?.seriesId
        }/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      console.log(data);
      history.push(`/${localStorage.getItem("projectSlug")}/series/create`);
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
      <Button
        className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Edit
      </Button>
    </div>
  );

  const fetchSeries = async (seriesId) => {
    try {
      const { data } = await axiosInstance.get(
        `${localStorage.getItem("projectSlug")}/scene_series/${seriesId}/`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      setPostData((prev) => ({ ...prev, title: data?.title }));
    } catch (error) {
      console.log("fetch series error: ", error);
    }
  };

  useEffect(() => {
    if (params?.seriesId) {
      fetchSeries(params?.seriesId);
    } else {
      return;
    }
  }, [params]);

  return (
    <div>
      {topbox ? "" : <TopBox title="Edit Series" />}
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
      <h3 className="text-center">Edit Series</h3>
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
    </div>
  );
}
