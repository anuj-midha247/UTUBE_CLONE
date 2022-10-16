import navbar from "../components/navbar.js";
import nav from "../components/nav.js";
document.querySelector("#container").innerHTML = nav();

document.querySelector("#navContainer").innerHTML = navbar();

const openMenu = document.querySelector("#show-menu");
const hidemenuIcon = document.querySelector("#hide-menu");
const sidemenu = document.querySelector("#nav-menu");
const main = document.querySelector(".filters");
const content = document.querySelector(".video-container");

openMenu.addEventListener("click", () => {
  sidemenu.classList.add("active");
  main.classList.add("hide");
  content.classList.add("active");
});

hidemenuIcon.addEventListener("click", () => {
  sidemenu.classList.remove("active");
  main.classList.remove("hide");
  content.classList.remove("active");
});






const videoCardContainer = document.querySelector(".video-container");
let api_key = "AIzaSyDs2mqENl7X7TEW8iJFGlegakdZkDmIdyg";

let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googlepis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 100,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${video_data.snippet.channelId}&key=${api_key}`)
        .then(res => res.json())
        .then(data => {
        // console.log(data);
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
    })
}
const makeVideoCard = (data ) => {

    let div=document.createElement( "div");
div.setAttribute("class", "video");
let div1 = document.createElement("div");
div1.setAttribute("class","photo")
    let img = document.createElement("img");
    img.src = data.snippet.thumbnails.high.url;
img.setAttribute("class", "thumbnail");
img.addEventListener("click", ()=>{
    Listenerr(data);
})
div1.append(img);
    let div2 = document.createElement("div");
    div2.setAttribute("class", "content");
    let img2 = document.createElement("img");
    img2.setAttribute("class", "channel-icon");
    img2.src = data.channelThumbnail;
    let div3 = document.createElement("div");
    div3.setAttribute("class", "info");
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "title");
    h4.innerText = data.snippet.title;
    let p = document.createElement("p");
    p.setAttribute("class", "channel-name");
    p.innerText = data.snippet.channelTitle;
    div3.append(h4, p);
    div2.append(img2, div3);
    div.append(div1, div2);
    videoCardContainer.append(div);
    



}

function Listenerr(data) {

// console.log(data.id);
localStorage.setItem("videoId", data.id);
location.href = "./video1.html";

}
window.addEventListener("click",(ev)=>{
if(ev.target.className!="search"){
    searchsugg.classList.add("hidesearchsugg");
}else{
    searchsugg.classList.remove("hidesearchsugg");
}
})
