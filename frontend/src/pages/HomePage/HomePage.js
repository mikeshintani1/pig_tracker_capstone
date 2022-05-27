import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MapContainer from "../../components/Map/GoogleMap";
import CreateComment from "../../components/CreateComment/CreateComment";
import CommentTable from "../../components/CreateComment/CommentTable";
import './HomePage.css'
import DisplaySightings from "../../components/Sighting/Sighting";
import SightingTable from "../../components/Sighting/SightingTable";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
  const [user, token] = useAuth();
  const [comment, setComment] = useState([]);
  const [sighting, setSighting] = useState([]);

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
    <div className="container">
      <h1 className = "header">Welcome to Texas Pig Tracker {user.username}!!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
        <div>
        <MapContainer />
        <div>
        <CreateComment />
        </div>
        <button className='getComments' onClick = {getAllComments}>Previous Comments</button>
        <CommentTable parentComments = {comment}/>
        </div>
        <div>
          <DisplaySightings />
          <button className='getComments' onClick = {getAllSightings}>Previous Sightings</button>
          <SightingTable parentSighting = {sighting} />
        </div>
    </div>
  );
};

export default HomePage;

