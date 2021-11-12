let modalBG = document.querySelector(".modal-bg")
let backModal = document.querySelector("#back-modal")
let confModal = document.getElementById("conf-modal")
let menuIcon = document.getElementById("menu-image")
let bmIcon = document.querySelector("#bm-icon")
let bmButton = document.querySelector("#bookmark-button")
let backButtons = document.querySelectorAll(".back-buttons")
let radioButtons = document.querySelectorAll(".radio")
let aboutButtons = document.querySelectorAll(".reward-button")
let pledgeForms = document.querySelectorAll(".pledge-form")
let excls = document.querySelectorAll(".excl")
let amountBacked = document.getElementById("amount-backed")

document.addEventListener("DOMContentLoaded", () => {
    modalBG.style.display = "none";
    backModal.style.display = "none";
    confModal.style.display = "none";
    aboutButtons.forEach(b => {
        item = b.dataset.item
        disableReward(item, "about")
    })
    radioButtons.forEach(r => {
        item = r.dataset.item
        disableReward(item, "modal")
    })
    excls.forEach(excl => {
        excl.style.display = "none"
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
    toggleModalBackground()
    backModal.style.display = "none"
    confModal.style.display = "none"
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
        modalBG.style.display = "block"
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

function toggleModal(evt = "none") {
    if (backModal.style.display === "block") {
        backModal.style.display = "none";
    } else if (backModal.style.display === "none") {
        radio = document.getElementById("radio-" + evt.currentTarget.dataset.item)
        radio.click()
        backModal.style.display = "block";
    }
}

backButtons.forEach(button => {
    button.addEventListener("click", (evt) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toggleModalBackground()
        toggleModal(evt)
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

pledgeForms.forEach(form => {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        item = form.dataset.item
        pledgeVal = form.children[0].value
        let excl = document.getElementById("excl-" + item)
        let dolla = document.getElementById("dolla-" + item)
        if (Number(pledgeVal) < Number(form.children[0].dataset.min)) {
            excl.style.display = "block"
            dolla.style.left = "70.5px"
        } else {
            excl.style.display = "none"
            dolla.style.left = "117px"
            if (document.getElementById(item + "-left-modal").textContent !== "") {
                document.getElementById(item + "-left-modal").textContent -= 1
                document.getElementById(item + "-left").textContent -= 1
            }
            amountBacked.textContent = "$" + String(Number(amountBacked.textContent.slice(1)) + Number(pledgeVal))
            document.getElementById("number-backers").textContent = Number(document.getElementById("number-backers").textContent) + 1
            document.getElementById("prg-done").style.width = `${amountBacked.textContent.slice(1) * 100 / 100000}%`
            toggleModal()
            toggleModalCompletion()
        }
    })
})

function toggleModalCompletion() {
    if (confModal.style.display === "none") {
        window.scrollTo({ top: 150, behavior: 'smooth' });
        confModal.style.display = "flex"
    } else {
        confModal.style.display = "none"
        toggleModalBackground()
    }
}

document.getElementById("conf-button").addEventListener("click", toggleModalCompletion)