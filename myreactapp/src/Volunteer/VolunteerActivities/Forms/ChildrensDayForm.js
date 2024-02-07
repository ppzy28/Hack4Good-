import NavBarVolunteer from "../../../NavBar/NavBarVolunteer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ChildrensDayForm() { 
  let navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => { 
    setSelectedGender(event.target.value);
  }

  function handleEnrolButton() {
        navigate('/Enrol'); 
    }

    function handleRequestButton() {
        navigate('/RequestCert'); 
    }

    function handleActivityButton() {
        navigate('/VolunteerActivities'); 
    }

  function handleSubmit() { 
    console.log("Submitted!")
  } 

  return (
    <div>
      <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}
            />
        </header>
      <div className="signUpHeader">
        <h1>Sign up Now</h1>
      </div>
      
      <div className="formGroup">
      <form>
        <label>Full Name</label>
        <input type = "text" id = "name" required = {true} /> <br />

        <label>Phone Number</label>
        <input type="number" required={true}></input> <br/>

        <label>Email Address</label>
        <input type="email" required={true}></input> <br/>
        
        <label>Gender</label>
        <label htmlFor="male">
          <input
            required={true}
            type="radio"
            id="male"
            checked={selectedGender === 'male'}
            onChange={handleGenderChange}
            value="male"
          />
          Male
        </label>

        <label htmlFor="female">
          <input
            require={true}
            type="radio"
            id="female"
            checked={selectedGender === 'female'}
            onChange={handleGenderChange}
            value="female"
          />
          Female
        </label><br/>


        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>
      </div>
 
    </div>
  )
}