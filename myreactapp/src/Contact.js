import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact Page</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Contact;