import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarVolunteer from "./NavBar/NavBarVolunteer";
import "./App.css";

function Volunteer() {
    let navigate = useNavigate(); 

    function handleEnrolButton() {
        navigate('/Enrol'); 
    }

    function handleRequestButton() {
        navigate('/Cert'); 
    }

    function handleActivityButton() {
        navigate('/VolunteerActivities'); 
    }

    return (
        <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}

            />
            <h1>Volunteer page</h1>
        </header>
    );
}

export default Volunteer;
