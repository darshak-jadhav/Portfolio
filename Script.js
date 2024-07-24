document.getElementById("btn_main").onclick=function(){
    alert("Want to reach me!!");
    if(confirm("You can reach me in contact section, confirm once again to contact me !!")){
        window.location.href = "#contact";
    }
};
document.querySelectorAll(".btn_work").forEach(function(button) {
    button.onclick = function() {
        if (confirm("It seems like you're interested in my work, confirm once again to reach me !!")) {
            window.location.href = "#contact";
        }
    };
});
document.getElementById("instagram").onclick=function(){
    window.open("https://www.instagram.com/jdarshak10?igsh=MXZzYWFpYnZuZnJjNw==");
}
document.getElementById("linkedin").onclick=function(){
    window.open("https://www.linkedin.com/in/darshak-jadhav-56054a312/?trk=opento_sprofile_details");
}

document.getElementById("btn_project_weather").onclick=function(){
    window.open("https://darshak-jadhav.github.io/weather-application/");
}
