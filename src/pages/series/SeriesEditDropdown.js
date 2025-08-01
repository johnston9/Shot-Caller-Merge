import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React from "react";
import styles from "../../styles/PostDropdown.module.css";

const EditDeleteIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    }}
  />
));

export const SeriesEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={EditDeleteIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          style={{ cursor: "pointer" }}
          as="span"
          onClick={(e) => {
            e.stopPropagation();
            history.push(
              `/${localStorage.getItem("projectSlug")}/series/edit/${id}`
            );
          }}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> Edit
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
