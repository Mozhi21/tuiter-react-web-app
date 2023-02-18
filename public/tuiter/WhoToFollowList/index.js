import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./Who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
            ${who.map(person => { 
                return (WhoToFollowListItem(person));
                }).join("")
            }
           </ul>
`); }

$("#test-summary-list").append(WhoToFollowList())

export default WhoToFollowList;