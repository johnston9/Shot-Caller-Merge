import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { EpisodeEditDropdown } from "./EpisodeEditDropdown";
import r1 from "../../assets/r1.png";

import styles from "../../styles/Scene.module.css";

export default function EpisodeList({
  episodes,
  currentUser,
  handleEpisodeDelete,
  getLink,
}) {
  console.log(episodes);
  return (
    <Row style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {episodes?.length <= 0 ? (
        <div>No episodes available.</div>
      ) : (
        <>
          {episodes?.map((episode, index) => (
            <Card
              className={`text-center ${styles.SceneCard}`}
              style={{
                width: "200px",
              }}
              key={episode?.id}
            >
              <div className={`mb-0 px-2 py-1`}>
                <Row className="mx-0 d-flex align-items-center ">
                  <Col className="mx-0 px-0" xs={1}></Col>
                  <Col xs={10} className="mx-0 px-0 text-center">
                    <Link to={getLink(episode)}>
                      <div>
                        <h5 className={` ${styles.Grey}`}>
                          Episode {episode?.episode_number}
                        </h5>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={1} className={`mx-0 px-0 ${styles.Drop}`}>
                    {(currentUser?.groups[0]?.name !== "Crew" && currentUser?.groups[0]?.name !==  "Admincreative") && (
                      <EpisodeEditDropdown
                        episodeId={episode?.id}
                        handleEpisodeDelete={handleEpisodeDelete}
                      />
                    )}
                  </Col>
                </Row>
                <Link to={getLink(episode)}>
                  <div>
                    <span className={styles.Italics}>{episode?.title}</span>
                  </div>
                </Link>
              </div>
              <Card.Body
                style={{
                  backgroundImage: `url(${r1})`,
                  objectFit: "fill",
                  width: "auto",
                  repeat: "no-repeat",
                }}
                className="py-1 px-0"
              >
                <Link to={getLink(episode)}>
                  <div className={` ${styles.Div50} px-0`}>
                    <Card.Text
                      style={{ fontWeight: "700" }}
                      className={` ${styles.Grey} px-0`}
                    >
                      {""}
                    </Card.Text>
                  </div>
                  <div className={`px-0 ${styles.Div50}`}>
                    <p className={` ${styles.Grey}`}>{""}</p>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Row>
  );
}
