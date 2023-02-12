import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList =() => {
    return `
    <ul class="list-group">
        ${posts.map(post => {
            return(PostSummaryItem(post));
        }).join("")
    }
    </ul>
    `
}


$(`#test-summary-list2`).append(PostSummaryList())
export default PostSummaryList;





