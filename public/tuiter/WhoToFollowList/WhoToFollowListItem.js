

function WhoToFollowListItem(who){
    // console.log(who)
    return`
                <div class="list-group-item  d-flex">
                <img  class="rounded-circle me-1" src=${who.avatarIcon} height="40px" width="40px">
                <div class="flex-grow-1">
                    <b>${who.userName} </b><i class="fa fa-check-circle"></i><br>
                    <span>@ ${who.handle} </span>
                </div>
                <button class="btn btn-primary btn-md mt-1 override-rounded-black" style="height: 38px" >Follow</button>
            </div>
    `
}

// $(`#test-list-item`).append($(WhoToFollowListItem({   avatarIcon: '../res/img/java.png',
//     userName: 'Java', handle: 'Java', })))
export default WhoToFollowListItem;