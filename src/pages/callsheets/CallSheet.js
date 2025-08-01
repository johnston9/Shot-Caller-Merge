/* Component to display all the Callsheet data
 * Contains the LocationsPage, TalentPage, BgPage,
   SchedulePage, NotesPage, CrewCallsPage, AdvancedSchedPage, 
   WalkiesPage, HospitalPage (mobile only) 
   and ContactsPage (mobile only) Components.
 * Contains the ContactUs component which sends an email to all crew
   and relevent cast menbers with the Callsheet URL 
 * Contains the 2 functions set the Crew and Cast Personal Call Times*/
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import {
  useCrewEmailsContext,
  useCrewInfoContext,
} from "../../contexts/BaseCallContext";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import { PostDropdown } from "../../components/PostDropdown";
import TalentPage from "./callsheetSections/TalentPage";
import BgPage from "./callsheetSections/BgPage";
import SchedulePage from "./callsheetSchedule/SchedulePage";
import LocationsPage from "./callsheetSections/LocationsPage";
import NotesPage from "./callsheetSections/NotesPage";
import CrewCallsPage from "./callsheetSections/CrewCallsPage";
import AdvancedSchedPage from "./callsheetSchedule/AdvancedSchedPage";
import ContactsPage from "./callsheetSections/MobileViewContactsPage";
import WalkiesPage from "./callsheetSections/WalkiesPage";
import HospitalPage from "./callsheetSections/HospitalPage";
import Weather from "../../components/Weather";
import { ContactUs } from "../../components/ContactUs";
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config";
import useHostName from "../../hooks/useHostName";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Callsheets.module.css";

const CallSheet = (props) => {
  // eslint-disable-next-line
  const host = useHostName();
  const cUser = useCurrentUser();
  const crewEmailList = useCrewEmailsContext();
  // console.log(crewEmailList);
  const crewInfoOne = useCrewInfoContext();
  const history = useHistory();
  const [yourcalltime, setYourcalltime] = useState("");
  const [yourCastcalltime, setYourCastcalltime] = useState("");
  const [yourCastUser, setYourCastUser] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showHos, setShowHos] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  const [showWalkies, setShowWalkies] = useState(false);
  const [showSched, setShowSched] = useState(false);
  const [showTalent, setShowTalent] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showCrew, setShowCrew] = useState(false);
  const [showAdvanSched, setShowAdvanSched] = useState(false);
  const queryString = window.location.search;

  // Use URLSearchParams to parse the query string
  const params = new URLSearchParams(queryString);
  const epi = params.get("episode");
  const project = params.get("project");
  const episodeTitle = params.get("episodeTitle");
  // const [forcast, setForcast] = useState("");
  // const [temp, setTemp] = useState("");
  // const [rise, setRise] = useState("");
  // const [setsun, setSetsun] = useState("");

  const {
    production_name,
    production_company,
    company_phone,
    company_email,
    company_address_line_1,
    company_address_line_2,
    company_address_line_3,
    company_address_line_4,
    company_logo,
    total_shoot_days,
    director_name,
    director_phone,
    producer_name,
    producer_phone,
    pro_coordinator_name,
    pro_coordinator_phone,
    // eslint-disable-next-line
    upm_name,
    upm_phone,
    ad_1_name,
    ad_1_phone,
    // eslint-disable-next-line
    dop_name,
    dop_phone,
    // eslint-disable-next-line
    set_medic_name,
    set_medic_email,
    set_medic_phone,
  } = crewInfoOne || {};

  const {
    scenes,
    // eslint-disable-next-line
    admin,
    handleMount,
    currentUser,
    cast,
    castEmails,
    callsheet,
    background,
    // info
    id,
    day,
    date,
    day_id,
    unit_call,
    talent_call,
    shoot_call,
    breakfast,
    lunch,
    wrap,
    location_1_name,
    nearest_hospital,
    hospital_address_line_1,
    hospital_address_line_2,
    hospital_address_line_3,
    hospital_address_line_4,
    weather_location,
    important_info,
    transport_info,
    department_info,
    // production
    director_calltime,
    producer_calltime,
    pro_coordinator_calltime,
    travel_coordinator_calltime,
    upm_calltime,
    production_pa_calltime,
    script_supervisor_calltime,
    legal_calltime,
    set_medic_calltime,
    oth_production_pos_1_calltime,
    oth_production_pos_2_calltime,
    oth_production_pos_3_calltime,
    oth_production_pos_4_calltime,
    oth_production_pos_5_calltime,
    // art
    art_director_calltime,
    art_assistant_calltime,
    set_decorator_calltime,
    set_dresser_calltime,
    lead_man_calltime,
    dresser_calltime,
    prop_master_calltime,
    ass_prop_master_calltime,
    prop_buyer_calltime,
    // cam
    dop_calltime,
    camera_operator_calltime,
    camera_ass_1_calltime,
    camera_ass_2_calltime,
    dit_calltime,
    steadicam_calltime,
    camera_pa_calltime,
    oth_camera_pos_1_calltime,
    oth_camera_pos_2_calltime,
    oth_camera_pos_3_calltime,
    oth_camera_pos_4_calltime,
    oth_camera_pos_5_calltime,
    // casting
    casting_director_calltime,
    extras_casting_calltime,
    ad_1_calltime,
    ad_2_calltime,
    ad_3_calltime,
    ad_4_calltime,
    ad_5_calltime,
    pro_assistant_1_calltime,
    pro_assistant_2_calltime,
    pro_assistant_3_calltime,
    pro_assistant_4_calltime,
    pro_assistant_5_calltime,
    // ele/Grip
    gaffer_calltime,
    best_boy_electric_calltime,
    electric_3_calltime,
    electric_4_calltime,
    keygrip_calltime,
    best_boy_grip_calltime,
    dolly_grip_calltime,
    swing_ge1_calltime,
    swing_ge2_calltime,
    swing_ge3_calltime,
    swing_ge4_calltime,
    swing_ge5_calltime,
    // locations
    location_mngr_calltime,
    location_security_calltime,
    location_ass_1_calltime,
    location_ass_2_calltime,
    location_ass_3_calltime,
    location_ass_4_calltime,
    // makeup
    key_hairmakeup_calltime,
    key_hairstylist_calltime,
    sfx_makeup_calltime,
    sfx_makeup_assistant_calltime,
    makeup_artist_1_calltime,
    makeup_artist_2_calltime,
    makeup_artist_3_calltime,
    makeup_artist_4_calltime,
    makeup_artist_5_calltime,
    // post/add-pos
    editor_calltime,
    fx_calltime,
    add_pos_1_calltime,
    add_pos_2_calltime,
    add_pos_3_calltime,
    add_pos_4_calltime,
    add_pos_5_calltime,
    add_pos_6_calltime,
    add_pos_7_calltime,
    add_pos_8_calltime,
    add_pos_9_calltime,
    add_pos_10_calltime,
    // add pos 11-20
    add_pos_11_calltime,
    add_pos_12_calltime,
    add_pos_13_calltime,
    add_pos_14_calltime,
    add_pos_15_calltime,
    add_pos_16_calltime,
    add_pos_17_calltime,
    add_pos_18_calltime,
    add_pos_19_calltime,
    add_pos_20_calltime,
    // script/cater
    writer_calltime,
    catering_co_1_calltime,
    catering_co_2_calltime,
    catering_co_3_calltime,
    craft_service_calltime,
    crafty_ass_calltime,
    // sound/transport
    sound_mixer_calltime,
    boom_operator_calltime,
    sound_assistant_1_calltime,
    sound_assistant_2_calltime,
    transport_captain_calltime,
    transport_manager_1_calltime,
    transport_manager_2_calltime,
    head_driver_calltime,
    car1_calltime,
    car2_calltime,
    car3_calltime,
    truck1_calltime,
    truck2_calltime,
    truck3_calltime,
    // stunts
    stunt_coordinator_calltime,
    stunts_1_calltime,
    stunts_2_calltime,
    stunts_3_calltime,
    stunts_4_calltime,
    stunts_5_calltime,
    // wardrobe
    costume_designer_calltime,
    ass_costume_designer_calltime,
    wardrobe_assistant_1_calltime,
    wardrobe_assistant_2_calltime,
    wardrobe_assistant_3_calltime,
    wardrobe_assistant_4_calltime,
    wardrobe_assistant_5_calltime,
  } = props;

  console.log(currentUser);

  useEffect(() => {
    /* Function to set the Cast Personal Call Times in yourCall 
           By filtering the cast array and by the current user */
    const actorcalldata = cast.results.filter(
      (obj) => obj.username === currentUser
    );
    const actorcall = actorcalldata[0]?.call || "";
    const actorUsername = actorcalldata[0]?.username || "";
    setYourCastcalltime(actorcall);
    setYourCastUser(actorUsername);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    /* Function to set the Crew Personal Call Times in yourCall 
           by using the crew currentuser name to return their
           corrisponding Call Time */
    const yourcall = (currentUser) => {
      switch (currentUser) {
        // production
        case "director":
          return director_calltime;
        case "producer":
          return producer_calltime;
        case "procoord":
          return pro_coordinator_calltime;
        case "davey":
          return gaffer_calltime;
        case "unitpm":
          return upm_calltime;
        case "travelco":
          return travel_coordinator_calltime;
        case "produpa":
          return production_pa_calltime;
        case "addpro1":
          return oth_production_pos_1_calltime;
        case "addpro2":
          return oth_production_pos_2_calltime;
        case "addpro3":
          return oth_production_pos_3_calltime;
        case "addpro4":
          return oth_production_pos_4_calltime;
        case "addpro5":
          return oth_production_pos_5_calltime;
        case "scriptsup":
          return script_supervisor_calltime;
        case "setmedic":
          return set_medic_calltime;
        case "legalcon":
          return legal_calltime;
        // casting / assistant directors
        case "castdir":
          return casting_director_calltime;
        case "xtracas":
          return extras_casting_calltime;
        case "astdir1":
          return ad_1_calltime;
        case "astdir2":
          return ad_2_calltime;
        case "astdir3":
          return ad_3_calltime;
        case "astdir4":
          return ad_4_calltime;
        case "astdir5":
          return ad_5_calltime;
        case "proast1":
          return pro_assistant_1_calltime;
        case "proast2":
          return pro_assistant_2_calltime;
        case "proast3":
          return pro_assistant_3_calltime;
        case "proast4":
          return pro_assistant_4_calltime;
        case "proast5":
          return pro_assistant_5_calltime;
        // camera
        case "dophoto":
          return dop_calltime;
        case "camerop":
          return camera_operator_calltime;
        case "astcam1":
          return camera_ass_1_calltime;
        case "astcam2":
          return camera_ass_2_calltime;
        case "digitec":
          return dit_calltime;
        case "steadicam":
          return steadicam_calltime;
        case "camerapa":
          return camera_pa_calltime;
        case "addcam1":
          return oth_camera_pos_1_calltime;
        case "addcam2":
          return oth_camera_pos_2_calltime;
        case "addcam3":
          return oth_camera_pos_3_calltime;
        case "addcam4":
          return oth_camera_pos_4_calltime;
        case "addcam5":
          return oth_camera_pos_5_calltime;
        // sound transport
        case "soundmix":
          return sound_mixer_calltime;
        case "boomop":
          return boom_operator_calltime;
        case "sound1":
          return sound_assistant_1_calltime;
        case "sound2":
          return sound_assistant_2_calltime;
        case "trancap":
          return transport_captain_calltime;
        case "transpo1":
          return transport_manager_1_calltime;
        case "transpo2":
          return transport_manager_2_calltime;
        case "headrive":
          return head_driver_calltime;
        case "truck1":
          return truck1_calltime;
        case "truck2":
          return truck2_calltime;
        case "truck3":
          return truck3_calltime;
        case "carone":
          return car1_calltime;
        case "cartwo":
          return car2_calltime;
        case "carthree":
          return car3_calltime;
        // art
        case "prodesign":
          return art_director_calltime;
        case "artdirect":
          return art_director_calltime;
        case "artassist":
          return art_assistant_calltime;
        case "setdecor":
          return set_decorator_calltime;
        case "setdress":
          return set_dresser_calltime;
        case "leadman":
          return lead_man_calltime;
        case "dresser":
          return dresser_calltime;
        case "propmast":
          return prop_master_calltime;
        case "propast":
          return ass_prop_master_calltime;
        case "propbuy":
          return sound_assistant_1_calltime;
        case "armorer":
          return prop_buyer_calltime;
        // elec / grip
        case "gaffer":
          return gaffer_calltime;
        case "bbelect":
          return best_boy_electric_calltime;
        case "elect3":
          return electric_3_calltime;
        case "elect4":
          return electric_4_calltime;
        case "keygrip":
          return keygrip_calltime;
        case "bbgrip":
          return best_boy_grip_calltime;
        case "dolgrip":
          return dolly_grip_calltime;
        case "swing1":
          return swing_ge1_calltime;
        case "swing2":
          return swing_ge2_calltime;
        case "swing3":
          return swing_ge3_calltime;
        case "swing4":
          return swing_ge4_calltime;
        case "swing5":
          return swing_ge5_calltime;
        // locations locmngr
        case "locmngr":
          return location_mngr_calltime;
        case "locast1":
          return location_ass_1_calltime;
        case "locast2":
          return location_ass_2_calltime;
        case "locast3":
          return location_ass_3_calltime;
        case "locast4":
          return location_ass_4_calltime;
        case "locsecur":
          return location_security_calltime;
        // wardrobe
        case "cosdesign":
          return costume_designer_calltime;
        case "cosdesast":
          return ass_costume_designer_calltime;
        case "wardrobe1":
          return wardrobe_assistant_1_calltime;
        case "wardrobe2":
          return wardrobe_assistant_2_calltime;
        case "wardrobe3":
          return wardrobe_assistant_3_calltime;
        case "wardrobe4":
          return wardrobe_assistant_4_calltime;
        case "wardrobe5":
          return wardrobe_assistant_5_calltime;
        // makeup
        case "keymake":
          return key_hairmakeup_calltime;
        case "keyhair":
          return key_hairstylist_calltime;
        case "fxmake":
          return sfx_makeup_calltime;
        case "fxmakast":
          return sfx_makeup_assistant_calltime;
        case "makeup1":
          return makeup_artist_1_calltime;
        case "makeup2":
          return makeup_artist_2_calltime;
        case "makeup3":
          return makeup_artist_3_calltime;
        case "makeup4":
          return makeup_artist_4_calltime;
        case "makeup5":
          return makeup_artist_5_calltime;
        // post / additional
        case "editor":
          return editor_calltime;
        case "specfx":
          return fx_calltime;
        case "addcrew1":
          return add_pos_1_calltime;
        case "addcrew2":
          return add_pos_2_calltime;
        case "addcrew3":
          return add_pos_3_calltime;
        case "addcrew4":
          return add_pos_4_calltime;
        case "addcrew5":
          return add_pos_5_calltime;
        case "addcrew6":
          return add_pos_6_calltime;
        case "addcrew7":
          return add_pos_7_calltime;
        case "addcrew8":
          return add_pos_8_calltime;
        case "addcrew9":
          return add_pos_9_calltime;
        case "addcrew10":
          return add_pos_10_calltime;
        // additional 11- 20
        case "addcrew11":
          return add_pos_11_calltime;
        case "addcrew12":
          return add_pos_12_calltime;
        case "addcrew13":
          return add_pos_13_calltime;
        case "addcrew14":
          return add_pos_14_calltime;
        case "addcrew15":
          return add_pos_15_calltime;
        case "addcrew16":
          return add_pos_16_calltime;
        case "addcrew17":
          return add_pos_17_calltime;
        case "addcrew18":
          return add_pos_18_calltime;
        case "addcrew19":
          return add_pos_19_calltime;
        case "addcrew20":
          return add_pos_20_calltime;
        // script /catering
        case "writer":
          return writer_calltime;
        case "cater1":
          return catering_co_1_calltime;
        case "cater2":
          return catering_co_2_calltime;
        case "cater3":
          return catering_co_3_calltime;
        case "crafts":
          return craft_service_calltime;
        case "crafty":
          return crafty_ass_calltime;
        // stunt
        case "stuntco":
          return stunt_coordinator_calltime;
        case "stunts1":
          return stunts_1_calltime;
        case "stunts2":
          return stunts_2_calltime;
        case "stunts3":
          return stunts_3_calltime;
        case "stunts4":
          return stunts_4_calltime;
        case "stunts5":
          return stunts_5_calltime;
        default:
          return "";
      }
    };
    setYourcalltime(yourcall(currentUser));
    // eslint-disable-next-line
  }, []);

  const handleEdit = () => {
    history.push(
      `/${localStorage.getItem("projectSlug")}/callsheet/edit/${day_id}/${
        epi && project && episodeTitle
          ? `?episode=${epi}&project=${project}&episodeTitle=${episodeTitle}`
          : ""
      }`
    );
  };

  const handleDelete = async () => {
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosReq.delete(`callsheetsnew/${id}/`);
        history.goBack();
      } else {
        await axiosInstance.delete(
          `${localStorage.getItem("projectSlug")}/callsheetsnew/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        history.goBack();
      }
    } catch (err) {}
  };

  // Function to find the advancedDay number
  const advancedDay = parseInt(day) + 1;

  return (
    <div className={`${styles.White} px-3`}>
      <TopBox
        work={`Call Sheet`}
        title={`Day ${day}`}
        title2={date}
        episodeTitle={`Episode ${episodeTitle}`}
      />
      <Row>
        <Col xs={6}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Col>
        {cUser?.groups[0]?.name === "Cast" || cUser?.groups[0]?.name === "Crew" || cUser?.groups[0]?.name === "Admincreative" ? "" : <Col xs={6}>
          {admin && (
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowSend((showSend) => !showSend)}
            >
              SEND
            </Button>
          )}
        </Col>}
      </Row>
      {/* MEDIUM pink fff6f6*/}
      <div className="d-none d-md-block mt-2">
        {!showSend ? (
          ""
        ) : (
          <ContactUs
            setShowSend={setShowSend}
            crewEmailList={crewEmailList}
            castEmails={castEmails}
            day1={day}
            date1={date}
          />
        )}
        <Row>
          <Col
            className={`mb-1 pl-3 text-center `}
            md={{ span: 10, offset: 1 }}
          >
            <span className={` ${styles.MovieName}`}>{production_name}</span>
          </Col>

          {cUser &&
            cUser?.groups?.length > 0 &&
            (cUser?.groups[0]?.name === "Admin" ||
              cUser?.groups[0]?.name === "Superadmin") && (
              <Col className={`text-center `} md={1}>
                <PostDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </Col>
            )}
        </Row>
        <Row className="px-3">
          <Col md={4}>
            <Row className="mb-1">
              <Col xs={{ span: 8, offset: 0 }}>
                <h5 className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  {production_company}{" "}
                </h5>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  {company_address_line_1}{" "}
                </p>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  {company_address_line_2}{" "}
                </p>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  {company_address_line_3}{" "}
                </p>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  {company_address_line_4}{" "}
                </p>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  Phone {company_phone}{" "}
                </p>
                <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>
                  Email {company_email}{" "}
                </p>
              </Col>
            </Row>
            {/* Producer */}
            <Row className="mt-3">
              <Col xs={12}>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Producer:</span>{" "}
                </p>
              </Col>
              <Col xs={12}>
                <p className={`${styles.WhiteAqua} mb-1`}>
                  {producer_name} - {producer_phone}{" "}
                </p>
              </Col>
            </Row>
            {/* pro-cor */}
            <Row>
              <Col xs={12}>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Pro Cord:</span>
                </p>
              </Col>
              <Col xs={12}>
                <p className={`${styles.WhiteAqua} mb-1`}>
                  {pro_coordinator_name} - {pro_coordinator_phone}
                </p>
              </Col>
            </Row>
            {/* Director */}
            <Row>
              <Col xs={12}>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Director:</span>
                </p>
              </Col>
              <Col xs={12}>
                <p className={`${styles.WhiteAqua} mb-1`}>
                  {director_name} - {director_phone}{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="text-center pb-0">
            {/* logo */}
            <div className={`mt-0`}>
              {company_logo && (
                <>
                  <div className="px-0">
                    <Image
                      className={styles.Logo}
                      src={company_logo}
                      alt="logo image"
                      height="200"
                    />
                  </div>
                </>
              )}
            </div>
            <h2 className="mt-3 mb-0 pb-0"> </h2>
            <div className="mt-2 mb-0 pb-0">
              <p className={`px-0 ${styles.UnitCallMedDate}`}>{date} </p>
            </div>
            <div className={`mt-3 mx-3 pb-0 px-2 ${styles.Border2}`}>
              <h2 className={` mb-0 pb-0 `}>Your Call</h2>
              {yourcalltime && (
                <p className={`px-1 mx-4 pb-0 ${styles.YourCallMed}`}>
                  {yourcalltime}{" "}
                </p>
              )}
              {yourCastcalltime && (
                <>
                  <p className={`px-1 my-0 mx-4 pb-0 ${styles.YourCallMed}`}>
                    {yourCastcalltime}{" "}
                  </p>
                </>
              )}
            </div>
            <div className={`mt-3 mx-3 pb-0 px-2 ${styles.Border2}`}>
              <h4 className="mt-0 mb-0 pb-0">Unit Call</h4>
              <p className={`mx-4 ${styles.UnitCallMed}`}>{unit_call} </p>
            </div>
          </Col>
          <Col className="pl-5" md={4}>
            {/* weather */}
            <Weather weather_location={weather_location} />
            <Row>
              <Col xs={6}>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Talent Call:</span>{" "}
                </p>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>First Shot:</span>
                </p>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Breakfast:</span>
                </p>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Lunch:</span>
                </p>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>Est. Wrap:</span>
                </p>
              </Col>
              <Col xs={6}>
                <p className={`${styles.WhiteAqua} mb-1`}>{talent_call} </p>
                <p className={`${styles.WhiteAqua} mb-1`}>{shoot_call}</p>
                <p className={`${styles.WhiteAqua} mb-1`}>{breakfast}</p>
                <p className={`${styles.WhiteAqua} mb-1`}>{lunch}</p>
                <p className={`${styles.WhiteAqua} mb-1`}>{wrap}</p>
              </Col>
            </Row>
            <p className={`mb-0 mt-1 `}>
              <span className={`${styles.Bold}`}>Nearest Hospital:</span>
            </p>
            <Row>
              <Col xs={12}>
                <p className={`mb-1 ${styles.WhiteAqua}`}>
                  {nearest_hospital}{" "}
                </p>
                <p className={`mb-1 ${styles.WhiteAqua}`}>
                  {hospital_address_line_1}{" "}
                </p>
                <p className={`mb-1 ${styles.WhiteAqua}`}>
                  {hospital_address_line_2}{" "}
                </p>
                <p className={`mb-1 ${styles.WhiteAqua}`}>
                  {hospital_address_line_3} {hospital_address_line_4}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="px-3">
          <Col xs={4}>
            {/* 1st AD */}
            <Row className="mt-2">
              <Col xs={12}>
                <p className={`mb-1`}>
                  <span className={`${styles.Bold}`}>1st AD:</span>
                </p>
              </Col>
              <Col xs={12}>
                <p className={`${styles.WhiteAqua} mb-1`}>
                  {ad_1_name} - {ad_1_phone}{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <div
              className={`mt-0 mx-3 py-0 px-2 text-center ${styles.Border2}`}
            >
              <p className={`mb-0 pt-1`}>
                <span className={`${styles.Bold}`}>First Location</span>
              </p>
              <h5 className={`mb-1 ${styles.WhiteAqua}`}>{location_1_name} </h5>
            </div>
          </Col>
          <Col xs={4} className="pl-5">
            <div className="mt-0">
              <span className={`${styles.UnitCallMedDay}`}>
                Day {day} of {total_shoot_days}{" "}
              </span>
            </div>
            {yourCastUser ? (
              <>
                <p className={`mb-0 mt-2 ${styles.WhiteAqua}`}>
                  <span className={`${styles.Bold}`}>Username: </span>
                  {yourCastUser} {currentUser}{" "}
                </p>
              </>
            ) : (
              <>
                <p className={`mb-0 mt-2 ${styles.WhiteAqua}`}>
                  <span className={`${styles.Bold}`}>Username: </span>
                  {currentUser}{" "}
                </p>
              </>
            )}
          </Col>
        </Row>
        {/* Locations */}
        <LocationsPage callsheet={callsheet} />
        {/* Schedule  */}
        <SchedulePage scenes={scenes} />
        {/* Talent  */}
        <TalentPage handleMount={handleMount} cast={cast} />
        {/* BG AND STANDINS */}
        <BgPage background={background} handleMount={handleMount} />
        {/* Notes */}
        <NotesPage
          important_info={important_info}
          transport_info={transport_info}
          department_info={department_info}
        />
        {/* Crew */}
        <CrewCallsPage callsheet={callsheet} />
        {/* Advanced Schedule  */}
        <AdvancedSchedPage callsheet={callsheet} advancedDay={advancedDay} />
        {/* Walkie Channels */}
        <WalkiesPage callsheet={callsheet} />
      </div>
      {/* MOBILE  */}
      <div className="d-block d-md-none mb-5">
        <div>
          {/* name */}
          <Row>
            <Col className="text-center" xs={{ span: 8, offset: 2 }}>
              <p className={`mx-3 ${styles.MovieNameMo}`}>{production_name} </p>
            </Col>

            {cUser &&
              cUser?.groups?.length > 0 &&
              (cUser?.groups[0]?.name === "Admin" ||
                cUser?.groups[0]?.name === "Superadmin") && (
                <Col className="text-center" xs={2}>
                  <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </Col>
              )}
          </Row>
          {/* header */}
          <Row className="pl-3">
            {/* weather/calls */}
            <Col className={`pl-0 pr-0`} xs={3}>
              {/* weather */}
              <Weather weather_location={weather_location} />
              {/* meals */}
              <div className={` mt-3`}>
                <p className={`mb-0`}>
                  <span className={`${styles.Bold}`}>Breakfast:</span>
                </p>
                <p className={`${styles.WhiteAqua} mb-0`}>{breakfast}</p>
                <p className={` mb-0`}>
                  <span className={`${styles.Bold}`}>Lunch:</span>{" "}
                </p>
                <p className={`${styles.WhiteAqua} mb-0`}>{lunch} </p>
              </div>
              {/* 1st Loc */}
              {/* <div className={`mt-1 pb-0`}  >
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>1st Locat</span></p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{location_1_name} </p>
          </div> */}
            </Col>
            {/* logo calls */}
            <Col xs={6} className="px-0 mx-0 text-center">
              <h5 className={`my-1 pl-0 ${styles.WhiteAquaPro}`}>
                {production_company}{" "}
              </h5>
              <div className={`mt-1`}>
                {company_logo && (
                  <>
                    <div className="px-0">
                      <Image
                        className={styles.LogoMo}
                        src={company_logo}
                        alt="logo image"
                        height="200"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-2 mb-0 pb-0">
                <span className={`px-3 ${styles.UnitCallMobDate}`}>
                  {date}{" "}
                </span>
              </div>
              <div className={` mx-3 pb-0 px-2 ${styles.Border2}`}>
                <h2 className="mb-0 pb-0">Your Call</h2>
                {yourcalltime && (
                  <p className={`px-1 pb-0 ${styles.YourCallMob}`}>
                    {yourcalltime}{" "}
                  </p>
                )}
                {yourCastcalltime && (
                  <>
                    <p className={`px-1 my-0 mx-4 pb-0 ${styles.YourCallMob}`}>
                      {yourCastcalltime}{" "}
                    </p>
                  </>
                )}
              </div>
              <div className={`mt-1 mx-3 pb-0 px-2 `}>
                <h5 className="mb-0 pb-0">Unit Call</h5>
                <p className={`px-1 pb-0 mb-0 mx-2 ${styles.UnitCallMob}`}>
                  {unit_call}{" "}
                </p>
              </div>
              {/* loc ${styles.Border } ${styles.Border2 }*/}
              <div className={`mt-0 mx-0 pb-0 px-0`}>
                <p className={`mb-0 pt-0`}>
                  <span className={`text-center ${styles.Bold}`}>
                    1st Location
                  </span>
                </p>
                <Row>
                  <Col xs={12}>
                    <p className={`mb-1 ${styles.WhiteAqua}`}>
                      {location_1_name}{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* calls */}
            <Col xs={3} className={`px-0`}>
              <div className={` mt-0`}>
                <p className={`mb-0`}>
                  <span className={`${styles.Bold}`}>Cast Call:</span>{" "}
                </p>
                <p className={`${styles.WhiteAqua}`}>{talent_call} </p>
                <p className={`mb-0`}>
                  <span className={`${styles.Bold}`}>First Shot:</span>
                </p>
                <p className={`${styles.WhiteAqua}`}>{shoot_call}</p>
                <p className={`mb-0`}>
                  <span className={`${styles.Bold}`}>Est. Wrap:</span>{" "}
                </p>
                <p className={`${styles.WhiteAqua}`}>{wrap}</p>
              </div>
              <div className="mt-3">
                <p className={`mb-0`}>
                  <span className={`${styles.Bold}`}>Day:</span>{" "}
                </p>
                <p className={`${styles.WhiteAqua}`}>
                  {day} of {total_shoot_days}
                </p>
              </div>
              {yourCastUser ? (
                <>
                  <p className={`${styles.Bold} mb-0`}>User:</p>
                  <p className={`${styles.WhiteAqua}`}>
                    {yourCastUser} {currentUser}
                  </p>
                </>
              ) : (
                <>
                  <p className={`${styles.Bold} mb-0`}>User:</p>
                  <p className={`${styles.WhiteAqua}`}> {currentUser}</p>
                </>
              )}
            </Col>
          </Row>
        </div>
        <p className={`mt-2 pl-3 mb-0 pt-1 ${styles.SubTitle}`}></p>
        {/* buttons */}
        <Row>
          <Col xs={{ span: 8, offset: 2 }} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowHos((showHos) => !showHos)}
            >
              Nearest Hospital
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowContacts((showContacts) => !showContacts)}
            >
              Contacts
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowLoc((showLoc) => !showLoc)}
            >
              Locations
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowWalkies((showWalkies) => !showWalkies)}
            >
              Walkies
            </p>
          </Col>
        </Row>
        <Row className={`${styles.ButtonLine} mt-0`}>
          <Col xs={4} md={2} className="text-center">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowSched((showSched) => !showSched)}
            >
              {" "}
              Schedule
            </p>
          </Col>
          <Col xs={4} md={2} className="text-center">
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowTalent((showTalent) => !showTalent)}
            >
              {" "}
              Talent
            </p>
          </Col>
          <Col xs={4} className="mx-0 text-center py-0" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowBg((showBg) => !showBg)}
            >
              {" "}
              Background
            </p>
          </Col>
          <Col xs={4} className="text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowNotes((showNotes) => !showNotes)}
            >
              Notes
            </p>
          </Col>
          <Col xs={4} className="mx-0 px-0 text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() => setShowCrew((showCrew) => !showCrew)}
            >
              {" "}
              Crew
            </p>
          </Col>
          <Col xs={4} className="mx-0 px-0 text-center" md={2}>
            <p
              className={`py-0 mb-0 ${styles.Button}`}
              onClick={() =>
                setShowAdvanSched((showAdvanSched) => !showAdvanSched)
              }
            >
              {" "}
              Adv Schedule
            </p>
          </Col>
        </Row>
        <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle}`}></p>
        {/* pages */}
        {!showHos ? (
          ""
        ) : (
          <HospitalPage
            callsheet={callsheet}
            crewInfoOne={crewInfoOne}
            setShow={setShowHos}
          />
        )}
        {!showContacts ? (
          ""
        ) : (
          <ContactsPage
            callsheet={callsheet}
            crewInfoOne={crewInfoOne}
            setShow={setShowContacts}
          />
        )}
        {!showLoc ? (
          ""
        ) : (
          <LocationsPage callsheet={callsheet} setShow={setShowLoc} />
        )}
        {!showWalkies ? (
          ""
        ) : (
          <WalkiesPage callsheet={callsheet} setShow={setShowWalkies} />
        )}
        {!showSched ? (
          ""
        ) : (
          <SchedulePage
            scenes={scenes}
            callsheet={callsheet}
            setShow={setShowSched}
          />
        )}
        {!showTalent ? (
          ""
        ) : (
          <TalentPage
            handleMount={handleMount}
            cast={cast}
            callsheet={callsheet}
            setShow={setShowTalent}
          />
        )}
        {!showBg ? (
          ""
        ) : (
          <BgPage
            handleMount={handleMount}
            background={background}
            callsheet={callsheet}
            setShow={setShowBg}
          />
        )}
        {!showNotes ? (
          ""
        ) : (
          <NotesPage
            important_info={important_info}
            transport_info={transport_info}
            department_info={department_info}
            setShow={setShowNotes}
          />
        )}
        {!showCrew ? (
          ""
        ) : (
          <CrewCallsPage callsheet={callsheet} setShow={setShowCrew} />
        )}
        {!showAdvanSched ? (
          ""
        ) : (
          <AdvancedSchedPage
            advancedDay={advancedDay}
            callsheet={callsheet}
            setShow={setShowAdvanSched}
          />
        )}
      </div>
    </div>
  );
};

export default CallSheet;
