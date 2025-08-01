/* Page to hold the Email JS form that sends the Callsheet URL
   to the crew and cast */
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import btnStyles from "../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Scene.module.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useCrewInfoContext } from "../contexts/BaseCallContext";
import InfoSendEmails from "../pages/callsheets/info/InfoSendEmails";
import { axiosInstance } from "../api/axiosDefaults";

export const ContactUs = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const crew = useCrewInfoContext();
  const production_name = crew?.production_name;
  const company = crew?.production_company;
  const companyphone = crew?.company_phone;
  const companyemail = crew?.company_email;
  const setShowSend = props.setShowSend;

  const day2 = props.day1;
  const date2 = props.date1;

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const day_id = props.dayId || getQueryParam('day_id');
  const project_id = getQueryParam('project');
  // const episode_id = getQueryParam('episode') || 52;

  const castemails1 = props.castEmails;


  // Just using Cast Email list in Development to save EmailJS credits
  // eslint-disable-next-line



  const crewEmailList1 = props.crewEmailList;
  const emailList1 = crewEmailList1.concat(castemails1);
  // const emailList = emailList1.toString();



  const castemails2 = emailList1.toString();
  // const castemails2 = castemails1.toString();

  const form = useRef();
  const [process, setProcess] = useState(null);
  const [errors, setErrors] = useState({});
  const [maxEmailLimit, setMaxEmailLimit] = useState(0);
  const [emailsRemaining, setEmailsRemaining] = useState(0);
  const [emailsSent, setEmailsSent] = useState(0);
  const [charactersData, setCharactersData] = useState([]);
  const [setEmailLimit, setTotalEmailLimit] = useState(0);

  const [proname, setProname] = useState("");
  const [shootday, setShootday] = useState("");
  const [shootdate, setShootdate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("");
  const [list, setList] = useState("");
  const [message, setMessage] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  // Fetch max email limit on component mount
  useEffect(() => {
    fetchMaxEmailLimit();

    if (!props.charactersData) {
      fetchCharactersData();
    } else {
      setCharactersData(props.charactersData);
    }
  }, [project_id, props.charactersData]);

  const fetchMaxEmailLimit = async () => {
    try {
      const response = await axiosInstance.get(
        `${localStorage.getItem("projectSlug")}/email-data/`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );
      if (response.data && response.data.data && response.data.data.length > 0) {
        const projectData = response.data.data.find(item => item.project === parseInt(project_id)) || response.data.data[0];
        setTotalEmailLimit(response?.data?.total_limit)
        setMaxEmailLimit(projectData.max_email_limit_per_day);
        setEmailsSent(projectData.emails_sent_today || 0);
        const remaining = projectData.max_email_limit_per_day - (projectData.emails_sent_today || 0);
        setEmailsRemaining(remaining > 0 ? remaining : 0);
      }
    } catch (error) {
      console.error("Error fetching max email limit:", error);
    }

    setDataLoaded(true);
  };

  const fetchCharactersData = async () => {
    try {
      const response = await axiosInstance.get(
        `${localStorage.getItem("projectSlug")}/characters/`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      if (response.data && response.data.results) {
        setCharactersData(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching characters data:", error);
    }
  };

  const getActorNameByEmail = (email) => {
    const character = charactersData.find(char => char.email === email.trim());
    return character ? character.actor : email.split('@')[0];
  };

  useEffect(() => {
    /* Function to set the path, email list, day, date,
       production title, company name, phone and email */
    const pathone = window.location.href;
    setList(castemails2);
    setProname(crew?.production_name || "");
    setShootday(day2);
    setShootdate(date2);
    setName(crew?.production_company || "");
    setPhone(crew?.company_phone || "");
    setEmail(crew?.company_email || "");
    setPath(pathone);
    // eslint-disable-next-line
  }, [crew, castemails2, day2, date2]);

  const copyEmailsToClipboard = () => {
    navigator.clipboard.writeText(list)
      .then(() => {
        alert("Emails copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy emails: ", err);
      });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    // Set success/failure message in "process" state variable
    setProcess("sending");

    try {
      const emailList = list.split(',').map(email => {
        const emailTrimmed = email.trim();
        const actorName = getActorNameByEmail(emailTrimmed);

        return {
          email: emailTrimmed,
          name: actorName
        };
      });

      const payload = {
        day_id: parseInt(day_id),
        message: message || form.current.message.value,
        shoot_day: shootday,
        production_name: proname,
        shoot_date: shootdate,
        company_name: name,
        company_phone: phone,
        company_email: email,
        url: path,
        recipients: emailList
      };

      const response = await axiosInstance.post(
        `${localStorage.getItem("projectSlug")}/send-bulk-email/`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      setProcess("success");
      setMessage('')
      setTimeout(() => setProcess(null), 3500);
      if (response.data && response.data.project_day_limit_left !== undefined) {
        setEmailsRemaining(response.data.project_day_limit_left);
      }
    } catch (error) {
      console.log("Error:", error);
      setProcess("error");
      if (error.response) {
        setErrors(error.response.data || {});
      }
    }
  };

  const emailCount = list ? list.split(',').length : 0;

  const handleChange = (event) => {
    setList(event.target.value); // Assuming setList is the setter function for "list"
  };

  return (
    <div className={`pb-2 my-3 ${styles.ContactBack} text-center`}>
      <Row>
        <Col xs={12}>
          <Button
            className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowInfo((showInfo) => !showInfo)}
          >
            IMPORTANT
          </Button>
        </Col>
      </Row>
      {!showInfo ? "" : <InfoSendEmails />}
      <form ref={form} onSubmit={sendEmail}>
        {/*Email list */}
        <Row>
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            xs={{ span: 10, offset: 1 }}
          >
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>
                Email List
                <div>
                  {dataLoaded ? (
                    emailsRemaining > 0 ? (
                      <span
                        className="ml-2"
                        style={{ fontSize: "0.85em", color: "#555" }}
                      >
                        (You have {emailsRemaining} emails remaining for today out of your daily email quota {setEmailLimit})
                      </span>
                    ) : (
                      <span
                        className="ml-2"
                        style={{ fontSize: "0.85em", color: "red" }}
                      >
                        Your daily email quota is exhausted. Please
                        <Button
                          variant="link"
                          className="p-0 m-0 ml-1 mr-1"
                          style={{
                            fontSize: "0.85em",
                            textDecoration: "underline",
                          }}
                          onClick={copyEmailsToClipboard}
                        >
                          copy
                        </Button>
                        the emails below and send them using your personal email
                        client
                      </span>
                    )
                  ) : null}
                </div>
              </Form.Label>
              <Form.Control
                className={styles.Input + ' d-none'}
                type="text"
                name="list"
                value={list}
                // readOnly
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.list?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row>
          {/* Shoot day */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={3}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Shoot Day</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="shootday"
                value={shootday}
                readOnly
              />
            </Form.Group>
            {errors?.shootday?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          {/* title */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>
                Production Name
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="proname"
                value={proname}
                readOnly
              />
            </Form.Group>
            {errors?.proname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          {/* shoot date */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={3}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Shoot Date</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="shootdate"
                value={shootdate}
                readOnly
              />
            </Form.Group>
            {errors?.shootdate?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row>
          {/* company name */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Company Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="from_name"
                value={name}
                readOnly
              />
            </Form.Group>
            {errors?.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          {/* company phone */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>
                Company Phone
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="phone"
                value={phone}
                readOnly
              />
            </Form.Group>
            {errors?.companyphone?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          {/* company email */}
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>
                Company Email
              </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="email"
                value={email}
                readOnly
              />
            </Form.Group>
            {errors?.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* path */}
        <Row>
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            xs={{ span: 10, offset: 1 }}
          >
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>URL</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                name="path"
                value={path}
                readOnly
              />
            </Form.Group>
            {errors?.path?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        {/* message */}
        <Row>
          <Col
            className="d-flex justify-content-center p-0 p-md-2"
            xs={{ span: 10, offset: 1 }}
          >
            <Form.Group className={`${styles.Width2} `}>
              <Form.Label className={`${styles.Bold}`}>Message</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            {errors?.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button
              className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => setShowSend(false)}
            >
              CANCEL
            </Button>
            <Button
              className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
              disabled={emailsRemaining <= 0 || emailCount > emailsRemaining}
            >
              SEND EMAILS
            </Button>
          </Col>
        </Row>
      </form>

      {/* <Col xs={{span: 10, offset: 1}} md={6}> */}
      {/* <Col xs={6} >
    <label>Name</label>
      <input type="text" name="from_name" />
    </Col> */}
      {/* <Col xs={{span: 10, offset: 1}} md={6}> */}
      {/* <Col xs={6} >
    <label>Email</label>
      <input type="email" name="email" />
    </Col> */}
      {/* <Col xs={{span: 10, offset: 1}} md={6}>
    <label>Message</label>
      <textarea name="message" />
    </Col> */}
      {/* <Row>
    <Col xs={{span: 4, offset: 4}} md={6}>
    <input type="submit" value="Send" />
    </Col>
    </Row> */}

      {process === "sending" && (
        <div style={{ color: "blue" }}>Sending Emails...</div>
      )}
      {process === "success" && (
        <div style={{ color: "green" }}>Emails have been sent successfully!</div>
      )}
      {process === "error" && (
        <div style={{ color: "red" }}>Emails Failed to Send.</div>
      )}
    </div>
  );
};
