import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import NavBar from "./NavBar/NavBar";
import Login from "./Login";
import Volunteer from "./Volunteer";
import NPO from "./NPO";
import Enrol from "./Enrol";
import RequestCert from "./Volunteer/ReqCert/RequestCert";
import VolunteerActivities from "./Volunteer/VolunteerActivities/VolunteerActivities";
import AttendanceNPO from "./AttendanceNPO";
import CertNPO from "./CertNPO";
import NPOReport from "./NPOReport";
import ChildrensDayForm from "./Volunteer/VolunteerActivities/Forms/ChildrensDayForm";
import AllChallenges from "./Volunteer/Challenges/AllChallenges";

const App = () => {
  return (
    <div style={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/NPO" element={<NPO />} />
        <Route path="/Enrol" element={<Enrol />} />
        <Route path="/RequestCert" element={<RequestCert />} />
        <Route path="/VolunteerActivities" element={<VolunteerActivities />} />
        <Route path="/AttendanceNPO" element={<AttendanceNPO />} />
        <Route path="/CertNPO" element={<CertNPO />} />
        <Route path="/NPOReport" element={<NPOReport />} />
        <Route path="/ChildrensDayForm" element={<ChildrensDayForm/>} />
        <Route path="/AllChallenges" element={<AllChallenges/>} />
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