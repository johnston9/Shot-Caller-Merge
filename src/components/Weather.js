/* Weather component using Open Weather API
 * FIX NEEDED
   Needs to have date added but that meens an upgrade to a
   higher price tier and the url altered */
import React, { useEffect, useState } from 'react';
import styles from "../styles/Weather.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
const Weather = ({weather_location} ) => {
const openKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
const [forcast, setForcast] = useState("");
const [temp, setTemp] = useState("");
const [rise, setRise] = useState("");
const [setsun, setSetsun] = useState("");

useEffect(() => {
    /* Request to OpenWeathermap API */
    const search = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weather_location}&units=metric&APPID=${openKey}`
          // `https://api.openweathermap.org/data/2.5/forecast/daily?q=${weather_location}&units=metric&cnt=7&appid=${openKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            const sunrisenew = new Date(data.sys?.sunrise * 1000).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true});
            const sunsetnew = new Date(data.sys?.sunset * 1000).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true});
            if (data.main) {
                setForcast(data?.weather[0]?.main)
            setTemp(Math.round(data.main?.temp));
            setRise(sunrisenew);
            setSetsun(sunsetnew);
            }
          });
    };
    search();
  }, [weather_location, openKey])
 
  return (
    <div >
    <div className='d-none d-md-block'>
    <Row>
      <Col xs={6} >
      <p className={`mb-1`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
      <p className={`mb-1`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
      <p className={`mb-1`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
      </Col>
      <Col xs={6} >
      <p className={`${styles.WhiteAqua} mb-1`} >{forcast} {temp && <span>{temp} C</span>} </p>
      <p style={{ textTransform: 'uppercase'}} className={`${styles.WhiteAqua} mb-1`} >{rise}</p>
      <p style={{ textTransform: 'uppercase'}} className={`${styles.WhiteAqua} mb-1`}>{setsun}</p>
      </Col>
    </Row>
    {/* <p style={{ textTransform: 'uppercase'}} >{sunnew} </p>
      <p style={{ textTransform: 'uppercase'}}>{sunnewnow} </p> */}
        {/* <input 
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={search}
        className={`${styles.Input} mb-3`} /> */}
    </div>
    {/* MOBILE  */}
    <div className='d-block d-md-none mb-5'>
    <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
    <p className={`${styles.WhiteAqua}`} >{forcast} {temp && <span>{temp} C</span>}</p> 
    <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
    <p style={{ textTransform: 'uppercase'}}  className={`${styles.WhiteAqua}`}>{rise} </p> 
    <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
    <p style={{ textTransform: 'uppercase'}}  className={`${styles.WhiteAqua}`}>{setsun} </p> 
    </div>
    </div>
  )
}

export default Weather