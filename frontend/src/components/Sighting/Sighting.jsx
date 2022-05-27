import React, { useReducer, useState,useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Marker } from '@react-google-maps/api';



const CreateComment = (props) => {

    const [user_id, setUser] = useState('')
    const [name, setName] = useState('')
    const [sighting_id, setSightingId] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [user, token] = useAuth();
    

    function handleSubmit(event) {
        event.preventDefault();
        let createSighting = {
            
     
            name:name,
            sighting_id: sighting_id,
            location: location,
            time: time,
            date: date,
            text: text,

        };
        console.log(createSighting);
        addComment(createSighting);
    }
    async function addComment(CreateSighting) {
      try {
        console.log('hello')
        let response = await axios.post("http://127.0.0.1:8000/api/pig_tracker/sighting/", CreateSighting, {
          headers: {
            Authorization: "Bearer " + token,
            
          },
        });
        CreateSighting(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <h3 className='h3-css'>Log Sighting!</h3>
            <div className='form-group'>
                <label className='label-group'>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>            

            <div className='form-group'>
                <label className='label-group'>Sighting ID</label>
                <input type='text' className='form-control' value={sighting_id} onChange={(event) => setSightingId(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Location</label>
                <input type='text' className='form-control' value={location} onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Time</label>
                <input type='text' className='form-control' value={time} onChange={(event) => setTime(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Date</label>
                <input type='text' className='form-control' value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Comment</label>
                <input type='text' className='form-control' value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
            <button className="comment" type="submit">LOG!</button>
        
        </form>
    );
}
 
export default CreateComment;

