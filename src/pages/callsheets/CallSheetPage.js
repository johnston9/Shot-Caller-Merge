/* Page to fetch the data for each Callsheet, which includes
   the Callsheet data, the Cast and BG data, and the day's 
   Schedule data 
 * Includes a function to create an array of the cast's emails
 * Contains the CallSheet Component to which it passes the data */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@mantine/core";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import CallSheet from "./CallSheet";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import DownloadIcon from "../../assets/download-icon.jpg";

const CallSheetPage = () => {
  // useRedirect()
  const userData = useCurrentUser();
  const host = useHostName();
  const { id } = useParams();
  const [isGenerating, setIsGenerating] = useState(false); // State to manage button disable
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  const [callsheet, setCallsheet] = useState({ results: [] });
  const [cast, setCast] = useState({ results: [] });
  const [castEmails, setCastEmails] = useState({ results: [] });
  const [currentUser, setCurrentUser] = useState(null);
  const [background, setBackground] = useState({ results: [] });
  const [scenes, setScenes] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const admin = true;

  const handleMount = async () => {
    /* Function to fetch the,
     * data for each Callsheet to be passed to the Callsheet
     * data the Cast and BG to be passed to the BgPage and the TalentPage
     * data for the day's Schedule Scenes
     * data for the user */
    if (localStorage.getItem("accessToken")) {
      try {
        if (host === CLIENT_PROGRAM_HOSTNAME) {
          const [
            { data: callsheetdata },
            { data: castcalldata },
            { data: bgcalldata },
            { data: scenes },
            { data: user },
          ] = await Promise.all([
            axiosReq.get(`/callsheetsnew/?day_id=${id}`),
            axiosReq.get(`/castcallsnew/?day_id=${id}`),
            axiosReq.get(`/backgroundcallsnew/?day_id=${id}`),
            axiosReq.get(`/schedule/scenes/?day_id=${id}`),
            // axiosReq.get("dj-rest-auth/user/"),
          ]);
          // console.log(castcalldata);
          setCallsheet(callsheetdata);
          setCast(castcalldata);
          // Function to create an array of all the cast's emails
          let emailArray = castcalldata.results.map((a) => a.email);
          setCastEmails(emailArray);
          setBackground(bgcalldata);
          setScenes(scenes);
          setCurrentUser(user.username);
          setHasLoaded(true);
        } else {
          const [
            { data: callsheetdata },
            { data: castcalldata },
            { data: bgcalldata },
            { data: scenes },
          ] = await Promise.all([
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/callsheetsnew/?day_id=${id}${
                epi ? `&episode_ids=${epi}` : ""
              }`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/castcallsnew/?day_id=${id}${epi ? `&episode_ids=${epi}` : ""}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/backgroundcallsnew/?day_id=${id}${
                epi ? `&episode_ids=${epi}` : ""
              }`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            axiosInstance.get(
              `${localStorage.getItem(
                "projectSlug"
              )}/schedule/scenes/?day_id=${id}${
                epi ? `&episode_ids=${epi}` : ""
              }`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
                withCredentials: true,
              }
            ),
            // axiosInstance.get("dj-rest-auth/user/"),
          ]);
          // console.log(castcalldata);
          setCallsheet(callsheetdata);
          setCast(castcalldata);
          console.log(castcalldata);
          // Function to create an array of all the cast's emails
          let emailArray = castcalldata.results
            .map((a) => a.email) // Extract emails
            .filter((email) => email && email.trim().length > 0); // Remove empty values

          setCastEmails(emailArray);
          console.log("Email array here", emailArray);
          setBackground(bgcalldata);
          setScenes(scenes);
          setCurrentUser(userData?.username);
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    handleMount();
    // eslint-disable-next-line
  }, [id]);

  const handleDownload = () => {
    setIsGenerating(true); // Disable button when generation starts

    const input = document.getElementById("pdf-content"); // Change this to the ID of your scrollable content

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 295; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      position -= pageHeight;

      // Add new page if there's more content
      while (heightLeft + position >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        position -= pageHeight;
      }

      pdf.save("download.pdf");
      setIsGenerating(false);
    });
  };

  return (
    <div>
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div></div>
        <>
          {isGenerating ? (
            <div style={{}}>Generating PDF...</div>
          ) : (
            <>
              {hasLoaded && (
                <div onClick={handleDownload} style={{ cursor: "pointer" }}>
                  <img src={DownloadIcon} height={30} width={30} />
                </div>
              )}
            </>
          )}
        </>
      </Row>
      <Row className="mt-0">
        <Col id="pdf-content">
          {hasLoaded ? (
            <CallSheet
              {...callsheet.results[0]}
              callsheet={callsheet.results[0]}
              currentUser={currentUser}
              handleMount={handleMount}
              episodeTitle={episodeTitle}
              scenes={scenes}
              cast={cast}
              castEmails={castEmails}
              background={background}
              admin={admin}
              key={callsheet.id}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CallSheetPage;
