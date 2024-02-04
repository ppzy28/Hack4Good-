import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import bigatheartlogo from './bigatheartlogo.png';
import './NavBar.css';

const NavBarVolunteer = ({ handleActivityButton, handleEnrolButton, handleRequestButton }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate('/');
    };

  return (
    <nav className="navbar">
        <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={bigatheartlogo} className="logo" alt="Logo" />
            <div className="name">
                Big At Heart
            </div>
        </div>
        <div className="nav-links">
            <button type="button" className="button-style" onClick={handleActivityButton}>Volunteer Activities</button>
            <button type="button" className="button-style" onClick={handleEnrolButton}>Enrol Now</button>
            <button type="button" className="button-style" onClick={handleRequestButton}>Request Certificate</button>
        </div>
    </nav>
  );
};

export default NavBarVolunteer;
