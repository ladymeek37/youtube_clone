import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css"

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <SearchBar setVideos = {setVideos}/>
      <div class = 'homepagevideocontainer parent'>
        <div class = "child" >
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/bd4co_Fiwtw"
          frameborder="0"></iframe>
          <p class = "videotitle">Krooked's "Magic Art Supplies" Video</p>          
        </div>
        <div class = "child">
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/-MhJ3QdVv4M"
          frameborder="0"></iframe>
          <p class = "videotitle">Lizzie Armanto's "Fire" Part</p>          
        </div>
        <div class = "child">
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/EzLQPTIxOZU"
          frameborder="0"></iframe>
          <p class = "videotitle">"Altitude Sickness" Video</p>          
        </div>
        <div class = "child">
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/FVhG30-_G40"
          frameborder="0"></iframe> 
          <p class = "videotitle"> The UNINVITED 3</p>                   
        </div>
        <div class = "child">
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/xK7LAKFYO0E"
          frameborder="0"></iframe>
          <p class = "videotitle">Anti Hero Destination Unknown</p>          
        </div>
        <div class = "child">
          <iframe id="ytplayer" type="text/html" width="320" height="180"
          src="https://www.youtube.com/embed/eYpEiksL0y8"
          frameborder="0"></iframe>
          <p class = "videotitle">Ronnie Sandoval's "Firme" Part</p>          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
