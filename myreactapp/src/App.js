import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import NavBar from "./NavBar/NavBar";
import Login from "./Login";
import Volunteer from "./Volunteer";
import NPO from "./NPO";
import Enrol from "./Enrol";
import RequestCert from "./RequestCert";
import Cert from "./Cert";
import VolunteerActivities from "./VolunteerActivities";
import AttendanceNPO from "./AttendanceNPO";
import CertNPO from "./CertNPO";
import NPOReport from "./NPOReport";

const App = () => {
  return (
    <div style={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/NPO" element={<NPO />} />
        <Route path="/Enrol" element={<Enrol />} />
        <Route path="/RequestCert" element={<RequestCert />} />
        <Route path="/Cert" element={<Cert />} />
        <Route path="/VolunteerActivities" element={<VolunteerActivities />} />
        <Route path="/AttendanceNPO" element={<AttendanceNPO />} />
        <Route path="/CertNPO" element={<CertNPO />} />
        <Route path="/NPOReport" element={<NPOReport />} />
      </Routes>
    </div>
    
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};