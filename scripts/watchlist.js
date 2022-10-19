// import load from "./load.js";
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
      

// let data = {
//     img2 : "https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
//     img : "https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSDA-RInjX5ODmJJcqV-QLsB9Z4Q",
//     title: "CSS Tutorial - Full Course for Beginners",
//     channelName: "freeCodeCamp",
//     videoId : "JLfkvvHqSgM"
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
// tempfuncStoredata(data);
// function tempfuncStoredata(data){
//     let arr = [];
// for(let i=0;i<10;i++){
//     arr.push(data);
// }
// localStorage.setItem("watch-later",JSON.stringify(tempdata));
//}
///

//  document.getElementById("topNavbar").innerHTML = navbar();
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

let watchlaterdata = JSON.parse(localStorage.getItem("watch-later")) || [];
showdata(watchlaterdata);
function showdata(watchlaterdata){
    let contentdiv = document.getElementById("watchlaterContent");
    contentdiv.innerHTML = "";
    let logedin = localStorage.getItem("login") || false; 
    if(logedin == "true"){
 watchlaterdata.forEach((elem,index)=>{
    getandShowData(elem.videoId,index);
//     let watchcont = document.createElement("div");

//      watchcont.innerHTML = `
//    <div class="watchcont">
//    <div class="dragcont">
//     <img src="../../images/211736_drag_icon.png" id="dragimg" alt="">
    
//    </div>
//    <div class="wrapcont">
//       <div class="contcont">
//           <div id="vidImg">
//               <img src="${elem.img}" alt="">
//            </div>
//            <div id="textcont">
//               <h3 id="titlecont">
//               <a href="../../video_player/video.html">${elem.title}</a> 
//               </h3>
//               <p id="channelname">
//                   ${elem.channelName}
//               </p>
//            </div>
//        </div>
//    </div>

//    <div id="optioncont" >
//         <img src="../../images/noun-three-dots-4760951.png" id="optionlogothreedot" alt="">
//    </div>
//    </div>`;
 let outer = document.createElement("div");
 let watchcont = document.createElement("div");
 watchcont.setAttribute("class","watchcont");
 let dragcont = document.createElement("div");
 dragcont.setAttribute("class","dragcont");
 let imgdrag = document.createElement("img");
 imgdrag.src = "./images/211736_drag_icon.png";
 imgdrag.setAttribute("id","dragimg");
 dragcont.append(imgdrag);
 watchcont.append(dragcont);

 let wrapcont = document.createElement("div");
 wrapcont.setAttribute("class","wrapcont");

 let contcont = document.createElement("div");
 contcont.setAttribute("class","contcont")
 let vidimg = document.createElement("div");
 // rendering img later
 vidimg.setAttribute("id","vidImg");
//  vidimg.setAttribute("id","vidImg"+elem.videoId);
 let vidtumb = document.createElement("img");
 vidtumb.setAttribute("class","tumbimg");

  vidtumb.setAttribute("id","tumbimg"+elem.videoId);
//  let vidtumb = document.createElement("img");
 vidtumb.src = "";

 vidimg.append(vidtumb);

 let textcont = document.createElement("div");
 textcont.setAttribute("id","textcont");
 let titlecont = document.createElement("h3");
 titlecont.setAttribute("id","titlecont");
 let alink = document.createElement("a");
  alink.setAttribute("id","alink"+elem.videoId);
 alink.innerText = "";
 alink.addEventListener("click",function(){
    localStorage.setItem("videoId",elem.videoId);
    location.href = "./video1.html";
 })
 titlecont.append(alink);

 let channelname = document.createElement("p");
 channelname.setAttribute("class","channelname");
 channelname.setAttribute("id","channelname"+elem.videoId);
 channelname.innerText = elem.channelName;
 textcont.append(titlecont,channelname);
 wrapcont.addEventListener("click",function(){
    localStorage.setItem("videoId",elem.videoId);
    location.href = "./video1.html";
 })
 contcont.append(vidimg,textcont);
 wrapcont.append(contcont);
 watchcont.append(wrapcont);
  let optioncontdiv = document.createElement("div");
  optioncontdiv.setAttribute("id","optioncont");
  let threedotimg = document.createElement("img");
  threedotimg.src = "";
  let temptext = "threedotimg"+ index;
  threedotimg.setAttribute("id",temptext);
  threedotimg.setAttribute("class","optionlogothreedot");
  threedotimg.addEventListener("click",function(){
    removeVideo(index);
  })
  optioncontdiv.append(threedotimg);
 watchcont.append(optioncontdiv);
 outer.append(watchcont);
 outer.addEventListener("mouseover",function(){
    showDot(index);
 })
 
 outer.addEventListener("mouseout",function(){
    removeDot(index);
 })
   contentdiv.append(outer);
//    let option = document.getElementById("optioncont");
//    option.addEventListener("click",function(){
//     myDel(elem,index);
//    })
 })}else{
    alert("Login to save videos.")
 }


 if(watchlaterdata.length == 0){
   let extracont = document.getElementById("extracont");
   extracont.innerText = "Add to watch later";

 }else{
    if(logedin == "true"){
        let extracont = document.getElementById("extracont");
        extracont.innerHTML = "";
       let firstimg = document.createElement("img");
       firstimg.addEventListener("click",function(){
        localStorage.setItem("videoId",watchlaterdata[0].videoId);
        location.href = "./video1.html";
        
     })
    //    firstimg.src = watchlaterdata[0].img;
       firstimg.setAttribute("id","firstimg");
       let h2watch = document.createElement("h2");
       h2watch.innerText = "Watch later";
       h2watch.setAttribute("id","h2watch");
       let paravideos = document.createElement("p");
       paravideos.setAttribute("id","paravideo");
       if(watchlaterdata.length > 1){
        paravideos.innerText = watchlaterdata.length+" videos | No views | Updated today";
       }else{
        paravideos.innerText = watchlaterdata.length+" video";
       }
        let contdivpara = document.createElement("div");
        contdivpara.setAttribute("id","contdivpara");
        let contimg2 = document.createElement("img");
        contimg2.src = "../../images/noun-lock-652784.png"
        contimg2.setAttribute("id","contimg2");
        let paraprivate = document.createElement("p");
        paraprivate.innerText = "Private";
        paraprivate.setAttribute("id","paraprivate");
    
        contdivpara.append(contimg2,paraprivate);
       let hrtag = document.createElement("hr");
       hrtag.setAttribute("id","hrextracontent");
       extracont.append(firstimg,h2watch,paravideos,contdivpara,hrtag);
    }else{
        let extracont = document.getElementById("extracont");
        extracont.innerHTML = "";
    }
   
 }
}
async function getandShowData(videoId,index){
    let harikey = "AIzaSyCSQQwYZr4tmsnfR6qnQ62O1iAK2qkpHik";
    let other_key = "AIzaSyDs2mqENl7X7TEW8iJFGlegakdZkDmIdyg";
    let strm = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${harikey}`);
    let vidData = await strm.json();
    console.log(vidData);
    if(index == 0){
        let firstimgrender = document.getElementById("firstimg");
        firstimgrender.src = vidData.items[0].snippet.thumbnails.high.url;
    }
    // let title = vidData.items[0].snippet.title;
    // let channelName = vidData.items[0].snippet.channelTitle;
    let imgrender = document.getElementById("tumbimg"+videoId);
    imgrender.src = vidData.items[0].snippet.thumbnails.high.url;
    console.log(vidData.items[0].snippet.thumbnails.high.url);
    // https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg
    let alinkrenderer = document.getElementById("alink"+videoId);
    console.log(vidData.items[0].snippet.title);
    alinkrenderer.innerText = vidData.items[0].snippet.title;
    let channelrender = document.getElementById("channelname"+videoId);
    channelrender.innerText = vidData.items[0].snippet.channelTitle;
}
function showDot(index){
    event.preventDefault();
    let loc = document.getElementById("threedotimg"+index);
    loc.src = "../../images/icons8-trash-50.png";
    // loc.addEventListener("click",function(){
    //     removeVideo(index);
    // })
}
function removeDot(index){
    event.preventDefault();
    let loc = document.getElementById("threedotimg"+index);
    loc.src = "";
}
function removeVideo(index){
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("watch-later")) || [];
    data.splice(index,1);
    console.log(data);
    localStorage.setItem("watch-later",JSON.stringify(data));
    showdata(data);

}
// function myDel(elem,index){
//     event.preventDefault();
//     console.log("del")
//     let watchcont = JSON.parse(localStorage.getItem("watch-later")) || [];
//     watchcont.splice(index,1);
//     localStorage.setItem("watch-later",JSON.stringify(watchcont));
//     showdata(watchcont);
// }

// for(let i=0;i<10;i++){
//     let watchcont = document.createElement("div");

//     watchcont.innerHTML = `
//    <div class="watchcont">
//    <div class="dragcont">
//     <img src="../../images/211736_drag_icon.png" id="dragimg" alt="">
    
//    </div>
//    <div class="wrapcont">
//       <div class="contcont">
//           <div id="vidImg">
//               <img src="${data.img}" alt="">
//            </div>
//            <div id="textcont">
//               <h3 id="titlecont">
//               <a href="">${data.title}</a> 
//               </h3>
//               <p id="channelname">
//                   ${data.channelName}
//               </p>
//            </div>
//        </div>
//    </div>
//    <div id="optioncont">
//         <img src="../../images/noun-three-dots-4760951.png" id="optionlogothreedot" alt="">
//    </div>
//    </div>`;
//    contentdiv.append(watchcont);
// }
// console.log(__dirname);

// for(let i=0;i<10;i++){
  
//   watchcont+= load();
 
// }

