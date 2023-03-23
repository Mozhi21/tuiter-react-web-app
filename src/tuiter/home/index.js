import React from "react";
import "../explore/index.css";
// import PostDetailList from "../post-detail-list";
import TuitList from "../tuits/tuitsList";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;