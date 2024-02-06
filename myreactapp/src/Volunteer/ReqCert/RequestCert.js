import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBarVolunteer from "../../NavBar/NavBarVolunteer";
import "../../App.css";
import ttsLogo from '../../images/tts-logo.png';

const projectData = [
  {
    id: 1,
    title: 'TTSH Frontliners Care Packs',
    date: '24 Jan 2024',
    attendance: 'Attended',
    completion: 75,
    logo: ttsLogo, 
    color: 'blue',
    cert_url: 'https://drive.google.com/file/d/1rp5-7ZdJcVXocTOPn0WSUfjo8sXeCZig/view?usp=sharing'
  },
];

function Cert() {
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
        <>
        <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}
            />
            <h1 style={{"font-family": "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Activity History</h1>
        </header>

        <div className="table-container">
            <table className="project-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>BENEFICIARY</th>
                        <th>DATE</th>
                        <th>ATTENDANCE</th>
                        <th>CERTIFICATE</th>
                    </tr>
                </thead>
                <tbody>
                    {projectData.map((project) => (
                        <tr key={project.id}>
                            <td>
                                <div className="project-beneficiary">
                                    <div className="project-logo">
                                        <img src={project.logo} alt={project.title} />
                                    </div>
                                    <div className="project-title">{project.title}</div>
                                </div>
                            </td>
                            <td style={{ textAlign: "center" }}> {project.date} </td>
                            <td style={{ textAlign: "center", color:"green" }}>{project.attendance}</td>
                            <td style={{ textAlign: "center" }}>
                                <a href='cert_url' target="_blank" rel="noopener noreferrer">
                                    Request Certificate
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>  
        </div>
        </>
    );
}

export default Cert;
