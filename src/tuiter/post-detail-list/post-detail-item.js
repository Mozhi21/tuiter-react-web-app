import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PostDetailItem = (
    {
    postDetail = {
        "userName":"Elon Musk",
        "avatar":"../tuiter/res/userImg3.jpeg",
        "handle": "elonmusk",
        "time":"23h",
        "content": "Amazing show about @Inspiration4x mission!",
        "img": "../tuiter/res/img/inspiration4x.jpeg",
        "title":"Countdown: Inspiration4 Mission to Space, Netflix Official Site",
        "details":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "comment":"4.2k",
        "retweet":"3.5k",
        "like":"37.5k"
    }}
) =>{
    return(
        <div className="list-group-item  d-flex">
            <img className="rounded-circle"  src={postDetail.avatar} width="38px"
                 height="38px"/>
                <div className="">
                    <div className="ms-2">
                        <span><b>{postDetail.userName}</b> <i className="fa fa-check-circle" style={{color:"rgb(29,161,242)"}}></i> </span>
                        <span
                            style={{"color": "grey","fontSize": "0.9em"}}> @ {postDetail.handle} - {postDetail.time}<br/></span>
                        <span> {postDetail.content}</span>
                    </div>

                    <div className="rounded border m-2" style={{"borderColor":"grey"}}>
                        <img src={postDetail.img} className="border-bottom border-secondary " width="100%"
                             height="100%"
                             style={{"borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit"}}/>
                            <p className="m-2">{postDetail.title}</p>
                            <p className="m-2" style={{"color": "grey","fontSize": "0.9em"}}>{postDetail.details}</p>
                    </div>
                    <div className="d-flex m-2" style={{color: "grey"}}>
                        <div className="w-25">
                            <i className="fa fa-comment"></i>
                            <span>{postDetail.comment}</span>
                        </div>
                        <div className="w-25">
                            <i className="fa-solid fa-retweet"></i>
                            <span>{postDetail.retweet}</span>
                        </div>
                        <div className="w-25">
                            <i className="fa-solid fa-heart"></i>
                            <span>{postDetail.like}</span>
                        </div>
                        <div className="w-25">
                            <i className="fa-solid fa-share"></i>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default PostDetailItem