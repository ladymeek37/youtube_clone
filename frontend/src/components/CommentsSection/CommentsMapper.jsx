import React from 'react';

export const CommentsPresenter = ({comment}) => {
return (
    <li>
        <div>
            <p> {comment.user.username}: {comment.text}</p>            
        </div>

    </li>
    );
}

const CommentsMapper = ({comments}) => {
    return ( 
        <ul class = "commentslist">
            {comments.map(comment => <CommentsPresenter key = {comment.id} comment = {comment} />)}
        </ul>
     );
}
 
export default CommentsMapper