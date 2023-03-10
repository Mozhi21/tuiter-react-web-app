import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths[2];
    console.log(paths);
    if (active === ''){
        console.log("active is null")
        active = "home";
    }

    return (
        <div className="list-group">
            <a href ={"#"} className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            < a href ={"#"} className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a href ={"#"} className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a href ={"#"} className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a href ={"#"} className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a href ={"#"} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a href ={"#"} className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;