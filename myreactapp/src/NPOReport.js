import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "./NavBar/NavBarNPO";
import "./App.css";

function NPOReport() {
    let navigate = useNavigate(); 

    function handleAttendanceNPOButton() {
        navigate('/AttendanceNPO');
    }

    function handleCertificateButton() {
        navigate('/CertNPO');
    }

    function handleReportButton() {
        navigate('/NPOReport');
    }

    function handleAttendanceButton() {
        navigate('/AttendanceReport');
      }
    
      function handleDemographicsButton() {
        navigate('/DemographicsReport');
      }
    
      function handleActivityButton() {
        navigate('/VolunteerActivityReport');
      }

    return (
        <header className="App-header">
            <NavBarNPO 
                handleAttendanceNPOButton={handleAttendanceNPOButton}
                handleCertificateButton={handleCertificateButton}
                handleReportButton={handleReportButton}
            />
            <h1>NPO Reports</h1>
            <div className="button-container">
        <button type="button" className="button-style" onClick={handleAttendanceButton}>
          Attendance Report
        </button>
        <button type="button" className="button-style" onClick={handleDemographicsButton}>
          Demographics Report
        </button>
        <button type="button" className="button-style" onClick={handleActivityButton}>
          Volunteer Activity Report
        </button>
      </div>
        </header>
    );
}

export default NPOReport;
