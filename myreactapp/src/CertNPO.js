import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "./NavBar/NavBarNPO";
import "./App.css";

function CertNPO() {
    let navigate = useNavigate(); 

    function handleAttendanceButton() {
        navigate('/AttendanceNPO');
    }

    function handleCertificateButton() {
        navigate('/CertNPO');
    }

    function handleReportButton() {
        navigate('/NPOReport');
    }

    return (
        <header className="App-header">
            <NavBarNPO 
                handleAttendanceButton={handleAttendanceButton}
                handleCertificateButton={handleCertificateButton}
                handleReportButton={handleReportButton}
            />
            <h1>Generate Certificate</h1>
        </header>
    );
}

export default CertNPO;
