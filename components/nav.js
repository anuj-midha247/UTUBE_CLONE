function nav() {
  return `
    <div id="navbarpartforsugg">
    <div id="wrapper">
    <div id="navbar">
        <div id="leftnavbar">
        <div id="iiccoonn">
        <div id="navbar1">
            <a href="#" class="menu-bars" id="show-menu">
                <i class="fas fa-bars"></i>
            </a>
        </div>
            <div><img src="./images/YouTubeLogo.png" class="youtubeicon" alt="logo"/></div>
        </div>
        </div>
        <div id="midnavbar">
            <div><input oninput="debounce()" onkeypress="enterfuncSearch() type="search" placeholder="Search" class="search" id="search"/>  
            </div>
            <div><button onclick="searchbtnfunc()" id="searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
                
            </div>
            <div id="miclogo"><i class="fa-solid fa-microphone"></i></div>
        </div>
        <div id="rightnavbar">
            <div><img src="./images/video-plus.512x358.png" class="plusVidIcon" alt="plusvideoicon"/></div>
            <div><i class="fa-regular fa-bell"></i></div>
        </div>
    </div>
    <div id="usericondiv">
        <img src="./images/user-3296.png"  class="userIcon" alt="user"/>
        <div class="dropdowncon">
            <div id="dropUserDetails">
                <div>
                    <img src="" class="userIconphoto"/>
                </div>
                <div>
                    <a class="userName">Hello !</a>
                    <p class="Manageyourgooglebyicon">Manage your google account</p>
                </div>
            </div>
            <hr/>
            <div id="firstofdropdowncon">
                <div><img src="./images/user_square_icon_172124.png"/></div>
                <div><a href="#">Your channel</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/social_media_platform_youtube_video_studio_youtube_studio_icon_210442.png"/></div>
                <div><a href="#">YouTube Studio</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-switch-account-1664846 (2).png"/></div>
                <div><a href="#">Switch account</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-sign-out-2211244.png"/></div>
                <div><a href="#">Sign Out</a></div>
            </div>
            <hr/>
            <div id="firstofdropdowncon">
                <div><h2 class="PforPrimeInDropdown">P</h2></div>
                <div><a href="#">Your Premium benefits</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/currency_circle_dollar_icon_172531.png" /></div>
                <div><a href="#">Purchases and memberships</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-user-security-4852427.png"/></div>
                <div><a href="#">Your data in YouTube</a></div>
            </div>
            <hr/>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-half-moon-2828662.png"/></div>
                <div><a href="#">Appearance: Device theme</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/7628368_language_translation_icon.png"/></div>
                <div><a href="#">Language: English</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-user-protection-3993309.png"/></div>
                <div><a href="#">Restricted Mode: Off</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-globe-1560078.png"/></div>
                <div><a href="#">Location: India</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/keyboard_5643.png"/></div>
                <div><a href="#">Keyboard shortcuts</a></div>
            </div>
            <hr/>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-setting-5013898.png"/></div>
                <div><a href="#">Setting</a></div>
            </div>
            <hr/>
            <div id="firstofdropdowncon">
                <div><img src="./images/circle_mark_question_icon_217896.png"/></div>
                <div><a href="#">Help</a></div>
            </div>
            <div id="firstofdropdowncon">
                <div><img src="./images/noun-send-feedback-4172841.png"/></div>
                <div><a href="#">Send feedback</a></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
        <div id="searchsugg">
        </div>`;
}
export default nav;
