const readMore = document.getElementById("newest-post__button");
const hidden = document.getElementById("hidden");

readMore.addEventListener("click", showArticle);

function showArticle() {
    hidden.classList.toggle("show");

    if (hidden.classList.contains("show")) {
        readMore.style.display = "none";
        hidden.style.animation = "fadeIn 1s";
    }
}
