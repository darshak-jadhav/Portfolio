var theme = document.getElementById("themebtn");
theme.onclick = function(){
    document.body.classList.toggle("darktheme");
    this.classList.toggle("fa-sun");
    this.classList.toggle("fa-moon");
}

document.getElementById("floatbtnhome").onclick =function(){
    window.location.href="#home";
}

document.getElementById("floatbtncontact").onclick = function(){
    window.location.href="#contact";
}
document.querySelectorAll(".btncontact").forEach(function(button) {
    button.onclick = function() {
       window.location.href = "#contact";
    };
});

document.getElementById("instagram").onclick=function(){
    window.open("https://www.instagram.com/jdarshak10?igsh=MXZzYWFpYnZuZnJjNw==");
}
document.getElementById("linkedin").onclick=function(){
    window.open("https://www.linkedin.com/in/darshak-jadhav-56054a312/?trk=opento_sprofile_details");
}
document.getElementById("github").onclick=function(){
    window.open("https://github.com/darshak-jadhav");
}

document.querySelector(".gymwebsite").onclick = function(){
    window.open("https://darshak-jadhav.github.io/Gym-website/");
}

document.querySelector(".weatherapp").onclick=function(){
    window.open("https://darshak-jadhav.github.io/weather-application/");
}

document.querySelector(".gmaifybtn").onclick=function(){
     alert("Sorry this project is not live now..!");
}