import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Volunteer() {
    let navigate = useNavigate(); 

    function handleEnrolButton() {
        navigate('/Enrol'); 
    }

    function handleRequestButton() {
        navigate('/Cert'); 
    }

    return (
        <header className="App-header">
            <h1>Volunteer page</h1>
            <div className="button-container">
                <button type="button" className="button-style" onClick={handleEnrolButton}>Enrol Now</button>
                <button type="button" className="button-style" onClick={handleRequestButton}>Request Certificate</button>
            </div>
        </header>
    );
}

export default Volunteer;
