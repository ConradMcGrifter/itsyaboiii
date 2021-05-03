// this hides the content of the most recent blog post
const hidden = document.getElementById("hidden");
// this is the read more button for the newest post and the back to top button
const readMore = document.getElementById("newest-post__button");
const backToTop = document.getElementById("backToTop");
// hamburger icon for mobile
// const hamburger = document.getElementById("hamburger");
// theses are the full navbars for mobile and desktop
// const mobileNavbar = document.getElementById("mobile-navbar");
// const stickyNavbar = document.getElementById("sticky-navbar");
// these are the navbar unordered lists that contain the links
// const navbarDesktop = document.getElementById("navbar__ul-desktop");
// const navbarMobile = document.getElementById("navbar__ul-mobile");
// this darkens the screen when mobile navbar is showing
// const darken = document.getElementById("darken");
const overlay = document.getElementById("newest-post__p--overlay");
//
// const body = document.getElementById("body");
const logo = document.getElementById("logo");
const header = document.getElementById("header");
const content = document.getElementById("content");
const newestPost = document.getElementById("newest-post");
const footer = document.getElementById("footer");
const errorBg = document.getElementById("error");
// this is the icon to toggle the theme
// const modeToggle = document.getElementById("modeToggle");

//
//                                   event listeners
//

readMore.addEventListener("click", () => {
    // this shows the rest of the most recent article when "read more" button is clicked
    hidden.classList.toggle("show");
    overlay.classList.toggle("hidden");

    // this hides the read more button if the hidden content is showing
    if (hidden.classList.contains("show")) {
        readMore.style.display = "none";
        backToTop.style.display = "flex";
        // hidden.style.animation = "fadeIn 5s";
    }
});

backToTop.addEventListener("click", () => {
    // this closes the article by removing the class "show" if it is currently on the hidden content
    if (hidden.classList.contains("show")) {
        hidden.classList.toggle("show");
    }
    // this resets the "read more" button to be visible and hides the "back to top" button
    backToTop.style.display = "none";
    readMore.style.display = "flex";
    overlay.classList.toggle("hidden");
    document.getElementById("header").scrollIntoView();
});

// hamburger.addEventListener("click", sidebar);
// // this lets you close the mobile menu by clicking on the darkened area that isnt the nav menu
// darken.addEventListener("click", sidebar);

// document.getElementById("close").addEventListener("click", ()=> {
    
//     stickyNavbar.classList.toggle("reveal");
//     hamburger.classList.toggle("reveal");
//     navbarDesktop.classList.toggle("reveal");
//     stickyNavbar.classList.toggle("close");
//     // stickyNavbar.style.animation = "slideOut .5s";
//     darken.classList.toggle("darken");
//     document.getElementById("close").classList.toggle("reveal");

//     if (hamburger.classList.contains("reveal")) {
//         body.style.overflow = "hidden";
//     } else {
//         body.style.overflow = "";
//     }
// })

// //                                       functions

// // this function open and closes the sidebar when hamburger is clicked
// function sidebar() {
//     // the reveal class makes the mobile nav menu visible by moving elements into view and changing the display
//     hamburger.classList.toggle("reveal");
//     stickyNavbar.classList.toggle("reveal");
//     // stickyNavbar.style.animation = "slideIn .5s"
//     stickyNavbar.classList.remove("close");
//     navbarDesktop.classList.toggle("reveal");
//     document.getElementById("close").classList.toggle("reveal");

//     darken.classList.toggle("darken");
//     if (hamburger.classList.contains("reveal")) {
//         body.style.overflow = "hidden";
//     } else {
//         body.style.overflow = "";
//     }
// }



//
//                              theme choice save to local storage
//

// let lightMode = localStorage.getItem("lightMode");
// const enableLightMode = () => {
//     // add class lightmode to body
//     body.classList.add("lightmode");
//     localStorage.setItem("lightMode", "enabled");
// };

// const disableLightMode = () => {
//     body.classList.remove("lightmode");
//     localStorage.setItem("lightMode", null);
// };

// if (lightMode === "enabled") {
//     enableLightMode();
// }

// modeToggle.addEventListener("click", () => {
//     lightMode = localStorage.getItem("lightMode");
//     if (lightMode !== "enabled") {
//         enableLightMode();
//     } else {
//         disableLightMode();
//     }
// });
