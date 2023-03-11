import React from 'react';
import CommentsMapper from '../CommentsSection/CommentsMapper';

const CommentsList = ({getCommentsByVidId, comments}) => { 

    return ( 

        <div>
            <button onClick = {() => getCommentsByVidId()}>Click for comments!</button>
            <CommentsMapper comments = {comments} />
        </div>

     );
}
 
export default CommentsList;