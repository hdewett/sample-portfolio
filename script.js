const header = document.querySelector("nav")

window.onscroll = function () {
    const top = window.scrollY

    if (top >= 100) {
        header.classList.add("navbarPink")
    } else {
        header.classList.remove("navbarPink")
    }
};