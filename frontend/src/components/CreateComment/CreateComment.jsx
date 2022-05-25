import React, { useState } from 'react';



const CreateComment = (props) => {

    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');



    function handleSubmit(event) {
        event.preventDefault();
        let createComment = {
   
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