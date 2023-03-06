import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./SearchBar.css";

const SearchBar = (props) => {
const [searchTerm, setSearchTerm] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyD52HNqidEvinYxxLhaIq9FRt-l57Dc6EI&part=snippet&type=video&maxResults=6`)
        props.setVideos(response.data)
        console.log("video search data", response.data)
        
        props.videos.map((video) => {
            return(
                <div class = "child" >
                    <iframe id="ytplayer" type="text/html" width="320" height="180"
                    src="https://www.youtube.com/embed${video.videoId}"
                    frameborder="0"></iframe>
                    <p class = "videotitle">{video.title}</p>          
                </div>
            )
        })
    }

    return (
    <div class = "searchbar">
        <form onSubmit={handleSubmit} class = 'searchbarform'>
        <label >Search for videos:</label>
        <input class = "inputbox" type='text' value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>
        <button class = "SearchBarButton" type='submit' >SUBMIT</button> 
        </form>
    </div>  
    )

}

export default SearchBar;