import React, {useState} from 'react';
import axios from 'axios';
import CommentsMapper from '../CommentsSection/CommentsMapper';

const CommentsList = ({video}) => { 
    const [comments, setComments] = useState([])

    const getCommentsByVidId = async() => {
        try {
            await axios
            .get(`http://localhost:8000/api/comments/${video}/`)
            .then(response => {setComments(response.data);console.log(response.data)})            
        } catch (error) {
            console.log(error.response.data)
            
        }

    }

    return ( 

        <div>
            <button onClick = {() => getCommentsByVidId()}>Click for comments!</button>
            <CommentsMapper comments = {comments} />
        </div>

     );
}
 
export default CommentsList;