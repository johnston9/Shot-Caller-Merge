import { Button, Dropdown, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import styles from "../../styles/PostDropdown.module.css";

const EditDeleteIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger placement="top" overlay={<Tooltip>Edit/delete</Tooltip>}>
    <i
    className="fas fa-ellipsis-v"
    style={{
      color: "#3B3434",
    }}
    ref={ref}
    onClick={(e) => {
      // e.preventDefault();
      // e.stopPropagation();
      onClick(e);
    }}
  />
  </OverlayTrigger>
));

export const EpisodeEditDropdown = ({ episodeId, handleEpisodeDelete }) => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseDelete = () => {
    handleEpisodeDelete(episodeId);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Dropdown className={``} drop="left">
        <Dropdown.Toggle as={EditDeleteIcon} />
        <Dropdown.Menu
          className="text-center"
          popperConfig={{ strategy: "fixed" }}
        >
          <Dropdown.Item
            style={{ cursor: "pointer" }}
            // as="span"
            onClick={(e) => {
              e.stopPropagation();
              history.push(
                `/${localStorage.getItem(
                  "projectSlug"
                )}/episodes/edit/${episodeId}`
              );
            }}
            aria-label="edit-profile"
            className={styles.DropdownItem}
          >
            <i
              className="fas fa-edit"
              style={{
                color: "#3B3434",
              }}
            />
          </Dropdown.Item>
          <Dropdown.Item
            style={{ cursor: "pointer" }}
            // as="span"
            onClick={(e) => {
              e.stopPropagation();
              handleShow();
            }}
            aria-label="edit-profile"
            className={styles.DropdownItem}
          >
            <i
              className="fas fa-trash"
              style={{
                color: "#3B3434",
              }}
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
