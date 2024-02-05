import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import NavBarVolunteer from "../../NavBar/NavBarVolunteer";
import "../../App.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChildrensDay from '../../images/childrensday.jpg';
import { CardMedia } from "@mui/material";
import ElderlyBefrienders from "../../images/elderlybefrienders.jpg";


function VolunteerActivities() {
    let navigate = useNavigate(); 
    const [list, setLists] = useState(false); 
    const [map, setMaps] = useState(true);  

    function handleEnrolButton() {
        navigate('/Enrol'); 
    }

    function handleRequestButton() {
        navigate('/Cert'); 
    }

    function handleActivityButton() {
        navigate('/VolunteerActivities'); 
    }

    function displayListings() { 
        setLists(true); 
        setMaps(false); 
        console.log("List status: " + list);
        console.log("Map status: " + map); 
    }

    function displayMap() { 
        setMaps(true); 
        setLists(false); 
        console.log("Map status: " + map); 
        console.log("List status: " + list);
    }

    function ChildrenDayPage() { 
        navigate('/ChildrenDayPage');
    }

    function ChildrenDayForm() { 
        navigate('/ChildrensDayForm');
    }

    return (
        <>
        <header className="App-header">
            <NavBarVolunteer 
                handleActivityButton={handleActivityButton}
                handleEnrolButton={handleEnrolButton}
                handleRequestButton={handleRequestButton}
            />
            <h1 style={{"font-family": "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>View Activities</h1>
        </header>
        <div className="map-list">
            <button id="map" onClick={displayMap}>Map</button>
            <button id="list" onClick={displayListings}>List</button>
        </div>

        <div className="map">
            {map ? <div className="mapView">
                Map View
                </div> : <></>
                }
        </div>
    
        <div className="listings">

            {list ? <div className="listings">
                <Card className="listing-card">
                    <CardMedia
                        component="img"
                        height="200"
                        width="200"
                        image={ChildrensDay}
                        alt="Children's Day Carnival"
                    />
                    <CardContent>
                        <Typography variant='h6'>Children's Day Carnival</Typography>
                        <Typography className="listing-description" variant='body2' color="text.secondary">Spread joy and love to children from Kaki Bukit West!</Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" onClick={ChildrenDayPage}>More Info</Button>
                        <Button onClick={ChildrenDayForm}>Sign Up</Button>
                    </CardActions>
                </Card>

                <Card className="listing-card">
                    <CardMedia
                        component="img"
                        height="200"
                        width="200"
                        image={ElderlyBefrienders}
                        alt="Elderly Befrienders"
                    />
                    <CardContent>
                        <Typography variant='h6'>Elderly Befrienders</Typography>
                        <Typography variant='body2' color="text.secondary">Visit senior citizens in their homes and befriend them.</Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" onClick={ChildrenDayPage}>More Info</Button>
                        <Button >Sign Up</Button>
                    </CardActions>
                </Card>
            </div> : <></> }

        </div>
        </>

    );
}

export default VolunteerActivities;
