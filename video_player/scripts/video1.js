import navbar from "../../components/navbar.js";
import nav from "../../components/nav.js";


import beforenav from "../../components/beforelogin.js";
    
    let login=localStorage.getItem("login");
    if(login=="true"){
        document.querySelector("#container").innerHTML = nav();
        document.getElementById("signout").addEventListener("click",()=>{
          localStorage.setItem("login",false);
          alert("Signout successfull");
          location.href ="./index.html";
          document.querySelector("#container").innerHTML = beforenav();
      
        })
      }else if(login=="false" || login==null){
        document.querySelector("#container").innerHTML = beforenav();
        document.getElementById("signinbtn").addEventListener("click",()=>{
          location.href="./signin-mail.html";
          document.querySelector("#container").innerHTML = nav();
        })
      }
      
//document.getElementById("container").innerHTML = nav();
document.getElementById("navContainer").innerHTML = navbar();

const openMenu = document.querySelector("#show-menu");
const hidemenuIcon = document.querySelector("#hide-menu");
const sidemenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", () => {
  sidemenu.classList.add("active");
});

hidemenuIcon.addEventListener("click", () => {
  sidemenu.classList.remove("active");
});

//   document.querySelector(".container").innerHTML = "";
const videoId = localStorage.getItem("videoId");

console.log(videoId);
document.getElementById(
  "video-frame"
).src = `https://www.youtube.com/embed/${videoId}`;
const apiKey = "AIzaSyA2xYxK5r5gwEClAeclSR8OAAy3i9QGueA" ;

function getVideoUrl(videoId) {
  let url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;
  videoDetails(url);
}
getVideoUrl(videoId);

async function videoDetails(url) {
  let res = await fetch(url);
  let result = await res.json();
  console.log("line no 41", result.items[0]);
  let data = result.items[0];
  appendVideoDetails(data);
  let channelTitle = data.snippet.channelTitle;
  getSearchResult(channelTitle);
  let channelId = data.snippet.channelId;
  getChanneUrl(channelId);
}


//channel details
function getChanneUrl(channelId) {
  let url = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${apiKey}`;
  channelDetails(url);
}

async function channelDetails(url) {
  let res = await fetch(url);
  let result = await res.json();
  console.log(result.items[0]);
  let data = result.items[0];
  // console.log(data);
  appendChannelDetails(data);
}

function appendVideoDetails(data) {
  let videoTitle = document.getElementById("videoTitle");
  videoTitle.innerText = data.snippet.title;

  let viewCount = document.getElementById("viewCount");
  viewCount.textContent = data.statistics.viewCount;
  let likeCount = document.getElementById("likeCount");
  likeCount.textContent = data.statistics.likeCount;

  let channelTitle = document.getElementById("channel-title");
  channelTitle.innerText = data.snippet.channelTitle;

  let commentCount = document.getElementById("total-comments");
  commentCount.textContent = data.statistics.commentCount + " comments";

  let description = document.getElementById("description");
  description.innerText = data.snippet.description;
}

function appendChannelDetails(data) {
  let channelThumbnail = document.getElementById("channel-thumbnail");
  channelThumbnail.src = data.snippet.thumbnails.default.url;

  let commentChannelThumbnail = document.getElementById(
    "comment-channel-thumbnail"
  );
  commentChannelThumbnail.src = data.snippet.thumbnails.default.url;

  let subscriberCount = document.getElementById("subCount");
  if (data.statistics.subscriberCount >= 1000000) {
    let subcount = data.statistics.subscriberCount;
    let count = subcount / 1000000;
    console.log(count);
    subscriberCount.textContent = `${count}M`;
  } else if (data.statistics.subscriberCount >= 1000) {
    let subcount = data.statistics.subscriberCount;
    let count = subcount / 1000;
    console.log(count);
    subscriberCount.textContent = `${count}k`;
  } else {
    subscriberCount.textContent = data.statistics.subscriberCount;
  }
}

//side bar section

// getSearchResult();
function getSearchResult(channelTitle) {
  // var channelTitle = "world affairs";
  let link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${channelTitle}&key=${apiKey}`;
  seachedResult(link);
}

function seachedResult(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let arr = data.items;
      // console.log(arr);
      showDataToSideBar(arr);
    })
    .catch(function (err) {
      console.error(err);
    });
}

function showDataToSideBar(arr) {
  const container = document.querySelector(".right-sidebar");
  container.innerHTML = "";
  console.log(arr);
  arr.shift();

  arr.forEach((ele) => {
    let item = document.createElement("div");
    item.setAttribute("class", "side-video-list");
    let sThumbnail = document.createElement("a");
    // sThumbnail.setAttribute("href",)
    sThumbnail.setAttribute("class", "small-thumbnail");
    let thumbnailImg = document.createElement("img");
    thumbnailImg.src = ele.snippet.thumbnails.default.url;
    sThumbnail.appendChild(thumbnailImg);
    let videoInfo = document.createElement("div");
    videoInfo.setAttribute("class", "vid-info");
    let videoTitle = document.createElement("div");
    videoTitle.setAttribute("class", "vid-title");
    videoTitle.innerText = ele.snippet.title;
    let channelTitle = document.createElement("p");
    channelTitle.innerText = ele.snippet.channelTitle;
    let views = document.createElement("p");
    views.innerText = `125k views`;

    videoInfo.append(videoTitle, channelTitle, views);
    item.append(sThumbnail, videoInfo);
    item.addEventListener("click", () => {
      let videoId = ele.id.videoId;
      document.getElementById(
        "video-frame"
      ).src = `https://www.youtube.com/embed/${videoId}`;
      let url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;
      videoDetails(url);
      console.log(videoId);
    });
    container.append(item);
  });
}

//for watch later and liked videos.


function setHistory(videoId){
  let abcd = JSON.parse(localStorage.getItem("youtube-history")) || [];
  let elem_not_present = true;
  abcd.forEach((elem)=>{
    if(videoId == elem.videoId){
      elem_not_present = false;
    }
  })
  let obj = {
      "videoId": videoId
  
  }
  console.log(typeof []);
 if(elem_not_present){
  abcd.push(obj);
  
  
  localStorage.setItem("youtube-history",JSON.stringify(abcd));
 }
 
}
setHistory(videoId);
// code added by hari

// watch later functionality hari
document.querySelector("#savetowatchlater").addEventListener("click",function(){
  addtoWatchlist(localStorage.getItem("videoId"));
})
function addtoWatchlist(videoId){
  console.log("added to watch later"+videoId);
  let watchlaterdata = JSON.parse(localStorage.getItem("watch-later")) || [];
  let logedin = localStorage.getItem("login") || false;
  if(logedin == "true"){
    let elem_not_present = true;
    watchlaterdata.forEach((elem)=>{
      if(videoId == elem.videoId){
        elem_not_present = false;
      }
    })
    let obj = {
        "videoId": videoId
    
    }
    
   if(elem_not_present){
    watchlaterdata.push(obj);
    
    
    localStorage.setItem("watch-later",JSON.stringify(watchlaterdata));
    alert("Added to Watch List")
   }else{
    alert("Video Already added");
   }
  }else{
    alert("Please login");
  }


}