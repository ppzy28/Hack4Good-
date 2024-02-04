import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "../NavBar/NavBarNPO";
import { Doughnut } from "react-chartjs-2";
import "../App.css";

function DemographicsReport() {
  const navigate = useNavigate();

  const handleAttendanceNPOButton = () => {
    navigate('/AttendanceNPO');
  };

  const handleCertificateButton = () => {
    navigate('/CertNPO');
  };

  const handleReportButton = () => {
    navigate('/NPOReport');
  };

  const handleAttendanceButton = () => {
    navigate('/AttendanceReport');
  };

  const handleDemographicsButton = () => {
    navigate('/DemographicsReport');
  };

  const handleActivityButton = () => {
    navigate('/VolunteerActivityReport');
  };

  const [selectedCategory, setSelectedCategory] = useState("gender");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


const getChartData = () => {
  const ageData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        data: [15, 25, 20, 18, 22],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
      },
    ],
  };

  const genderData = {
    labels: ["Male", "Female", "Non-Binary"],
    datasets: [
      {
        data: [30, 40, 15],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(255, 205, 86, 0.6)"],
        hoverBackgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)", "rgba(255, 205, 86, 0.8)"],
      },
    ],
  };

  const interestsData = {
    labels: ["Technology", "Arts", "Sports", "Science", "Music"],
    datasets: [
      {
        data: [25, 15, 20, 10, 30], 
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
      },
    ],
  };

  switch (selectedCategory) {
    case "gender":
      return genderData;
    case "age":
      return ageData;
    case "interests":
      return interestsData;
    default:
      return {};
  }
};


  return (
    <div className="page-container">
      <header className="App-header">
        <NavBarNPO
          handleAttendanceNPOButton={handleAttendanceNPOButton}
          handleCertificateButton={handleCertificateButton}
          handleReportButton={handleReportButton}
        />
        <h1>Demographics Report</h1>
        <div className="dropdown-container">
          <label htmlFor="category">Select Category: </label>
          <select id="category" onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="interests">Interest</option>
          </select>
        </div>
        <div className="chart-container">
          <Doughnut data={getChartData()} />
        </div>
      </header>
    </div>
  );
}

export default DemographicsReport;
