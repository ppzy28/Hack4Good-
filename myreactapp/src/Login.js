import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
    let navigate = useNavigate(); 

    function handleVolunteerButton() {
        navigate('/Volunteer'); 
    }

    function handleNPOButton() {
        navigate('/NPO');
    }

    return (
        <header className="App-header">
            <h1>BIG AT HEART</h1>
            <div className="button-container">
                <button type="button" className="button-style" onClick={handleVolunteerButton}>Volunteer</button>
                <button type="button" className="button-style" onClick={handleNPOButton}>NPO</button>
            </div>
        </header>
    );
}

export default Login;
