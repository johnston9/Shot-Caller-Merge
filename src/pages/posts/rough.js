/* Form Page to create a Post */
import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import Upload from "../../assets/upload.png";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import Asset2 from "../../components/Asset2";
import useRedirect from "../../hooks/Redirect";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import toast from "react-hot-toast";

function PostCreateForm({ sceneId, number, dept, category, setShow }) {
  useRedirect();
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const queryString = window.location.search;
  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const epi = params.get("episode");
  const pro = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const [postData, setPostData] = useState({
    sceneNumber: number,
    title: "",
    content: "",
    scene: sceneId,
    departments: dept,
    categoryType: category,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const {
    sceneNumber,
    title,
    content,
    scene,
    departments,
    categoryType,
    image1,
    image2,
    image3,
    image4,
    image5,
  } = postData;

  const imageInput1 = useRef(null);
  const imageInput2 = useRef(null);
  const imageInput3 = useRef(null);
  const imageInput4 = useRef(null);
  const imageInput5 = useRef(null);

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      // Check if file size exceeds 2MB (2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error(
          "The file size must not be greater than 2 MB!",
          {
            duration: 2500,
            position: "top-right",
          }
        );
        return;
      }
      // Revoke previous object URL if exists
      if (image1) {
        URL.revokeObjectURL(image1);
      }
      setPostData({
        ...postData,
        image1: URL.createObjectURL(file),
      });
    }
  };

  const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      // Check if file size exceeds 2MB (2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error(
          "The file size must not be greater than 2 MB!",
          {
            duration: 2500,
            position: "top-right",
          }
        );
        return;
      }
      // Revoke previous object URL if exists
      if (image2) {
        URL.revokeObjectURL(image2);
      }
      setPostData({
        ...postData,
        image1: URL.createObjectURL(file),
      });
    }
  };

  const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      // Check if file size exceeds 2MB (2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error(
          "The file size must not be greater than 2 MB!",
          {
            duration: 2500,
            position: "top-right",
          }
        );
        return;
      }
      // Revoke previous object URL if exists
      if (image3) {
        URL.revokeObjectURL(image3);
      }
      setPostData({
        ...postData,
        image1: URL.createObjectURL(file),
      });
    }
  };

  const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      // Check if file size exceeds 2MB (2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error(
          "The file size must not be greater than 2 MB!",
          {
            duration: 2500,
            position: "top-right",
          }
        );
        return;
      }
      // Revoke previous object URL if exists
      if (image4) {
        URL.revokeObjectURL(image4);
      }
      setPostData({
        ...postData,
        image1: URL.createObjectURL(file),
      });
    }
  };

  const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      // Check if file size exceeds 2MB (2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        toast.error(
          "The file size must not be greater than 2 MB!",
          {
            duration: 2500,
            position: "top-right",
          }
        );
        return;
      }
      // Revoke previous object URL if exists
      if (image5) {
        URL.revokeObjectURL(image5);
      }
      setPostData({
        ...postData,
        image1: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPostData({
      ...postData,
    });
    const formData = new FormData();

    formData.append("number", sceneNumber);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("scene", scene);
    formData.append("departments", departments);
    formData.append("category", categoryType);
    if (imageInput1.current.files[0]) {
      formData.append("image1", imageInput1.current.files[0]);
    }
    if (imageInput2.current.files[0]) {
      formData.append("image2", imageInput2.current.files[0]);
    }
    if (imageInput3.current.files[0]) {
      formData.append("image3", imageInput3.current.files[0]);
    }
    if (imageInput4.current.files[0]) {
      formData.append("image4", imageInput4.current.files[0]);
    }
    if (imageInput5.current.files[0]) {
      formData.append("image5", imageInput5.current.files[0]);
    }

    if (epi) {
      formData.append("episode", epi);
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/posts/", formData);
        history.push(
          `/${localStorage.getItem("projectSlug")}/posts/${data.id}`
        );
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/posts/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );

        toast.success(`Post created successfully`, {
          duration: 3000,
          position: "top-right",
        });
        history.goBack();
      }
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <div>
      <Form.Group controlId="title" className={`${styles.Width95} text-center`}>
        <Form.Label className={`${styles.Bold} `}>Title</Form.Label>
        <Form.Control
          type="text"
          className={styles.Input}
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
      <Form.Group
        controlId="content"
        className={`${styles.Width95} text-center`}
      >
        <Form.Label className={`${styles.Bold} `}>Content</Form.Label>
        <Form.Control
          className={styles.InputScene}
          type="text"
          name="content"
          as="textarea"
          rows={6}
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  );
  const buttons = (
    <div className="text-center mt-5">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => setShow((show) => !show)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  return (
    <div className={`${styles.Back} mt-3`}>
      <h5
        style={{ textTransform: "uppercase" }}
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle} text-center`}
      >
        CREATE POST
      </h5>
      {/* <TopBox title="Create Post" /> d-flex flex-column justify-content-center*/}
      <Form className="mt-3 px-3" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="">
            {/* <p style={{textTransform: 'capitalize'}}>Scene {number} - {dept} Dept {category} </p>
        <p>SceneId {sceneId}</p> */}
            {textFields}
          </Col>
          <Col className="mt-md-0 mt-2" md={6}>
            {/* Image 1 */}
            <p className={`${styles.Bold} text-center mb-2`}>Image 1</p>
            <Container className={`${appStyles.Content} ${styles.Container2}`}>
              <Form.Group className="text-center ">
                {image1 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image1} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the Image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label className="my-1" htmlFor="image-upload">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Image/docx"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage1}
                  ref={imageInput1}
                />
              </Form.Group>
              {errors?.image1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Container>
            {/* image 2 */}
            <p className={`${styles.Bold} text-center mt-3 mb-2`}>Image 2</p>
            <Container className={`${appStyles.Content} ${styles.Container2}`}>
              <Form.Group className="text-center ">
                {image2 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image2} rounded />
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
                  <Form.Label className="my-1 " htmlFor="image-upload2">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Image/docx"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload2"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage2}
                  ref={imageInput2}
                />
              </Form.Group>
              {errors?.image2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 2 """" */}
            </Container>
            {/* image 3 */}
            <p className={`${styles.Bold} text-center mt-3 mb-2`}>Image 3</p>
            <Container className={`${appStyles.Content} ${styles.Container2}`}>
              <Form.Group className="text-center ">
                {image3 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image3} rounded />
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
                  <Form.Label
                    className="my-1 ml-2 ml-sm-2 ml-md-3 ml-lg-5"
                    htmlFor="image-upload3"
                  >
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Image/docx"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage3}
                  ref={imageInput3}
                />
              </Form.Group>
              {errors?.image3?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 3 """" */}
            </Container>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="">
            {/* image 4 */}
            <p className={`${styles.Bold} text-center mt-3 mb-2`}>Image 4</p>
            <Container className={`${appStyles.Content} ${styles.Container2}`}>
              <Form.Group className="text-center ">
                {image4 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image4} rounded />
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
                  <Form.Label
                    className="my-1 ml-2 ml-sm-2 ml-md-3 ml-lg-5"
                    htmlFor="image-upload4"
                  >
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Image/docx"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage4}
                  ref={imageInput4}
                />
              </Form.Group>
              {errors?.image4?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 4 """" */}
            </Container>
          </Col>
          <Col md={6} className="">
            <p className={`${styles.Bold} text-center mt-3 mb-2`}>Image 5</p>
            {/* image 5 */}
            <Container className={`${appStyles.Content} ${styles.Container2}`}>
              <Form.Group className="text-center ">
                {image5 ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image5} rounded />
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
                  <Form.Label
                    className="my-1 ml-2 ml-sm-2 ml-md-3 ml-lg-5"
                    htmlFor="image-upload5"
                  >
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload Image/docx"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload5"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage5}
                  ref={imageInput5}
                />
              </Form.Group>
              {errors?.image5?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image 5 """" */}
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={` mt-3`}>{buttons} </div>
          </Col>
        </Row>
      </Form>
      <p className={`mt-3 mb-1 pl-3 py-1 ${styles.SubTitle} text-center`}></p>
    </div>
  );
}

export default PostCreateForm;
