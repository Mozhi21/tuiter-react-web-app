import React from "react";
import postsDetailArray from './post-details.json'
import PostDetailItem from "../post-detail-list/post-detail-item";

const PostDetailList =() =>{
    return(
        <ul className="list-group">
            {
                postsDetailArray.map(details =>
                    <PostDetailItem
                key ={details.userName} postDetail={details}/> )
            }
        </ul>

    );
};

export default PostDetailList