import React from "react";
import "../explore/index.css";
import PostDetailList from "../post-detail-list";
const HomeComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href={"#"} className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href={"#"} className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href={"#"} className="nav-link">News</a>
                </li>
            </ul>

            <PostDetailList/>
        </>
    );
};
export default HomeComponent;