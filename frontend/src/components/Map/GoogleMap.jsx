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
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 32.72577166798035 , lng:-96.81400769921545
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
  const [coords, setCoords] = useState('')
 

// AIzaSyAFJMJ13kPzlp2i-VHeMUtjsMymMewETds
  return (
    <div>
    <label>
    PIN COORDS (click to refresh):
    <input
      type="text"
      value={coords}
      onClick={() => setCoords(latLng.toString())}
    />
  </label>
     <LoadScript
       googleMapsApiKey="">
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
          onClick={onMapClick}
          autopan={false}
          
          >
          <Marker
            onLoad={onLoad}
            position={latLng}
          >  
          </Marker>
          </GoogleMap>
     </LoadScript>    
     </div>    
     
  )
}
export default MapContainer;