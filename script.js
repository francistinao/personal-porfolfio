const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
var mobile_anchor = document.getElementById('mobile-a');
var icon = document.getElementById('ld-mode');
var mobile_icon = document.getElementById('mobileld-mode');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
// For dark mode toggler
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/dark.png";
    } else {
        icon.src = "images/light.png";
    }
}

// For mobile dark mode toggler 
mobile_icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        mobile_icon.src = "images/dark.png";
    } else {
        mobile_icon.src = "images/light.png";
    }
}

