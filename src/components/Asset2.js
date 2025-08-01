/* Second Component to hold the fetching data spinner and to display when
   a request fetches no results */
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Asset.module.css";

const Asset2 = ({ spinner, src, message, height, width }) => {
  return (
    <div className={`${styles.Asset2}`}>
      {spinner && <Spinner animation="border" />}
      <div>
        <span >
      {src && <img className="ml-5" src={src} alt={message} height={height} width={width} />}
      </span>
      {message && <span className="ml-5 my-1">{message}</span>}
      </div>
    </div>
  );
};

export default Asset2;