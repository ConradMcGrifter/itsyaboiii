const hidden = document.getElementById("hidden");
const readMore = document.getElementById("newest-post__button");
const backToTop = document.getElementById("backToTop");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navbarUl = document.getElementById("navbar__ul");
const darken = document.getElementById("darken");
const body = document.getElementById("body");

readMore.addEventListener("click", showArticle);
backToTop.addEventListener("click", closeArticle);
hamburger.addEventListener("click", sidebar);
darken.addEventListener("click", sidebar);

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
