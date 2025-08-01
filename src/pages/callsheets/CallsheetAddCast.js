/* Form component to add cast items from a select 
   dropdown */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import DropdownButton from "react-bootstrap/DropdownButton";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { useCharactersContext } from "../../contexts/Scene_chars_locs";
import { Dropdown } from "react-bootstrap";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

const AddCast = ({ id, setShow, dataDay, dataDate, charactersList  }) => {
  const host = useHostName();
  const [errors, setErrors] = useState({});
  const [cast, setCast] = useState({ results: [] });
  const characters = useCharactersContext();
  const [selectedRole, setSelectedRole] = useState("");
  const [postData, setPostData] = useState({
    cast_number: "",
    role: "",
    username: "",
    artist: "",
    pickup_address: "",
    make_up_time: "",
    commute_time: "",
    costume: "",
    contact: "",
    email: "",
    swf: "",
    pickup: "",
    call: "",
    hmw: "",
    on_set: "",
    inst: "",
    diet: "",
  });
  const {
    cast_number,
    role,
    username,
    artist,
    pickup_address,
    make_up_time,
    commute_time,
    contact,
    email,
    swf,
    costume,
    pickup,
    call,
    hmw,
    on_set,
    inst,
    diet,
  } = postData;

  const setData = (character) => {
    /* Function to set character values automatically
         when a character is selected from the dropdown */
    const role = character.role || "";
    const number = character.number || "";
    const username = character.username || "";
    const artist = character.actor || "";
    const pickup_address = character.pickup_address || "";
    const make_up_time = character.make_up_time || "";
    const commute_time = character.commute_time || "";
    const contact = character.mobile || "";
    const email = character.email || "";
    const inst = character.requirements || "";
    const diet = character.diet || "";

    setPostData({
      cast_number: number,
      role: role,
      username: username,
      artist: artist,
      pickup_address: pickup_address,
      make_up_time: make_up_time,
      commute_time: commute_time,
      contact: contact,
      email: email,
      inst: inst,
      diet: diet,
      swf: "",
      pickup: "",
      call: "",
      hmw: "",
      on_set: "",
    });
  };
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const clear = () => {
    /* Function to clear Character values */
    setPostData({
      cast_number: "",
      role: "",
      username: "",
      artist: "",
      pickup_address: "",
      make_up_time: "",
      commute_time: "",
      contact: "",
      email: "",
      swf: "",
      pickup: "",
      call: "",
      hmw: "",
      on_set: "",
      diet: "",
      inst: "",
    });
  };

  useEffect(() => {
    /* function to fetch the Callsheet Cast data already added */
    const handleMount = async () => {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const { data } = await axiosReq.get(`castcallsnew/?day_id=${id}`);
          setCast(data);
        } else {
          const { data } = await axiosInstance.get(
            `${localStorage.getItem("projectSlug")}/castcallsnew/?day_id=${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          setCast(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("day_id", id);
    formData.append("shoot_day", dataDay);
    formData.append("shoot_date", dataDate);
    formData.append("cast_number", cast_number);
    formData.append("role", role);
    formData.append("username", username);
    formData.append("artist", artist);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("costume", costume);
    formData.append("swf", swf);
    formData.append("pickup", pickup);
    formData.append("call", call);
    formData.append("hmw", hmw);
    formData.append("on_set", on_set);
    formData.append("inst", inst);
    formData.append("diet", diet);

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("castcallsnew/", formData);
        setPostData({
          cast_number: "",
          role: "",
          username: "",
          artist: "",
          pickup_address: "",
          make_up_time: "",
          commute_time: "",
          costume: "",
          contact: "",
          email: "",
          swf: "",
          pickup: "",
          call: "",
          hmw: "",
          on_set: "",
          inst: "",
        });
        setCast((prevCast) => ({
          ...prevCast,
          results: [data, ...prevCast.results],
        }));
      } else {
        const { data } = await axiosInstance.post(
          `${localStorage.getItem("projectSlug")}/castcallsnew/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setPostData({
          cast_number: "",
          role: "",
          username: "",
          artist: "",
          pickup_address: "",
          make_up_time: "",
          commute_time: "",
          costume: "",
          contact: "",
          email: "",
          swf: "",
          pickup: "",
          call: "",
          hmw: "",
          on_set: "",
          inst: "",
        });
        setCast((prevCast) => ({
          ...prevCast,
          results: [data, ...prevCast.results],
        }));
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const buttons = (
    <div className="mb-2 text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
        onClick={clear}
      >
        Cancel
      </Button>
      <Button
        className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        Add Cast
      </Button>
    </div>
  );

  return (
    <div className={`my-3 `}>
      <h4
        className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan}`}
        style={{ textTransform: "uppercase" }}
      >
        ADD CAST
        <span
          className={`pt-1 float-right ${styles.Close}`}
          onClick={() => setShow(false)}
        >
          Close
        </span>{" "}
      </h4>
      <div className={`mb-3 ${styles.Back3}`}>
        {/* <p className="text-center">ADD CAST</p> */}
        <Form className="text-center" onSubmit={handleSubmit}>
          {/* CAST ADDED */}
          <Row className="py-2">
            <Col xs={12} md={6}>
              <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold}`}>
                CAST ADDED
              </p>
              <div className={`ml-md-2 px-1 py-1 ${styles.CastEntered}`}>
                {cast.results.length
                  ? cast.results.map((ca) => ca.role).join(", ")
                  : ""}
              </div>
            </Col>
            {/* SELECT DROPDOWN */}
            <Col xs={12} md={6}>
              <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold}`}>
                SELECT ROLE
              </p>
              <DropdownButton
                id="dropdown-basic-button"
                className={`pt-1 pl-2 ${styles.DropButt}`}
                title={selectedRole ? selectedRole : "Select"}
              >
                {charactersList?.length === 0 && (
                  <Dropdown.Item key="no-characters">
                    No Characters
                  </Dropdown.Item>
                )}
                {charactersList?.map((character) => (
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedRole(character?.role); // Update selected role
                      setData(character); // Store selected character
                    }}
                    key={character?.id}
                  >
                    {character?.role}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Row>
          {cast_number ? (
            <>
              <Row className="my-2">
                <Col>
                  <div
                    className={`text-center mx-2 mt-2 py-1 ${styles.SubTitle}`}
                  >
                    <p>
                      <span className="mr-2">{role} </span>-
                      <span className="ml-2"> {artist}</span>
                    </p>
                    <p>
                      {make_up_time ? `Makeup: ${make_up_time}` : ""}
                      {make_up_time && commute_time ? ", " : ""}
                      {commute_time ? `Commute: ${commute_time}` : ""}
                      {(make_up_time || commute_time) && contact ? ", " : ""}
                      {contact ? `Contact: ${contact}` : ""}
                    </p>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <p className={`text-center mb-0 py-1 ${styles.SubTitle}`}></p>
          )}
          {/* number swf pickup call hmw on_set */}
          <Row className="mx-0 my-3">
            <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
              <Form.Group controlId="pickup" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Pickup</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="pickup"
                  value={pickup}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.pickup?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
              <Form.Group controlId="call" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Call</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="call"
                  value={call}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.call?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col className=" -flex justify-content-centermx-0 px-1" xs={3}>
              <Form.Group controlId="hmw" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>H/M/W</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="hmw"
                  value={hmw}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.hmw?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
              <Form.Group controlId="on_set" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>
                  <span className="d-none d-sm-block">On Set</span>
                  <span className="d-sm-none">Set</span>
                </Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="on_set"
                  value={on_set}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.on_set?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
              <Form.Group controlId="costume" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>Costume</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="costume"
                  value={costume}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.costume?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
              <Form.Group controlId="swf" className={`${styles.Width2} `}>
                <Form.Label className={`${styles.Bold}`}>SWF</Form.Label>
                <Form.Control
                  className={`${styles.Input}`}
                  type="text"
                  name="swf"
                  value={swf}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors?.swf?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={6}>
              <Form.Group controlId="inst" className={`${styles.Width95} `}>
                <Form.Label className={`${styles.Bold}`}>
                  Confirm Pickup Address
                </Form.Label>
                <Form.Control
                  className={`${styles.InputScene}`}
                  type="text"
                  name="pickup_address"
                  as="textarea"
                  rows={2}
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
          </Row>
          {/* buttons */}
          <Row>
            <Col className="text-center">
              <div className={`mt-3 `}>{buttons}</div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCast;
