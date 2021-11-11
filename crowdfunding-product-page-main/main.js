let modalBG = document.querySelector(".modal-bg")
let menuIcon = document.getElementById("menu-image")
let bmIcon = document.querySelector("#bm-icon")
let bmButton = document.querySelector("#bookmark-button")

document.addEventListener("DOMContentLoaded", () => {
    modalBG.style.display = "none";
})

function modal() {
    if (modalBG.style.display === "block") {
        modalBG.style.display = "none";
    } else {
        modalBG.style.display = "block";
    }
}

document.getElementById("hamburger").addEventListener("click", () => {
    modal()
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
        menuIcon.src = "./images/icon-close-menu.svg"
    } else {
        x.className = "navbar";
        menuIcon.src = "./images/icon-hamburger.svg"
    }
})

function bookmark() {
    if (bmIcon.dataset.state === "bookmarked") {
        bmIcon.dataset.state = "not-bookmarked"
        bmIcon.src = "./images/icon-bookmark.svg"
        bmButton.style.color = "#7a7a7a"
    } else {
        bmIcon.dataset.state = "bookmarked"
        bmIcon.src = "./images/greenbm.svg"
        bmButton.style.color = "hsl(176, 72%, 28%)"
    }
}

bmIcon.addEventListener("click", bookmark)
bmButton.addEventListener("click", bookmark)