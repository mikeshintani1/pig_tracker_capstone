import { ReactDom } from "react-dom";
import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker, InfoBox } from "@react-google-maps/api";
import './GoogleMap.css'
import SightingTable from "../Sighting/SightingTable";


const MapContainer = (props) => {

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


  const parseLatLng = (location) => {
    //location is "(30.30511632592444, -100.93510165410642)"
    //split
    //js object bracket notation
    const polygon = (location);
    const latLong = polygon.split(' , ').map((item) => {
      const [ splat, spllng ] = item.split(',',[21]);
      const lat = parseFloat(splat.substr(1,6))
      const lng = parseFloat(spllng.substr(1,7))
  
      return { lat ,  lng };
    }

    );
    console.log(latLong[0]);




    //goal is 
    // {
    //   lat: 32.72577166798035 , lng:-96.81400769921545
    // }

    return latLong[0]
  }

  
  const onMapClick = (e) => {
    console.log('hi')
    console.log(e.latLng.toString());
    setLatLng(e.latLng)
    setCoords(latLng.toString())
  }
  const [coords, setCoords] = useState('')
 

// AIzaSyAFJMJ13kPzlp2i-VHeMUtjsMymMewETds

  return (
    <div>
    <label className='coords'>
    COORDINATES:
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
            {console.log('latLng',latLng)}
          </Marker>
          {props.parentSighting &&
            props.parentSighting.map((sighting, index) =>
          <Marker key={index}
          position={parseLatLng(sighting.location)}
          >
            {console.log('sighting.location',sighting.location)}
          </Marker>
          )}
          <InfoBox
          onLoad={onLoad}

          position={latLng}
          >
      <div className="label-flag"
      style={{ width: '200px', backgroundColor: 'yellow', opacity: 0.75, padding: 5, boxSizing: 20, }}>
      <div style={{ fontSize: 16, fontColor: `#08233B`, width: '200px',maxWidth:'100%' }}>
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