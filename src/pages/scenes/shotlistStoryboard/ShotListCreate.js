/* Form component in the ShotlistPage component to create a Shot */
import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/PostCreateEditForm.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { toast } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import Asset2 from "../../../components/Asset2";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import Asset from "../../../components/Asset";

const ShotListCreate = ({ setAddShot, scene, setShotlist }) => {
  const host = useHostName();
  const { id } = useParams();
  const { number } = scene;
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    scene_number: number,
    shot_number: "",
    size: "",
    angle: "",
    movement: "",
    screen_time: "",
    camera: "",
    lens: "",
    script_length: "",
    description: "",
    equipment: "",
    script_ref: "",
    storyboard_refs: "",
    fx: "",
    focus_pulls: "",
    lighting: "",
    audio: "",
    image: "",
    imagePreview: null,
    framing: "",
    actors: "",
    location: "",
    day_night: "",
    int_ext: "",
    frame_rate: "",
    notes: "",
  });

  const {
    scene_number,
    shot_number,
    size,
    angle,
    movement,
    camera,
    lens,
    script_ref,
    storyboard_refs,
    description,
    equipment,
    fx,
    focus_pulls,
    lighting,
    audio,
    image,
    actors,
    framing,
    location,
    day_night,
    int_ext,
    frame_rate,
    notes,
  } = postData;

  const imageInput = useRef(null);

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    // If the input field is "shot_number", validate it
    if (name === "shot_number" && !/^\d*$/.test(value)) {
      toast.error("Only integer numbers are allowed", {
        duration: 2500,
        position: "top-right",
      });
      return;
    }

    // Update state normally for all fields
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleChangeImage = (event) => {
  //   if (event.target.files.length) {
  //     URL.revokeObjectURL(image);
  //     setPostData({
  //       ...postData,
  //       image: URL.createObjectURL(event.target.files[0]),
  //     });
  //   }
  // };
  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (postData.imagePreview) {
        URL.revokeObjectURL(postData.imagePreview);
      }
      const previewUrl = URL.createObjectURL(file);
      setPostData((prev) => ({
        ...prev,
        image: file,
        imagePreview: previewUrl,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate shot_number
    if (!shot_number || !/^\d+$/.test(shot_number)) {
      toast.error("A valid integer is required in Number", {
        duration: 2500,
        position: "top-right",
      });
      return;
    }

    const formData = new FormData();

    // Append all form data
    formData.append("scene_id", id);
    formData.append("scene_number", scene_number);
    formData.append("shot_number", shot_number);
    formData.append("size", size);
    formData.append("description", description);
    formData.append("angle", angle);
    formData.append("equipment", equipment);
    formData.append("movement", movement);
    formData.append("fx", fx);
    formData.append("focus_pulls", focus_pulls);
    formData.append("lighting", lighting);
    formData.append("camera", camera);
    formData.append("lens", lens);
    formData.append("notes", notes);
    formData.append("int-ext", int_ext);
    formData.append("frame_rate", frame_rate);
    formData.append("framing", framing);
    formData.append("location", location);
    formData.append("script_ref", script_ref);
    formData.append("actors", actors);
    formData.append("storyboard_refs", storyboard_refs);
    formData.append("audio", audio);

    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      let data;
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const response = await axiosReq.post("/shotlists/", formData);
        data = response.data;
      } else {
        const response = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/shotlists/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        data = response.data;
      }

      setAddShot((prevAddShot) => !prevAddShot);
      setShotlist((prevShotlist) => ({
        ...prevShotlist,
        results: [data, ...prevShotlist.results],
      }));

      toast.success("Shot successfully added!", {
        duration: 3000,
        position: "top-right",
      });
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 mr-3`}
        onClick={() => setAddShot(false)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 ml-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  return (
    <div className={`px-3 mb-0 mt-4 ${styles.White}`}>
      <h5 className={` pl-5 ${styles.SubTitle}`}>
        ADD SHOT
        <span
          className={`float-right ${styles.Close} pt-1`}
          onClick={() => setAddShot(false)}
        >
          Close
        </span>
      </h5>

      <Form onSubmit={handleSubmit}>
        {/* number size act movement*/}
        <Row>
          <Col
            xs={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="shot_number" className="mb-2">
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Number
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.Input}
                name="shot_number"
                value={shot_number}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.shot_number?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-3 mb-0`} />
          </Col>
        </Row>
        {/* description Subject equipment */}
        <Row className="mt-4">
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="description" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Description
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="subject" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Subject
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="actors"
                value={actors}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.equipment?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="equipment" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Equipment
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="equipment"
                value={equipment}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.equipment?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>

        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>

        <Row className="mt-4">
          {/* Size,Framing, angle, movement */}
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="size" className={`${styles.Width2} mb-2`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Size
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                name="size"
                value={size}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.size?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="framing" className={`${styles.Width2} mb-2`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Framing
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                name="framing"
                value={framing}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.size?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="angle" className={`${styles.Width2} mb-2`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Angle
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                name="angle"
                value={angle}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.angle?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>

          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group
              controlId="movement"
              className={`${styles.Width2} mb-2`}
            >
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Movement
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                name="movement"
                value={movement}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.movement?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>

        <Row className="mt-4">
          {/* location Int/Ext Day/Night Audio*/}
          <Col
            xs={3}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="location" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Location
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.audio?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>

          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="int_ext" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Int-Ext</Form.Label>
              <Form.Control
                as="select"
                className={styles.InputEx}
                name="int_ext"
                value={int_ext}
                onChange={handleChange}
                aria-label="int ext select"
              >
                <option></option>
                <option value="int.">Int</option>
                <option value="ext.">Ext</option>
              </Form.Control>
            </Form.Group>
            {errors?.int_ext?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>

          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="day_night" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>
                Day/Night
              </Form.Label>
              <Form.Control
                as="select"
                name="day_night"
                className={styles.InputEx}
                value={day_night}
                onChange={handleChange}
                aria-label="day or night select"
              >
                <option></option>
                <option value="day">Day</option>
                <option value="night">Night</option>
              </Form.Control>
            </Form.Group>
            {errors?.day_night?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={3}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="audio" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Audio
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="audio"
                value={audio}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.audio?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>

        <Row className="mt-4">
          {/* camera lens script ref story ref */}
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="camera" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Camera
              </Form.Label>
              <Form.Control
                type="text"
                name="camera"
                value={camera}
                className={styles.Input}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.camera?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="lens" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Lens
              </Form.Label>
              <Form.Control
                type="text"
                name="lens"
                value={lens}
                className={styles.InputScene}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.lens?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="script_ref" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Script Ref
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                name="script_ref"
                value={script_ref}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.script_ref?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group
              controlId="storyboard_refs"
              className={`${styles.Width2}`}
            >
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Storyboard Refs
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.InputScene}
                name="storyboard_refs"
                value={storyboard_refs}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.storyboard_refs?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>

        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>

        {/* lighting focus_pulls fx frame rate*/}
        <Row className="mt-4">
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="lighting" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Lighting
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="lighting"
                value={lighting}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.lighting?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="focus_pulls" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Focus Pulls
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="focus_pulls"
                value={focus_pulls}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.focus_pulls?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="fx" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene} p-1`}>
                FX/VFX
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="fx"
                value={fx}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.fx?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>

          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="frame_rate" className="mb-2">
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Frame Rate
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="frame_rate"
                value={frame_rate}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.focus_pulls?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>
        {/* Notes */}
        <Row>
          <Col
            xs={12}
            md={{ span: 8, offset: 2 }}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="notes" className="mb-2">
              <Form.Label className={`${styles.BoldScene} p-1`}>
                Notes
              </Form.Label>
              <Form.Control
                className={styles.InputScene}
                type="text"
                as="textarea"
                rows={1}
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.focus_pulls?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>

        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>

        {/* image */}
        <Row className="mt-3">
          <Col className="text-center px-0" xs={12} md={{ span: 6, offset: 3 }}>
            <p className={`${styles.BoldScene}`}>Sketch/Image</p>
            <Container
              className={`${appStyles.Content} px-0 mt-1 py-5 d-flex flex-column justify-content-center`}
            >
              {/* <Form.Group>
                {image ? (
                  <>
                    <figure>
                      <iframe
                        className={appStyles.iframe}
                        title="Sketch/Image"
                        alt="Sketch/Image"
                        src={image}
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
                  <Form.Label className=" my-1" htmlFor="image-upload">
                    <Asset2
                      src={Upload}
                      height={"50px"}
                      width={"50px"}
                      message="Upload Image"
                    />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group> */}
              <Form.Group className="text-center pt-3">
                {/* {image1 ? (
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
                                  <Asset src={Upload} message="Upload First Image" />
                                </Form.Label>
                              )} */}

                {postData.imagePreview ? (
                  postData.image?.type === "application/pdf" ? (
                    <>
                      <iframe
                        src={postData.imagePreview}
                        width="100%"
                        height="400px"
                        style={{ borderRadius: 8, border: "none" }}
                        title="PDF Preview"
                      />
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the file
                      </Form.Label>
                    </>
                  ) : (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={postData.imagePreview}
                          rounded
                        />
                      </figure>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the image
                      </Form.Label>
                    </>
                  )
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset src={Upload} message="Upload First Image or PDF" />
                  </Form.Label>
                )}


                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*,application/pdf"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              {/* """ end image """" */}
            </Container>
          </Col>
        </Row>

        <hr className="mt-0" />
        <Row>
          <Col className="text-center mt-3 pb-3">{buttons}</Col>
        </Row>
      </Form>
    </div>
  );
};

export default ShotListCreate;
