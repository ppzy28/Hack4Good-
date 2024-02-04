import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";

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
            <NavBar 
                handleVolunteerButton={handleVolunteerButton}
                handleNPOButton={handleNPOButton}
            />
            <h1>BIG AT HEART</h1>
        </header>
    );
}

export default Login;
