import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths[2];
    // console.log(paths);
    if (active === ''){
        console.log("active is null")
        active = "home";
    }

    return (
        <div className="list-group">
            <a href ={"#"} className="list-group-item list-group-item-action d-flex p-2">
                <i className="fab fa-fw fa-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home mt-1"></i>
                <div className="d-none d-xl-block  ms-1">Home</div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag mt-1"></i>
                <span className="d-none d-xl-block  ms-1">Explore</span>
            </Link>
            < a href ={"#"} className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell mt-1"></i>
                <div className="d-none d-xl-block  ms-1">Notifications</div>
            </a>
            <a href ={"#"} className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope mt-1"></i>
                <div className="d-none d-xl-block  ms-1">Messages</div>
            </a>
            <a href ={"#"} className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark mt-1"></i>
                <div className="d-none d-xl-block  ms-1">Bookmarks</div>
            </a>
            <a href ={"#"} className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list mt-1"></i>
                <div className="d-none d-xl-block float-left ms-1">Lists</div>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'profile'?'active':''} ${active === 'edit-profile'?'active':''}`}>
                <i className="fa fa-user mt-1"></i>
                <div className="d-none d-xl-block float-left ms-1">Profile</div>
            </Link>

            <a href ={"#"} className={`list-group-item list-group-item-action d-flex p-2
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <div className="d-none d-xl-block float-left ms-1">More</div>
            </a>
        </div>
    );
};
export default NavigationSidebar;