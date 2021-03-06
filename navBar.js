const hamburger = document.getElementById("hamburger");
const darken = document.getElementById("darken");
const navbarDesktop = document.getElementById("navbar__ul-desktop");
const stickyNavbar = document.getElementById("sticky-navbar");
const hide = document.getElementById("close")

// event listener
hamburger.addEventListener("click", sidebar);
hide.addEventListener("click", sidebar);
// this lets you close the mobile menu by clicking on the darkened area that isnt the nav menu
darken.addEventListener("click", sidebar);

//                                       functions

// this function open and closes the sidebar when hamburger is clicked
function sidebar() {
    // the reveal class makes the mobile nav menu visible by moving elements into view and changing the display
    hamburger.classList.toggle("reveal");
    stickyNavbar.classList.toggle("reveal");
    // stickyNavbar.style.animation = "slideIn .5s"
    stickyNavbar.classList.remove("close");
    navbarDesktop.classList.toggle("reveal");
    hide.classList.toggle("reveal");
   
    darken.classList.toggle("darken");
    if (hamburger.classList.contains("reveal")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}



// light theme / dark theme 

