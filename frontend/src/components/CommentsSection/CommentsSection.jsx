import React from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Comments</h1>
            <CommentsList getCommentsByVidId = {getCommentsByVidId} comments = {comments}/>
            <CommentForm video = {videoId} getCommentsByVidId = {getCommentsByVidId}  />
        </div>
     );
}
 
export default CommentsSection;