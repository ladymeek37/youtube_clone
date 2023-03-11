import React, {useEffect} from 'react';
import CommentsMapper from '../CommentsSection/CommentsMapper';

const CommentsList = ({getCommentsByVidId, comments}) => { 

    useEffect(() => {
        getCommentsByVidId();
    }, []);

    return ( 

        <div>
            <CommentsMapper comments = {comments} />
        </div>

     );
}
 
export default CommentsList;