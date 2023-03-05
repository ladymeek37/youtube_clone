import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
const [searchTerm, setSearchTerm] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyD52HNqidEvinYxxLhaIq9FRt-l57Dc6EI&part=snippet&type=video&maxResults=6`)
        props.setVideos(response.data)
        console.log("video search data", response.data) 
    }

    return (
        <div>
        <form onSubmit={handleSubmit} class = 'searchbarform'>
        <label >SEARCH FOR VIDEOS HERE:</label>
        <input type='text' value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>
        <button class = "SearchBarButton" type='submit' >SUBMIT</button> 
        </form>
    </div>  
    )

}

export default SearchBar;