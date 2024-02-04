import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Enrol() {
    let navigate = useNavigate(); 

    function handleEnrolButton() {
        navigate('/Enrol');
    }

    return (
        <header className="App-header">
            <h1>Enrol Now!</h1>
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
        </header>
    );
}

export default Enrol;
