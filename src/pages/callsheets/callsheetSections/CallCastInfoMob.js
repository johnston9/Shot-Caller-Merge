/* Component in the CallCast component to display the Callsheet 
   the extra cast info in mobile */
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";
import { PostDropdown } from "../../../components/PostDropdown";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";
import useHostName from "../../../hooks/useHostName";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const CallCastInfoMob = (props) => {
  const currentUser = useCurrentUser();
  const host = useHostName();
  const {
    id1,
    contact1,
    swf1,
    inst1,
    pickup1,
    hmw1,
    on_set1,
    admin,
    setShowEdit,
    handleMount,
  } = props;

  const handleEdit = () => {
    setShowEdit((showEdit) => !showEdit);
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`castcallsnew/${id1}/`);
        handleMount();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/castcallsnew/${id1}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        handleMount();
      }
    } catch (err) {}
  };

  return (
    <div>
      <Row className="text-center px-0 mx-0">
        {/* <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
            <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Artist</p>
            <p className='mb-0'>{artist}</p>
        </Col>  */}
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mb-0 ${styles.TitleBox}`}
          >
            Contact
          </p>
          <p className={`mb-0 mx-0 py-2`}>{contact1}</p>
        </Col>
        <Col className={`mx-0 px-0  ${styles.Border}`} xs={2}>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mb-0 ${styles.TitleBox}`}
          >
            SWF
          </p>
          <p className="mb-0 py-2">{swf1}</p>
        </Col>
        <Col className={`mx-0 px-0  ${styles.Border}`} xs={2}>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mb-0 ${styles.TitleBox}`}
          >
            PU
          </p>
          <p className="mb-0 py-2">{pickup1}</p>
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mb-0  text-center ${styles.TitleBox}`}
          >
            H/M/W
          </p>
          <p className="mb-0 py-2">{hmw1}</p>
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
          <p
            style={{ textTransform: "uppercase" }}
            className={`mb-0  text-center ${styles.TitleBox}`}
          >
            Set
          </p>
          <p className="mb-0 py-2">{on_set1}</p>
        </Col>
      </Row>
      {admin ? (
        <Row className="text-center px-0 mx-0">
          <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={10}>
            <p
              style={{ textTransform: "uppercase" }}
              className={`mb-0 ${styles.TitleBox}`}
            >
              Instructions
            </p>
            <p className={`mb-0 mx-0 py-2`}>{inst1}</p>
          </Col>
          {!["Cast","Crew", "Admincreative"].includes(currentUser?.groups[0]?.name)  && (
            <Col className={`mx-0 px-0 ${styles.Border} `} xs={2} md={2}>
              <p
                style={{ textTransform: "uppercase" }}
                className={`mb-0 ${styles.TitleBox}`}
              >
                Edit
              </p>
              <PostDropdown
                className={` mx-0 my-2`}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </Col>
          )}
        </Row>
      ) : (
        <Row className="text-center px-0 mx-0">
          <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={12}>
            <p
              style={{ textTransform: "uppercase" }}
              className={`mb-0 ${styles.TitleBox}`}
            >
              Instructions
            </p>
            <p className={`mb-0 mx-0 py-2`}>{inst1}</p>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CallCastInfoMob;
