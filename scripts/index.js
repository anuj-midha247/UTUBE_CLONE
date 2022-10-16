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

}
window.addEventListener("click", (ev) => {
  if (ev.target.className != "search") {
    searchsugg.classList.add("hidesearchsugg");
  } else {
    searchsugg.classList.remove("hidesearchsugg");
  }
});
var userdata = JSON.parse(localStorage.getItem("userdata"));
document.querySelector(".userName").innerHTML = "Hello " + userdata.name1;
