let btns : NodeListOf<HTMLButtonElement>;
document.addEventListener("DOMContentLoaded", () => {
    btns = document.querySelectorAll("button");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.getAttribute("aria-expanded") == "true" ? btn.setAttribute("aria-expanded", "false") : btn.setAttribute("aria-expanded", "true");
        })
    })

    window.addEventListener("resize", toggleHeaderClassBasedOnScreen);
    window.addEventListener("reload", toggleHeaderClassBasedOnScreen);
})

function toggleHeaderClassBasedOnScreen() {
    const header  = document.querySelector("header");
    if (window.innerWidth <= 850) {
        header.classList.add("mobile");
        header.classList.remove("desktop");
    } else {
        header.classList.remove("mobile");
        header.classList.add("desktop");
    }
}