const NavigationSidebar = (active) => {
    return`
    <div class="list-group">
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex p-2">
            <i class="fab fa-fw fa-twitter"></i></a>
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "home"? "active": ''}">
            <i class="fa fa-home mt-1"></i><div class="d-none d-xl-block"> &nbsp Home</div>
        </a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "explore"? "active": ''}">
            <i class="fa fa-hashtag mt-1"></i><span class="d-none d-xl-block"> &nbsp Explore</span>
        </a>
        <a href="notification.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "notifications"? "active": ''}">
            <i class="fa fa-bell mt-1"></i><span class="d-none d-xl-block"> &nbsp Notifications</span>
        </a>
        <a href="message.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "messages"? "active": ''}">
            <i class="fa fa-envelope mt-1"></i><span class="d-none d-xl-block"> &nbsp Messages</span>
            </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "bookmarks"? "active": ''}">
            <i class="fa fa-bookmark mt-1"></i><span class="d-none d-xl-block"> &nbsp Bookmarks</span>
            </a>
        <a href="list.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "lists"? "active": ''}">
            <i class="fa fa-list mt-1"></i><span class="d-none d-xl-block"> &nbsp Lists</span>
            </a>
        <a href="../profile.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "profile"? "active": ''}">
            <i class="fa fa-user mt-1"></i><span class="d-none d-xl-block"> &nbsp Profile</span>
            </a>
        <a href="more.html" class="list-group-item list-group-item-action d-flex p-2 ${active === "more"? "active": ''}">
            <span class="fa-stack mt-2" style="font-size: 0.35rem">
                <i class="fas fa-stack-1x fa-circle test-icon-size1"></i>
                <i class="fas fa-stack-1x fa-ellipsis-h fa-inverse test-icon-size2 "></i>
            </span>
            <span class="d-none d-xl-block"> &nbsp More</span>
            </a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
          class="btn btn-primary btn-block rounded-pill">
          Tweet</a>
    </div>
 `
}



// $(`#test-sidebar`).append($(NavigationSidebar()))
export default NavigationSidebar;