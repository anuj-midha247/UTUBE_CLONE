import navbar from "../components/navbar.js";
import nav from "../components/nav.js";
import beforenav from "../components/beforelogin.js";
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
      
// 
// let data = {
//     img2 : "https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
//     img : "https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSDA-RInjX5ODmJJcqV-QLsB9Z4Q",
//     title: "CSS Tutorial - Full Course for Beginners",
//     channelName: "freeCodeCamp",
//     description: "nonononononononnono",
//     views: "200K",
//     videoId: "apGV9Kg7ics"
// }
// let tempdata = [
//     {
//         img : "https://i.ytimg.com/vi/31nqsOYjhEo/hqdefault.jpg",
//         title: "JABLA | Episode 1 | Webseries | Fliq",
//         channelName: "Karikku Fliq",
//         videoId: "31nqsOYjhEo"
//     },{
//         img : "https://i.ytimg.com/vi/sxqQRZOZJVw/hqdefault.jpg",
//         title: "Aston Martin DBX 707 - Rs. 5.63 Crore Super SUV | Faisal Khan",
//         channelName: "Faisal Khan",
//         videoId: "sxqQRZOZJVw"
//     },{
//         img : "https://i.ytimg.com/vi/gqiyN4yP4Pc/hqdefault.jpg",
//         title: "Automate Kubernetes Troubleshooting With Komodor",
//         channelName: "Kunal Kushwaha",
//         videoId: "gqiyN4yP4Pc"
//     },{
//         img : "https://i.ytimg.com/vi/xK9s8MnV5MA/hqdefault.jpg",
//         title: "Harsha sai || Roasted part3 || sampath",
//         channelName: "Sampath Talk Show",
//         videoId: "xK9s8MnV5MA" 
//     },{
//         img : "https://i.ytimg.com/vi/4cEApCyt_L0/hqdefault.jpg",
//         title: "This is the BEST BUDGET Laptop for Students",
//         channelName: "TechWiser",
//         videoId: "4cEApCyt_L0"   
//     },{
//         img : "https://i.ytimg.com/vi/0IAPZzGSbME/hqdefault.jpg",
//         title: "1. Introduction to Algorithms",
//         channelName: "Abdul Bari",
//         videoId: "0IAPZzGSbME"   
//     },{
//         img : "https://i.ytimg.com/vi/74ldFZR6WS4/hqdefault.jpg",
//         title: "Car Doesn't Matter If You Enjoy Driving!",
//         channelName: "Fasil Khan",
//         videoId: "74ldFZR6WS4"   
//     },{
//         img : "https://i.ytimg.com/vi/fe-xbF1ztXo/mqdefault.jpg",
//         title: "Types Of Friends | Jordindian | Friendship Day",
//         channelName: "Jordindian",
//         videoId: "fe-xbF1ztXo"    
//     },{
//         img : "https://i.ytimg.com/vi/gM6l3TR_6i0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeE8R7XA0qRVW2ngmLID2hCxsVxQ",
//         title: "Tour an Indian students tiny Paris apartment with a view",
//         channelName: "Brut India",
//         videoId: "gM6l3TR_6i0" 
//     },{
//         img : "https://i.ytimg.com/vi/sgtQT4uPbjs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXu-BEmF-loictnvxXk1h5ufhvgA",
//         title: "Investing vs Loan Repayment | 2022 | CA Rachana Ranade",
//         channelName: "CA Rachana Phadke Ranade",
//         videoId: "sgtQT4uPbjs" 
//     }
// ]
/////
// document.querySelector("#container").innerHTML = nav();

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
// tempfuncStoredata(data);
// function tempfuncStoredata(data){
//     let arr = [];
// for(let i=0;i<10;i++){
//     arr.push(data);
// }
// localStorage.setItem("youtube-history",JSON.stringify(tempdata));
//}
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

    //     history_data.forEach((elem,index)=>{
    //         getshowdata(elem.videoId,index);
       
    // })
    for(let i=history_data.length-1;i>=0;i--){
        getshowdata(history_data[i].videoId,i);
    }

   }
}
async function getshowdata(videoId,index){
    let strm = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCSQQwYZr4tmsnfR6qnQ62O1iAK2qkpHik`);
    let vidData = await strm.json();
    console.log(vidData);
    // thumb nail
    let display = document.getElementById("historycontent");
    let title = vidData.items[0].snippet.title;
    let channelName = vidData.items[0].snippet.channelTitle;
    console.log(vidData.items[0].snippet.thumbnails.high.url);
    let contcont = document.createElement("div");
    contcont.setAttribute("id","contcont");
    let vidcont = document.createElement("div");
    vidcont.setAttribute("id","vidcont");
    let img = document.createElement("img");
    img.src = vidData.items[0].snippet.thumbnails.high.url;
    
    vidcont.append(img);
    vidcont.addEventListener("click",function(){
        localStorage.setItem("videoId",videoId);
        location.href = "./video1.html";
    })

    let textcont = document.createElement("div");
    textcont.setAttribute("id","textcont");
    let divone = document.createElement("div");
    let h4title = document.createElement("h4");
    h4title.setAttribute("id","title");
    h4title.innerText = title;
    h4title.addEventListener("click",function(){
        localStorage.setItem("videoId",videoId);
        location.href = "./video1.html";
    })
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
    pchannelname.addEventListener("click",function(){
        localStorage.setItem("videoId",videoId);
        location.href = "./video1.html";
    })
    pchannelname.innerText = channelName;
    let pviews = document.createElement("p");
    pviews.setAttribute("class","views");
    pviews.setAttribute("id","views"+videoId);
    ////additional change
    pviews.innerText = "";
    threedetail.append(pchannelname,pviews);
    textcont.append(threedetail);
    let descriptionvideo = document.createElement("p");
    descriptionvideo.setAttribute("id","descriptionvideo");
    /// additional change
    descriptionvideo.innerText = "";
     setViewsandDesc(videoId);
    descriptionvideo.addEventListener("click",function(){
        localStorage.setItem("videoId",videoId);
        location.href = "./video1.html";
    })
    textcont.append(descriptionvideo);
    contcont.append(vidcont,textcont);
    contcont.addEventListener("mouseover",function(){
        showClose(index);
    })
    contcont.addEventListener("mouseout",function(){
        removeClose(index);
    })
    display.append(contcont);
}
async function setViewsandDesc(videoId){
    let harikey = "AIzaSyCSQQwYZr4tmsnfR6qnQ62O1iAK2qkpHik";
    let otherkey = "AIzaSyDs2mqENl7X7TEW8iJFGlegakdZkDmIdyg";
    let urltoviews = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${harikey}`;
    let strm = await fetch(urltoviews);
    let data = await strm.json();
    let views = data.items[0].statistics.viewCount;
    console.log(views);
    let view_element = document.getElementById("views"+videoId);
    let viewtext = "";
    if(views >= 999 && views < 1000000){
        viewtext = Math.round(views / 1000);
        viewtext += "K";
    }else if(views >= 1000000){
        viewtext = Math.round(views / 1000000);
        viewtext += "M";
    }else{
        viewtext = views;
    }
    view_element.innerHTML = viewtext+" views";
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

// let history_da = JSON.parse(localStorage.getItem("youtube-history")) || [];
// let his_obj = {
//     videoId,

// }
// history_da.push(his_obj);
// localStorage.setItem("youtube-history",JSON.stringify(his_obj));