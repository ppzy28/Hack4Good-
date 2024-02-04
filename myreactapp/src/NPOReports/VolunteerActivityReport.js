import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "../NavBar/NavBarNPO";
import { Line, Bar } from "react-chartjs-2";
import "../App.css";

function VolunteerActivityReport() {
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

  const activityData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Hours Spent",
        data: [20, 15, 30, 25, 35, 28], 
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const activityTypeData = {
    labels: ["Befriending", "Tutoring", "Fundraising", "Administrative", "Other"],
    datasets: [
      {
        label: "Number of Activities",
        data: [5, 8, 3, 4, 2], 
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
      },
    ],
  };

  return (
    <div className="page-container">
      <header className="App-header">
        <NavBarNPO
          handleAttendanceNPOButton={handleAttendanceNPOButton}
          handleCertificateButton={handleCertificateButton}
          handleReportButton={handleReportButton}
        />
        <h1>Activities Report</h1>
        <div className="chart-container">
          <Line data={activityData} />
        </div>
        <div className="chart-container">
          <Bar data={activityTypeData} />
        </div>
      </header>
    </div>
  );
}

export default VolunteerActivityReport;
