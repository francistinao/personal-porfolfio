const hamburger = document.querySelector('.hamburger');
const cursor = document.querySelector('.cursor');
const mobile_menu = document.querySelector('.mobile-nav');
var mobile_anchor = document.getElementById('mobile-a');
var icon = document.getElementById('ld-mode');
var mobile_icon = document.getElementById('mobileld-mode');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

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

