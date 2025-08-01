/* The Navbar Component
   Currently the activeClassName item is working but is throwing an
   error in the console so is commented out on each link
   Am looking for a way to resolve this issue */
import React, { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo2.png";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import useDropdownClick from "../hooks/useDropdownClick";
import { removeTokenTimestamp } from "../utils/utils";
import { axiosInstanceNoAuth } from "../api/axiosDefaults";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  // Retrieve the "episode" parameter
  const epi = params.get("episode");
  const pro = params.get("project");
  const episodeTitle = params.get("episodeTitle");

  // Television
  const projectCategoryType =
    currentUser?.project_category_type &&
    JSON.parse(currentUser.project_category_type);

  const setCurrentUser = useSetCurrentUser();

  const {
    expanded,
    setExpanded,
    ref,
    refw,
    refw1,
    refw2,
    refw3,
    refw4,
    reff,
    reff1,
    reff2,
    reff3,
    reff4,
    reff5,
    reff6,
    refm,
    refm1,
    refm2,
    refin,
    refin2,
    refs,
    refs1,
    refs2,
    refs3,
    refp,
    refp1,
    refp2,
    refh1,
  } = useDropdownClick();
  const [videos, setVideos] = useState([]);

  const history = useHistory();

  const howItWorksIcons = (
    <>
      <NavDropdown
        title={
          <span style={{ color: "#555555" }}>
            <i className="navicon fas fa-stream pt-1"></i>Tutorials
          </span>
        }
        ref={refh1}
        id="nav-dropdown2"
        // activeClassName={styles.Active}
        className={`${styles.NavLink} `}
      >
        {videos?.length > 0 &&
          videos?.map((v) => (
            <NavDropdown.Item key={v.id}>
              <NavLink
                className={` ${styles.NavLink} `}
                activeClassName={styles.Active}
                // ref={reff2}
                to={`/${localStorage.getItem("projectSlug")}/tutorials/${
                  v.video_id
                }/${v.title}`}
              >
                <i className="navicon fas fa-play"></i>
                {v.title}
              </NavLink>
            </NavDropdown.Item>
          ))}
      </NavDropdown>
    </>
  );

  const handleSignOut = async () => {
    /* Function to sign user out and remove the TokenTimestamp */

    window.location.reload(true);
    window.location.href = `/${localStorage.getItem("projectSlug")}/signin`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("pk");
    setCurrentUser(null);

    try {
      await axiosInstanceNoAuth.post("api-auth/logout/");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("pk");
      setCurrentUser(null);

      removeTokenTimestamp();
      window.location.reload(true);
      window.location.href = `/${localStorage.getItem("projectSlug")}/signin`;
      // history.push(`/${localStorage.getItem("projectSlug")}/signin`);
    } catch (err) {}
  };

  const loggedInIcons = (
    <>
      {/*  home */}
      {/* <NavLink className={`mt-1 pt-2  ${styles.NavLink} `} to="/home">
        <i className="navicon fas fa-play"></i>Home
      </NavLink> */}
      {/*  workspace */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        <NavLink
          className={`noluv ${styles.HomeLink} `}
          to={`/${localStorage.getItem("projectSlug")}/home`}
        >
          <i className="navicon fas fa-stream"></i>Home
        </NavLink>
      </div>

      {currentUser &&
        currentUser?.groups?.length > 0 &&
        currentUser?.groups[0]?.name !== "Cast" && (
          <NavDropdown
            title={
              <span style={{ color: "#555555" }}>
                <i className="navicon fas fa-stream pt-1"></i>Workspace
              </span>
            }
            ref={refw}
            id="nav-dropdown"
            // activeClassName={styles.Active}
            className={`mt-1 ${styles.NavLink} luv `}
          >
            <NavDropdown.Item>
              <NavLink
                ref={refw1}
                className={`noluv ${styles.DropLink} `}
                to={`/${localStorage.getItem("projectSlug")}/scenes`}
              >
                <i className="navicon fas fa-stream"></i>Scenes
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                ref={refw2}
                className={`noluv ${styles.DropLink} `}
                to={
                  projectCategoryType !== "Television"
                    ? `/${localStorage.getItem(
                        "projectSlug"
                      )}/findposts/departments`
                    : `/${localStorage.getItem(
                        "projectSlug"
                      )}/findposts/departments/episodes`
                }
              >
                <i className="navicon fas fa-stream"></i>Find Posts
              </NavLink>
            </NavDropdown.Item>
            {currentUser &&
              currentUser?.groups?.length > 0 &&
              (currentUser?.groups[0]?.name === "Admin" ||
                currentUser?.groups[0]?.name === "Superadmin" ||
                currentUser?.groups[0]?.name === "Admincreative") &&
              projectCategoryType !== "Television" && (
                <NavDropdown.Item>
                  <NavLink
                    ref={refw3}
                    className={`${styles.DropLink} `}
                    to={`/${localStorage.getItem("projectSlug")}/scenes/create`}
                  >
                    <i className="far fa-plus-square"></i>Add scene
                  </NavLink>
                </NavDropdown.Item>
              )}

            {/* TODO */}
            {projectCategoryType === "Television" && (
              <NavDropdown.Item>
                <NavLink
                  ref={refw3}
                  className={`${styles.DropLink} `}
                  to={`/${localStorage.getItem("projectSlug")}/episodes/create`}
                >
                  <i className="far fa-plus-square"></i>Episodes
                </NavLink>
              </NavDropdown.Item>
            )}

            {projectCategoryType !== "Television" && (
              <NavDropdown.Item>
                <NavLink
                  ref={refw4}
                  className={`${styles.DropLink} `}
                  to={`/${localStorage.getItem("projectSlug")}/script`}
                >
                  <i className="far fa-plus-square"></i>Script
                </NavLink>
              </NavDropdown.Item>
            )}
          </NavDropdown>
        )}

      {/* characters locations departments-xtra */}
      {currentUser &&
        currentUser?.groups?.length > 0 &&
        currentUser?.groups[0]?.name !== "Cast" && (
          <NavDropdown
            title={
              <span
                style={{ color: "#555555" }}
                className={` ${styles.Title} `}
              >
                <i className="navicon fas fa-stream pt-1"></i>Features
              </span>
            }
            ref={reff}
            id="nav-dropdown2"
            className={`mt-1 luv ${styles.NavLink} `}
          >
            <NavDropdown.Item>
              <NavLink
                ref={reff1}
                className={`noluv ${styles.NavLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/characters`}
              >
                <i className="navicon fas fa-stream"></i>Characters
              </NavLink>
            </NavDropdown.Item>
            {currentUser &&
              currentUser?.groups?.length > 0 &&
              (currentUser?.groups[0]?.name === "Admin" ||
                currentUser?.groups[0]?.name === "Superadmin" ||
                currentUser?.groups[0]?.name === "Admincreative") && (
                <NavDropdown.Item>
                  <NavLink
                    ref={reff2}
                    className={`noluv mt-2 ${styles.NavLink} noluv`}
                    to={`/${localStorage.getItem(
                      "projectSlug"
                    )}/characters/create`}
                  >
                    <i className="far fa-plus-square"></i>Add Character
                  </NavLink>
                </NavDropdown.Item>
              )}
            <NavDropdown.Item>
              <NavLink
                ref={reff3}
                className={`mt-2 ${styles.NavLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/locations`}
              >
                <i className="navicon fas fa-stream"></i>Locations
              </NavLink>
            </NavDropdown.Item>
            {currentUser &&
              currentUser?.groups?.length > 0 &&
              (currentUser?.groups[0]?.name === "Admin" ||
                currentUser?.groups[0]?.name === "Superadmin" ||
                currentUser?.groups[0]?.name === "Admincreative") && (
                <NavDropdown.Item>
                  <NavLink
                    ref={reff4}
                    className={`mt-2 ${styles.NavLink} noluv `}
                    to={`/${localStorage.getItem(
                      "projectSlug"
                    )}/locations/create`}
                  >
                    <i className="far fa-plus-square"></i>Add Locations
                  </NavLink>
                </NavDropdown.Item>
              )}
            <NavDropdown.Item>
              <NavLink
                ref={reff5}
                className={` ${styles.NavLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/depts/general`}
              >
                <i className="navicon fas fa-stream"></i>Depts-Xtra
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                ref={reff6}
                className={`mt-2 ${styles.NavLink} noluv`}
                to={`/${localStorage.getItem(
                  "projectSlug"
                )}/department/posts/create`}
              >
                <i className="far fa-plus-square"></i>Add Depts-Xtra
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        )}

      {/*  moodshots */}
      {currentUser &&
        currentUser?.groups?.length > 0 &&
        currentUser?.groups[0]?.name !== "Cast" && (
          <NavDropdown
            title={
              <span style={{ color: "#555555" }}>
                <i className="luv navicon fas fa-stream pt-1"></i>Moodboards
              </span>
            }
            ref={refm}
            id="nav-dropdown3"
            // activeClassName={styles.Active}
            className={`${styles.NavLink} `}
          >
            <NavDropdown.Item>
              <NavLink
                ref={refm1}
                className={` ${styles.DropLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/moodshots`}
              >
                <i className="navicon fas fa-stream"></i>Moodboards
              </NavLink>
            </NavDropdown.Item>
            {currentUser &&
              currentUser?.groups?.length > 0 &&
              (currentUser?.groups[0]?.name === "Admin" ||
                currentUser?.groups[0]?.name === "Superadmin" ||
                currentUser?.groups[0]?.name === "Admincreative") && (
                <NavDropdown.Item>
                  <NavLink
                    ref={refm2}
                    className={`${styles.DropLink} noluv`}
                    to={`/${localStorage.getItem(
                      "projectSlug"
                    )}/moodshot/create`}
                  >
                    <i className="far fa-plus-square"></i>Add Moodboard
                  </NavLink>
                </NavDropdown.Item>
              )}
            <NavDropdown.Item>
              <NavLink
                ref={refin}
                className={` ${styles.DropLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/indexcards`}
              >
                <i className="navicon fas fa-stream"></i>Index Cards
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                ref={refin2}
                className={` ${styles.DropLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/series`}
              >
                <i className="navicon fas fa-stream"></i>Index Shots
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        )}

      {/*  Crew Info Schedule Callsheet */}
      <NavDropdown
        title={
          <span style={{ color: "#555555" }}>
            <i className="luv navicon fas fa-stream pt-1"></i>Production
          </span>
        }
        ref={refs}
        id="nav-dropdown4"
        // activeClassName={styles.Active}
        className={`${styles.NavLink} `}
      >
        {currentUser &&
          currentUser?.groups?.length > 0 &&
          currentUser?.groups[0]?.name !== "Cast" &&
          currentUser?.groups[0]?.name !== "Crew" &&
          currentUser?.groups[0]?.name !== "Admincreative" && (
            <NavDropdown.Item>
              <NavLink
                ref={refs1}
                className={`${styles.DropLink} noluv`}
                to={`/${localStorage.getItem("projectSlug")}/crewinfo`}
              >
                <i className="navicon fas fa-stream"></i>Crew Info
              </NavLink>
            </NavDropdown.Item>
          )}
        {currentUser &&
          currentUser?.groups?.length > 0 &&
          (currentUser?.groups[0]?.name === "Admin" ||
            currentUser?.groups[0]?.name === "Superadmin" ||
            currentUser?.groups[0]?.name === "Admincreative" ||
            currentUser?.groups[0]?.name === "Crew") && (
            <NavDropdown.Item>
              <NavLink
                ref={refs2}
                className={` ${styles.DropLink} noluv`}
                to={
                  projectCategoryType !== "Television"
                    ? `/${localStorage.getItem("projectSlug")}/days`
                    : `/${localStorage.getItem("projectSlug")}/days/episodes`
                }
              >
                <i className="navicon fas fa-stream"></i>Schedule
              </NavLink>
            </NavDropdown.Item>
          )}
        <NavDropdown.Item>
          <NavLink
            ref={refs3}
            className={`${styles.DropLink} noluv`}
            to={
              projectCategoryType !== "Television"
                ? `/${localStorage.getItem("projectSlug")}/callsheets`
                : `/${localStorage.getItem("projectSlug")}/callsheets/episodes`
            }
          >
            <i className="navicon fas fa-stream"></i>Callsheets
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>

      {howItWorksIcons}

      <NavLink
        className={`${styles.NavLink} `}
        onClick={handleSignOut}
        to={`/${localStorage.getItem("projectSlug")}/signin`}
      >
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      {/* new profiles */}
      <NavDropdown
        title={
          <span style={{ color: "#555555" }} className={styles.Title}>
            <Avatar src={currentUser?.profile_image} text="" height={40} />
            Profiles
          </span>
        }
        ref={refp}
        id="nav-dropdown5"
        // activeClassName={styles.Active}
        className={`py-0 ${styles.NavLink} `}
      >
        {currentUser &&
          currentUser?.groups?.length > 0 &&
          currentUser?.groups[0]?.name !== "Cast" && (
            <NavDropdown.Item>
              <NavLink
                className={` ${styles.DropLink} `}
                ref={refp1}
                to={`/${localStorage.getItem("projectSlug")}/profiles`}
              >
                <i className="navicon fas fa-play"></i>Profiles
              </NavLink>
            </NavDropdown.Item>
          )}
        <NavDropdown.Item>
          <NavLink
            className={`mt-2 ${styles.NavLink} `}
            ref={refp2}
            to={`/${localStorage.getItem("projectSlug")}/profiles/${
              currentUser?.profile_id
            }`}
          >
            <i className="navicon fas fa-play"></i>My Profile
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        // activeClassName={styles.Active}
        to={`/${localStorage.getItem("projectSlug")}/signin`}
      >
        <i className="fas fa-play"></i>Sign in
      </NavLink>
      {/* <NavLink
        className={styles.NavLink}
        // activeClassName={styles.Active}
        to={`/${localStorage.getItem("projectSlug")}/signup`}
      >
        <i className="fas fa-play"></i>Sign up
      </NavLink> */}
    </>
  );

  const fetchVideos = async () => {
    /* Function to sign a user out */
    try {
      const res = await axiosInstanceNoAuth.get(
        `${localStorage.getItem("projectSlug")}/api/videos/`
      );

      // console.log(res);
      setVideos(res?.data?.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Navbar
      expanded={expanded}
      className={`my-0 py-0 ${styles.NavBar} `}
      expand="lg"
      fixed="top"
    >
      <NavLink to={`/${localStorage.getItem("projectSlug")}/home`}>
        <Navbar.Brand className="mr-1">
          <img src={logo} alt="logo" height="40" className="pb-1" /> Shot Caller
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle
        onClick={() => setExpanded(!expanded)}
        ref={ref}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
          {currentUser && localStorage.getItem("user")
            ? loggedInIcons
            : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
