/* Component containing all the dropdowns and their icons used to edit
   and delete items and select categories
 * Contains:
 * The EditDeleteIcon and PostDropdown which is used throughout
  to allow edit and delete functions in posts, scenes e.t.c
 * The EditProfileIcon and ProfileEditDropdown to allow 
   users to edit their profiles
 * The DepartmentIcon and DeptDropdown to choose which category in 
   a department on the Scene page the user wants to open 
 * CURRENTLY IT IS NOT DISPLAYING CORRECTLY AND NEEDS FIXING 
   FOR X, Y AND Z POSITIONING
   THIS MAY BE REPLACED BY 2 LINKS ON THE IMAGE INSTEAD */
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/PostDropdown.module.css";
import { useHistory } from "react-router-dom";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Icon for the PostDropdown
const EditDeleteIcon = React.forwardRef(({ onClick }, ref) => (

  <>
    <OverlayTrigger placement="top" overlay={<Tooltip>Edit/delete</Tooltip>}>
      <i
        className={`fas fa-ellipsis-v ${styles.Dots}`}
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      />
    </OverlayTrigger>
  </>
));

// Icon for the DeptDropdown
const DepartmentIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>Scene Posts by Category</Tooltip>}
  >
    <i
      className="fas fa-ellipsis-v pl-5 pb-5 "
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  </OverlayTrigger>
));

// Icon for the ProfileEditDropdown
const EditProfileIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>Edit Profile/Change Username or Password</Tooltip>}
  >
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  </OverlayTrigger>
));

/* Dropdown which is used throughout
   to allow edit and delete functions in posts, scenes e.t.c
 * IT'S INITIAL POSITION IS ALWAYS ON THE VERY TOP OF THE PAGE */
export const PostDropdown = ({ handleEdit, handleDelete }) => {
  // Modal to display to let user confirm delete
  const currentUser = useCurrentUser();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseDelete = () => {
    handleDelete();
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
      {/* {
        currentUser?.groups[0]?.name !== "Crew" && */}
        <Dropdown>
          <Dropdown.Toggle as={EditDeleteIcon} />

          <Dropdown.Menu
            className="text-center"
            popperConfig={{ strategy: "fixed" }}
          >
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={handleEdit}
              aria-label="edit"
            >
              <i className="fas fa-edit" />
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={handleShow}
              aria-label="delete"
            >
              <i className="fas fa-trash-alt" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      {/* } */}
    </>
  );
};

/* Dropdown to allow 
   users to edit their profiles */
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={EditProfileIcon} />
      <Dropdown.Menu className="px-0" popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item
          onClick={() =>
            history.push(
              `/${localStorage.getItem("projectSlug")}/profiles/${id}/edit`
            )
          }
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> Edit Profile
        </Dropdown.Item>
        {/* <Dropdown.Item
          onClick={() =>
            history.push(
              `/${localStorage.getItem(
                "projectSlug"
              )}/profiles/${id}/edit/username`
            )
          }
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          Change Username
        </Dropdown.Item> */}
        <Dropdown.Item
          onClick={() =>
            history.push(
              `/${localStorage.getItem(
                "projectSlug"
              )}/profiles/${id}/edit/password`
            )
          }
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

/* Dropdown to allow users to choose which category in 
   a department on the Scene page the user wants to open
 * IT'S INITIAL POSITION IS ALWAYS BEHIND THE THE ITEM IN
   THE COL BESIDE IT ON MOBILE
   */
export function DeptDropdown({ handleClick }) {
  return (
    <Dropdown className={`${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DepartmentIcon} />
      <Dropdown.Menu
        className={` ${styles.Menu}`}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.Menu1}
          onClick={() => handleClick("requirements")}
          aria-label="select requirements"
        >
          <i className="fas fa-play" /> Requirements
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.Menu1}
          onClick={() => handleClick("workspace")}
          aria-label="select workspace"
        >
          <i className="fas fa-play" /> Workspace
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.Menu1}
          onClick={() => handleClick("finals")}
          aria-label="select finals"
        >
          <i className="fas fa-play" /> Finals
        </Dropdown.Item>
        {/* <Dropdown.Item
          className={styles.Menu1}
          onClick={() => handleClick("shooting")}
          aria-label="select shooting"
        >
          <i className="fas fa-play" /> Shooting
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.Menu1}
          onClick={() => handleClick("info")}
          aria-label="select info"
        >
          <i className="fas fa-play" /> Info
        </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}
