let modalBG = document.querySelector(".modal-bg")
let backModal = document.querySelector("#back-modal")
let menuIcon = document.getElementById("menu-image")
let bmIcon = document.querySelector("#bm-icon")
let bmButton = document.querySelector("#bookmark-button")
let backButtons = document.querySelectorAll(".back-buttons")
let radioButtons = document.querySelectorAll(".radio")

document.addEventListener("DOMContentLoaded", () => {
    modalBG.style.display = "none";
    backModal.style.display = "none";
    document.querySelectorAll(".radio-toggle-div").forEach(div => {
        div.style.display = "none"
    })
})

function toggleModalBackground() {
    if (modalBG.style.display === "block") {
        modalBG.style.display = "none";
    } else {
        modalBG.style.display = "block";
    }
}

document.getElementById("hamburger").addEventListener("click", () => {
    toggleModal()
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

function toggleModal() {
    if (backModal.style.display === "block") {
        backModal.style.display = "none";
    } else if (backModal.style.display === "none") {
        backModal.style.display = "block";
    }
}

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        toggleModalBackground()
        toggleModal()
    })
})

document.getElementById("modal-cross").addEventListener("click", () => {
    toggleModalBackground()
    toggleModal()
})

function toggleRadio(evt) {
    let button = evt.currentTarget
    border = document.getElementById("b" + button.dataset.item)
    div = document.getElementById("d" + button.dataset.item)
    if (button.dataset.toggle === "off") {
        border.style.borderColor = "hsl(176, 50%, 47%)"
        border.style.boxShadow = "0 0 0 1px hsl(176, 50%, 47%)"
        div.style.display = "flex"
        button.dataset.toggle = "on"
        button.src = "./images/radio-selected.svg"

    } else {
        border.style.borderColor = "hsl(0, 0%, 80%)"
        border.style.boxShadow = "none"
        border.style.borderWidth = "1px"
        div.style.display = "none"
        button.dataset.toggle = "off"
        button.src = "./images/radio.svg"
    }
}

radioButtons.forEach(button => {
    button.addEventListener("click", (e) => toggleRadio(e))
})