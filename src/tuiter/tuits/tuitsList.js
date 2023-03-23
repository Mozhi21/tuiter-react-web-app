import React from "react";
// import postsDetailArray from './post-details.json'
// import PostDetailItem from "../post-detail-list/post-detail-item";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import TuitStats from "./tuitStats";

const TuitList =() =>{
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(details =>
                    <div  className="list-group-item ">
                        <TuitItem  　key = {new Date().getTime()}  post={details}/>
                        <TuitStats  post={details}/>
                    </div>
                )
            }

        </ul>

    );
};

export default TuitList