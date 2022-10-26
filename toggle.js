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

function isTouchDevice(){
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e){
        return false;
    }
}
let x,y;
const move = e => {
    try {
        x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
}

document.addEventListener("mousemove", (e)=>{
    move(e)
})

document.addEventListener("touchmove", (e)=>{
    move(e)
})