var btns;
document.addEventListener("DOMContentLoaded", function () {
    btns = document.querySelectorAll("button");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            btn.getAttribute("aria-expanded") == "true" ? btn.setAttribute("aria-expanded", "false") : btn.setAttribute("aria-expanded", "true");
        });
    });
    window.addEventListener("resize", toggleHeaderClassBasedOnScreen);
    window.addEventListener("reload", toggleHeaderClassBasedOnScreen);
});
function toggleHeaderClassBasedOnScreen() {
    var header = document.querySelector("header");
    if (window.innerWidth <= 850) {
        header.classList.add("mobile");
        header.classList.remove("desktop");
    }
    else {
        header.classList.remove("mobile");
        header.classList.add("desktop");
    }
}
