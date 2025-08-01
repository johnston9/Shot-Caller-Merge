/* Component to create the Company and Crew Info 
 * It will be available only once to initialize the Company and Crew
   Info dataset. After that all info will be added by the Edit page
 * Contains the CrewCompany, CrewProduction, CrewCastingAD,
   CrewLocations, CrewScriptCater, CrewElecGrip, CrewMakeup,
   CrewSoundTransport, CrewStunts, CrewArt, CrewCamera,
   CrewPostAdditional and CrewWardrobe Form components which are
   held in the addCrewInfoByDept folder to add info by department */
import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosInstance, axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import { useSetEditCrewInfoContext } from "../../../contexts/BaseCallContext";
import CrewCompany from "./addCrewInfoByDept/CrewCompany";
import CrewProduction from "./addCrewInfoByDept/CrewProduction";
import CrewCastingAD from "./addCrewInfoByDept/CrewCastingAD";
import CrewLocations from "./addCrewInfoByDept/CrewLocations";
import CrewScriptCater from "./addCrewInfoByDept/CrewScriptCater";
import CrewElecGrip from "./addCrewInfoByDept/CrewElecGrip";
import CrewMakeup from "./addCrewInfoByDept/CrewMakeup";
import CrewSoundTransport from "./addCrewInfoByDept/CrewSoundTransport";
import CrewStunts from "./addCrewInfoByDept/CrewStunts";
import CrewArt from "./addCrewInfoByDept/CrewArt";
import CrewCamera from "./addCrewInfoByDept/CrewCamera";
import CrewPostAdditional from "./addCrewInfoByDept/CrewPostAdditional";
import CrewWardrobe from "./addCrewInfoByDept/CrewWardrobe";
import Important from "../info/Important";
import useHostName from "../../../hooks/useHostName";
import { CLIENT_PROGRAM_HOSTNAME } from "../../../utils/config";

const CrewInfoCreate = () => {
  const host = useHostName();
  useRedirect();
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const setEditCrewInfo = useSetEditCrewInfoContext();

  const [showImp, setShowImp] = useState(false);
  const [showCom, setShowCom] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showSou, setShowSou] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  const [showMak, setShowMak] = useState(false);
  const [showEle, setShowEle] = useState(false);
  const [showScr, setShowScr] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [showCas, setShowCas] = useState(false);
  const [showStu, setShowStu] = useState(false);
  const [showPos, setShowPos] = useState(false);
  const [showWar, setShowWar] = useState(false);

  const [postData, setPostData] = useState({
    // company
    total_shoot_days: "",
    production_name: "",
    production_company: "",
    company_email: "",
    company_phone: "",
    company_address_line_1: "",
    company_address_line_2: "",
    company_address_line_3: "",
    company_address_line_4: "",
    company_logo: "",
    // production
    director_name: "",
    director_email: "",
    director_phone: "",
    producer_name: "",
    producer_email: "",
    producer_phone: "",
    pro_coordinator_name: "",
    pro_coordinator_email: "",
    pro_coordinator_phone: "",
    upm_name: "",
    upm_email: "",
    upm_phone: "",
    travel_coordinator_name: "",
    travel_coordinator_email: "",
    travel_coordinator_phone: "",
    production_pa_name: "",
    production_pa_email: "",
    production_pa_phone: "",
    oth_production_pos_1_job: "",
    oth_production_pos_1_name: "",
    oth_production_pos_1_email: "",
    oth_production_pos_1_phone: "",
    oth_production_pos_2_job: "",
    oth_production_pos_2_name: "",
    oth_production_pos_2_email: "",
    oth_production_pos_2_phone: "",
    oth_production_pos_3_job: "",
    oth_production_pos_3_name: "",
    oth_production_pos_3_email: "",
    oth_production_pos_3_phone: "",
    oth_production_pos_4_job: "",
    oth_production_pos_4_name: "",
    oth_production_pos_4_email: "",
    oth_production_pos_4_phone: "",
    oth_production_pos_5_job: "",
    oth_production_pos_5_name: "",
    oth_production_pos_5_email: "",
    oth_production_pos_5_phone: "",
    // continuity
    script_supervisor_name: "",
    script_supervisor_email: "",
    script_supervisor_phone: "",
    // legal / medic
    legal_name: "",
    legal_email: "",
    legal_phone: "",
    set_medic_name: "",
    set_medic_email: "",
    set_medic_phone: "",
    // ad
    ad_1_name: "",
    ad_1_email: "",
    ad_1_phone: "",
    ad_2_name: "",
    ad_2_email: "",
    ad_2_phone: "",
    ad_3_name: "",
    ad_3_email: "",
    ad_3_phone: "",
    ad_4_name: "",
    ad_4_email: "",
    ad_4_phone: "",
    ad_5_name: "",
    ad_5_email: "",
    ad_5_phone: "",
    pro_assistant_1_name: "",
    pro_assistant_1_email: "",
    pro_assistant_1_phone: "",
    pro_assistant_2_name: "",
    pro_assistant_2_email: "",
    pro_assistant_2_phone: "",
    pro_assistant_3_name: "",
    pro_assistant_3_email: "",
    pro_assistant_3_phone: "",
    pro_assistant_4_name: "",
    pro_assistant_4_email: "",
    pro_assistant_4_phone: "",
    pro_assistant_5_name: "",
    pro_assistant_5_email: "",
    pro_assistant_5_phone: "",
    // camera
    dop_name: "",
    dop_email: "",
    dop_phone: "",
    camera_operator_name: "",
    camera_operator_email: "",
    camera_operator_phone: "",
    camera_ass_1_name: "",
    camera_ass_1_email: "",
    camera_ass_1_phone: "",
    camera_ass_2_name: "",
    camera_ass_2_email: "",
    camera_ass_2_phone: "",
    dit_name: "",
    dit_email: "",
    dit_phone: "",
    steadicam_name: "",
    steadicam_email: "",
    steadicam_phone: "",
    camera_pa_name: "",
    camera_pa_email: "",
    camera_pa_phone: "",
    oth_camera_pos_1_job: "",
    oth_camera_pos_1_name: "",
    oth_camera_pos_1_email: "",
    oth_camera_pos_1_phone: "",
    oth_camera_pos_2_job: "",
    oth_camera_pos_2_name: "",
    oth_camera_pos_2_email: "",
    oth_camera_pos_2_phone: "",
    oth_camera_pos_3_job: "",
    oth_camera_pos_3_name: "",
    oth_camera_pos_3_email: "",
    oth_camera_pos_3_phone: "",
    oth_camera_pos_4_job: "",
    oth_camera_pos_4_name: "",
    oth_camera_pos_4_email: "",
    oth_camera_pos_4_phone: "",
    oth_camera_pos_5_job: "",
    oth_camera_pos_5_name: "",
    oth_camera_pos_5_email: "",
    oth_camera_pos_5_phone: "",
    // sound
    sound_mixer_name: "",
    sound_mixer_email: "",
    sound_mixer_phone: "",
    boom_operator_name: "",
    boom_operator_email: "",
    boom_operator_phone: "",
    sound_assistant_1_name: "",
    sound_assistant_1_email: "",
    sound_assistant_1_phone: "",
    sound_assistant_2_name: "",
    sound_assistant_2_email: "",
    sound_assistant_2_phone: "",
    // makeup
    key_hairmakeup_name: "",
    key_hairmakeup_email: "",
    key_hairmakeup_phone: "",
    key_hairstylist_name: "",
    key_hairstylist_email: "",
    key_hairstylist_phone: "",
    sfx_makeup_name: "",
    sfx_makeup_email: "",
    sfx_makeup_phone: "",
    sfx_makeup_assistant_name: "",
    sfx_makeup_assistant_email: "",
    sfx_makeup_assistant_phone: "",
    makeup_artist_1_name: "",
    makeup_artist_1_email: "",
    makeup_artist_1_phone: "",
    makeup_artist_2_name: "",
    makeup_artist_2_email: "",
    makeup_artist_2_phone: "",
    makeup_artist_3_name: "",
    makeup_artist_3_email: "",
    makeup_artist_3_phone: "",
    makeup_artist_4_name: "",
    makeup_artist_4_email: "",
    makeup_artist_4_phone: "",
    makeup_artist_5_name: "",
    makeup_artist_5_email: "",
    makeup_artist_5_phone: "",
    // wardrobe
    costume_designer_name: "",
    costume_designer_email: "",
    costume_designer_phone: "",
    ass_costume_designer_name: "",
    ass_costume_designer_email: "",
    ass_costume_designer_phone: "",
    wardrobe_assistant_1_name: "",
    wardrobe_assistant_1_email: "",
    wardrobe_assistant_1_phone: "",
    wardrobe_assistant_2_name: "",
    wardrobe_assistant_2_email: "",
    wardrobe_assistant_2_phone: "",
    wardrobe_assistant_3_name: "",
    wardrobe_assistant_3_email: "",
    wardrobe_assistant_3_phone: "",
    wardrobe_assistant_4_name: "",
    wardrobe_assistant_4_email: "",
    wardrobe_assistant_4_phone: "",
    wardrobe_assistant_5_name: "",
    wardrobe_assistant_5_email: "",
    wardrobe_assistant_5_phone: "",
    // art
    production_designer_name: "",
    production_designer_email: "",
    production_designer_phone: "",
    art_director_name: "",
    art_director_email: "",
    art_director_phone: "",
    art_assistant_name: "",
    art_assistant_email: "",
    art_assistant_phone: "",
    set_decorator_name: "",
    set_decorator_email: "",
    set_decorator_phone: "",
    set_dresser_name: "",
    set_dresser_email: "",
    set_dresser_phone: "",
    lead_man_name: "",
    lead_man_email: "",
    lead_man_phone: "",
    dresser_name: "",
    dresser_email: "",
    dresser_phone: "",
    prop_master_name: "",
    prop_master_email: "",
    prop_master_phone: "",
    ass_prop_master_name: "",
    ass_prop_master_email: "",
    ass_prop_master_phone: "",
    prop_buyer_name: "",
    prop_buyer_email: "",
    prop_buyer_phone: "",
    armorer_name: "",
    armorer_email: "",
    armorer_phone: "",
    // electric
    gaffer_name: "",
    gaffer_email: "",
    gaffer_phone: "",
    best_boy_electric_name: "",
    best_boy_electric_email: "",
    best_boy_electric_phone: "",
    electric_3_name: "",
    electric_3_email: "",
    electric_3_phone: "",
    electric_4_name: "",
    electric_4_email: "",
    electric_4_phone: "",
    // grip
    keygrip_name: "",
    keygrip_email: "",
    keygrip_phone: "",
    best_boy_grip_name: "",
    best_boy_grip_email: "",
    best_boy_grip_phone: "",
    dolly_grip_name: "",
    dolly_grip_email: "",
    dolly_grip_phone: "",
    swing_ge1_name: "",
    swing_ge1_email: "",
    swing_ge1_phone: "",
    swing_ge2_name: "",
    swing_ge2_email: "",
    swing_ge2_phone: "",
    swing_ge3_name: "",
    swing_ge3_email: "",
    swing_ge3_phone: "",
    swing_ge4_name: "",
    swing_ge4_email: "",
    swing_ge4_phone: "",
    swing_ge5_name: "",
    swing_ge5_email: "",
    swing_ge5_phone: "",
    // stunts
    stunt_coordinator_name: "",
    stunt_coordinator_email: "",
    stunt_coordinator_phone: "",
    stunts_1_name: "",
    stunts_1_email: "",
    stunts_1_phone: "",
    stunts_2_name: "",
    stunts_2_email: "",
    stunts_2_phone: "",
    stunts_3_name: "",
    stunts_3_email: "",
    stunts_3_phone: "",
    stunts_4_name: "",
    stunts_4_email: "",
    stunts_4_phone: "",
    stunts_5_name: "",
    stunts_5_email: "",
    stunts_5_phone: "",
    // post
    editor_name: "",
    editor_email: "",
    editor_phone: "",
    fx_name: "",
    fx_email: "",
    fx_phone: "",
    // script
    writer_name: "",
    writer_email: "",
    writer_phone: "",
    // casting
    casting_director_name: "",
    casting_director_email: "",
    casting_director_phone: "",
    extras_casting_name: "",
    extras_casting_email: "",
    extras_casting_phone: "",
    // locations
    location_mngr_name: "",
    location_mngr_email: "",
    location_mngr_phone: "",
    location_ass_1_name: "",
    location_ass_1_email: "",
    location_ass_1_phone: "",
    location_ass_2_name: "",
    location_ass_2_email: "",
    location_ass_2_phone: "",
    location_ass_3_name: "",
    location_ass_3_email: "",
    location_ass_3_phone: "",
    location_ass_4_name: "",
    location_ass_4_email: "",
    location_ass_4_phone: "",
    location_security_name: "",
    location_security_email: "",
    location_security_phone: "",
    // transport
    transport_captain_name: "",
    transport_captain_email: "",
    transport_captain_phone: "",
    transport_manager_1_name: "",
    transport_manager_1_email: "",
    transport_manager_1_phone: "",
    transport_manager_2_name: "",
    transport_manager_2_email: "",
    transport_manager_2_phone: "",
    head_driver_name: "",
    head_driver_email: "",
    head_driver_phone: "",
    car1_name: "",
    car1_email: "",
    car1_phone: "",
    car2_name: "",
    car2_email: "",
    car2_phone: "",
    car3_name: "",
    car3_email: "",
    car3_phone: "",
    truck1_name: "",
    truck1_email: "",
    truck1_phone: "",
    truck2_name: "",
    truck2_email: "",
    truck2_phone: "",
    truck3_name: "",
    truck3_email: "",
    truck3_phone: "",
    // catering
    craft_service_name: "",
    craft_service_email: "",
    craft_service_phone: "",
    crafty_ass_name: "",
    crafty_ass_email: "",
    crafty_ass_phone: "",
    catering_co_1_name: "",
    catering_co_1_email: "",
    catering_co_1_phone: "",
    catering_co_2_name: "",
    catering_co_2_email: "",
    catering_co_2_phone: "",
    catering_co_3_name: "",
    catering_co_3_email: "",
    catering_co_3_phone: "",
    // additional
    add_pos_1_job: "",
    add_pos_1_name: "",
    add_pos_1_email: "",
    add_pos_1_phone: "",
    add_pos_2_job: "",
    add_pos_2_name: "",
    add_pos_2_email: "",
    add_pos_2_phone: "",
    add_pos_3_job: "",
    add_pos_3_name: "",
    add_pos_3_email: "",
    add_pos_3_phone: "",
    add_pos_4_job: "",
    add_pos_4_name: "",
    add_pos_4_email: "",
    add_pos_4_phone: "",
    add_pos_5_job: "",
    add_pos_5_name: "",
    add_pos_5_email: "",
    add_pos_5_phone: "",
    add_pos_6_job: "",
    add_pos_6_name: "",
    add_pos_6_email: "",
    add_pos_6_phone: "",
    add_pos_7_job: "",
    add_pos_7_name: "",
    add_pos_7_email: "",
    add_pos_7_phone: "",
    add_pos_8_job: "",
    add_pos_8_name: "",
    add_pos_8_email: "",
    add_pos_8_phone: "",
    add_pos_9_job: "",
    add_pos_9_name: "",
    add_pos_9_email: "",
    add_pos_9_phone: "",
    add_pos_10_job: "",
    add_pos_10_name: "",
    add_pos_10_email: "",
    add_pos_10_phone: "",
    // add pos 11-20
    add_pos_11_job: "",
    add_pos_11_name: "",
    add_pos_11_email: "",
    add_pos_11_phone: "",
    add_pos_12_job: "",
    add_pos_12_name: "",
    add_pos_12_email: "",
    add_pos_12_phone: "",
    add_pos_13_job: "",
    add_pos_13_name: "",
    add_pos_13_email: "",
    add_pos_13_phone: "",
    add_pos_14_job: "",
    add_pos_14_name: "",
    add_pos_14_email: "",
    add_pos_14_phone: "",
    add_pos_15_job: "",
    add_pos_15_name: "",
    add_pos_15_email: "",
    add_pos_15_phone: "",
    add_pos_16_job: "",
    add_pos_16_name: "",
    add_pos_16_email: "",
    add_pos_16_phone: "",
    add_pos_17_job: "",
    add_pos_17_name: "",
    add_pos_17_email: "",
    add_pos_17_phone: "",
    add_pos_18_job: "",
    add_pos_18_name: "",
    add_pos_18_email: "",
    add_pos_18_phone: "",
    add_pos_19_job: "",
    add_pos_19_name: "",
    add_pos_19_email: "",
    add_pos_19_phone: "",
    add_pos_20_job: "",
    add_pos_20_name: "",
    add_pos_20_email: "",
    add_pos_20_phone: "",
  });

  const {
    // company
    production_name,
    production_company,
    company_phone,
    company_email,
    company_address_line_1,
    company_address_line_2,
    company_address_line_3,
    company_address_line_4,
    total_shoot_days,
    // production
    director_name,
    director_email,
    director_phone,
    producer_name,
    producer_email,
    producer_phone,
    pro_coordinator_name,
    pro_coordinator_email,
    pro_coordinator_phone,
    upm_name,
    upm_email,
    upm_phone,
    travel_coordinator_name,
    travel_coordinator_email,
    travel_coordinator_phone,
    production_pa_name,
    production_pa_email,
    production_pa_phone,
    oth_production_pos_1_job,
    oth_production_pos_1_name,
    oth_production_pos_1_email,
    oth_production_pos_1_phone,
    oth_production_pos_2_job,
    oth_production_pos_2_name,
    oth_production_pos_2_email,
    oth_production_pos_2_phone,
    oth_production_pos_3_job,
    oth_production_pos_3_name,
    oth_production_pos_3_email,
    oth_production_pos_3_phone,
    oth_production_pos_4_job,
    oth_production_pos_4_name,
    oth_production_pos_4_email,
    oth_production_pos_4_phone,
    oth_production_pos_5_job,
    oth_production_pos_5_name,
    oth_production_pos_5_email,
    oth_production_pos_5_phone,
    script_supervisor_name,
    script_supervisor_email,
    script_supervisor_phone,
    legal_name,
    legal_email,
    legal_phone,
    set_medic_name,
    set_medic_email,
    set_medic_phone,
    // ad
    ad_1_name,
    ad_1_email,
    ad_1_phone,
    ad_2_name,
    ad_2_email,
    ad_2_phone,
    ad_3_name,
    ad_3_email,
    ad_3_phone,
    ad_4_name,
    ad_4_email,
    ad_4_phone,
    ad_5_name,
    ad_5_email,
    ad_5_phone,
    pro_assistant_1_name,
    pro_assistant_1_email,
    pro_assistant_1_phone,
    pro_assistant_2_name,
    pro_assistant_2_email,
    pro_assistant_2_phone,
    pro_assistant_3_name,
    pro_assistant_3_email,
    pro_assistant_3_phone,
    pro_assistant_4_name,
    pro_assistant_4_email,
    pro_assistant_4_phone,
    pro_assistant_5_name,
    pro_assistant_5_email,
    pro_assistant_5_phone,
    // camera
    dop_name,
    dop_email,
    dop_phone,
    camera_operator_name,
    camera_operator_email,
    camera_operator_phone,
    camera_ass_1_name,
    camera_ass_1_email,
    camera_ass_1_phone,
    camera_ass_2_name,
    camera_ass_2_email,
    camera_ass_2_phone,
    dit_name,
    dit_email,
    dit_phone,
    steadicam_name,
    steadicam_email,
    steadicam_phone,
    camera_pa_name,
    camera_pa_email,
    camera_pa_phone,
    oth_camera_pos_1_job,
    oth_camera_pos_1_name,
    oth_camera_pos_1_email,
    oth_camera_pos_1_phone,
    oth_camera_pos_2_job,
    oth_camera_pos_2_name,
    oth_camera_pos_2_email,
    oth_camera_pos_2_phone,
    oth_camera_pos_3_job,
    oth_camera_pos_3_name,
    oth_camera_pos_3_email,
    oth_camera_pos_3_phone,
    oth_camera_pos_4_job,
    oth_camera_pos_4_name,
    oth_camera_pos_4_email,
    oth_camera_pos_4_phone,
    oth_camera_pos_5_job,
    oth_camera_pos_5_name,
    oth_camera_pos_5_email,
    oth_camera_pos_5_phone,
    // sound
    sound_mixer_name,
    sound_mixer_email,
    sound_mixer_phone,
    boom_operator_name,
    boom_operator_email,
    boom_operator_phone,
    sound_assistant_1_name,
    sound_assistant_1_email,
    sound_assistant_1_phone,
    sound_assistant_2_name,
    sound_assistant_2_email,
    sound_assistant_2_phone,
    // hair/makeup
    key_hairmakeup_name,
    key_hairmakeup_email,
    key_hairmakeup_phone,
    key_hairstylist_name,
    key_hairstylist_email,
    key_hairstylist_phone,
    sfx_makeup_name,
    sfx_makeup_email,
    sfx_makeup_phone,
    sfx_makeup_assistant_name,
    sfx_makeup_assistant_email,
    sfx_makeup_assistant_phone,
    makeup_artist_1_name,
    makeup_artist_1_email,
    makeup_artist_1_phone,
    makeup_artist_2_name,
    makeup_artist_2_email,
    makeup_artist_2_phone,
    makeup_artist_3_name,
    makeup_artist_3_email,
    makeup_artist_3_phone,
    makeup_artist_4_name,
    makeup_artist_4_email,
    makeup_artist_4_phone,
    makeup_artist_5_name,
    makeup_artist_5_email,
    makeup_artist_5_phone,
    // wardrobe
    costume_designer_name,
    costume_designer_email,
    costume_designer_phone,
    ass_costume_designer_name,
    ass_costume_designer_email,
    ass_costume_designer_phone,
    wardrobe_assistant_1_name,
    wardrobe_assistant_1_email,
    wardrobe_assistant_1_phone,
    wardrobe_assistant_2_name,
    wardrobe_assistant_2_email,
    wardrobe_assistant_2_phone,
    wardrobe_assistant_3_name,
    wardrobe_assistant_3_email,
    wardrobe_assistant_3_phone,
    wardrobe_assistant_4_name,
    wardrobe_assistant_4_email,
    wardrobe_assistant_4_phone,
    wardrobe_assistant_5_name,
    wardrobe_assistant_5_email,
    wardrobe_assistant_5_phone,
    // art
    production_designer_name,
    production_designer_email,
    production_designer_phone,
    art_director_name,
    art_director_email,
    art_director_phone,
    art_assistant_name,
    art_assistant_email,
    art_assistant_phone,
    set_decorator_name,
    set_decorator_email,
    set_decorator_phone,
    set_dresser_name,
    set_dresser_email,
    set_dresser_phone,
    lead_man_name,
    lead_man_email,
    lead_man_phone,
    dresser_name,
    dresser_email,
    dresser_phone,
    prop_master_name,
    prop_master_email,
    prop_master_phone,
    ass_prop_master_name,
    ass_prop_master_email,
    ass_prop_master_phone,
    prop_buyer_name,
    prop_buyer_email,
    prop_buyer_phone,
    armorer_name,
    armorer_email,
    armorer_phone,
    // electric/grip
    gaffer_name,
    gaffer_email,
    gaffer_phone,
    best_boy_electric_name,
    best_boy_electric_email,
    best_boy_electric_phone,
    electric_3_name,
    electric_3_email,
    electric_3_phone,
    electric_4_name,
    electric_4_email,
    electric_4_phone,
    keygrip_name,
    keygrip_email,
    keygrip_phone,
    best_boy_grip_name,
    best_boy_grip_email,
    best_boy_grip_phone,
    dolly_grip_name,
    dolly_grip_email,
    dolly_grip_phone,
    swing_ge1_name,
    swing_ge1_email,
    swing_ge1_phone,
    swing_ge2_name,
    swing_ge2_email,
    swing_ge2_phone,
    swing_ge3_name,
    swing_ge3_email,
    swing_ge3_phone,
    swing_ge4_name,
    swing_ge4_email,
    swing_ge4_phone,
    swing_ge5_name,
    swing_ge5_email,
    swing_ge5_phone,
    // stunts
    stunt_coordinator_name,
    stunt_coordinator_email,
    stunt_coordinator_phone,
    stunts_1_name,
    stunts_1_email,
    stunts_1_phone,
    stunts_2_name,
    stunts_2_email,
    stunts_2_phone,
    stunts_3_name,
    stunts_3_email,
    stunts_3_phone,
    stunts_4_name,
    stunts_4_email,
    stunts_4_phone,
    stunts_5_name,
    stunts_5_email,
    stunts_5_phone,
    // post/script
    editor_name,
    editor_email,
    editor_phone,
    fx_name,
    fx_email,
    fx_phone,
    writer_name,
    writer_email,
    writer_phone,
    // casting
    casting_director_name,
    casting_director_email,
    casting_director_phone,
    extras_casting_name,
    extras_casting_email,
    extras_casting_phone,
    // locations
    location_mngr_name,
    location_mngr_email,
    location_mngr_phone,
    location_ass_1_name,
    location_ass_1_email,
    location_ass_1_phone,
    location_ass_2_name,
    location_ass_2_email,
    location_ass_2_phone,
    location_ass_3_name,
    location_ass_3_email,
    location_ass_3_phone,
    location_ass_4_name,
    location_ass_4_email,
    location_ass_4_phone,
    location_security_name,
    location_security_email,
    location_security_phone,
    // transport
    transport_captain_name,
    transport_captain_email,
    transport_captain_phone,
    transport_manager_1_name,
    transport_manager_1_email,
    transport_manager_1_phone,
    transport_manager_2_name,
    transport_manager_2_email,
    transport_manager_2_phone,
    head_driver_name,
    head_driver_email,
    head_driver_phone,
    car1_name,
    car1_email,
    car1_phone,
    car2_name,
    car2_email,
    car2_phone,
    car3_name,
    car3_email,
    car3_phone,
    truck1_name,
    truck1_email,
    truck1_phone,
    truck2_name,
    truck2_email,
    truck2_phone,
    truck3_name,
    truck3_email,
    truck3_phone,
    // catering
    catering_co_1_name,
    catering_co_1_email,
    catering_co_1_phone,
    catering_co_2_name,
    catering_co_2_email,
    catering_co_2_phone,
    catering_co_3_name,
    catering_co_3_email,
    catering_co_3_phone,
    craft_service_name,
    craft_service_email,
    craft_service_phone,
    crafty_ass_name,
    crafty_ass_email,
    crafty_ass_phone,
    // additional 1-10
    add_pos_1_job,
    add_pos_1_name,
    add_pos_1_email,
    add_pos_1_phone,
    add_pos_2_job,
    add_pos_2_name,
    add_pos_2_email,
    add_pos_2_phone,
    add_pos_3_job,
    add_pos_3_name,
    add_pos_3_email,
    add_pos_3_phone,
    add_pos_4_job,
    add_pos_4_name,
    add_pos_4_email,
    add_pos_4_phone,
    add_pos_5_job,
    add_pos_5_name,
    add_pos_5_email,
    add_pos_5_phone,
    add_pos_6_job,
    add_pos_6_name,
    add_pos_6_email,
    add_pos_6_phone,
    add_pos_7_job,
    add_pos_7_name,
    add_pos_7_email,
    add_pos_7_phone,
    add_pos_8_job,
    add_pos_8_name,
    add_pos_8_email,
    add_pos_8_phone,
    add_pos_9_job,
    add_pos_9_name,
    add_pos_9_email,
    add_pos_9_phone,
    add_pos_10_job,
    add_pos_10_name,
    add_pos_10_email,
    add_pos_10_phone,
    // additional 11-20
    add_pos_11_job,
    add_pos_11_name,
    add_pos_11_email,
    add_pos_11_phone,
    add_pos_12_job,
    add_pos_12_name,
    add_pos_12_email,
    add_pos_12_phone,
    add_pos_13_job,
    add_pos_13_name,
    add_pos_13_email,
    add_pos_13_phone,
    add_pos_14_job,
    add_pos_14_name,
    add_pos_14_email,
    add_pos_14_phone,
    add_pos_15_job,
    add_pos_15_name,
    add_pos_15_email,
    add_pos_15_phone,
    add_pos_16_job,
    add_pos_16_name,
    add_pos_16_email,
    add_pos_16_phone,
    add_pos_17_job,
    add_pos_17_name,
    add_pos_17_email,
    add_pos_17_phone,
    add_pos_18_job,
    add_pos_18_name,
    add_pos_18_email,
    add_pos_18_phone,
    add_pos_19_job,
    add_pos_19_name,
    add_pos_19_email,
    add_pos_19_phone,
    add_pos_20_job,
    add_pos_20_name,
    add_pos_20_email,
    add_pos_20_phone,
  } = postData;

  const imageInput1 = useRef(null);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    console.log("clicked create");
    event.preventDefault();
    const formData = new FormData();
    formData.append("total_shoot_days", total_shoot_days);
    formData.append("production_name", production_name);
    formData.append("production_company", production_company);
    formData.append("company_phone", company_phone);
    formData.append("company_email", company_email);
    formData.append("company_address_line_1", company_address_line_1);
    formData.append("company_address_line_2", company_address_line_2);
    formData.append("company_address_line_3", company_address_line_3);
    formData.append("company_address_line_4", company_address_line_4);
    formData.append("director_name", director_name);
    formData.append("director_email", director_email);
    formData.append("director_phone", director_phone);
    formData.append("producer_name", producer_name);
    formData.append("producer_email", producer_email);
    formData.append("producer_phone", producer_phone);
    formData.append("pro_coordinator_name", pro_coordinator_name);
    formData.append("pro_coordinator_email", pro_coordinator_email);
    formData.append("pro_coordinator_phone", pro_coordinator_phone);
    formData.append("upm_name", upm_name);
    formData.append("upm_email", upm_email);
    formData.append("upm_phone", upm_phone);
    formData.append("travel_coordinator_name", travel_coordinator_name);
    formData.append("travel_coordinator_email", travel_coordinator_email);
    formData.append("travel_coordinator_phone", travel_coordinator_phone);
    formData.append("production_pa_name", production_pa_name);
    formData.append("production_pa_email", production_pa_email);
    formData.append("production_pa_phone", production_pa_phone);
    formData.append("oth_production_pos_1_job", oth_production_pos_1_job);
    formData.append("oth_production_pos_1_name", oth_production_pos_1_name);
    formData.append("oth_production_pos_1_email", oth_production_pos_1_email);
    formData.append("oth_production_pos_1_phone", oth_production_pos_1_phone);
    formData.append("oth_production_pos_2_job", oth_production_pos_2_job);
    formData.append("oth_production_pos_2_name", oth_production_pos_2_name);
    formData.append("oth_production_pos_2_email", oth_production_pos_2_email);
    formData.append("oth_production_pos_2_phone", oth_production_pos_2_phone);
    formData.append("oth_production_pos_3_job", oth_production_pos_3_job);
    formData.append("oth_production_pos_3_name", oth_production_pos_3_name);
    formData.append("oth_production_pos_3_email", oth_production_pos_3_email);
    formData.append("oth_production_pos_3_phone", oth_production_pos_3_phone);
    formData.append("oth_production_pos_4_job", oth_production_pos_4_job);
    formData.append("oth_production_pos_4_name", oth_production_pos_4_name);
    formData.append("oth_production_pos_4_email", oth_production_pos_4_email);
    formData.append("oth_production_pos_4_phone", oth_production_pos_4_phone);
    formData.append("oth_production_pos_5_job", oth_production_pos_5_job);
    formData.append("oth_production_pos_5_name", oth_production_pos_5_name);
    formData.append("oth_production_pos_5_email", oth_production_pos_5_email);
    formData.append("oth_production_pos_5_phone", oth_production_pos_5_phone);
    formData.append("ad_1_name", ad_1_name);
    formData.append("ad_1_email", ad_1_email);
    formData.append("ad_1_phone", ad_1_phone);
    formData.append("ad_2_name", ad_2_name);
    formData.append("ad_2_email", ad_2_email);
    formData.append("ad_2_phone", ad_2_phone);
    formData.append("ad_3_name", ad_3_name);
    formData.append("ad_3_email", ad_3_email);
    formData.append("ad_3_phone", ad_3_phone);
    formData.append("ad_4_name", ad_4_name);
    formData.append("ad_4_email", ad_4_email);
    formData.append("ad_4_phone", ad_4_phone);
    formData.append("ad_5_name", ad_5_name);
    formData.append("ad_5_email", ad_5_email);
    formData.append("ad_5_phone", ad_5_phone);
    formData.append("pro_assistant_1_name", pro_assistant_1_name);
    formData.append("pro_assistant_1_email", pro_assistant_1_email);
    formData.append("pro_assistant_1_phone", pro_assistant_1_phone);
    formData.append("pro_assistant_2_name", pro_assistant_2_name);
    formData.append("pro_assistant_2_email", pro_assistant_2_email);
    formData.append("pro_assistant_2_phone", pro_assistant_2_phone);
    formData.append("pro_assistant_3_name", pro_assistant_3_name);
    formData.append("pro_assistant_3_email", pro_assistant_3_email);
    formData.append("pro_assistant_3_phone", pro_assistant_3_phone);
    formData.append("pro_assistant_4_name", pro_assistant_4_name);
    formData.append("pro_assistant_4_email", pro_assistant_4_email);
    formData.append("pro_assistant_4_phone", pro_assistant_4_phone);
    formData.append("pro_assistant_5_name", pro_assistant_5_name);
    formData.append("pro_assistant_5_email", pro_assistant_5_email);
    formData.append("pro_assistant_5_phone", pro_assistant_5_phone);
    formData.append("dop_name", dop_name);
    formData.append("dop_email", dop_email);
    formData.append("dop_phone", dop_phone);
    formData.append("camera_operator_name", camera_operator_name);
    formData.append("camera_operator_email", camera_operator_email);
    formData.append("camera_operator_phone", camera_operator_phone);
    formData.append("camera_ass_1_name", camera_ass_1_name);
    formData.append("camera_ass_1_email", camera_ass_1_email);
    formData.append("camera_ass_1_phone", camera_ass_1_phone);
    formData.append("camera_ass_2_name", camera_ass_2_name);
    formData.append("camera_ass_2_email", camera_ass_2_email);
    formData.append("camera_ass_2_phone", camera_ass_2_phone);
    formData.append("dit_name", dit_name);
    formData.append("dit_email", dit_email);
    formData.append("dit_phone", dit_phone);
    formData.append("steadicam_name", steadicam_name);
    formData.append("steadicam_email", steadicam_email);
    formData.append("steadicam_phone", steadicam_phone);
    formData.append("camera_pa_name", camera_pa_name);
    formData.append("camera_pa_email", camera_pa_email);
    formData.append("camera_pa_phone", camera_pa_phone);
    formData.append("oth_camera_pos_1_job", oth_camera_pos_1_job);
    formData.append("oth_camera_pos_1_name", oth_camera_pos_1_name);
    formData.append("oth_camera_pos_1_email", oth_camera_pos_1_email);
    formData.append("oth_camera_pos_1_phone", oth_camera_pos_1_phone);
    formData.append("oth_camera_pos_2_job", oth_camera_pos_2_job);
    formData.append("oth_camera_pos_2_name", oth_camera_pos_2_name);
    formData.append("oth_camera_pos_2_email", oth_camera_pos_2_email);
    formData.append("oth_camera_pos_2_phone", oth_camera_pos_2_phone);
    formData.append("oth_camera_pos_3_job", oth_camera_pos_3_job);
    formData.append("oth_camera_pos_3_name", oth_camera_pos_3_name);
    formData.append("oth_camera_pos_3_email", oth_camera_pos_3_email);
    formData.append("oth_camera_pos_3_phone", oth_camera_pos_3_phone);
    formData.append("oth_camera_pos_4_job", oth_camera_pos_4_job);
    formData.append("oth_camera_pos_4_name", oth_camera_pos_4_name);
    formData.append("oth_camera_pos_4_email", oth_camera_pos_4_email);
    formData.append("oth_camera_pos_4_phone", oth_camera_pos_4_phone);
    formData.append("oth_camera_pos_5_job", oth_camera_pos_5_job);
    formData.append("oth_camera_pos_5_name", oth_camera_pos_5_name);
    formData.append("oth_camera_pos_5_email", oth_camera_pos_5_email);
    formData.append("oth_camera_pos_5_phone", oth_camera_pos_5_phone);
    // sound
    formData.append("sound_mixer_name", sound_mixer_name);
    formData.append("sound_mixer_email", sound_mixer_email);
    formData.append("sound_mixer_phone", sound_mixer_phone);
    formData.append("boom_operator_name", boom_operator_name);
    formData.append("boom_operator_email", boom_operator_email);
    formData.append("boom_operator_phone", boom_operator_phone);
    formData.append("sound_assistant_1_name", sound_assistant_1_name);
    formData.append("sound_assistant_1_email", sound_assistant_1_email);
    formData.append("sound_assistant_1_phone", sound_assistant_1_phone);
    formData.append("sound_assistant_2_name", sound_assistant_2_name);
    formData.append("sound_assistant_2_email", sound_assistant_2_email);
    formData.append("sound_assistant_2_phone", sound_assistant_2_phone);
    formData.append("script_supervisor_name", script_supervisor_name);
    formData.append("script_supervisor_email", script_supervisor_email);
    formData.append("script_supervisor_phone", script_supervisor_phone);
    formData.append("key_hairmakeup_name", key_hairmakeup_name);
    formData.append("key_hairmakeup_email", key_hairmakeup_email);
    formData.append("key_hairmakeup_phone", key_hairmakeup_phone);
    formData.append("key_hairstylist_name", key_hairstylist_name);
    formData.append("key_hairstylist_email", key_hairstylist_email);
    formData.append("key_hairstylist_phone", key_hairstylist_phone);
    formData.append("sfx_makeup_name", sfx_makeup_name);
    formData.append("sfx_makeup_email", sfx_makeup_email);
    formData.append("sfx_makeup_phone", sfx_makeup_phone);
    formData.append("sfx_makeup_assistant_name", sfx_makeup_assistant_name);
    formData.append("sfx_makeup_assistant_email", sfx_makeup_assistant_email);
    formData.append("sfx_makeup_assistant_phone", sfx_makeup_assistant_phone);
    formData.append("makeup_artist_1_name", makeup_artist_1_name);
    formData.append("makeup_artist_1_email", makeup_artist_1_email);
    formData.append("makeup_artist_1_phone", makeup_artist_1_phone);
    formData.append("makeup_artist_2_name", makeup_artist_2_name);
    formData.append("makeup_artist_2_email", makeup_artist_2_email);
    formData.append("makeup_artist_2_phone", makeup_artist_2_phone);
    formData.append("makeup_artist_3_name", makeup_artist_3_name);
    formData.append("makeup_artist_3_email", makeup_artist_3_email);
    formData.append("makeup_artist_3_phone", makeup_artist_3_phone);
    formData.append("makeup_artist_4_name", makeup_artist_4_name);
    formData.append("makeup_artist_4_email", makeup_artist_4_email);
    formData.append("makeup_artist_4_phone", makeup_artist_4_phone);
    formData.append("makeup_artist_5_name", makeup_artist_5_name);
    formData.append("makeup_artist_5_email", makeup_artist_5_email);
    formData.append("makeup_artist_5_phone", makeup_artist_5_phone);
    formData.append("costume_designer_name", costume_designer_name);
    formData.append("costume_designer_email", costume_designer_email);
    formData.append("costume_designer_phone", costume_designer_phone);
    formData.append("ass_costume_designer_name", ass_costume_designer_name);
    formData.append("ass_costume_designer_email", ass_costume_designer_email);
    formData.append("ass_costume_designer_phone", ass_costume_designer_phone);
    formData.append("wardrobe_assistant_1_name", wardrobe_assistant_1_name);
    formData.append("wardrobe_assistant_1_email", wardrobe_assistant_1_email);
    formData.append("wardrobe_assistant_1_phone", wardrobe_assistant_1_phone);
    formData.append("wardrobe_assistant_2_name", wardrobe_assistant_2_name);
    formData.append("wardrobe_assistant_2_email", wardrobe_assistant_2_email);
    formData.append("wardrobe_assistant_2_phone", wardrobe_assistant_2_phone);
    formData.append("wardrobe_assistant_3_name", wardrobe_assistant_3_name);
    formData.append("wardrobe_assistant_3_email", wardrobe_assistant_3_email);
    formData.append("wardrobe_assistant_3_phone", wardrobe_assistant_3_phone);
    formData.append("wardrobe_assistant_4_name", wardrobe_assistant_4_name);
    formData.append("wardrobe_assistant_4_email", wardrobe_assistant_4_email);
    formData.append("wardrobe_assistant_4_phone", wardrobe_assistant_4_phone);
    formData.append("wardrobe_assistant_5_name", wardrobe_assistant_5_name);
    formData.append("wardrobe_assistant_5_email", wardrobe_assistant_5_email);
    formData.append("wardrobe_assistant_5_phone", wardrobe_assistant_5_phone);
    formData.append("production_designer_name", production_designer_name);
    formData.append("production_designer_email", production_designer_email);
    formData.append("production_designer_phone", production_designer_phone);
    formData.append("art_director_name", art_director_name);
    formData.append("art_director_email", art_director_email);
    formData.append("art_director_phone", art_director_phone);
    formData.append("art_assistant_name", art_assistant_name);
    formData.append("art_assistant_email", art_assistant_email);
    formData.append("art_assistant_phone", art_assistant_phone);
    formData.append("set_decorator_name", set_decorator_name);
    formData.append("set_decorator_email", set_decorator_email);
    formData.append("set_decorator_phone", set_decorator_phone);
    formData.append("set_dresser_name", set_dresser_name);
    formData.append("set_dresser_email", set_dresser_email);
    formData.append("set_dresser_phone", set_dresser_phone);
    formData.append("lead_man_name", lead_man_name);
    formData.append("lead_man_email", lead_man_email);
    formData.append("lead_man_phone", lead_man_phone);
    formData.append("dresser_name", dresser_name);
    formData.append("dresser_email", dresser_email);
    formData.append("dresser_phone", dresser_phone);
    formData.append("prop_master_name", prop_master_name);
    formData.append("prop_master_email", prop_master_email);
    formData.append("prop_master_phone", prop_master_phone);
    formData.append("ass_prop_master_name", ass_prop_master_name);
    formData.append("ass_prop_master_email", ass_prop_master_email);
    formData.append("ass_prop_master_phone", ass_prop_master_phone);
    formData.append("prop_buyer_name", prop_buyer_name);
    formData.append("prop_buyer_email", prop_buyer_email);
    formData.append("prop_buyer_phone", prop_buyer_phone);
    formData.append("armorer_name", armorer_name);
    formData.append("armorer_email", armorer_email);
    formData.append("armorer_phone", armorer_phone);
    formData.append("gaffer_name", gaffer_name);
    formData.append("gaffer_email", gaffer_email);
    formData.append("gaffer_phone", gaffer_phone);
    formData.append("best_boy_electric_name", best_boy_electric_name);
    formData.append("best_boy_electric_email", best_boy_electric_email);
    formData.append("best_boy_electric_phone", best_boy_electric_phone);
    formData.append("electric_3_name", electric_3_name);
    formData.append("electric_3_phone", electric_3_phone);
    formData.append("electric_3_email", electric_3_email);
    formData.append("electric_4_name", electric_4_name);
    formData.append("electric_4_email", electric_4_email);
    formData.append("electric_4_phone", electric_4_phone);
    formData.append("keygrip_name", keygrip_name);
    formData.append("keygrip_email", keygrip_email);
    formData.append("keygrip_phone", keygrip_phone);
    formData.append("best_boy_grip_name", best_boy_grip_name);
    formData.append("best_boy_grip_email", best_boy_grip_email);
    formData.append("best_boy_grip_phone", best_boy_grip_phone);
    formData.append("dolly_grip_name", dolly_grip_name);
    formData.append("dolly_grip_email", dolly_grip_email);
    formData.append("dolly_grip_phone", dolly_grip_phone);
    formData.append("swing_ge1_name", swing_ge1_name);
    formData.append("swing_ge1_email", swing_ge1_email);
    formData.append("swing_ge1_phone", swing_ge1_phone);
    formData.append("swing_ge2_name", swing_ge2_name);
    formData.append("swing_ge2_email", swing_ge2_email);
    formData.append("swing_ge2_phone", swing_ge2_phone);
    formData.append("swing_ge3_name", swing_ge3_name);
    formData.append("swing_ge3_email", swing_ge3_email);
    formData.append("swing_ge3_phone", swing_ge3_phone);
    formData.append("swing_ge4_name", swing_ge4_name);
    formData.append("swing_ge4_email", swing_ge4_email);
    formData.append("swing_ge4_phone", swing_ge4_phone);
    formData.append("swing_ge5_name", swing_ge5_name);
    formData.append("swing_ge5_email", swing_ge5_email);
    formData.append("swing_ge5_phone", swing_ge5_phone);
    formData.append("stunt_coordinator_name", stunt_coordinator_name);
    formData.append("stunt_coordinator_email", stunt_coordinator_email);
    formData.append("stunt_coordinator_phone", stunt_coordinator_phone);
    formData.append("stunts_1_name", stunts_1_name);
    formData.append("stunts_1_email", stunts_1_email);
    formData.append("stunts_1_phone", stunts_1_phone);
    formData.append("stunts_2_name", stunts_2_name);
    formData.append("stunts_2_email", stunts_2_email);
    formData.append("stunts_2_phone", stunts_2_phone);
    formData.append("stunts_3_name", stunts_3_name);
    formData.append("stunts_3_email", stunts_3_email);
    formData.append("stunts_3_phone", stunts_3_phone);
    formData.append("stunts_4_name", stunts_4_name);
    formData.append("stunts_4_email", stunts_4_email);
    formData.append("stunts_4_phone", stunts_4_phone);
    formData.append("stunts_5_name", stunts_5_name);
    formData.append("stunts_5_email", stunts_5_email);
    formData.append("stunts_5_phone", stunts_5_phone);
    formData.append("legal_name", legal_name);
    formData.append("legal_email", legal_email);
    formData.append("legal_phone", legal_phone);
    formData.append("editor_name", editor_name);
    formData.append("editor_email", editor_email);
    formData.append("editor_phone", editor_phone);
    formData.append("writer_name", writer_name);
    formData.append("writer_email", writer_email);
    formData.append("writer_phone", writer_phone);
    formData.append("fx_name", fx_name);
    formData.append("fx_email", fx_email);
    formData.append("fx_phone", fx_phone);
    formData.append("set_medic_name", set_medic_name);
    formData.append("set_medic_email", set_medic_email);
    formData.append("set_medic_phone", set_medic_phone);
    formData.append("casting_director_name", casting_director_name);
    formData.append("casting_director_email", casting_director_email);
    formData.append("casting_director_phone", casting_director_phone);
    formData.append("extras_casting_name", extras_casting_name);
    formData.append("extras_casting_email", extras_casting_email);
    formData.append("extras_casting_phone", extras_casting_phone);
    formData.append("location_mngr_name", location_mngr_name);
    formData.append("location_mngr_email", location_mngr_email);
    formData.append("location_mngr_phone", location_mngr_phone);
    formData.append("location_ass_1_name", location_ass_1_name);
    formData.append("location_ass_1_email", location_ass_1_email);
    formData.append("location_ass_1_phone", location_ass_1_phone);
    formData.append("location_ass_2_name", location_ass_2_name);
    formData.append("location_ass_2_email", location_ass_2_email);
    formData.append("location_ass_2_phone", location_ass_2_phone);
    formData.append("location_ass_3_name", location_ass_3_name);
    formData.append("location_ass_3_email", location_ass_3_email);
    formData.append("location_ass_3_phone", location_ass_3_phone);
    formData.append("location_ass_4_name", location_ass_4_name);
    formData.append("location_ass_4_email", location_ass_4_email);
    formData.append("location_ass_4_phone", location_ass_4_phone);
    formData.append("location_security_name", location_security_name);
    formData.append("location_security_email", location_security_email);
    formData.append("location_security_phone", location_security_phone);
    formData.append("transport_captain_name", transport_captain_name);
    formData.append("transport_captain_email", transport_captain_email);
    formData.append("transport_captain_phone", transport_captain_phone);
    formData.append("transport_manager_1_name", transport_manager_1_name);
    formData.append("transport_manager_1_email", transport_manager_1_email);
    formData.append("transport_manager_1_phone", transport_manager_1_phone);
    formData.append("transport_manager_2_name", transport_manager_2_name);
    formData.append("transport_manager_2_email", transport_manager_2_email);
    formData.append("transport_manager_2_phone", transport_manager_2_phone);
    formData.append("head_driver_name", head_driver_name);
    formData.append("head_driver_email", head_driver_email);
    formData.append("head_driver_phone", head_driver_phone);
    formData.append("truck1_name", truck1_name);
    formData.append("truck1_email", truck1_email);
    formData.append("truck1_phone", truck1_phone);
    formData.append("truck2_name", truck2_name);
    formData.append("truck2_email", truck2_email);
    formData.append("truck2_phone", truck2_phone);
    formData.append("truck3_name", truck3_name);
    formData.append("truck3_email", truck3_email);
    formData.append("truck3_phone", truck3_phone);
    formData.append("car1_name", car1_name);
    formData.append("car1_email", car1_email);
    formData.append("car1_phone", car1_phone);
    formData.append("car2_name", car2_name);
    formData.append("car2_email", car2_email);
    formData.append("car2_phone", car2_phone);
    formData.append("car3_name", car3_name);
    formData.append("car3_email", car3_email);
    formData.append("car3_phone", car3_phone);
    formData.append("catering_co_1_name", catering_co_1_name);
    formData.append("catering_co_1_email", catering_co_1_email);
    formData.append("catering_co_1_phone", catering_co_1_phone);
    formData.append("catering_co_2_name", catering_co_2_name);
    formData.append("catering_co_2_email", catering_co_2_email);
    formData.append("catering_co_2_phone", catering_co_2_phone);
    formData.append("catering_co_3_name", catering_co_3_name);
    formData.append("catering_co_3_email", catering_co_3_email);
    formData.append("catering_co_3_phone", catering_co_3_phone);
    formData.append("craft_service_name", craft_service_name);
    formData.append("craft_service_email", craft_service_email);
    formData.append("craft_service_phone", craft_service_phone);
    formData.append("crafty_ass_name", crafty_ass_name);
    formData.append("crafty_ass_email", crafty_ass_email);
    formData.append("crafty_ass_phone", crafty_ass_phone);
    // additional positions
    formData.append("add_pos_1_job", add_pos_1_job);
    formData.append("add_pos_1_name", add_pos_1_name);
    formData.append("add_pos_1_email", add_pos_1_email);
    formData.append("add_pos_1_phone", add_pos_1_phone);
    formData.append("add_pos_2_job", add_pos_2_job);
    formData.append("add_pos_2_name", add_pos_2_name);
    formData.append("add_pos_2_email", add_pos_2_email);
    formData.append("add_pos_2_phone", add_pos_2_phone);
    formData.append("add_pos_3_job", add_pos_3_job);
    formData.append("add_pos_3_name", add_pos_3_name);
    formData.append("add_pos_3_email", add_pos_3_email);
    formData.append("add_pos_3_phone", add_pos_3_phone);
    formData.append("add_pos_4_job", add_pos_4_job);
    formData.append("add_pos_4_name", add_pos_4_name);
    formData.append("add_pos_4_email", add_pos_4_email);
    formData.append("add_pos_4_phone", add_pos_4_phone);
    formData.append("add_pos_5_job", add_pos_5_job);
    formData.append("add_pos_5_name", add_pos_5_name);
    formData.append("add_pos_5_email", add_pos_5_email);
    formData.append("add_pos_5_phone", add_pos_5_phone);
    formData.append("add_pos_6_job", add_pos_6_job);
    formData.append("add_pos_6_name", add_pos_6_name);
    formData.append("add_pos_6_email", add_pos_6_email);
    formData.append("add_pos_6_phone", add_pos_6_phone);
    formData.append("add_pos_7_job", add_pos_7_job);
    formData.append("add_pos_7_name", add_pos_7_name);
    formData.append("add_pos_7_email", add_pos_7_email);
    formData.append("add_pos_7_phone", add_pos_7_phone);
    formData.append("add_pos_8_job", add_pos_8_job);
    formData.append("add_pos_8_name", add_pos_8_name);
    formData.append("add_pos_8_email", add_pos_8_email);
    formData.append("add_pos_8_phone", add_pos_8_phone);
    formData.append("add_pos_9_job", add_pos_9_job);
    formData.append("add_pos_9_name", add_pos_9_name);
    formData.append("add_pos_9_email", add_pos_9_email);
    formData.append("add_pos_9_phone", add_pos_9_phone);
    formData.append("add_pos_10_job", add_pos_10_job);
    formData.append("add_pos_10_name", add_pos_10_name);
    formData.append("add_pos_10_email", add_pos_10_email);
    formData.append("add_pos_10_phone", add_pos_10_phone);
    // addttional positions 11-20
    formData.append("add_pos_11_job", add_pos_11_job);
    formData.append("add_pos_11_name", add_pos_11_name);
    formData.append("add_pos_11_email", add_pos_11_email);
    formData.append("add_pos_11_phone", add_pos_11_phone);
    formData.append("add_pos_12_job", add_pos_12_job);
    formData.append("add_pos_12_name", add_pos_12_name);
    formData.append("add_pos_12_email", add_pos_12_email);
    formData.append("add_pos_12_phone", add_pos_12_phone);
    formData.append("add_pos_13_job", add_pos_13_job);
    formData.append("add_pos_13_name", add_pos_13_name);
    formData.append("add_pos_13_email", add_pos_13_email);
    formData.append("add_pos_13_phone", add_pos_13_phone);
    formData.append("add_pos_14_job", add_pos_14_job);
    formData.append("add_pos_14_name", add_pos_14_name);
    formData.append("add_pos_14_email", add_pos_14_email);
    formData.append("add_pos_14_phone", add_pos_14_phone);
    formData.append("add_pos_15_job", add_pos_15_job);
    formData.append("add_pos_15_name", add_pos_15_name);
    formData.append("add_pos_15_email", add_pos_15_email);
    formData.append("add_pos_15_phone", add_pos_15_phone);
    formData.append("add_pos_16_job", add_pos_16_job);
    formData.append("add_pos_16_name", add_pos_16_name);
    formData.append("add_pos_16_email", add_pos_16_email);
    formData.append("add_pos_16_phone", add_pos_16_phone);
    formData.append("add_pos_17_job", add_pos_17_job);
    formData.append("add_pos_17_name", add_pos_17_name);
    formData.append("add_pos_17_email", add_pos_17_email);
    formData.append("add_pos_17_phone", add_pos_17_phone);
    formData.append("add_pos_18_job", add_pos_18_job);
    formData.append("add_pos_18_name", add_pos_18_name);
    formData.append("add_pos_18_email", add_pos_18_email);
    formData.append("add_pos_18_phone", add_pos_18_phone);
    formData.append("add_pos_19_job", add_pos_19_job);
    formData.append("add_pos_19_name", add_pos_19_name);
    formData.append("add_pos_19_email", add_pos_19_email);
    formData.append("add_pos_19_phone", add_pos_19_phone);
    formData.append("add_pos_20_job", add_pos_20_job);
    formData.append("add_pos_20_name", add_pos_20_name);
    formData.append("add_pos_20_email", add_pos_20_email);
    formData.append("add_pos_20_phone", add_pos_20_phone);
    if (imageInput1?.current?.files[0]) {
      formData.append("company_logo", imageInput1.current.files[0]);
    }
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.post("/crewinfonew/", formData);
        setEditCrewInfo(true);
        history.push(`/${localStorage.getItem("projectSlug")}/callsheets/`);
        console.log(data);
      } else {
        if (localStorage.getItem("accessToken")) {
          const { data } = await axiosInstance.post(
            `${localStorage.getItem("projectSlug")}/crewinfonew/`,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          setEditCrewInfo(true);
          history.push(`/${localStorage.getItem("projectSlug")}/callsheets/`);
          console.log(data);
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const buttons = (
    <div className="text-center mt-4 mb-4">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 ml-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  return (
    <div>
      <TopBox work="Crew Info" title="Create" />
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
        onClick={() => setShowImp((showImp) => !showImp)}
      >
        IMPORTANT
      </Button>
      {!showImp ? "" : <Important />}
      <Row className="text-center mt-3">
        <Col md={{ span: 8, offset: 2 }}>
          <p>
            The "Create" Button on this page creates the "Crew Info" page one
            time whether you add one crew member or many ones in different
            departments. After that the Edit button on the "Crew Info" page is
            used to add to or edit the page at future stages. Click on
            department links to add or edit.
          </p>
        </Col>
      </Row>
      <Form className={`my-3 ${styles.Back}`} onSubmit={handleSubmit}>
        <div className={`pt-2 ${styles.White}`}>
          <Row className={`${styles.ButtonLine} mt-0`}>
            <Col className="text-center">
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowCom((showCom) => !showCom)}
              >
                {" "}
                Company
              </p>
            </Col>
          </Row>
          <Row className={`${styles.ButtonLine} mt-0`}>
            <Col xs={4} md={2} className="text-center">
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowPro((showPro) => !showPro)}
              >
                {" "}
                Production
              </p>
            </Col>
            <Col xs={4} md={2} className="text-center">
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowCam((showCam) => !showCam)}
              >
                {" "}
                Camera
              </p>
            </Col>
            <Col xs={4} className="mx-0 pl-4 py-0" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowCas((showCas) => !showCas)}
              >
                {" "}
                Casting/AD
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
                onClick={() => setShowWar((showWar) => !showWar)}
              >
                Wardrobe
              </p>
            </Col>
            <Col xs={4} className="mx-0 px-0 text-center" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowScr((showScr) => !showScr)}
              >
                {" "}
                Script/Catering
              </p>
            </Col>
          </Row>
          <Row className={`${styles.ButtonLine} text-center mt-0`}>
            <Col xs={4} md={2} className="mx-0 px-0 py-0">
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowEle((showEle) => !showEle)}
              >
                {" "}
                Electric/Grip
              </p>
            </Col>
            <Col xs={4} md={2} className="mx-0 px-0 py-0">
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowMak((showMak) => !showMak)}
              >
                {" "}
                Makeup
              </p>
            </Col>
            <Col xs={4} className="mx-0 px-0 py-0" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowSou((showSou) => !showSou)}
              >
                {" "}
                Sound/Transport
              </p>
            </Col>
            <Col xs={4} className="py-0" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowStu((showStu) => !showStu)}
              >
                Stunts
              </p>
            </Col>
            <Col xs={4} className="text-center" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowArt((showArt) => !showArt)}
              >
                {" "}
                Art
              </p>
            </Col>
            <Col xs={4} className="mx-0 px-0 py-0" md={2}>
              <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowPos((showPos) => !showPos)}
              >
                {" "}
                Post/Additional
              </p>
            </Col>
          </Row>
          <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle}`}></p>
          <div className={`py-1 ${styles.White}`}></div>
        </div>
        <div className={`mt-0`}>
          {/* Add Company */}
          {!showCom ? (
            ""
          ) : (
            <CrewCompany
              handleChange={handleChange}
              postData={postData}
              setShow={setShowCom}
            />
          )}
          {/* Add Production */}
          {!showPro ? (
            ""
          ) : (
            <CrewProduction
              handleChange={handleChange}
              postData={postData}
              setShow={setShowPro}
            />
          )}
          {/* Add Casting */}
          {!showCas ? (
            ""
          ) : (
            <CrewCastingAD
              setShow={setShowCas}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Locations */}
          {!showLoc ? (
            ""
          ) : (
            <CrewLocations
              setShow={setShowLoc}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Script  */}
          {!showScr ? (
            ""
          ) : (
            <CrewScriptCater
              setShow={setShowScr}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Electric */}
          {!showEle ? (
            ""
          ) : (
            <CrewElecGrip
              setShow={setShowEle}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Makeup */}
          {!showMak ? (
            ""
          ) : (
            <CrewMakeup
              setShow={setShowMak}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Sound */}
          {!showSou ? (
            ""
          ) : (
            <CrewSoundTransport
              setShow={setShowSou}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Stunts */}
          {!showStu ? (
            ""
          ) : (
            <CrewStunts
              setShow={setShowStu}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Art */}
          {!showArt ? (
            ""
          ) : (
            <CrewArt
              setShow={setShowArt}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Camera */}
          {!showCam ? (
            ""
          ) : (
            <CrewCamera
              setShow={setShowCam}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Post */}
          {!showPos ? (
            ""
          ) : (
            <CrewPostAdditional
              setShow={setShowPos}
              postData={postData}
              handleChange={handleChange}
            />
          )}
          {/* Add Wardrobe  */}
          {!showWar ? (
            ""
          ) : (
            <CrewWardrobe
              setShow={setShowWar}
              postData={postData}
              handleChange={handleChange}
            />
          )}
        </div>
        {buttons}
      </Form>
    </div>
  );
};

export default CrewInfoCreate;
