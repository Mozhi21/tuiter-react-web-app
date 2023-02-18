function PostSummaryItem(post){
    return`
        <div class="list-group-item d-flex">
            <div class="flex-grow-1">
                <span style="color: gray">${post.topic}</span>
                <div>
                    <span style="color: white"><b>${post.userName} </b></span>
                    <i class="fa fa-check-circle" style="color: white"></i>
                    <span style="color: gray"> - ${post.time}</span>
                </div>
                <span style="color: white"><b>${post.title}</b></span><br>
            </div>
            <img class="rounded" src=${post.image} width="85px" height="85px">
        </div>
    `
}

$(`#test-summary-item`).append(PostSummaryItem(
    {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "image": "../res/img/react.png",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    }
))

export default PostSummaryItem