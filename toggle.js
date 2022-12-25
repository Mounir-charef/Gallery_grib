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




// cursor_wrapper
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

let myDiv = document.getElementById('follower');

if (isTouchDevice()) {
    myDiv.remove();
}

const animateFollower = (e, interacting) => {
    const x = e.clientX - myDiv.offsetWidth / 2 ,
        y = e.clientY - myDiv.offsetHeight / 2;

    const frames = {
        transform: `translate(${x}px, ${y}px) scale(${interacting? 8 : 1})`
    }

    myDiv.animate(frames, {
        duration: 800,
        fill: "forwards",
    });
}

const getFollowerClass = type => {
    switch (type) {
        case "video":
            return "fa-solid fa-play";
        default:
            return "fa-solid fa-arrow-right";
    }
}

window.onmousemove = e => {
    const inter = e.target.closest(".inter"),
        interacting = inter !== null ;

    const icon = document.getElementById("follower-icon");

    animateFollower(e, interacting);

    myDiv.dataset.type = interacting ? inter.dataset.type : "";

    if (interacting) {
        icon.className = getFollowerClass(inter.dataset.type);
    }

}
