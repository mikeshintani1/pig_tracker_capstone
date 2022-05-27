import React from 'react';
import logo from './commentimg.png';


console.log(logo);

function CommentImg(){
    return <img src={logo} className='cmntimg' alt='cmntimg' />;
}

export default CommentImg