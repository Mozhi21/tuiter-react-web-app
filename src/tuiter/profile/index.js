import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom";


const ProfileComponent = () =>{
    const profile = useSelector(state => state.profile)
    const inputdate = profile.dateJoined
    const [month,year] = inputdate.split("/")
    function getMonthName(month) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return months[month - 1];
    }
    return(
        <>
            <div>
                <h5> {profile.firstName} {profile.lastName} </h5>
                6144 twites
            </div>
            <div>
                <div className="profile-image-container">
                    <img src={`/tuiter/res/img/${profile.bannerPicture}`} alt="First Image" className="profile-banner"></img>
                        <img src={`/tuiter/res/img/${profile.profilePicture}`} alt="Second Image" className="profile-avarter"></img>
                    <Link to="/tuiter/edit-profile">
                    <botton className=" mt-3 btn btn-outline-secondary
                           rounded-pill float-end me-3"
                        >Edit Profile</botton>
                        </Link>
                </div>
                <br/>
                <br/>

                <h5> {profile.firstName} {profile.lastName} </h5>
                <span style={{fontSize:"0.9em"}}>{profile.handle}<br/></span>
                <span className="mt-4" style={{fontSize:"0.9em"}}>{profile.bio}</span>

                <div className="d-flex float-done mt-2"
                     style={{fontSize:"0.9em", color:"grey"}}>
                    <div className=" float-left me-3">
                        <i className="bi bi-geo-alt me-1"></i>
                        <span>{profile.location}</span>
                    </div>
                    <div className="float-left me-3">
                        <i className="bi bi-balloon me-1"></i>
                        <span>Born in {profile.dateOfBirth}</span>
                    </div>
                    <div className="float-left me-3">
                        <i className="bi bi-calendar-minus me-1"></i>
                        <span>Joined {getMonthName(month)} {year} </span>
                    </div>
                </div>
                <div className="d-flex float-done mt-2">
                    <div className=" float-left me-3">
                        <span>{profile.followingCount}</span>
                        <span style={{fontSize:"0.9em", color:"grey"}} className="ms-1 me-4">Following</span >
                    </div>
                    <div className=" float-left me-3">
                        <span>{profile.followersCount}</span>
                        <span style={{fontSize:"0.9em", color:"grey"}} className="ms-1 me-4">Followers</span >
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent