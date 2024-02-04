import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarNPO from "../NavBar/NavBarNPO";
import { Bar } from "react-chartjs-2";
import "../App.css";

function AttendanceReport() {
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

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Attendance",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [6, 8, 2, 5, 10]
      }
    ]
  };

  return (
    <div className="page-container">
      <header className="App-header">
        <NavBarNPO
          handleAttendanceNPOButton={handleAttendanceNPOButton}
          handleCertificateButton={handleCertificateButton}
          handleReportButton={handleReportButton}
        />
        <h1>Attendance Report</h1>
        <div className="chart-container">
        <Bar data={data} />
      </div>
      </header>
    </div>
  );
}


export default AttendanceReport;
