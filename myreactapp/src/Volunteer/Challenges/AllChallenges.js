import React from 'react';
import '../../App.css';
import { useNavigate } from "react-router-dom";
import NavBarVolunteer from "../../NavBar/NavBarVolunteer";

const AllChallenges = () => {
  const products = [
    {
        id: 1,
        name: 'Volunteeer for 50 hours',
        description: 'Complete 50 hours of volunteer work to earn the title of Volunteer Champion of February.',
        xp: '50 xp',
        type: 'All Categories',
        date: 'Feb 2024'
    },
    {
        id: 2,
        name: 'Goldern Hearts',
        description: 'Join our heartfelt mission to support the elderly and become a beacon of compassion in our community.',
        xp: '100 xp',
        type: 'Elderly',
        date: 'Jan - Feb 2024'
      },
      {
        id: 3,
        name: 'Youth Volunteer Quest',
        description: ' Rise to the occasion and earn recognition as a Youth Volunteer Leader, inspiring others with your dedication to service.',
        xp: '100 xp',
        type: 'Youths',
        date: 'Mar 2024'
      },
  ];

  let navigate = useNavigate(); 

    function handleEnrolButton() {
        navigate('/Enrol'); 
    }

    function handleRequestButton() {
        navigate('/RequestCert'); 
    }

    function handleActivityButton() {
        navigate('/VolunteerActivities'); 
    }

    function handleChallengesButton() {
        navigate('/AllChallenges'); 
    } 

  return (
    <>
        <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}
                handleChallengesButton={handleChallengesButton}
            />
            <h1 style={{"font-family": "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Level Up</h1>
        </header>
        <h2 style={{ textAlign: "center", backgroundColor: "lightsteelblue", borderRadius: "5px", marginRight: "50px" ,marginLeft: "50px" }}>Level 1</h2>
        <div className="challenges-container">
            {products.map((product) => (
                <div key={product.id} className="challenge-card">
                    {product.xp && <span className="new-badge">{product.xp}</span>}
                    <h3 className="challenge-type" style={{ color: "darkgray" }}>{product.type}</h3>
                    <h2 className="challenge-name">{product.name}</h2>
                    <p className="challenge-description">{product.description}</p>
                    <div className="challenge-add-container">
                        <span className="challenge-date" style={{ color: "darkgray" }}>{product.date}</span>
                        <button className="start-challenge-btn">Start Challenge</button>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default AllChallenges;
