import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "./NavBar/NavBarNPO";

function NPO() {
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
            <h1>NPO Page</h1>
        </header>
    );
}

export default NPO;
