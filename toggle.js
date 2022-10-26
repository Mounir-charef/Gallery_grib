// navbar toggle

const nav_bar = document.querySelector(".nav-bar");

const handleNavToggle = () => {
    nav_bar.dataset.transitionable = "true";

    nav_bar.dataset.toggled = nav_bar.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = () => {
    nav_bar.dataset.transitionable = "false";

    nav_bar.dataset.toggled = "false";
};

let myDiv = document.getElementById('follower');

let x,y;
const move = e => {
    myDiv.style.left = e.pageX  + "px";
    myDiv.style.top = e.pageY + "px";
}

document.addEventListener("mousemove", (e)=>{
    move(e)
})
