import explorePostDetails from "./postDetails.js";

function PostDetailBuilder(postDetail){
    // console.log(1)
    // console.log(postDetail)
  return`
  <div class="list-group-item  d-flex">
        <img class="rounded" style="border-radius: 50%!important;" src=${postDetail.avatar} width="38px" height="38px">
        <div class="">
            <div class="ms-2">
                <span style="color: white"><b>${postDetail.userName}</b> <i class="fa fa-check-circle"></i> </span>
                <span style="color: grey;font-size: 0.9em"> @ ${postDetail.handle} - ${postDetail.time}</span><br>
                <span> ${postDetail.content}</span>
            </div>

            <div class="rounded border border-secondary m-2">
                <img src=${postDetail.img} class="border-bottom border-secondary " width="100%" height="100%"
                     style="border-top-left-radius: inherit; border-top-right-radius: inherit">
                <p class="text-white m-2">${postDetail.title}</p>
                <p class="m-2" style="color: grey;font-size: 0.9em">${postDetail.details}</p>
            </div>
            <div class="d-flex m-2" style="color: grey">
                <div class="w-25">
                    <i class="fa fa-comment"></i>
                    <span>${postDetail.comment}</span>
                </div>
                <div class="w-25">
                    <i class="fa fa-retweet"></i>
                    <span>${postDetail.retweet}</span>
                </div>
                <div class="w-25">
                    <i class="fa fa-heart"></i>
                    <span>${postDetail.like}</span>
                </div>
                <div class="w-25">
                    <i class="fa fa-share"></i>
                </div>
            </div>
        </div>
  </div>
  `
}



const a = explorePostDetails[1];
// console.log(1)
$(`#test-postDetail-item`).append(PostDetailBuilder(a));

export default PostDetailBuilder