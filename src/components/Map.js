// Google Maps Component
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Map.module.css";
// useJsApiLoader usePlacesAutocomplete
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {getGeocode, getLatLng } from "use-places-autocomplete";
import { useState } from "react";
import { useEffect } from "react";

function MapPage({address}) {
  // const center = useMemo(() => ({lat: 53.3498, lng: 6.2603 }), []) ;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    /* Function to get lat lng of address and set 
       it a the selected for Maps  */
     const handleAddress = async () => {
     const result = await getGeocode({address});
     const {lat, lng} = await getLatLng(result[0]);
     setSelected({lat, lng});
         }
    handleAddress();
  }, [address]);

  return (
    <div>
    <Row className="my-3">
    <Col md={{span: 10, offset:1 }}>
    {selected && <GoogleMap 
    zoom={15}
    center={selected}
    mapContainerClassName={` ${styles.Map}`}
     >
    {selected && <Marker 
     position={selected} /> }
     </GoogleMap> }
    </Col>
    </Row>
    </div>
  )
}

  const Map = ({address}) => {
  const mapKey = process.env.REACT_APP_MAP_KEY;
  const { isLoaded} = useLoadScript({googleMapsApiKey: mapKey,
  libraries: ["places"],
  })

  return (
    <div>
      {isLoaded ? (<MapPage address={address} />) : ("") }
    </div>
  )
}

export default Map