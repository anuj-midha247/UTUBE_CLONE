document.querySelector("form").addEventListener("submit", myForm);

var userData = JSON.parse(localStorage.getItem("userData")) || [];
let flag = false;
console.log(userData);
function myForm() {
  event.preventDefault();
  let obj = {
    name1: document.getElementById("name1").value,
    name2: document.getElementById("name2").value,
    email: document.getElementById("email").value,
    password1: document.getElementById("password1").value,
    password2: document.getElementById("password2").value,
  };
  if (
    obj.name1 === "" ||
    obj.name2 === "" ||
    obj.email === "" ||
    obj.password1 === "" ||
    obj.password2 === ""
  ) {
    if (obj.name1 === "") {
      document.getElementById("name1").style.border = "";
      document.getElementById("error1").innerText = "";
      document.getElementById("name1").style.border = "1px solid red";
      document.getElementById("error1").innerText = "!Enter First Name";
    } else {
      document.getElementById("name1").style.border = "";
      document.getElementById("error1").innerText = "";
    }
    if (obj.name2 === "") {
      document.getElementById("name2").style.border = "";
      document.getElementById("error2").innerText = "";
      document.getElementById("name2").style.border = "1px solid red";
      document.getElementById("error2").innerText = "!Enter Last Name";
    } else {
      document.getElementById("name2").style.border = "";
      document.getElementById("error2").innerText = "";
    }
    if (obj.email === "") {
      document.getElementById("email").style.border = "";
      document.getElementById("error3").innerText = "";
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("error3").innerText = "!choose a Gmail address";
      document.getElementById("error3").style.color = "red";
    } else {
      document.getElementById("email").style.border = "";
      document.getElementById("error3").innerText = "";
    }
    if (obj.password1 === "" && obj.password2 === "") {
      document.getElementById("password1").style.border = "1px solid red";
      document.getElementById("error4").innerText = "!Enter a password";
      document.getElementById("error4").style.color = "red";
    }
    if (obj.password1 !== "" && obj.password2 === "") {
      document.getElementById("password2").style.border = "1px solid red";
      document.getElementById("error4").innerText = "!Confirm your password";
      document.getElementById("error4").style.color = "red";
    }
    if (obj.password1 !== "" && obj.password2 !== "") {
      document.getElementById("password1").style.border = "";
      document.getElementById("error4").innerText = "";
      if (obj.password1.length < 8) {
        document.getElementById("error4").style.color = "red";
        document.getElementById("error4").innerText =
          "!Use 8 characters or more for your password";
      } else {
        if (obj.password1 !== obj.password2) {
          document.getElementById("error4").innerText =
            "!Those password did't match. Try again";
          document.getElementById("error4").style.color = "red";
        } else {
          document.getElementById("error4").style.color = "";
          document.getElementById("error4").innerText = "";
        }
      }
    }
  }
  if (
    obj.name1 !== "" &&
    obj.name2 !== "" &&
    obj.email !== "" &&
    obj.password1 !== "" &&
    obj.password2 !== ""
  ) {
    if (obj.password1.length < 8) {
      document.getElementById("error4").style.color = "";
      document.getElementById("error4").innerText = "";
      document.getElementById("error4").style.color = "red";
      document.getElementById("error4").innerText =
        "!Use 8 characters or more for your password";
    } else {
      document.getElementById("error4").style.color = "";
      document.getElementById("error4").innerText = "";

      if (obj.password1 !== obj.password2) {
        document.getElementById("error4").innerText =
          "!Those password did't match. Try again";
        document.getElementById("error4").style.color = "red";
      } else {
        document.getElementById("error4").style.color = "";
        document.getElementById("error4").innerText = "";

        console.log("userData:", userData.length);
        if (userData.length === 0) {
          userData.push(obj);
          localStorage.setItem("userData", JSON.stringify(userData));
          location.href = "./signin-mail.html";
        } else {
          userData.forEach((el) => {
            console.log("el:", el);
            let email = document.getElementById("email").value;
            if (el.email === email) {
              flag = true;
            }
          });
          if (flag === true) {
            document.getElementById("email").style.border = "";
            document.getElementById("error3").innerText = "";
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("error3").innerText =
              "!This email is already in use";
            document.getElementById("error3").style.color = "red";
          } else {
            document.getElementById("email").style.border = "";
            document.getElementById("error3").innerText = "";
            userData.push(obj);
            localStorage.setItem("userData", JSON.stringify(userData));
            location.href = "./signin-mail.html";
          }
        }
      }
    }
    console.log("userData:", userData);
  }
}
document.getElementById("signin").addEventListener("click", goTo);

function goTo() {
  location.href = "../signin-mail.html";
}
