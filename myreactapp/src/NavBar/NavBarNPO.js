import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import bigatheartlogo from './bigatheartlogo.png';
import './NavBar.css';

const NavBarNPO = ({ handleAttendanceButton, handleCertificateButton, handleReportButton }) => {
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
            <button type="button" className="button-style" onClick={handleAttendanceButton}>Attendance</button>
            <button type="button" className="button-style" onClick={handleCertificateButton}>Certificate</button>
            <button type="button" className="button-style" onClick={handleReportButton}>Report</button>
        </div>
    </nav>
  );
};

export default NavBarNPO;
