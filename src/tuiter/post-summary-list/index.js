import React from "react";
// import postsArray from './posts.json';
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";


const PostSummaryList = () => {
    const {tuits} = useSelector(
        state => state.tuitsData)
    return(
        <ul className="list-group">

            {
                tuits.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;