import React, { useReducer, useState,useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import FeastImg from './FeastHeader';
import './Feast.css'

const CreateFeast = (props) => {
    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [info, setInfo] = useState('');
    const [user, token] = useAuth();
    

    function handleSubmit(event) {
        event.preventDefault();
        let createFeasts = {
            
            name: name,
            date: date,
            address: address,
            time: time,
            info: info,

        };
        console.log(createFeasts);
        addFeast(createFeasts);
    }
    async function addFeast(CreateFeast) {
      try {
        console.log('hello')
        let response = await axios.post("http://127.0.0.1:8000/api/pig_tracker/feast/", CreateFeast, {
          headers: {
            Authorization: "Bearer " + token,
            
          },
        });
       CreateFeast(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <FeastImg className='imgtop'/>
            <br></br>
  
            <p className='feast-info'>Feel free to put your name, day of party, address, time, and info for folks to come and enjoy your pig roasts!</p>
            <br></br>

            <nav style={{display: "flex", justifyContent: "space-evenly", }} >
            <div className='form-group'>
                <label className='label-group'>Name</label>
                <input type='text'
                className='form-control'
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <br></br>

            <div className='form-group'>
                <label className='label-group'>Date</label>
                <input type='date'
                className='form-control'
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Address</label>
                <input type='text'
                textbox=""
                className='form-control'
                value={address}
                onChange={(event) => setAddress(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Time</label>
                <input type='time'
                className='form-control'
                value={time}
                onChange={(event) => setTime(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Info</label>
                <input type='text'
                className='form-control'
                overflow='scroll'
                value={info}
                onChange={(event) => setInfo(event.target.value)}/>
            </div>
            </nav>
            <button className="comment"
                    type="submit" border-color='white'>
                    <img src="https://img.icons8.com/flat-round/64/000000/pig--v1.png"
                    width='80px'/>
                    </button>
        
        </form>
    );
}
 
export default CreateFeast;

