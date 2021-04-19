const readMore = document.getElementById("newest-post__button");
const hiddenP = document.getElementById("hidden-p");

readMore.addEventListener("click", showArticle);

function showArticle() {
    hiddenP.classList.toggle("show");

    if (hiddenP.classList.contains("show")) {
        readMore.style.display = "none";
    }
}
