// import load from "./load.js";
import navbar from "../components/navbar.js";
import nav from "../components/nav.js";


let data = {
    img2 : "https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg",
    img : "https://i.ytimg.com/vi/OXGznpKZ_sA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSDA-RInjX5ODmJJcqV-QLsB9Z4Q",
    title: "CSS Tutorial - Full Course for Beginners",
    channelName: "freeCodeCamp"
}
/////
tempfuncStoredata(data);
function tempfuncStoredata(data){
    let arr = [];
for(let i=0;i<10;i++){
    arr.push(data);
}
localStorage.setItem("watch-later",JSON.stringify(arr));
}
///

//  document.getElementById("topNavbar").innerHTML = navbar();
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

let watchlaterdata = JSON.parse(localStorage.getItem("watch-later")) || [];
showdata(watchlaterdata);
function showdata(watchlaterdata){
    let contentdiv = document.getElementById("watchlaterContent");
    contentdiv.innerHTML = "";
 watchlaterdata.forEach((elem,index)=>{
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
 vidimg.setAttribute("id","vidImg");
 let vidtumb = document.createElement("img");
 vidtumb.setAttribute("id","tumbimg");
 vidtumb.src = elem.img;
 vidimg.append(vidtumb);

 let textcont = document.createElement("div");
 textcont.setAttribute("id","textcont");
 let titlecont = document.createElement("h3");
 titlecont.setAttribute("id","titlecont");
 let alink = document.createElement("a");
 alink.setAttribute("href","../../video_player/video.html");
 alink.innerText = elem.title;
 alink.addEventListener("click",function(){
    localStorage.setItem("clicked-video",JSON.stringify(elem));
    // location.href = "../../video_player/video.html";
 })
 titlecont.append(alink);

 let channelname = document.createElement("p");
 channelname.setAttribute("id","channelname");
 channelname.innerText = elem.channelName;
 textcont.append(titlecont,channelname);
 wrapcont.addEventListener("click",function(){
    localStorage.setItem("clicked-video",JSON.stringify(elem));
    location.href = "../../video_player/video.html";
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
 })
 if(watchlaterdata.length == 0){
   let extracont = document.getElementById("extracont");
   extracont.innerText = "0";

 }else{
    let extracont = document.getElementById("extracont");
    extracont.innerHTML = "";
   let firstimg = document.createElement("img");
   firstimg.addEventListener("click",function(){
    localStorage.setItem("clicked-video",JSON.stringify(watchlaterdata[0]));
    location.href = "../../video_player/video.html";
 })
   firstimg.src = watchlaterdata[0].img;
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
 }
}
function showDot(index){
    event.preventDefault();
    let loc = document.getElementById("threedotimg"+index);
    loc.src = "../../images/noun-three-dots-4760951.png";
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

