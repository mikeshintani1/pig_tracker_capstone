import { useMemo } from "react";
import React from "react";
import { LoadScript, GoogleMap, } from "@react-google-maps/api";


const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 31.1352 , lng: -99.3351
  }
  
  return (
     <LoadScript
       googleMapsApiKey="AIzaSyA2RqWS0ibf_6QACxpSjUOoSW_rMOYq6t4">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
        />
     </LoadScript>
     
  )
}
export default MapContainer;