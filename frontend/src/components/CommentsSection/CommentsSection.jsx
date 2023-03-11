import React from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import { useState } from 'react';
import axios from 'axios';
import './CommentsSection.css';

const CommentsSection = (props) => {
    const {videoId} = useParams()
    const [comments, setComments] = useState([])

    const getCommentsByVidId = async() => {
        try {
            await axios
            .get(`http://localhost:8000/api/comments/${videoId}/`)
            .then(response => {setComments(response.data);console.log(response.data)})            
        } catch (error) {
            console.log(error.response.data)
            
        }

    }

    return ( 
        <div class = "section">
            <h1 class = 'title'>Comments</h1>
            <br />
            <CommentForm video = {videoId} getCommentsByVidId = {getCommentsByVidId}  />  
            <br />          
            <CommentsList class = 'commentslist' getCommentsByVidId = {getCommentsByVidId} comments = {comments}/>
            <br />
            <br />
        </div>
     );
}
 
export default CommentsSection;