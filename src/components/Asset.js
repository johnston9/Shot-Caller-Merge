/* Component to hold the fetching data spinner and to display when
   a request fetches no results */
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, height, width }) => {
  return (
    <div className={`${styles.Asset} px-2`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} height={height} width={width} />}
      {message && <p className="my-1">{message}</p>}
    </div>
  );
};

export default Asset;