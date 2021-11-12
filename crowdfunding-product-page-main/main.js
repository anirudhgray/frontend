let modalBG = document.querySelector(".modal-bg")
let backModal = document.querySelector("#back-modal")
let menuIcon = document.getElementById("menu-image")
let bmIcon = document.querySelector("#bm-icon")
let bmButton = document.querySelector("#bookmark-button")
let backButtons = document.querySelectorAll(".back-buttons")
let radioButtons = document.querySelectorAll(".radio")
let aboutButtons = document.querySelectorAll(".reward-button")

document.addEventListener("DOMContentLoaded", () => {
    modalBG.style.display = "none";
    backModal.style.display = "none";
    aboutButtons.forEach(b => {
        item = b.dataset.item
        disableReward(item, "about")
    })
    radioButtons.forEach(r => {
        item = r.dataset.item
        disableReward(item, "modal")
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    let div = document.getElementById("b" + button.dataset.item)
    if (button.dataset.toggle === "off") {
        radioCheck(evt)
        div.style.borderColor = "hsl(176, 50%, 47%)"
        div.style.boxShadow = "0 0 0 1px hsl(176, 50%, 47%)"
        button.dataset.toggle = "on"
        button.src = "./images/radio-selected.svg"
        div.className += " active"
    } else {
        div.style.borderColor = "hsl(0, 0%, 80%)"
        div.style.boxShadow = "none"
        button.dataset.toggle = "off"
        button.src = "./images/radio.svg"
        div.className = "pledge-radio-div"
    }
}
function radioCheck() {
    radioButtons.forEach(check => {
        if (check.dataset.toggle === "on") {
            check.click()
        }
    })
}

radioButtons.forEach(button => {
    button.addEventListener("click", addToggleRadio)
})
function addToggleRadio(ev) {
    toggleRadio(ev)
}

function disableReward(itemName, flag) {
    if (flag === "about") {
        let count = document.getElementById(itemName + "-left")
        if (count.textContent === "0") {
            let element = document.getElementById("a" + itemName)
            element.style.opacity = "0.4";
            let button = document.getElementById(itemName + "-reward")
            button.textContent = "Out of stock"
            button.disabled = true
        }
    } else {
        let count = document.getElementById(itemName + "-left-modal")
        if (count.textContent === "0") {
            let element = document.getElementById("b" + itemName)
            element.style.opacity = "0.4";
            let button = document.getElementById("radio-" + itemName)
            button.removeEventListener("click", addToggleRadio)
        }
    }
}