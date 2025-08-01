import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import { Button as ManButton } from "@mantine/core";
import { useParams } from "react-router-dom";
import { VIMEO_BASE_URL } from "../../utils/config";
import TopBox from "../../components/TopBox";

export default function () {
  const params = useParams();

  return (
    <div>
      <div className="mx-md-5">
        <TopBox title="How it Works" />
      </div>
      <Row>
        <Col className={`${styles.Back} mt-3`} md={{ span: 8, offset: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left side: YouTube iFrame */}
            <div style={{ flex: 1, paddingRight: "15px" }}>
              <iframe
                width="100%"
                height="315"
                src={`${VIMEO_BASE_URL}${params?.video_id}`} // Replace with your dummy YouTube link
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right side: Description */}
            <div style={{ flex: 1, paddingLeft: "15px" }}>
              <h5>{params?.title}</h5>
              <p>
                This is a description of the Short Call. Here you can provide
                more details about the content, its significance, or any other
                relevant information that the viewer might find useful.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
