//Support Features
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Components
import MapContainer from "../../components/Map/GoogleMap";
import CreateComment from "../../components/CreateComment/CreateComment";
import CommentTable from "../../components/CreateComment/CommentTable";
import DisplaySightings from "../../components/Sighting/Sighting";
import SightingTable from "../../components/Sighting/SightingTable";
import DisplayFeast from "../../components/Feast/FeastTable";
import CreateFeast from "../../components/Feast/Feast";

//images
import Texas from "./TexasFlag";
import HomeHeader from "./HomePageHdr";
import Pig from "./Pig";

//CSS imports
import "./HomePage.css"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
  const [user, token] = useAuth();
  const [comment, setComment] = useState([]);
  const [sighting, setSighting] = useState([]);
  const [feast, setFeast] = useState([]);

  useEffect(() => {
    getAllComments();
  }, [])

  async function getAllComments(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/pig_tracker/get_all_comments/');
      console.log(response.data);
      setComment(response.data)
    } catch (ex) {
      console.log('Error in call!!');
    }
  }

  async function getAllSightings(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/pig_tracker/get_all_sighting/');
      console.log(response.data);
      setSighting(response.data)
    } catch (ex) {
      console.log('Error in call!!');
    }
  }

  async function getFeast(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/pig_tracker/get_all_feast/');
      console.log(response.data);
      setFeast(response.data)
    } catch (ex) {
      console.log('Error in call!!');
    }
  }
  

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div class='row' className="container">
      <Texas className='Texas' width='150px'/>
      <HomeHeader className='HomeHeader'/>
      <Pig className = "pig" width='150px'/>
      <MapContainer /> 
      <nav style={{display: "flex", justifyContent: "space-evenly"}} >
    
               
       </nav>
       <br></br>
       <br></br>
       <br></br>
        <div id='sighting'></div>
        <DisplaySightings />
        <div class='container' >

          <button className='getSighting'
          onClick = {getAllSightings}></button>

          <SightingTable parentSighting = {sighting} />


        </div>
        <br></br>
       <br></br>
       <br></br>        
       <br></br>
       <br></br>
       <br></br>  
          <CreateFeast />
        <div class='container' id='feast'>
           
          <button class="btn" className="getFeast" width="100%"
          onClick = {getFeast}>
          </button>
        </div>

        <div>
          <DisplayFeast parentFeast = {feast} />
        
        </div>
        <br></br>
       <br></br>
       <br></br>        
       <br></br>
       <br></br>
       <br></br>  
        <div className="container" id='comment'>
        <CreateComment />
        <div >
          <button
          width='100%'
          className='getComments'
          onClick = {getAllComments}></button>
        </div>
        <CommentTable className='container' parentComments = {comment}/>
          <div class='column'>
         </div> 

        </div>
      </div>
  );
};

export default HomePage;

