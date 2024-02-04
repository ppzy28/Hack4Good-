import React from 'react';
import { NavLink } from 'react-router-dom';
import bigatheartlogo from './bigatheartlogo.png';
import './NavBar.css';

const NavBar = ({ handleVolunteerButton, handleNPOButton }) => {
  return (
    <nav className="navbar">
        <div className="logo-container">
            <img src={bigatheartlogo} className="logo" alt="Logo" />
            <div className="name">
                Big At Heart
            </div>
        </div>
        <div className="nav-links">
            <button type="button" className="button-style" onClick={handleVolunteerButton}>Volunteer</button>
            <button type="button" className="button-style" onClick={handleNPOButton}>NPO</button>
        </div>
    </nav>
  );
};

export default NavBar;
