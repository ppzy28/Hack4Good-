import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarVolunteer from "./NavBar/NavBarVolunteer";
import "./App.css";

function Enrol() {
    let navigate = useNavigate(); 

    function handleActivityButton() {
        navigate('/VolunteerActivities'); 
    }

    function handleEnrolButton() {
        navigate('/Enrol');
    }

    function handleRequestButton() {
        navigate('/Cert');
    }

    return (
        <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}
            />
            <h1>Enrol Now!</h1>
            <div className="formContainer">
            <div class = "formContainer">
                <form id = "userForm">

                    <label for = "name">Name:</label>
                    <input type = "text" id = "name" required = {false} placeholder="Enter Name" /> <br />

                    <label for = "dob">Date of Birth:</label>
                    <input type = "text" id = "dob" required = "" placeholder="DOB" /> <br />

                    <div className="button-container">
                        <button type="button" className="button-style" onClick={handleEnrolButton}>Enrol Now</button>
                    </div>   
                </form>
            </div>
            </div>
        </header>
    );
}

export default Enrol;
