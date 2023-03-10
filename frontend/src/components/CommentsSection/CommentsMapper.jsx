import React from 'react';

export const CommentsPresenter = ({comment}) => {
return (
    <li>
            <p class = "username"> {comment.user.username}:</p>
            <p class = "text">  {comment.text} </p>
    </li>
    );
}

const CommentsMapper = ({comments}) => {
    return ( 
        <ul>
            {comments.map(comment => <CommentsPresenter key = {comment.id} comment = {comment} />)}
        </ul>
     );
}
 
export default CommentsMapper