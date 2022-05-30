import React, {  useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import HogHeader from './hogsighting';
import './Sighting.css'


const CreateSighting = (props) => {

    const [name, setName] = useState('')
    const [sighting_id, setSightingId] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [user, token] = useAuth();
    

    function handleSubmit(event) {
        event.preventDefault();
        let createSighting = {
            
            name:name,
            category:category,
            sighting_id: sighting_id,
            location: location,
            time: time,
            date: date,
            text: text,

        };
        console.log(createSighting);
        addSighting(createSighting);
    }
    async function addSighting(CreateSighting) {
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
            <HogHeader />
            <div>
            <textbox className='sighting-text'>
                Welcome to the Hog Sighting! Here you can enter your name, the location of pigs in lat / long form, cateogry (Hunter, Conservationist, Landowner), time you spotted the pigs, the day of spotting, and any comments such as pig health, pig size, etc!<br/>
                
                Press the Pig icon to post your sighting and the previous sightings button to load all other sightings!
            </textbox>
            </div>
            <nav style={{display: "flex", justifyContent: "space-evenly"}} >
            <div className='form-group'>
                <label className='label-group'>Name</label>
                <input type='text'
                className='form-control'
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>            

            <div className='form-group'>
                <label className='label-group'>Quantity</label>
                <input type='text'
                className='form-control' 
                alue={sighting_id}
                onChange={(event) => setSightingId(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Location</label>
                <input type='text'
                className='form-control'
                value={location}
                onChange={(event) => setLocation(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Category</label>
                <input type='text'
                className='form-control'
                value={category}
                onChange={(event) => setCategory(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Time</label>
                <input type='text'
                className='time'
                value={time}
                onChange={(event) => setTime(event.target.value)}/>
            </div>

            <div className='date'>
                <label className='label-group'>Date</label>
                <input type='text'
                className='date'
                width='15px'
                value={date}
                onChange={(event) => setDate(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label className='label-group'>Comment</label>
                <input
                type='text'
                className='form-control'
                value={text}
                onChange={(event) => setText(event.target.value)}/>
            </div>
            </nav>
                    <button 
                    type="button" className='button' backgroundcolor='white' border='0px'>
                    <input type='image'
                    img src="https://img.icons8.com/flat-round/64/000000/pig--v1.png" width='80px'/>
                    </button>
                    
        
        </form>
    );
}
 
export default CreateSighting;

