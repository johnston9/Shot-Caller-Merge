/* Page to display if no results are found for a request
   Contains the Asset component */
import React from 'react';
import styles from "../styles/PageNotFound.module.css";
import Asset from "./Asset";
import NoResults from "../assets/no-results.png";

const PageNotFound = () => {
    return (
        <div className={styles.margin} >
            <h2 className="mb-4 text-center" >Page not found</h2>
            <Asset
              src={NoResults}
              message="We're sorry, no results for that page"
            />
        </div>
    )
}

export default PageNotFound
