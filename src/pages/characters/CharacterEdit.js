/* Form Page to edit a Character */
import React, { useRef, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import ImportantEdit from "./ImportantEdit";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import toast from "react-hot-toast";

const CharacterEdit = () => {
  useRedirect();
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const [showImp, setShowImp] = useState(false);

  const [postData, setPostData] = useState({
    number: "",
    role: "",
    username: "",
    actor: "",
    pickup_address: "",
    pickup_address_2: "",
    make_up_time: "",
    commute_time: "",
    email: "",
    mobile: "",
    agent: "",
    diet: "",
    requirements: "",
    costume1: "",
    costume2: "",
    costume3: "",
    costume4: "",
    costume5: "",
    costume6: "",
    costume7: "",
    makeup: "",
    costume1_image: "",
    costume2_image: "",
    costume3_image: "",
    costume4_image: "",
    costume5_image: "",
    costume6_image: "",
    costume7_image: "",
    makeup_image: "",
  });

  const {
    number,
    role,
    username,
    actor,
    pickup_address,
    pickup_address_2,
    make_up_time,
    commute_time,
    email,
    mobile,
    agent,
    diet,
    requirements,
    costume1,
    costume2,
    costume3,
    costume4,
    costume5,
    costume6,
    costume7,
    makeup,
    costume1_image,
    costume2_image,
    costume3_image,
    costume4_image,
    costume5_image,
    costume6_image,
    costume7_image,
    makeup_image,
  } = postData;

  const imageInput1 = useRef(null);
  const imageInput2 = useRef(null);
  const imageInput3 = useRef(null);
  const imageInput4 = useRef(null);
  const imageInput5 = useRef(null);
  const imageInput6 = useRef(null);
  const imageInput7 = useRef(null);
  const imageInput8 = useRef(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    /* Function to fetch the Character data */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/characters/${id}/`);
          const {
            number,
            role,
            actor,
            username,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image,
          } = data;

          setPostData({
            number,
            role,
            username,
            actor,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image,
          });
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/characters/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const {
            number,
            role,
            actor,
            username,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image,
          } = data;

          setPostData({
            number,
            role,
            username,
            actor,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount()
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // If the input field is "shot_number", validate it
    if (name === "number" && !/^\d*$/.test(value)) {
      toast.error("A valid number is required", {
        duration: 2500,
        position: "top-right",
      });
      return;
    }
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume1_image);
      setPostData({
        ...postData,
        costume1_image: URL.createObjectURL(event.target.files[0]),
      });
      console.log(`costume1_image ${costume1_image}`);
    }
  };

  const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume2_image);
      setPostData({
        ...postData,
        costume2_image: URL.createObjectURL(event.target.files[0]),
      });
      console.log(`costume2_image ${costume2_image}`);
    }
  };

  const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume3_image);
      setPostData({
        ...postData,
        costume3_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume4_image);
      setPostData({
        ...postData,
        costume4_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume5_image);
      setPostData({
        ...postData,
        costume5_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeImage6 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume6_image);
      setPostData({
        ...postData,
        costume6_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeImage7 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(costume7_image);
      setPostData({
        ...postData,
        costume7_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeImage8 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(makeup_image);
      setPostData({
        ...postData,
        makeup_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate shot_number
    if (!number || !/^\d+$/.test(number)) {
      toast.error("A valid integer is required in Number", {
        duration: 2500,
        position: "top-right",
      });
      return;
    }
    const formData = new FormData();

    formData.append("role", role);
    formData.append("number", number);
    formData.append("actor", actor);
    formData.append("pickup_address", pickup_address);
    formData.append("pickup_address_2", pickup_address_2);
    formData.append("make_up_time", make_up_time);
    formData.append("commute_time", commute_time);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("agent", agent);
    formData.append("diet", diet);
    formData.append("requirements", requirements);
    formData.append("costume1", costume1);
    formData.append("costume2", costume2);
    formData.append("costume3", costume3);
    formData.append("costume4", costume4);
    formData.append("costume5", costume5);
    formData.append("costume6", costume6);
    formData.append("costume7", costume7);
    formData.append("makeup", makeup);
    if (imageInput1.current.files[0]) {
      formData.append("costume1_image", imageInput1.current.files[0]);
    }
    if (imageInput2.current.files[0]) {
      formData.append("costume2_image", imageInput2.current.files[0]);
    }
    if (imageInput3.current.files[0]) {
      formData.append("costume3_image", imageInput3.current.files[0]);
    }
    if (imageInput4.current.files[0]) {
      formData.append("costume4_image", imageInput4.current.files[0]);
    }
    if (imageInput5.current.files[0]) {
      formData.append("costume5_image", imageInput5.current.files[0]);
    }
    if (imageInput6.current.files[0]) {
      formData.append("costume6_image", imageInput6.current.files[0]);
    }
    if (imageInput7.current.files[0]) {
      formData.append("costume7_image", imageInput7.current.files[0]);
    }
    if (imageInput8.current.files[0]) {
      formData.append("makeup_image", imageInput8.current.files[0]);
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.put(`/characters/${id}/`, formData);
        history.push(
          `/${localStorage.getItem("projectSlug")}/characters/${id}/`
        );
      } else {
        await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/characters/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.push(
          `/${localStorage.getItem("projectSlug")}/characters/${id}/`
        );
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 ml-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );
  return (
    <div>
      <TopBox title={`${role} Edit`} />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowImp((showImp) => !showImp)}
      >
        IMPORTANT
      </Button>
      {/* <p>{unusedNumbers}</p>  
            {usedNumbers} */}
      <div>{!showImp ? "" : <ImportantEdit />}</div>
      <Container className={`mt-3 ${appStyles.Content} ${styles.Container}`}>
        <Form className="mt-0" onSubmit={handleSubmit}>
          <h5
            className={`text-center mt-0 mb-4 pl-3 py-1 mx-3 ${styles.SubTitle}`}
            style={{ textTransform: "uppercase" }}
          >
            Character Info
          </h5>
          <Row>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="role"
                className={`${styles.Width} text-center`}
              >
                <Form.Label className={`${styles.Bold} `}>Role</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="role"
                  value={role}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.role?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="number"
                className={`${styles.Width} text-center`}
              >
                <Form.Label className={`${styles.Bold} `}>Number</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.role?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          {/* actor details */}
          <h5
            className={`text-center mx-3 mt-5 mb-3 pl-3 mb-0 py-1 ${styles.SubTitle}`}
            style={{ textTransform: "uppercase" }}
          >
            Actor Info
          </h5>
          <Row>
            <Col className="text-center mt-2 mb-3">
              <div>
                <span className={`py-1 px-3 ${styles.SubTitle3} `}>
                  USERNAME: {username}
                </span>
              </div>
            </Col>
          </Row>
          <Row className="text-center mb-3">
            <Col className="d-flex justify-content-center" xs={6}>
              <Form.Group
                controlId="actor"
                className={`${styles.Width} text-center`}
              >
                <Form.Label className={styles.Bold}>Actor</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.Input}
                  name="actor"
                  value={actor}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.actor?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="mobile"
                className={`${styles.Width} text-center`}
              >
                <Form.Label className={styles.Bold}>Mobile</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.mobile?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="email"
                className={`${styles.Width2} text-center`}
              >
                <Form.Label className={styles.Bold}>Email</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="agent"
                className={`${styles.Width} text-center`}
              >
                <Form.Label className={styles.Bold}>Agent</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="agent"
                  value={agent}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.agent?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          {/* Requirements */}
          <Row className="text-center">
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="requirements"
                className={`${styles.Width2} text-center`}
              >
                <Form.Label className={styles.Bold}>Requirements</Form.Label>
                <Form.Control
                  className={styles.InputScene}
                  type="text"
                  name="requirements"
                  as="textarea"
                  rows={2}
                  value={requirements}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.requirements?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="diet"
                className={`${styles.Width2} text-center`}
              >
                <Form.Label className={styles.Bold}>Diet</Form.Label>
                <Form.Control
                  className={styles.InputScene}
                  type="text"
                  name="diet"
                  as="textarea"
                  rows={2}
                  value={diet}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.diet?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <h5
            className={`text-center mt-5 mb-4 pl-3 py-1 mx-3 ${styles.SubTitle}`}
            style={{ textTransform: "uppercase" }}
          >
            Callsheet Info
          </h5>
          {/* times agent */}
          <Row className="text-center">
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="make_up_time"
                className={`${styles.Width}`}
              >
                <Form.Label className={styles.Bold}>Makeup Time</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="make_up_time"
                  value={make_up_time}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.make_up_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="commute_time"
                className={`${styles.Width}`}
              >
                <Form.Label className={styles.Bold}>Commute Time</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  name="commute_time"
                  value={commute_time}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.commute_time?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          {/* pickups */}
          <Row className="text-center">
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="pickup_address"
                className={`${styles.Width2}`}
              >
                <Form.Label className={styles.Bold}>Pickup Address</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.InputScene}
                  as="textarea"
                  rows={2}
                  name="pickup_address"
                  value={pickup_address}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.pickup_address?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Form.Group
                controlId="pickup_address_2"
                className={`${styles.Width2}`}
              >
                <Form.Label className={styles.Bold}>
                  Pickup Address 2
                </Form.Label>
                <Form.Control
                  type="text"
                  className={styles.InputScene}
                  as="textarea"
                  name="pickup_address_2"
                  rows={2}
                  value={pickup_address_2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.pickup_address_2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <h5
            className={`text-center mt-5 mb-4 pl-3 py-1 mx-3 ${styles.SubTitle}`}
            style={{ textTransform: "uppercase" }}
          >
            Makeup / Costumes
          </h5>
          {/* makeup/costume 1 mx-1 mx-sm-5 */}
          <Row className="mb-3 text-center">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                MAKEUP
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="makeup" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="makeup"
                    as="textarea"
                    rows={2}
                    value={makeup}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.makeup?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 8 is  makeup image*/}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {makeup_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={makeup_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload8"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload8">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload8"
                    accept="image/*"
                    onChange={handleChangeImage8}
                    ref={imageInput8}
                  />
                </Form.Group>
                {errors?.makeup_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 8 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 1
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume1" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume1"
                    as="textarea"
                    rows={2}
                    value={costume1}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume1?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image1 */}
              <Container
                className={`${appStyles.Content} d-flex flex-column justify-content-center`}
              >
                <Form.Group className="text-center pt-3">
                  {costume1_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume1_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage1}
                    ref={imageInput1}
                  />
                </Form.Group>
                {errors?.costume1_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </Container>
            </Col>
          </Row>
          {/* costume 2/3 */}
          <Row className="text-center mt-4 mb-3">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 2
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume2" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume2"
                    as="textarea"
                    rows={2}
                    value={costume2}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume2?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 2 */}
              <Container
                className={`${appStyles.Content} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume2_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume2_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload2"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className="my-1" htmlFor="image-upload2">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload2"
                    accept="image/*"
                    onChange={handleChangeImage2}
                    ref={imageInput2}
                  />
                </Form.Group>
                {errors?.costume2_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 2 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 3
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume3" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume3"
                    as="textarea"
                    rows={2}
                    value={costume3}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume3?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 3 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume3_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume3_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload3"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload3">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload3"
                    accept="image/*"
                    onChange={handleChangeImage3}
                    ref={imageInput3}
                  />
                </Form.Group>
                {errors?.costume3_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 3 """" */}
              </Container>
            </Col>
          </Row>
          {/* costume 4/5  */}
          <Row className="mb-3 mt-4 text-center">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 4
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume4" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume4"
                    as="textarea"
                    rows={2}
                    value={costume4}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume4?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 4 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume4_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume4_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload4"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload4">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload4"
                    accept="image/*"
                    onChange={handleChangeImage4}
                    ref={imageInput4}
                  />
                </Form.Group>
                {errors?.costume4_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 4 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 5
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume5" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume5"
                    as="textarea"
                    rows={2}
                    value={costume5}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume5?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 5 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume5_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume5_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload5"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload5">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload5"
                    accept="image/*"
                    onChange={handleChangeImage5}
                    ref={imageInput5}
                  />
                </Form.Group>
                {errors?.costume5_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 5 """" */}
              </Container>
            </Col>
          </Row>
          {/* costume 6/7  */}
          <Row className="text-center mb-3">
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 6
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume6" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume6"
                    as="textarea"
                    rows={2}
                    value={costume6}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume6?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 6 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume6_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume6_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload6"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload6">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload6"
                    accept="image/*"
                    onChange={handleChangeImage6}
                    ref={imageInput6}
                  />
                </Form.Group>
                {errors?.costume6_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 6 """" */}
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <p
                className={`${styles.BoldTitle} 
                  mb-0 text-center mx-3`}
              >
                COSTUME 7
              </p>
              <div className="d-flex justify-content-center">
                <Form.Group controlId="costume7" className={`${styles.Width2}`}>
                  <Form.Label className={styles.Bold}></Form.Label>
                  <Form.Control
                    className={styles.InputScene}
                    type="text"
                    name="costume7"
                    as="textarea"
                    rows={2}
                    value={costume7}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors?.costume7?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </div>
              {/* image 7 */}
              <Container
                className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
              >
                <Form.Group>
                  {costume7_image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={costume7_image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload7"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className=" my-1" htmlFor="image-upload7">
                      <Asset src={Upload} message="Upload Image" />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload7"
                    accept="image/*"
                    onChange={handleChangeImage7}
                    ref={imageInput7}
                  />
                </Form.Group>
                {errors?.costume7_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                {/* """ end image 7 """" */}
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className={`${styles.Container} mt-3`}>
                {buttons}{" "}
              </Container>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CharacterEdit;
