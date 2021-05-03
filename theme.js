
const modeToggle = document.getElementById("modeToggle");
const body = document.getElementById("body");


let lightMode = localStorage.getItem("lightMode");
const enableLightMode = () => {
    // add class lightmode to body
    body.classList.add("lightmode");
    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
    body.classList.remove("lightmode");
    localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
    enableLightMode();
}

modeToggle.addEventListener("click", () => {
    console.log("test");
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});