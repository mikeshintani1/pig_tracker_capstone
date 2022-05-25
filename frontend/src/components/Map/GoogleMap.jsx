import { ReactDom } from "react-dom";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { LoadScript, GoogleMap, InfoWindow, Marker} from "@react-google-maps/api";


const MapContainer = () => {

  const [latLng, setLatLng] = useState({})
  //latLngString?

  //add form that allows user to type in info, when form submits to the 
  //some fields typed in
  // latLngString will be added to object that axios sends to backend

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
  
  const onMapClick = (e) => {
    console.log('hi')
    console.log(e.latLng.toString());
    setLatLng(e.latLng)
  }

  useEffect(() =>{
    console.log(latLng)
  }, [latLng])
  


  return (
     <LoadScript
       googleMapsApiKey="AIzaSyAFJMJ13kPzlp2i-VHeMUtjsMymMewETds">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
          onClick={onMapClick}
          >
          <Marker
            onLoad={onLoad}
            position={latLng}
          
          >  
          </Marker>
          </GoogleMap>
     </LoadScript>

  )
}
export default MapContainer;