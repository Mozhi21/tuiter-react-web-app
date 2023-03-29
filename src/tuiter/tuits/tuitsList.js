import React, {useEffect} from "react";
// import postsDetailArray from './post-details.json'
// import PostDetailItem from "../post-detail-list/post-detail-item";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuitItem";
import TuitStats from "./tuitStats";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList =() =>{
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(details =>
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