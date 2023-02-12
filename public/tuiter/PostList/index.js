import PostDetailBuilder from "./PostDetailBuilder.js";
import explorePostDetails from "./postDetails.js";

const PostList = () => {
  return`
    <ul class="list-group">
        ${explorePostDetails.map(detail=> {
        return (PostDetailBuilder(detail));
        }).join("")
  }
    </ul>
  `
};

$(`#test-post-detail-list2`).append(PostList());
export default PostList;