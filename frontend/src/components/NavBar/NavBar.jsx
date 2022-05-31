import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import Header from "./header";


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
        <Header />
        <div class='nav'>
        <a href='#sighting' className='fast-link'>SIGHTING</a>

        <a href='#feast' className='fast-link'>FEAST</a>
  
        <a href='#comment' className='fast-link'>COMMENT</a>
        </div>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      
      </ul>
    </div>
  );
};

export default Navbar;
