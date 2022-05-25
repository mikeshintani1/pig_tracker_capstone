import { ReactDom } from "react-dom";
import React, { useState, useRef, useCallback } from "react";
import { LoadScript, GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";


const MapContainer = () => {

  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 31.1352 , lng: -99.3351
  }
  const position = {
    lat: 31.1352 ,
    lng: -99.3351
  }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }


  return (
     <LoadScript
       googleMapsApiKey="AIzaSyAFJMJ13kPzlp2i-VHeMUtjsMymMewETds">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
          >
          <Marker
            onLoad={onLoad}
            position={position}
          
          >
            </Marker></GoogleMap>
     </LoadScript>

  )
}
export default MapContainer;