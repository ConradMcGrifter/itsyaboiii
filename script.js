const hidden = document.getElementById("hidden");
const readMore = document.getElementById("newest-post__button");
const backToTop = document.getElementById("backToTop");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const stickyNavbar = document.getElementById("sticky-navbar");
const navbarUl = document.getElementById("navbar__ul");
const darken = document.getElementById("darken");
const body = document.getElementById("body");
const logo = document.getElementById("logo");
const header = document.getElementById("header");
const content = document.getElementById("content");
const newestPost = document.getElementById("newest-post");
const footer = document.getElementById("footer");

readMore.addEventListener("click", showArticle);
backToTop.addEventListener("click", closeArticle);
hamburger.addEventListener("click", sidebar);
darken.addEventListener("click", sidebar);
// logo.addEventListener("click", lightTheme);

function showArticle() {
    hidden.classList.toggle("show");

    if (hidden.classList.contains("show")) {
        readMore.style.display = "none";
        backToTop.style.display = "flex";
        hidden.style.animation = "fadeIn 1s";
    }
}

function closeArticle() {
    if (hidden.classList.contains("show")) {
        hidden.classList.toggle("show");
    }
    backToTop.style.display = "none";
    readMore.style.display = "flex";
    document.getElementById("header").scrollIntoView();
}

function sidebar() {
    hamburger.classList.toggle("reveal");
    navbar.classList.toggle("reveal");
    navbarUl.classList.toggle("reveal");
    darken.classList.toggle("darken");
    if (hamburger.classList.contains("reveal")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

// function lightTheme() {
//     body.classList.toggle("light-theme");
//     stickyNavbar.classList.toggle("light-theme");
//     content.classList.toggle("light-theme");
//     header.classList.toggle("light-theme");
//     newestPost.classList.toggle("light-theme");
//     footer.classList.toggle("light-theme");
// }

// theme choice save

let lightMode = localStorage.getItem("lightMode");
const enableLightMode = () => {
    header.classList.add("light-theme");
    body.classList.add("light-theme");
    stickyNavbar.classList.add("light-theme");
    content.classList.add("light-theme");
    newestPost.classList.add("light-theme");
    footer.classList.add("light-theme");

    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
    header.classList.remove("light-theme");
    body.classList.remove("light-theme");
    stickyNavbar.classList.add("light-theme");
    content.classList.remove("light-theme");
    newestPost.classList.remove("light-theme");
    footer.classList.remove("light-theme");

    localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
    enableLightMode();
}

logo.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});
