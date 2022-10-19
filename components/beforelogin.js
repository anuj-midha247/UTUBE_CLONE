function beforenav(){
    return `<div id="navbarpartforsugg">
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
            <div><input oninput="debounce()" onkeypress="enterfuncSearch(event)" type="search" placeholder="Search" class="search" id="search"/>  
            </div>
            <div><button id="searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
                
            </div>
            <div id="miclogo"><i class="fa-solid fa-microphone"></i></div>
        </div>
        <div id="rightnavbar">
            <div id="usericondiv">
                <i class="fa" class="userIcon">&#xf142;</i>
                <div class="dropdowncon1">
                    <div id="dropUserDetails">
                        
                    </div>
                    <hr/>
                    
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
            
            <div><button id="signinbtn"><i class="fa-solid fa-circle-user"></i> SIGN IN</button></div>
        </div>
    </div>
    
    </div>
    
        <div id="searchsugg">
        </div>
        </div>`;
}
export default beforenav;