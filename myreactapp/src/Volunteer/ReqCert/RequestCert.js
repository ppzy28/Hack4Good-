import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function RequestCert() {
    let navigate = useNavigate(); 

    function handleReqButton() {
        navigate('/Cert'); 
    }

    return (
        <header className="App-header">
            <h1>Request Your Certificate!</h1>
            <div className="button-container">
                <button type="button" className="button-style" onClick={handleReqButton}>Request</button>
            </div>
        </header>
    );
}

export default RequestCert;