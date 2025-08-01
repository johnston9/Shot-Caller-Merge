/* Form page to edit a DeptPost */
import React, { useEffect, useRef, useState } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Asset from "../../components/Asset"

import Upload from "../../assets/upload.png"
import styles from "../../styles/PostCreateEditForm.module.css"
import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Button.module.css"
import Image from "react-bootstrap/Image"
import Alert from "react-bootstrap/Alert"

import { useHistory } from "react-router-dom"
import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import TopBox from "../../components/TopBox"
import { useRedirect } from "../../hooks/Redirect"
import Asset2 from "../../components/Asset2"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import useHostName from "../../hooks/useHostName"

function DeptPostEdit() {
  useRedirect()
  const host = useHostName()
  const [errors, setErrors] = useState({})
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    departments: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image1Preview: null, // for URL.createObjectURL()
    image2Preview: null,
    image3Preview: null,
    image4Preview: null,
    image5Preview: null,
  })
  const {
    title,
    content,
    departments,
    image1,
    image2,
    image3,
    image4,
    image5,
  } = postData
  const imageInput1 = useRef(null)
  const imageInput2 = useRef(null)
  const imageInput3 = useRef(null)
  const imageInput4 = useRef(null)
  const imageInput5 = useRef(null)

  const history = useHistory()
  const { id } = useParams()

  // useEffect(() => {
  //   const handleMount = async () => {
  //     try {
  //       if (host === CLIENT_PROGRAM_HOSTNAME) {
  //         const { data } = await axiosReq.get(`/department/posts/${id}/`)
  //         const {
  //           title,
  //           content,
  //           departments,
  //           image1,
  //           image2,
  //           image3,
  //           image4,
  //           image5,
  //           is_owner,
  //         } = data

  //         is_owner
  //           ? setPostData({
  //             title,
  //             content,
  //             departments,
  //             image1,
  //             image2,
  //             image3,
  //             image4,
  //             image5,
  //           })
  //           : history.push(`/${localStorage.getItem("projectSlug")}/signin`)
  //       } else {
  //         const { data } = await axiosInstance.get(
  //           `${localStorage.getItem("projectSlug")}/department/posts/${id}/`,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //             },
  //             withCredentials: true,
  //           }
  //         )
  //         const {
  //           title,
  //           content,
  //           departments,
  //           image1,
  //           image2,
  //           image3,
  //           image4,
  //           image5,
  //           is_owner,
  //         } = data

  //         is_owner
  //           ? setPostData({
  //             title,
  //             content,
  //             departments,
  //             image1,
  //             image2,
  //             image3,
  //             image4,
  //             image5,
  //             image1Preview:image1,

  //             image2Preview:image2,
  //             image3Preview:image3,
  //             image4Preview:image4,
  //             image5Preview:image5,


  //           })
  //           : history.push(`/${localStorage.getItem("projectSlug")}/signin`)
  //       }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   handleMount()
  // }, [history, id])

  useEffect(() => {
    const handleMount = async () => {
      try {
        const fetchContentType = async (url) => {
          const response = await fetch(url, { method: "HEAD" });
          return response.headers.get("Content-Type");
        };

        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/department/posts/${id}/`);
          const {
            title,
            content,
            departments,
            image1,
            image2,
            image3,
            image4,
            image5,
            is_owner,
          } = data;

          if (!is_owner) {
            return history.push(`/${localStorage.getItem("projectSlug")}/signin`);
          }

          const [type1 ,type2, type3, type4, type5] = await Promise.all([
            image1 ? fetchContentType(image1) : null,
            image2 ? fetchContentType(image2) : null,
            image3 ? fetchContentType(image3) : null,
            image4 ? fetchContentType(image4) : null,
            image5 ? fetchContentType(image5) : null,
          ]);

          setPostData({
            title,
            content,
            departments,
            image1,
            image2,
            image3,
            image4,
            image5,
            image1Preview: image1,
            image2Preview: image2,
            image3Preview: image3,
            image4Preview: image4,
            image5Preview: image5,
            image1Type: type1,
            image2Type: type2,
            image3Type: type3,
            image4Type: type4,
            image5Type: type5,
          });
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/department/posts/${id}/`,
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
            departments,
            image1,
            image2,
            image3,
            image4,
            image5,
            is_owner,
          } = data;

          if (!is_owner) {
            return history.push(`/${localStorage.getItem("projectSlug")}/signin`);
          }

          const [type1 , type2, type3, type4, type5] = await Promise.all([
            image1 ? fetchContentType(image1) : null,
            image2 ? fetchContentType(image2) : null,
            image3 ? fetchContentType(image3) : null,
            image4 ? fetchContentType(image4) : null,
            image5 ? fetchContentType(image5) : null,
          ]);

          setPostData({
            title,
            content,
            departments,
            image1,
            image2,
            image3,
            image4,
            image5,
            image1Preview: image1,
            image2Preview: image2,
            image3Preview: image3,
            image4Preview: image4,
            image5Preview: image5,
            image1Type: type1,
            image2Type: type2,
            image3Type: type3,
            image4Type: type4,
            image5Type: type5,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    handleMount();
  }, [history, id]);


  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  // const handleChangeImage1 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image1)
  //     setPostData({
  //       ...postData,
  //       image1: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image1 ${image1}`)
  //   }
  // }

  // const handleChangeImage2 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image2)
  //     setPostData({
  //       ...postData,
  //       image2: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image2 ${image2}`)
  //   }
  // }

  // const handleChangeImage3 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image3)
  //     setPostData({
  //       ...postData,
  //       image3: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image3 ${image3}`)
  //   }
  // }

  // const handleChangeImage4 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image4)
  //     setPostData({
  //       ...postData,
  //       image4: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image4 ${image4}`)
  //   }
  // }

  // const handleChangeImage5 = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image5)
  //     setPostData({
  //       ...postData,
  //       image5: URL.createObjectURL(event.target.files[0]),
  //     })
  //     console.log(`image5 ${image5}`)
  //   }
  // }

  const handleChangeImage1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image1Preview) {
        URL.revokeObjectURL(postData.image1Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image1: file,
        image1Preview: previewUrl,
        image1Type: file.type,
      }));
    }
  };

  const handleChangeImage2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image2Preview) {
        URL.revokeObjectURL(postData.image2Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image2: file,
        image2Preview: previewUrl,
        image2Type: file.type,
      }));
    }
  };
  const handleChangeImage3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image3Preview) {
        URL.revokeObjectURL(postData.image3Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image3: file,
        image3Preview: previewUrl,
        image3Type: file.type,
      }));
    }
  };
  const handleChangeImage4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image4Preview) {
        URL.revokeObjectURL(postData.image4Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image4: file,
        image4Preview: previewUrl,
        image4Type: file.type,
      }));
    }
  };

  const handleChangeImage5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.image5Preview) {
        URL.revokeObjectURL(postData.image5Preview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image5: file,
        image5Preview: previewUrl,
        image5Type: file.type,
      }));
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("title", title)
    formData.append("content", content)
    formData.append("departments", departments)
    if (imageInput1.current.files[0]) {
      formData.append("image1", imageInput1.current.files[0])
    }
    if (imageInput2.current.files[0]) {
      formData.append("image2", imageInput2.current.files[0])
    }
    if (imageInput3.current.files[0]) {
      formData.append("image3", imageInput3.current.files[0])
    }
    if (imageInput4.current.files[0]) {
      formData.append("image4", imageInput4.current.files[0])
    }
    if (imageInput5.current.files[0]) {
      formData.append("image5", imageInput5.current.files[0])
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.put(`/department/posts/${id}`, formData)
        history.push(
          `/${localStorage.getItem("projectSlug")}/department/posts/${id}`
        )
      } else {
        await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/department/posts/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        )
        history.push(
          `/${localStorage.getItem("projectSlug")}/department/posts/${id}`
        )
      }
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const textFields = (
    <div>
      <Form.Group controlId="departments" className="mb-2">
        <Form.Label className="p-1">Departments</Form.Label>
        <Form.Control
          as="select"
          name="departments"
          value={departments}
          onChange={handleChange}
          aria-label="act select"
        >
          <option>Select</option>
          <option value="art">Art</option>
          <option value="camera">Camera</option>
          <option value="casting">Casting</option>
          <option value="electric">Electric/Grip</option>
          <option value="location">Location</option>
          <option value="make-up">Hair/Make-up</option>
          <option value="post">Post/VSF</option>
          <option value="production">Production</option>
          <option value="script">Script</option>
          <option value="sound">Sound</option>
          <option value="stunts">Stunts</option>
          <option value="wardrobe">Wardrobe</option>
        </Form.Control>
      </Form.Group>
      {errors?.departments?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
          className={styles.Input}
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
  )
  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Update
      </Button>
    </div>
  )

  return (
    <div>
      <TopBox title="Departments Edit Post" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="p-0 p-md-2">
            <Container className={`${appStyles.Content} ${styles.Container}`}>
              {textFields}
            </Container>
          </Col>
          <Col className="pt-2 p-0 p-md-2" md={6}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              {/* <Form.Group className="text-center pt-3">
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
                        Change the image
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
                      message="Click or tap to upload an image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage1}
                  ref={imageInput1}
                />
              </Form.Group> */}
              {/* <Form.Group className="text-center pt-3">

                {postData.image1Preview ? (
                  postData.image1?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image1Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image1Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload1"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}


                <Form.Control
                  type="file"
                  id="image-upload1"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage1}
                  ref={imageInput1}
                />
              </Form.Group> */}
              <Form.Group>
                {postData.image1Preview ? (
                  postData.image1Type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image1Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image1Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload1"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload1"
                  >
                    <Asset src={Upload} message="Upload Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload1"
                  accept="image/*,.pdf"
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
              {/* <Form.Group>
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
                  <Form.Label className="my-1" htmlFor="image-upload2">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload second image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload2"
                  accept="image/*"
                  onChange={handleChangeImage2}
                  ref={imageInput2}
                />
              </Form.Group> */}

              <Form.Group>
                {postData.image2Preview ? (
                  postData.image2Type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image2Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload2"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image2Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload2"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload2"
                  >
                    <Asset src={Upload} message="Upload Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload2"
                  accept="image/*,.pdf"
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
              {/* <Form.Group>
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
                  <Form.Label className=" my-1" htmlFor="image-upload3">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload third image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*"
                  onChange={handleChangeImage3}
                  ref={imageInput3}
                />
              </Form.Group> */}

              {/* <Form.Group>
                {postData.image3Preview ? (
                  postData.image3?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image3Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image3Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload3"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*"
                  onChange={handleChangeImage3}
                  ref={imageInput3}
                />
              </Form.Group> */}

              <Form.Group>
                {postData.image3Preview ? (
                  postData.image3Type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image3Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image3Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload3"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload3"
                  >
                    <Asset src={Upload} message="Upload Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload3"
                  accept="image/*,.pdf"
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
              {/* <Form.Group>
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
                  <Form.Label className=" my-1" htmlFor="image-upload4">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload fourth image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*"
                  onChange={handleChangeImage4}
                  ref={imageInput4}
                />
              </Form.Group> */}
              {/* <Form.Group>
                {postData.image4Preview ? (
                  postData.image4?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image4Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image4Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload4"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage4}
                  ref={imageInput4}
                />
              </Form.Group> */}

              <Form.Group>
                {postData.image4Preview ? (
                  postData.image4Type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image4Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image4Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload4"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload4"
                  >
                    <Asset src={Upload} message="Upload Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload4"
                  accept="image/*,.pdf"
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
              {/* <Form.Group>
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
                  <Form.Label className=" my-1" htmlFor="image-upload5">
                    <Asset2
                      src={Upload}
                      height={"20px"}
                      width={"20px"}
                      message="Upload last image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload5"
                  accept="image/*"
                  onChange={handleChangeImage5}
                  ref={imageInput5}
                />
              </Form.Group> */}
              {/* <Form.Group>
                {postData.image5Preview ? (
                  postData.image5?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image5Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image5Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload5"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload5"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage5}
                  ref={imageInput5}
                />
              </Form.Group> */}

              <Form.Group>
                {postData.image5Preview ? (
                  postData.image5Type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.image5Preview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.image5Preview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload5"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload5"
                  >
                    <Asset src={Upload} message="Upload Image or PDF" />
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
            <Container className={`${styles.Container} mt-3`}>
              {buttons}{" "}
            </Container>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default DeptPostEdit
