import navbar from "../components/navbar.js";
import nav from "../components/nav.js";

// 
let data = {
    img2 : "https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
    img : "https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSDA-RInjX5ODmJJcqV-QLsB9Z4Q",
    title: "CSS Tutorial - Full Course for Beginners",
    channelName: "freeCodeCamp",
    description: "nonononononononnono",
    views: "200K",
    videoId: ""
}
/////
document.querySelector("#container").innerHTML = nav();

document.querySelector("#navContainer").innerHTML = navbar();
const openMenu = document.querySelector("#show-menu");
const hidemenuIcon = document.querySelector("#hide-menu");
const sidemenu = document.querySelector("#nav-menu");
// const main = document.querySelector(".filters");
// const content = document.querySelector(".video-container");

openMenu.addEventListener("click", () => {
    sidemenu.classList.add('active');
    // main.classList.add('hide');
    // content.classList.add('active');
})

hidemenuIcon.addEventListener("click", () => {
    sidemenu.classList.remove('active');
    // main.classList.remove('hide');
    // content.classList.remove('active');
})
tempfuncStoredata(data);
function tempfuncStoredata(data){
    let arr = [];
for(let i=0;i<10;i++){
    arr.push(data);
}
localStorage.setItem("youtube-history",JSON.stringify(arr));
}
//
let history_data =  JSON.parse(localStorage.getItem("youtube-history")) || [];

showHistory(history_data);
function showHistory(history_data){
    let display = document.getElementById("historycontent");
    display.innerHTML = "";
   if(history_data.length == 0){
     // no histry content
     let div = document.createElement("div");
     let p = document.createElement("p");
     p.innerText = "This list has no videos";
     p.setAttribute("class","textcenter");
     div.append(p);
     
     display.append(div);
   }else{
      display.innerHTML = "";
      let tody = document.createElement("div");
      let paratoday = document.createElement("h4");
      paratoday.setAttribute("id","paratoday")
      paratoday.innerText = "Today";
      tody.append(paratoday);
      display.append(tody);

    history_data.forEach((elem,index)=>{
        let contcont = document.createElement("div");
        contcont.setAttribute("id","contcont");
        let vidcont = document.createElement("div");
        vidcont.setAttribute("id","vidcont");
        let img = document.createElement("img");
        img.src = elem.img;
        
        vidcont.append(img);
        vidcont.addEventListener("click",function(){
            localStorage.setItem("clicked-video",JSON.stringify(elem));
            location.href = "../../video_player/video.html";
        })
  
        let textcont = document.createElement("div");
        textcont.setAttribute("id","textcont");
        let divone = document.createElement("div");
        let h4title = document.createElement("h4");
        h4title.setAttribute("id","title");
        h4title.innerText = elem.title;
        let closeimg = document.createElement("img");
        closeimg.setAttribute("id","closeimg"+index);
        // closeimg.src = ""
        closeimg.addEventListener("click",function(){
            removeVideo(index);
        })
        divone.setAttribute("id","divone");

        divone.append(h4title,closeimg);
        textcont.append(divone);
        let threedetail = document.createElement("div");
        threedetail.setAttribute("id","threedetail");
        let pchannelname = document.createElement("p");
        pchannelname.setAttribute("id","channelname");
        pchannelname.innerText = elem.channelName;
        let pviews = document.createElement("p");
        pviews.setAttribute("id","views");
        pviews.innerText = elem.views + " views";
        threedetail.append(pchannelname,pviews);
        textcont.append(threedetail);
        let descriptionvideo = document.createElement("p");
        descriptionvideo.setAttribute("id","descriptionvideo");
        descriptionvideo.innerText = elem.description;
        textcont.append(descriptionvideo);
        contcont.append(vidcont,textcont);
        contcont.addEventListener("mouseover",function(){
            showClose(index);
        })
        contcont.addEventListener("mouseout",function(){
            removeClose(index);
        })
        display.append(contcont);
    })

   }
}
function showClose(index){
    event.preventDefault();
    let loc = document.getElementById("closeimg"+index);
    loc.src = "./images/icons8-close-50.png";
    // loc.addEventListener("click",function(){
    //     removeVideo(index);
    // })
}
function removeClose(index){
    event.preventDefault();
    let loc = document.getElementById("closeimg"+index);
    loc.src = "";
}
function removeVideo(index){
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("youtube-history")) || [];
    data.splice(index,1);
    console.log(data);
    localStorage.setItem("youtube-history",JSON.stringify(data));
    showHistory(data);
}
document.getElementById("cleardiv").addEventListener("click",function(){
    clearHistory();
})

function clearHistory(){
    // let history_data =  JSON.parse(localStorage.getItem("youtube-history")) || [];
    localStorage.setItem("youtube-history",JSON.stringify([]));
    showHistory([]);

}