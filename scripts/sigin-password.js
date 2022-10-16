document.querySelector("form").addEventListener("submit", myForm);

var userData = JSON.parse(localStorage.getItem("userData")) || [];
var name = localStorage.getItem("emailloop");
console.log("userData:", userData);
document.getElementById("userName").innerText = `Hi ${name} !`;

console.log("userData:", userData.name1);
function myForm() {
  event.preventDefault();
  userData.map((el) => {
    console.log("el:", el);
    let password = document.getElementById("password").value;
    if (password === "") {
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("error").innerText = "!Enter a password";
    } else {
      document.getElementById("password").style.border = "";
      document.getElementById("error").innerText = "";
      console.log(userData.password1);
      console.log(password);
      if (el.password1 !== password && el.email !== emailloop) {
        document.getElementById("password").style.border = "";
        document.getElementById("error").innerText = "";
        document.getElementById("error").innerText =
          "!Wrong password. Try again or click Forgot password to reset it.";
        document.getElementById("password").style.border = "1px solid red";
      } else if (el.password1 === password && el.email === emailloop) {
        document.getElementById("password").style.border = "";
        document.getElementById("error").innerText = "";
        alert("Signin successfull");
        location.href = "./index.html";
      }
    }
  });
}
document.getElementById("creat").addEventListener("click", goTo);

function goTo() {
  location.href = "./signup.html";
}
