import { ReactDom } from "react-dom";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { LoadScript, GoogleMap, Marker, InfoBox } from "@react-google-maps/api";
import './GoogleMap.css'


const MapContainer = () => {

  const [latLng, setLatLng] = useState({})

  const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
  

  //add form that allows user to type in info, when form submits to the 
  //some fields typed in
  // latLngString will be added to object that axios sends to backend


  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 32.72577166798035 , lng:-96.81400769921545
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
    <label className='coords'>
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
          >
          <Marker
            onLoad={onLoad}
            position={latLng}
            defaultLabel={''}
          >

          </Marker>
          <InfoBox
      onLoad={onLoad}

      position={latLng}
    >
      <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
        <div style={{ fontSize: 16, fontColor: `#08233B` }}>
         {coords}
        </div>
      </div>
    </InfoBox>
          </GoogleMap>
     </LoadScript>    
     </div>    
     
  )
}
export default MapContainer;