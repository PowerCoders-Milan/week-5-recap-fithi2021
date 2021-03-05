var userPass = prompt(window.alert("Enter your password"));
var p = document.querySelector("p");
if(userPass === "abc123"){
    p.classList.remove("transparent")
   p.classList.add ("green");

}

