import React, {useEffect} from 'react';
import CommentsMapper from '../CommentsSection/CommentsMapper';
import './CommentsList.css';

const CommentsList = ({getCommentsByVidId, comments}) => { 

    useEffect(() => {
        getCommentsByVidId();
    }, []);

    return ( 

        <div class = 'commentsmapperlist'>
            <CommentsMapper comments = {comments} />
        </div>

     );
}
 
export default CommentsList;