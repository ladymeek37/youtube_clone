import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css"

import axios from "axios";

let defaultVideos = [
  {
    title: "Krooked's 'Magic Art Supplies' Video",
    url: "https://www.youtube.com/embed/bd4co_Fiwtw",
  },
  {
    title: "Lizzie Armanto's Fire Part",
    url: "https://www.youtube.com/embed/-MhJ3QdVv4M",
  },
  {
    tile: "Altitude Sickness Video",
    url: "https://www.youtube.com/embed/EzLQPTIxOZU",
  },
  {
    title: "The UNINVITED 3",
    url: "https://www.youtube.com/embed/FVhG30-_G40",
  },
  {
    title: "Anti Hero Destination Unknown",
    url: "https://www.youtube.com/embed/xK7LAKFYO0E",
  },
  {
    title: "Ronnie Sandoval's Firme Part",
    url: "https://www.youtube.com/embed/eYpEiksL0y8",
  }
]





const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videos, setVideos] = useState(defaultVideos);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);


  return (
    <div className="container">
      <SearchBar setVideos = {setVideos}/>
      <div class = 'homepagevideocontainer parent' >
        {defaultVideos.map((video) => {
          return(
          <div class = "child" >
            <iframe id="ytplayer" type="text/html" width="320" height="180"
            src= {video.url}
            frameborder="0"></iframe>
            <p class = "videotitle">{video.title}</p>          
          </div> 
          )
        })} 
      </div>
    </div>
  );
};

export default HomePage;
