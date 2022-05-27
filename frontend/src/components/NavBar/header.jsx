import React from 'react';
import logo from './header.png';


console.log(logo);

function Header(){
    return <img src={logo} className='header' alt='header' />;
}

export default Header