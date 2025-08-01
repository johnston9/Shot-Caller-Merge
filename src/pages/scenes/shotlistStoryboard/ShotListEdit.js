/* Form component in the Shot component to edit a Shot */
import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import Asset2 from "../../../components/Asset2";
import { toast } from "react-hot-toast";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import Asset from "../../../components/Asset";

const ShotListEdit = ({ handleMount, setShowEditForm, setShotNew, id }) => {
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    scene_id: "",
    scene_number: "",
    shot_number: "",
    size: "",
    angle: "",
    movement: "",
    camera: "",
    lens: "",
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
    imageType: null,
    framing: "",
    int_ext: "",
    day_night: "",
    frame_rate: "",
    location: "",
    actors: "",
    notes: "",
    order_number: 1
  });

  const {
    scene_id,

    scene_number,
    shot_number,
    order_number,
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
    framing,
    int_ext,
    day_night,
    frame_rate,
    location,
    actors,
    notes,
  } = postData;

  const imageInput = useRef(null);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const fetchContentType = async (url) => {
          const response = await fetch(url, { method: "HEAD" });
          return response.headers.get("Content-Type");
        };

        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`/shotlists/${id}/`);
          const {
            order_number,
            scene_id,
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
            framing,
            int_ext,
            day_night,
            frame_rate,
            location,
            actors,
            notes,
          } = data;
          const [type1] = await Promise.all([image ? fetchContentType(image) : null,])
          setPostData({
            order_number,
            scene_id,
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
            framing,
            int_ext,
            day_night,
            frame_rate,
            location,
            actors,
            notes,
            imageType: type1,
            imagePreview: image,

          });
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/shotlists/${id}/`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const {
            order_number,
            scene_id,
            scene_number,
            shot_number,
            size,
            angle,
            movement,
            screen_time,
            camera,
            lens,
            script_length,
            script_ref,
            storyboard_refs,
            description,
            equipment,
            fx,
            focus_pulls,
            lighting,
            audio,
            image,
            framing,
            int_ext,
            day_night,
            frame_rate,
            location,
            actors,
            notes
          } = data;
          const [type1] = await Promise.all([image ? fetchContentType(image) : null,])

          setPostData({
            order_number,
            scene_id,
            scene_number,
            shot_number,
            size,
            angle,
            movement,
            screen_time,
            camera,
            lens,
            script_length,
            script_ref,
            storyboard_refs,
            description,
            equipment,
            fx,
            focus_pulls,
            lighting,
            audio,
            image,
            framing,
            int_ext,
            day_night,
            frame_rate,
            location,
            actors,
            notes, imageType: type1,
            imagePreview: image,

          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   // If the input field is "shot_number", validate it
  //   if (name === "order_number" && !/^\d*$/.test(value)) {
  //     toast.error("Only integer numbers are allowed", {
  //       duration: 2500,
  //       position: "top-right",
  //     });
  //     return;
  //   }
  //   setPostData({
  //     ...postData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "scene_number") {
      // Let the input be empty
      if (value === "") {
        setOrderNumberInput("");
        setPostData((prev) => ({ ...prev, scene_number: "" }));
        return;
      }

      // Only digits allowed
      if (!/^\d+$/.test(value)) {
        toast.error("Only integers allowed");
        return;
      }

      // Update both states
      setOrderNumberInput(value);
      setPostData((prev) => ({
        ...prev,
        scene_number: Math.max(Number(value) - 1, 0), // zero-based
      }));

      return;
    }

    setPostData((prev) => ({ ...prev, [name]: value }));
  };



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
        imageType: file.type,
      }));
    }
  };

  // The main edit submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate shot_number
    if (!shot_number || !/^\d+$/.test(shot_number)) {
      toast.error("A valid integer is required in the Number", {
        duration: 2500,
        position: "top-right",
      });
      return;
    }

    const formData = new FormData();

    // Use order_number as 1-indexed directly, do not add 1
    formData.append("scene_id", scene_id); // unchanged
    // formData.append("order_number", order_number + 1); // ensure order_number is sent as is
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
    formData.append("script_ref", script_ref);
    formData.append("storyboard_refs", storyboard_refs);
    formData.append("audio", audio);
    formData.append("framing", framing);
    formData.append("int_ext", int_ext);
    formData.append("day_night", day_night);
    formData.append("frame_rate", frame_rate);
    formData.append("location", location);
    formData.append("actors", actors);
    formData.append("notes", notes);
    if (imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(`/shotlists/${id}/`, formData);
        setShowEditForm(false);
        setShotNew(data);
        handleMount();
      } else {
        const { data } = await axiosInstance.put(
          `${localStorage.getItem("projectSlug")}/shotlists/${id}/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );

        setShowEditForm(false);
        setShotNew(data);
        handleMount();
        toast.success(`Shot ${shot_number} successfully updated!`, {
          duration: 3000,
          position: "top-right",
        });
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  const [orderNumberInput, setOrderNumberInput] = useState("");
  useEffect(() => {
    if (postData.order_number !== undefined) {
      setOrderNumberInput(String(Number(postData.order_number) + 1));
    }
  }, [postData.order_number]);

  const buttons = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 mr-3 `}
        onClick={() => setShowEditForm((showEditForm) => !showEditForm)}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-md-5 ml-3`}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );

  return (
    <div className={`mb-0 mt-3 ${styles.White}`}>
      <h5 className={`my-3 text-center ${styles.SubTitle}`}>
        Edit Shot {parseInt(order_number) + 1}{" "}
      </h5>
      <Form onSubmit={handleSubmit} className="text-center">
        {/* number */}
        <Row>
          <Col
            xs={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="order_number" className="mb-2">
              <Form.Label className={`${styles.BoldScene}`}>Number</Form.Label>
              {/* <Form.Control
                  type="text"
                  className={styles.Input}
                  name="order_number"
                  value={order_number}
                  onChange={handleChange}
                /> */}
              <Form.Control
                type="text"
                name="scene_number"
                value={orderNumberInput}
                onChange={handleChange}
              />


            </Form.Group>
            {errors?.order_number?.map((message, idx) => (
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
        <Row className="mt-3">
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="description" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>
                Description
              </Form.Label>
              <Form.Control
                className={styles.Input}
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
            <Form.Group controlId="actors" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Subject</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                as="textarea"
                rows={1}
                name="actors"
                value={actors}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.actors?.map((message, idx) => (
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
              <Form.Label className={`${styles.BoldScene}`}>
                Equipment
              </Form.Label>
              <Form.Control
                className={styles.Input}
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
        {/* size framing movement audio */}
        <Row className="mt-3">
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="size" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Size</Form.Label>
              <Form.Control
                className={styles.Input}
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
            <Form.Group controlId="framing" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Framing</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="framing"
                value={framing}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.framing?.map((message, idx) => (
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
            <Form.Group controlId="angle" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.BoldScene}`}>Angle</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
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
            <Form.Group controlId="movement" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.BoldScene}`}>
                Movement
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
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
        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>
        {/* location Int/Ext Day/Night Audio*/}
        <Row className="mt-3">
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="location" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>
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
            {errors?.location?.map((message, idx) => (
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
                <option value="INT.">Int</option>
                <option value="EXT.">Ext</option>
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
                <option value="DAY">Day</option>
                <option value="NIGHT">Night</option>
              </Form.Control>
            </Form.Group>
            {errors?.day_night?.map((message, idx) => (
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
            <Form.Group controlId="audio" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Audio</Form.Label>
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
        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-5 mb-0`} />
          </Col>
        </Row>
        {/* camera lens script ref story ref */}
        <Row className="mt-3">
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="camera" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Camera</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="camera"
                value={camera}
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
              <Form.Label className={`${styles.BoldScene}`}>Lens</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="lens"
                value={lens}
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
              <Form.Label className={`${styles.BoldScene}`}>
                Script Ref
              </Form.Label>
              <Form.Control
                className={styles.Input}
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
              <Form.Label className={`${styles.BoldScene} d-block d-sm-none `}>
                StoryB. Ref
              </Form.Label>
              <Form.Label className={`${styles.BoldScene} d-none d-sm-block `}>
                Storyboard Ref
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
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
        <Row className="mt-3">
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="lighting" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>
                Lighting
              </Form.Label>
              <Form.Control
                className={styles.Input}
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
            xs={12}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="focus_pulls" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>
                Focus Pulls
              </Form.Label>
              <Form.Control
                className={styles.Input}
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
            xs={12}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="fx" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>FX/VFX</Form.Label>
              <Form.Control
                className={styles.Input}
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
            xs={12}
            md={3}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="frame_rate" className={`${styles.Width2} `}>
              <Form.Label className={`${styles.BoldScene}`}>
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
            {errors?.frame_rate?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* hr */}
        <Row>
          <Col xs={12}>
            <hr className={`${styles.Break1} mt-4 mb-0`} />
          </Col>
        </Row>
        {/* notes */}
        <Row className="mt-3">
          <Col
            xs={12}
            md={{ span: 8, offset: 2 }}
            className="d-flex justify-content-center p-0 p-md-2"
          >
            <Form.Group controlId="notes" className={`${styles.Width2}`}>
              <Form.Label className={`${styles.BoldScene}`}>Notes</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                as="textarea"
                rows={1}
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.notes?.map((message, idx) => (
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
              <Form.Group>
                {postData.imagePreview ? (
                  postData.imageType === "application/pdf" ? (
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
                    <Asset src={Upload} message="Upload Image or PDF" />
                  </Form.Label>
                )}

                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*,.pdf"
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

export default ShotListEdit;
