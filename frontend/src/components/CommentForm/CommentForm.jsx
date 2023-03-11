import React, {useState} from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./CommentForm.css"

const CommentForm = ({video, getCommentsByVidId}) => {
    const [user, token] = useAuth();
    const [comment, setComment] = useState('');

    async function onSubmit(event) {
        event.preventDefault();
        const formValuesObject = {
            video_id: video,
            text: comment,
            likes: 0,
            dislikes: 0

        }

        sendComment(formValuesObject)
        console.log(formValuesObject)
    }

    async function sendComment(newComment){
        try {
            await axios.post('http://127.0.0.1:8000/api/comments/', newComment, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => getCommentsByVidId())
            .then(response => console.log("This is the new comment",response))
            

        } catch (error) {
            console.log("The API NO WORKIE", error.message)
            
        }


    }


    return ( 
        <form onSubmit={onSubmit}>
            <div class = "commentform">
                <label>New comment:</label>
                <input class = "input" type = 'string' className = 'form-control' value = {comment} onChange={(event) => setComment(event.target.value)}/>
                <button class = 'CommentFormButton' type = 'submit' style = {{'margin-top': '1em'}}>ADD COMMENT</button>
            </div>
        </form>

    );
}
 
export default CommentForm;