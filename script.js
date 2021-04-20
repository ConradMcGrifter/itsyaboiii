const readMore = document.getElementById("newest-post__button");
const hidden = document.getElementById("hidden");
const backToTop = document.getElementById("backToTop");

readMore.addEventListener("click", showArticle);
backToTop.addEventListener("click", closeArticle);

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
