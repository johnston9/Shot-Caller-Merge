/* Form Page to edit a Post */
import React, { cache, useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useHistory, useParams } from "react-router-dom";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import toast from "react-hot-toast";

function PostEditForm() {
  const host = useHostName();
  const currentUser = useCurrentUser();
  useRedirect();
  const [errors, setErrors] = useState({});
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  const queryParams = new URLSearchParams(window.location.search);
  const episodeNumber = queryParams.get("episodeNumber");
  // const number = params.get("sceneID");

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    scene: "",
    departments: "",
    category: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    episode_id: "",
    number: "",
  });
  const {
    title,
    content,
    scene,
    departments,
    category,
    image1,
    image2,
    image3,
    image4,
    image5,
    number,
    episode_number,
  } = postData;

  const imageInput1 = useRef(null);
  const imageInput2 = useRef(null);
  const imageInput3 = useRef(null);
  const imageInput4 = useRef(null);
  const imageInput5 = useRef(null);

  const [isImage1, setIsImage1] = useState(false);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const [isImage4, setIsImage4] = useState(false);
  const [isImage5, setIsImage5] = useState(false);


  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    /* Function to fetch a post data */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/posts/${id}/`);
          const {
            title,
            content,
            scene,
            departments,
            category,
            image1,
            image2,
            image3,
            image4,
            image5,
            is_owner,
            episode_id,
            number,
            episode_number,
          } = data;

          /* Set postData with the data returned */
          is_owner
            ? setPostData({
              title,
              content,
              scene,
              departments,
              category,
              image1,
              image2,
              image3,
              image4,
              image5,
              episode_id,
              number,
              episode_number,
            })
            : history.push(`/${localStorage.getItem("projectSlug")}/signin`);
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/posts/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const {
            title,
            content,
            scene,
            departments,
            category,
            image1,
            image2,
            image3,
            image4,
            image5,
            is_owner,
            episode_id,
            number,
            episode_number,
          } = data;

          /* Set postData with the data returned */
          if (
            currentUser &&
            currentUser?.groups.length > 0 &&
            (currentUser?.groups[0]?.name === "Admin" ||
              currentUser?.groups[0]?.name === "Superadmin")
          ) {
            setPostData({
              title,
              content,
              scene,
              departments,
              category,
              image1,
              image2,
              image3,
              image4,
              image5,
              episode_id,
              number,
              episode_number,
            });
          } else {
            is_owner
              ? setPostData({
                title,
                content,
                scene,
                departments,
                category,
                image1,
                image2,
                image3,
                image4,
                image5,
                episode_id,
                number,
                episode_number,
              })
              : history.push(`/${localStorage.getItem("projectSlug")}/signin`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const isImageFile = (fileType) => {
    const acceptedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/tiff",
      "image/svg+xml",
    ];
    return acceptedImageTypes.includes(fileType);
  };

  useEffect(() => {
    const dataURLs = [image1, image2, image3, image4, image5];
    const stateSetters = [setIsImage1, setIsImage2, setIsImage3, setIsImage4, setIsImage5];

    dataURLs?.forEach((url, index) => {
      const setState = stateSetters[index];
      if (url) {
        getContentTypeWithGET(url)
          .then((type) => {
            const isImage = isImageFile(type);
            setState(isImage);
            // console.log(`Image ${index + 1}: type = ${type}, isImage = ${isImage}`);
          })
          .catch((err) => {
            // console.error(`Error checking image ${index + 1}:`, err);
            setState(false);
          });
      } else {
        setState(false);
      }
    });
  }, [image1, image2, image3, image4, image5]);



  const getContentTypeWithGET = async (url) => {
    const res = await fetch(url, { method: 'GET', cache: 'no-store' });
    return res.headers.get('Content-Type');
  };

  // const detectFileType = async (url) => {
  //   try {

  //     const response = await fetch(url, { method: "HEAD" });

  //     if (!response.ok) {
  //       console.error("Error fetching file:", response.statusText);
  //       return "unknown";
  //     }

  //     const contentType = response.headers.get("Content-Type");
  //     if (contentType && contentType.startsWith("image/")) {
  //       return "image";
  //     }
  //     if (
  //       contentType &&
  //       (contentType === "application/pdf" ||
  //         contentType.includes("document") ||
  //         contentType === "application/msword" ||
  //         contentType ===
  //           "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
  //     ) {
  //       return "document";
  //     }

  //     return "unknown";
  //   } catch (error) {
  //     console.error("Error detecting file type:", error);
  //     return "unknown";
  //   }
  // };

  // Component to render file based on type
  // const FileRenderer = ({
  //   fileUrl,
  //   altText,
  //   imageClassName,
  //   iframeClassName,
  //   knownFileType = null, // Add this parameter
  // }) => {
  //   const [fileType, setFileType] = useState(knownFileType || "unknown");
  //   const [isLoading, setIsLoading] = useState(!knownFileType);

  //   useEffect(() => {
  //     if (knownFileType) {
  //       setFileType(knownFileType);
  //       setIsLoading(false);
  //       return;
  //     }
  //     const checkFileType = async () => {
  //       setIsLoading(true);
  //       try {
  //         const type = await detectFileType(fileUrl);
  //         setFileType(type);
  //       } catch (error) {
  //         console.error("Error detecting file type:", error);
  //         setFileType("unknown");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     checkFileType();
  //   }, [fileUrl, knownFileType]);

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (
  //     fileType === "image" ||
  //     (knownFileType && knownFileType.startsWith("image/"))
  //   ) {
  //     return (
  //       <div className="px-2 px-md-4 mb-3">
  //         <Card.Img src={fileUrl} alt={altText} className={imageClassName} />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <figure>
  //         <iframe
  //           title={altText}
  //           alt={altText}
  //           className={iframeClassName}
  //           src={fileUrl}
  //         />
  //       </figure>
  //     );
  //   }
  // };
  // const isVideoFile = (fileType) => {
  //   const videoTypes = [
  //     "video/mp4",
  //     "video/mpeg",
  //     "video/quicktime",
  //     "video/webm",
  //     "video/ogg",
  //     "video/x-msvideo",
  //   ];
  //   return videoTypes.includes(fileType);
  // };

  // Modified handleChangeImage1
  // const handleChangeImage1 = (event) => {
  //   if (event.target.files.length) {
  //     const file = event.target.files[0];

  //     if (file.size > 2 * 1024 * 1024) {
  //       toast.error("The file size must not be greater than 2 MB!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (isVideoFile(file.type)) {
  //       toast.error("Video files are not allowed!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (image1) {
  //       URL.revokeObjectURL(image1);
  //     }

  //     const objectUrl = URL.createObjectURL(file);

  //     setPostData({
  //       ...postData,
  //       image1: objectUrl,
  //       fileType1: file.type,
  //     });
  //   }
  // };

  const handleChangeImage1 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image1);
      setPostData({
        ...postData,
        image1: URL.createObjectURL(event.target.files[0]),
      });
      // console.log(`image1 ${image1}`);
    }
  };

  // Modified handleChangeImage2
  // const handleChangeImage2 = (event) => {
  //   if (event.target.files.length) {
  //     const file = event.target.files[0];
  //     if (file.size > 2 * 1024 * 1024) {
  //       toast.error("The file size must not be greater than 2 MB!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (isVideoFile(file.type)) {
  //       toast.error("Video files are not allowed!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (image2) {
  //       URL.revokeObjectURL(image2);
  //     }

  //     const objectUrl = URL.createObjectURL(file);

  //     setPostData({
  //       ...postData,
  //       image2: objectUrl,
  //       fileType2: file.type,
  //     });
  //   }
  // };

  const handleChangeImage2 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image2);
      setPostData({
        ...postData,
        image2: URL.createObjectURL(event.target.files[0]),
      });
      // console.log(`image2 ${image2}`);
    }
  };

  // const handleChangeImage3 = (event) => {
  //   if (event.target.files.length) {
  //     const file = event.target.files[0];

  //     if (file.size > 2 * 1024 * 1024) {
  //       toast.error("The file size must not be greater than 2 MB!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }

  //     if (isVideoFile(file.type)) {
  //       toast.error("Video files are not allowed!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (image3) {
  //       URL.revokeObjectURL(image3);
  //     }
  //     const objectUrl = URL.createObjectURL(file);
  //     setPostData({
  //       ...postData,
  //       image3: objectUrl,
  //       fileType3: file.type,
  //     });
  //   }
  // };

  const handleChangeImage3 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image3);
      setPostData({
        ...postData,
        image3: URL.createObjectURL(event.target.files[0]),
      });
      // console.log(`image3 ${image3}`);
    }
  };

  // const handleChangeImage4 = (event) => {
  //   if (event.target.files.length) {
  //     const file = event.target.files[0];

  //     if (file.size > 2 * 1024 * 1024) {
  //       toast.error("The file size must not be greater than 2 MB!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }

  //     if (isVideoFile(file.type)) {
  //       toast.error("Video files are not allowed!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (image4) {
  //       URL.revokeObjectURL(image4);
  //     }
  //     const objectUrl = URL.createObjectURL(file);

  //     setPostData({
  //       ...postData,
  //       image4: objectUrl,
  //       fileType4: file.type,
  //     });
  //   }
  // };

  const handleChangeImage4 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image4);
      setPostData({
        ...postData,
        image4: URL.createObjectURL(event.target.files[0]),
      });
      // console.log(`image4 ${image4}`);
    }
  };

  // const handleChangeImage5 = (event) => {
  //   if (event.target.files.length) {
  //     const file = event.target.files[0];
  //     if (file.size > 2 * 1024 * 1024) {
  //       toast.error("The file size must not be greater than 2 MB!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }

  //     if (isVideoFile(file.type)) {
  //       toast.error("Video files are not allowed!", {
  //         duration: 2500,
  //         position: "top-right",
  //       });
  //       return;
  //     }
  //     if (image5) {
  //       URL.revokeObjectURL(image5);
  //     }

  //     const objectUrl = URL.createObjectURL(file);

  //     setPostData({
  //       ...postData,
  //       image5: objectUrl,
  //       fileType5: file.type,
  //     });
  //   }
  // };

  const handleChangeImage5 = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image5);
      setPostData({
        ...postData,
        image5: URL.createObjectURL(event.target.files[0]),
      });
      // console.log(`image5 ${image5}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("scene", scene);
    formData.append("departments", departments);
    formData.append("category", category);
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

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const data = await axiosReq.put(`/posts/${id}/`, formData);
        if (data?.success === false) {
          toast.error(data?.error?.response?.data.non_field_errors[0], {
            duration: 3000,
            position: "top-right",
          });
        }
        else {
          toast.success(`Post updated successfully!`, {
            duration: 3000,
            position: "top-right",
          });
          // history.goBack();
          history.push(`/${localStorage.getItem("projectSlug")}/posts/${id}`);
        }
      } else {
        const data =  await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/posts/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        
        if (data?.success === false) {
          toast.error(data?.error?.response?.data.non_field_errors[0], {
            duration: 3000,
            position: "top-right",
          });
        }
        else {
          toast.success(`Post updated successfully!`, {
            duration: 3000,
            position: "top-right",
          });
          history.goBack();
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div>
      <Form.Group controlId="title" className="mb-2">
        <Form.Label className="p-1">Title</Form.Label>
        <Form.Control
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
      <Form.Group controlId="content" className="mb-2">
        <Form.Label className="p-1">Content</Form.Label>
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
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Save
      </Button>
    </div>
  );

  // const isImageFile = (url) => {
  //   return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  // };


  return (
    <div>
      <TopBox
        title="Edit Post"
        scene={number}
        episodeTitle={episode_number && `Episode ${episode_number}`}
      />

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="p-0 p-md-2">
            <Container className={`${appStyles.Content} ${styles.Container}`}>
              {textFields}
            </Container>
            <Container className={`${styles.Container} mt-3`}>
              {buttons}{" "}
            </Container>
          </Col>
          <Col className="py-2 p-0 p-md-2" md={6}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                {image1 ? (
                  <>
                    {/* <FileRenderer
                      fileUrl={image1}
                      altText="image1"
                      imageClassName={appStyles.Image}
                      iframeClassName={styles.iFrame}
                      knownFileType={postData.fileType1}
                    /> */}

                    {isImage1  === true? (
                      <figure>
                        <Image className={appStyles.Image} src={image1} rounded />
                      </figure>
                    ) : (
                      <iframe
                        title="file-preview"
                        // className={appStyles.iframe}
                        width={500}
                        height={300}
                        src={image1}
                      />
                    )}
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the File
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Click or tap to upload a file"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*,application/pdf"
                  // accept="image/*"
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
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image2 ? (
                  <>
                    {/* <figure>
                      {isImageFile(postData.fileType2) ? (
                        <Image
                          className={appStyles.Image}
                          src={image2}
                          rounded
                        />
                      ) : (
                        <iframe
                          title="file-preview"
                          alt="file-preview"
                          // className={appStyles.iframe}
                          width={500}
                          height={300}
                          src={image2}
                        />
                      )}
                    </figure> */}
                    {/* <FileRenderer
                      fileUrl={image2}
                      altText="image2"
                      imageClassName={appStyles.Image}
                      iframeClassName={styles.iFrame}
                      knownFileType={postData.fileType2}
                    /> */}
                    {isImage2 === true? (
                      <figure>
                        <Image className={appStyles.Image} src={image2} rounded />
                      </figure>
                    ) : (
                      <iframe
                        title="file-preview"
                        // className={appStyles.iframe}
                        width={500}
                        height={300}
                        src={image2}
                      />
                    )}

                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload2"
                      >
                        Change the File
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload2"
                  >
                    <Asset
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Click or tap to upload a file"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload2"
                  accept="image/*,application/pdf"
                  // accept="image/*"
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
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image3 ? (
                  <>
                    {/* <figure>
                      {isImageFile(postData.fileType3) ? (
                        <Image
                          className={appStyles.Image}
                          src={image3}
                          rounded
                        />
                      ) : (
                        <iframe
                          title="file-preview"
                          alt="file-preview"
                          // className={appStyles.iframe}
                          width={500}
                          height={300}
                          src={image3}
                        />
                      )}
                    </figure> */}

                    {isImage3  === true? (
                      <figure>
                        <Image className={appStyles.Image} src={image3} rounded />
                      </figure>
                    ) : (
                      <iframe
                        title="file-preview"
                        // className={appStyles.iframe}
                        width={500}
                        height={300}
                        src={image3}
                      />
                    )}

                    {/* <FileRenderer
                      fileUrl={image3}
                      altText="image3"
                      imageClassName={appStyles.Image}
                      iframeClassName={styles.iFrame}
                      knownFileType={postData.fileType3}
                    /> */}

                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the File
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload3"
                  >
                    <Asset
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Click or tap to upload a file"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*,application/pdf"
                  // accept="image/*"
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
            {/* image 4 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image4 ? (
                  <>
                    {/* <figure>
                      {isImageFile(postData.fileType4) ? (
                        <Image
                          className={appStyles.Image}
                          src={image4}
                          rounded
                        />
                      ) : (
                        <iframe
                          title="file-preview"
                          alt="file-preview"
                          // className={appStyles.iframe}
                          width={500}
                          height={300}
                          src={image4}
                        />
                      )}
                    </figure> */}
                    {isImage4  === true ? (
                      <figure>
                        <Image className={appStyles.Image} src={image4} rounded />
                      </figure>
                    ) : (
                      <iframe
                        title="file-preview"
                        // className={appStyles.iframe}
                        width={500}
                        height={300}
                        src={image4}
                      />
                    )}

                    {/* <FileRenderer
                      fileUrl={image4}
                      altText="image4"
                      imageClassName={appStyles.Image}
                      iframeClassName={styles.iFrame}
                      knownFileType={postData.fileType4}
                    /> */}
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the File
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload4"
                  >
                    <Asset
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Click or tap to upload a file"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*,application/pdf"
                  // accept="image/*"
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
            {/* image 5 */}
            <Container
              className={`${appStyles.Content} ${styles.Container2} mt-3 p-0 d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                {image5 ? (
                  <>
                    {/* <figure>
                      {isImageFile(postData.fileType5) ? (
                        <Image
                          className={appStyles.Image}
                          src={image5}
                          rounded
                        />
                      ) : (
                        <iframe
                          title="file-preview"
                          alt="file-preview"
                          // className={appStyles.iframe}
                          width={500}
                          height={300}
                          src={image5}
                        />
                      )}
                    </figure> */}
                    {isImage5 === true? (
                      <figure>
                        <Image className={appStyles.Image} src={image5} rounded />
                      </figure>
                    ) : (
                      <iframe
                        title="file-preview"
                        // className={appStyles.iframe}
                        width={500}
                        height={300}
                        src={image5}
                      />
                    )}

                    {/* <FileRenderer
                      fileUrl={image5}
                      altText="image5"
                      imageClassName={appStyles.Image}
                      iframeClassName={styles.iFrame}
                      knownFileType={postData.fileType5}
                    /> */}
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the File
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload5"
                  >
                    <Asset
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Click or tap to upload a file"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload5"
                  accept="image/*,application/pdf"
                  // accept="image/*"
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
      </Form>
    </div>
  );
}

export default PostEditForm;
