/* Component rendered on the CallsheetsPage to display the 
   cover info for each Callsheet
 * When clicked on it opens that Callsheet's CallSheetPage */
import React from "react";

import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";

import styles from "../../styles/Callsheets.module.css";

const CallsheetTop = (props) => {
  const host = useHostName();
  const { id, day, day_id, date } = props;
  const history = useHistory();
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  // eslint-disable-next-line
  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/callsheetsnew/${id}/edit`
    );
  };

  // eslint-disable-next-line
  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`/callsheetsnew/${id}/`);
        history.push(`/${localStorage.getItem("projectSlug")}/callsheets/`);
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/callsheetsnew/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.push(`/${localStorage.getItem("projectSlug")}/callsheets/`);
      }
    } catch (err) {}
  };

  return (
    <div>
      <Card className={`mx-2 text-center ${styles.Top}`}>
        <Link
          to={`/${localStorage.getItem("projectSlug")}/callsheets/${day_id}${
            epi && project && episodeTitle
              ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
              : ""
          }`}
        >
          <Card.Header className={`pt-2 pb-0 px-0 ${styles.Top}`}>
            <Row>
              <Col xs={{ span: 10, offset: 1 }} className=" px-0">
                <h5 className={` ${styles.Titlelist}`}>Day {day}</h5>
                <div className={`${styles.Inner} mt-2 px-0 mx-0`}>
                  <p className={`py-1 ${styles.Titlelist}`}> {date}</p>
                </div>
              </Col>
            </Row>
          </Card.Header>
        </Link>
      </Card>
    </div>
  );
};

export default CallsheetTop;
