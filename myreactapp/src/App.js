import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import Volunteer from "./Volunteer";
import NPO from "./NPO";
import Enrol from "./Enrol";
import RequestCert from "./RequestCert";
import Cert from "./Cert";

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