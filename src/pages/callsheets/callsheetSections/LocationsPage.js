/* Component in the Callsheet component to display the Callsheet 
   Locations
 * Contains the Map component to display Google maps */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import { Image } from 'react-bootstrap';
import goo_map from "../../../assets/goo-map.png";
import { useState } from 'react';
import Map from '../../../components/Map';

const LocationsPage = ({callsheet, setShow}) => {
    const [showMapHos, setShowMapHos] = useState(false);
    const [showMapBase, setShowMapBase] = useState(false);
    const [showMapLoc1, setShowMapLoc1] = useState(false);
    const [showMapLoc2, setShowMapLoc2] = useState(false);
    const [showMapLoc3, setShowMapLoc3] = useState(false);
    const [showMapLoc4, setShowMapLoc4] = useState(false);
    const [showMapLoc5, setShowMapLoc5] = useState(false);
    const { basecamp_name, basecamp_address, basecamp_parking_n_notes,
            location_1_name, location_1_address, location_1_parking_n_notes,
            location_2_name, location_2_address, location_2_parking_n_notes,
            location_3_name, location_3_address, location_3_parking_n_notes,
            location_4_name, location_4_address, location_4_parking_n_notes,
            location_5_name, location_5_address, location_5_parking_n_notes,
            nearest_hospital, hospital_address_line_1, hospital_address_line_2, 
            hospital_address_line_3, hospital_address_line_4
           } = callsheet;
    const hospital_address = `${nearest_hospital}, ${hospital_address_line_1}, ${hospital_address_line_2}, ${hospital_address_line_3}, ${hospital_address_line_4}`;  
    const basecamp_map_address = `${basecamp_name}, ${basecamp_address}`; 

    const location_1_map_address = `${location_1_name}, ${location_1_address}`; 
    const location_2_map_address = `${location_2_name}, ${location_2_address}`; 
    const location_3_map_address = `${location_3_name}, ${location_3_address}`; 
    const location_4_map_address = `${location_4_name}, ${location_4_address}`; 
    const location_5_map_address = `${location_5_name}, ${location_5_address}`; 
  return (
    <div>
        <div className='mt-3'>
        <div className='d-none d-md-block mt-5'>
        <h4 className={`mt-3 pl-3 py-0 ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>Locations</h4>
        </div>
        <div className='d-block d-md-none'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} 
        style={{ textTransform: 'uppercase'}} >Locations</h5>
        </div>
        </div>
        <Row style={{ textTransform: 'uppercase' }} className={` text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} >
            <p className='my-0 py-0'>#</p>
            </Col>
            <Col className={`${styles.TitleBox2} px-0 mx-0`} xs={5}>
            <p className='my-0 py-0'><span className='d-none d-sm-inline-block'>Name -</span> Address</p>
            </Col>
            <Col className={`${styles.TitleBox2} px-0 mx-0`} xs={4} md={5} >
            <p className='my-0 py-0'><span className='d-none d-sm-inline-block'>Crew Parking and </span> Notes</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={1} >Map</Col>
        </Row>
        <div className='d-none d-md-block ' >
        {hospital_address_line_1 ? (
            <Row 
            style={{ backgroundColor: '#f6fffe' }}
            className='px-3 '>
            <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} >
            <p></p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={10}>
            <p className={`mb-0 ${styles.BoldBase}`} >Nearest Hospital</p>
            <p className={`mb-0 ${styles.Bold}`} >{nearest_hospital}</p>
            <p className='mb-0'>
            {hospital_address_line_1  && <span>{hospital_address_line_1},</span>}
            {hospital_address_line_2  && <span> {hospital_address_line_2},</span>}
            {hospital_address_line_3  && <span> {hospital_address_line_3},</span>}
            {hospital_address_line_4  && <span> {hospital_address_line_4}</span>}
            </p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`} 
             onClick={() => setShowMapHos(showMapHos => !showMapHos)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapHos ? (
              ""
                  ) : (
                    <Map address={hospital_address}  /> 
                    ) }
        </div>
        {basecamp_address ? (
            <Row 
            style={{ backgroundColor: 'rgb(254 249 254)' }}
            className='px-3 '>
            <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} >
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.BoldBase}`} >Basecamp</p>
            <p className={`mb-0 ${styles.Bold}`} >{basecamp_name}</p>
            <p className='mb-0'>{basecamp_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={4} md={5} >
            <p className='mb-0'>{basecamp_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`} 
             onClick={() => setShowMapBase(showMapBase => !showMapBase)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapBase ? (
              ""
                  ) : (
                    <Map address={basecamp_map_address}  /> 
                    ) }
        {location_1_address ? (
            <Row 
            style={{ backgroundColor: 'rgb(246 254 245)'}}
            className=' px-3'>
            <Col className={`mx-0 px-0 px-md-3 ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>1</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_1_name}</p>
            <p className='mb-0'>{location_1_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3 ${styles.Border}`} xs={4} md={5}>
            <p className={`mb-0 py-1`}>{location_1_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`}
             onClick={() => setShowMapLoc1(showMapLoc1 => !showMapLoc1)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapLoc1 ? (
              ""
                  ) : (
                    <Map address={location_1_map_address}  /> 
                    ) }
        {location_2_address ? (
            <Row 
            style={{ backgroundColor: '#f6fffe'}}
            className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>2</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_2_name}</p>
            <p className='mb-0'>{location_2_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={4} md={5}>
            <p className={`mb-0`}>{location_2_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`}
             onClick={() => setShowMapLoc2(showMapLoc2 => !showMapLoc2)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapLoc2 ? (
              ""
                  ) : (
                    <Map address={location_2_map_address}  /> 
                    ) }
        {location_3_address ? (
            <Row
            style={{ backgroundColor: 'rgb(246 254 245)'}} 
            className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>3</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_3_name}</p>
            <p className='mb-0'>{location_3_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={4} md={5}>
            <p className={`mb-0`}>{location_3_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`}
             onClick={() => setShowMapLoc3(showMapLoc3 => !showMapLoc3)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapLoc3 ? (
              ""
                  ) : (
                    <Map address={location_3_map_address}  /> 
                    ) }
        {location_4_address ? (
            <Row 
            style={{ backgroundColor: '#f6fffe'}}
            className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>4</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_4_name}</p>
            <p className='mb-0'>{location_4_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={4} md={5}>
            <p className={`mb-0`}>{location_4_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`}
             onClick={() => setShowMapLoc4(showMapLoc4 => !showMapLoc4)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapLoc4 ? (
              ""
                  ) : (
                    <Map address={location_4_map_address}  /> 
                    ) }
        {location_5_address ? (
            <Row 
            style={{ backgroundColor: 'rgb(246 254 245)'}}
            className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>5</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_5_name}</p>
            <p className='mb-0'>{location_5_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={4} md={5} >
            <p className={`mb-0`}>{location_5_parking_n_notes}</p>
            </Col>
            <Col className={`mx-0 ${styles.Border} d-flex justify-content-center`} xs={2} md={1} >
            <Image src={goo_map} alt="google maps" height="50"
            className={` ${styles.Map}`}
             onClick={() => setShowMapLoc5(showMapLoc5 => !showMapLoc5)} ></Image>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {!showMapLoc5 ? (
              ""
                  ) : (
                    <Map address={location_5_map_address}  /> 
                    ) }
        {/* {nearest_hospital ? (
            <Row 
            style={{ backgroundColor: 'rgb(254 249 254)' }}
            className='px-3 '>
            <Col className={`mx-0 px-1 px-md-3 ${styles.Border}`} xs={1} >
            <p></p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >Nearest Hospital</p>
            <p className={`mb-0 ${styles.Bold}`} >{nearest_hospital}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className='mb-0'>{hospital_address_line_1} {hospital_address_line_2}
             {hospital_address_line_3} {hospital_address_line_4}</p>
            </Col>
            </Row>
        ) : (
            ""
        )} */}
        </div>
    </div>
  )
}

export default LocationsPage