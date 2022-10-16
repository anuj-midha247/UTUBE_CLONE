document.querySelector("form").addEventListener("submit", myForm);

var userData = JSON.parse(localStorage.getItem("userData")) || [];
console.log("userData:", userData);
var flag = false;
function myForm() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  // console.log("email:", email);
  userData.map((el) => {
    console.log("el:", el.email);
    if (email === "") {
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("error").innerText = "!choose a Gmail address";
    } else {
      document.getElementById("email").style.border = "";
      document.getElementById("error").innerText = "";

      if (el.email === email) {
        document.getElementById("email").style.border = "";
        document.getElementById("error").innerText = "";
        var emailloop = localStorage.setItem("emailloop", el.name1);
        location.href = "./signin-password.html";
      }
      if (el.email !== email) {
        document.getElementById("email").style.border = "";
        document.getElementById("error").innerText = "";
        document.getElementById("error").innerText =
          "!Couldn't find your Google Account";
        document.getElementById("email").style.border = "1px solid red";
      }
    }
  });
}
document.getElementById("creat").addEventListener("click", goTo);

function goTo() {
  location.href = "./signup.html";
}
