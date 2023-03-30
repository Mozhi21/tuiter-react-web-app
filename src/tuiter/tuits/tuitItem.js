import React from "react"
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer"
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {

        }
}

) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="d-flex">
            <img alt ="img" className="rounded-circle d-flex" src={`/tuiter/res/img/${post.image}`} width="38px"
                 height="38px"/>
            <div className=" float-end">
                <div className="ms-2">
                    <span><b>{post.username}</b> <i className="fa fa-check-circle" style={{color:"rgb(29,161,242)"}}></i> </span>
                    <span style={{"color": "grey","fontSize": "0.9em"}}>{post.handle} - {post.time}</span>
                    <i className="bi bi-x-lg " style={{position: "absolute", top: "0.5em", right: "0.5em"}}
                       onClick={() => deleteTuitHandler(post._id)}></i><br/>
                </div>
                <div className="ms-2">
                    <span> {post.tuit}</span>
                </div>

                {/*<div className="rounded border m-2" style={{"borderColor":"grey"}}>*/}
                {/*    <img alt ="img" src={post.img} className="border-bottom border-secondary " width="100%"*/}
                {/*         height="100%"*/}
                {/*         style={{"borderTopLeftRadius": "inherit", "borderTopRightRadius": "inherit"}}/>*/}
                {/*        <p className="m-2">{post.title}</p>*/}
                {/*        <p className="m-2" style={{"color": "grey","fontSize": "0.9em"}}>{post.details}</p>*/}
                {/*</div>*/}
                {/*<div className="d-flex m-2" style={{color: "grey"}}>*/}
                {/*    <div className="w-25">*/}
                {/*        <i className="fa fa-comment"></i>*/}
                {/*        <span>{post.comment}</span>*/}
                {/*    </div>*/}
                {/*    <div className="w-25">*/}
                {/*        <i className="fa-solid fa-retweet"></i>*/}
                {/*        <span>{post.retweet}</span>*/}
                {/*    </div>*/}
                {/*    <div className="w-25">*/}
                {/*        <i className="fa-solid fa-heart"></i>*/}
                {/*        <span>{post.like}</span>*/}
                {/*    </div>*/}
                {/*    <div className="w-25">*/}
                {/*        <i className="fa-solid fa-share"></i>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    );
};

export default TuitItem