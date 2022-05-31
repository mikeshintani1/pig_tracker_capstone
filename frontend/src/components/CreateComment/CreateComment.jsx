import React, { useReducer, useState,useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CommentImg from './commentimg';
import './CreateComment.css'

const CreateComment = (props) => {
    
    const [name, setName] = useState('')
    const [location, setLocation] = useState('');
    const [text, setText] = useState('');
    const [user, token] = useAuth();
    

    function handleSubmit(event) {
        event.preventDefault();
        let createComment = {
            
            name: name,
            location: location,
            text: text,

        };
        console.log(createComment);
        addComment(createComment);
    }
    async function addComment(CreateComment) {
      try {
        console.log('hello')
        let response = await axios.post("http://127.0.0.1:8000/api/pig_tracker/comment/", CreateComment, {
          headers: {
            Authorization: "Bearer " + token,
            
          },
        });
       CreateComment(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <CommentImg />
            <p className='comment-text'>Go ahead and leave any comments about a BBQ or sighting that someone posted!  Make sure to keep it friendly and G rated!</p>
            <br></br>
            <nav style={{display: "flex", justifyContent: "space-evenly"}} >
            <div className='form-group'>
                <label className='label-group'>Name</label>
                <input type='text'
                className='form-control'
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Location</label>
                <input type='text'
                className='form-control'
                value={location}
                onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label className='label-group'>Comment</label>
                <input type='text'
                className='form-control'
                value={text}
                onChange={(event) => setText(event.target.value)}/>
            </div>
            </nav>
            <button className="comment"
                    type="submit">
                    <img src="https://img.icons8.com/flat-round/64/000000/pig--v1.png"
                    width='80px'/>
                    </button>
        
        </form>
    );
}
 
export default CreateComment;

