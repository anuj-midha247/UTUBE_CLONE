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
    sidemenu.classList.add('active');
    main.classList.add('hide');
    content.classList.add('active');
})

hidemenuIcon.addEventListener("click", () => {
    sidemenu.classList.remove('active');
    main.classList.remove('hide');
    content.classList.remove('active');
})

// const apiKey = "AIzaSyBF7hgcIclIRKQIaYEEs1czIJxSEY-SAGs";
// var popUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${apiKey}`;
// popular(popUrl);
// async function popular(popUrl) {
//     var data = await fetch(popUrl);
//     var getData = await data.json();
//     // console.log(getData.items);
//     popDisp(getData.items);
// }


// function popDisp(data){
//     let videodiv = document.getElementById("mainContent");
//     let insertdata ="";
//   data.map((ele)=>{
//     const{id, snippet:{thumbnails:{high:{url}},title,channelTitle},statistics:{viewCount}}=ele;
//     let views=0;
//     if(viewCount>1000000){
//         views=`${parseInt(viewCount/1000000)}M`;
//     }
//     else if(viewCount>999){
//         views=`${parseInt(viewCount/1000)}K`;
//     }
//     insertdata += `<div class="viddata" >
//                         <div class="thumb"><img src="${url}" alt=""></div>
//                         <div class="viddetailbox">
//                         <div class="channelogo">
//                             <img src="" alt="">
//                         </div>
//                         <div class="viddetail">
//                             <h4>${title}</h4>
//                             <p>${channelTitle}</p>
//                             <p><span>${views} </span><span> views</span></p>
//                         </div>
//                     </div>
//                 </div>`;
//   })
//   videodiv.innerHTML=insertdata;
//     // addEventListenerr(data);
// }

// document.querySelector("#bolly-music").addEventListener("click", async () => {
//     const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&order=relevance&q=${'BollyWood Music'}&videoCaption=any&key=${apiKey}`;
//     const btn = document.querySelector("#bolly-music");
//     const all = document.querySelector("#all");
//     const back = document.querySelector("#back-music");
//     const upsc = document.querySelector("#upsc"); 
//     const bhajan = document.querySelector("#bhajan");
//     btn.style.backgroundColor = "black";
//     btn.style.color = "#fff";
//     all.style.backgroundColor = "#fff";
//     all.style.color = "black";
//     back.style.backgroundColor = "#fff";
//     back.style.color = "black";
//     upsc.style.backgroundColor = "#fff";
//     upsc.style.color = "black";
//     bhajan.style.backgroundColor = "#fff";
//     bhajan.style.color = "black";
//     const data = await fetch(url);
//     const getData = await data.json();
//     // console.log(getData.items);
//     displayData(getData.items);
// })
// function displayData(data) {
//     console.log(data);
//     let videoDiv = document.querySelector(".video-container");
//     // videoDiv.innerText = "";
//   let insert = "";
//   data.map((ele) => {
//     // console.log(ele);
//     const {
//       id: { videoId },
//       snippet: {
//         thumbnails: {
//           high: { url },
//         },
//         title,
//         channelTitle,
//       }
//     } = ele;
//     if (videoId != undefined) {
//       insert += `
//                         <div class="viddata">
//                         <div class="thumb"><img src="${url}" alt="${title}"></div>
//                         <div class="viddetailbox">
//                         <div class="channelogo">
//                             <img src="" alt="">
//                         </div>
//                         <div class="viddetail">
//                             <h4>${title}</h4>
//                             <p>${channelTitle}</p>
//                             <p><span></span><span> views</span></p>
//                         </div>
//                         </div>
//                     </div>
//                 `;
//     }
//   });
//     videoDiv.innerHTML = insert;
//     addEventListenerr(data);
// }
// displayData(data);




const videoCardContainer = document.querySelector(".video-container");
let api_key = "AIzaSyDs2mqENl7X7TEW8iJFGlegakdZkDmIdyg";

let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googlepis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: "mostPopular",
    maxResults:100,
    regionCode:'IN'
})).then(res => res.json())
    .then(data => {
    // console.log(data);
        data.items.forEach((item )=> {

            getChannelIcon(item);
        })
    })
    .catch(err=>console.log(err))

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
//    console.log(data.id);
    // videoCardContainer.innerHTML += `
    // <div class="video" >
    //             <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="" >
    //             <div class="content">
    //                 <img src="${data.channelThumbnail}" class="channel-icon" alt="">
    //                 <div class="info">
    //                     <h4 class="title">${data.snippet.title}</h4>
    //                     <p class="channel-name">${data.snippet.channelTitle}</p>
    //                 </div>
    //             </div>
    //         </div>
    // `;

    
        let div=document.createElement( "div");
        div.setAttribute("class", "video");
        let img = document.createElement("img");
        img.src = data.snippet.thumbnails.high.url;
    img.setAttribute("class", "thumbnail");
    img.addEventListener("click", ()=>{
        Listenerr(data);
    })
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
        div.append(img, div2);
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

 

        
    