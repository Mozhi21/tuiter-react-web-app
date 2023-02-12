import PostList from "../PostList";

const HomeCenterPage = () => {
    return(`
            <div>
                <div class="d-flex">
                    <div class="flex-grow-1" >
                        <div class="input-group form-control " style="border-radius: 1.5rem">
                            <i class="fa fa-search mt-1 me-2"></i>
                            <input type="search" class="rounded " style = "border: 0; outline: none;" placeholder="Search Twitter"/>
    
                        </div>
                    </div>
                    <i class=" mt-1 ms-4 me-3 fa fa-cog fa-2x " style="color: #0d6efd" aria-hidden="true"></i>
               </div>
    
               <ul class="nav nav-tabs mt-2">
                    <li class="nav-item ms-0 me-0">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item ms-0 me-0">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item ms-0 me-0">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item ms-0 me-0">
                        <a class="nav-link " href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block ms-0 me-0">
                        <a class="nav-link " href="#">Entertainment</a>
                    </li>
               </ul>
               <!-- image with overlaid text -->
               <div class="mt-2 text-center d-flex align-items-end"
                     style="background-image:url(../res/img/spaceX-starship.webp);
                     height: 25rem;
                     width :auto;
                     background-size: cover;" >
                    <h1 class="text-white ps-2 ">SpaceX's Starship</h1>
                         
                </div>
                <div class="mt-2">
                    ${PostList()}
               </div>
           </div>
      
    `);
}
export default HomeCenterPage;
