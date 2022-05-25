import React, { useReducer, useState,useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Marker } from '@react-google-maps/api';

const CreateComment = (props) => {
    
    const [name, setName] = useState('')
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

    const [user, token] = useAuth();
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

    function handleSubmit(event) {
        event.preventDefault();
        let createComment = {
            
            name: name,
            location: location,
            date: date,
            text: text,


        };
        console.log(createComment);
        props.createComment(createComment);
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <h3 className='h3-css'>Create Comment!</h3>
            <div className='form-group'>
                <label className='label-group'>Name</label>
                <input type='text' className='form-control' value={user.username} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Location</label>
                <input type='text' className='form-control' value={location} onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Date</label>
                <input type='text' className='form-control' value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Comment</label>
                <input type='text' className='form-control' value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
                <button type='submit' className="add_btn" style={{'marginTop': '1em'}}>Add</button>
        </form>
    );
}
 
export default CreateComment;

