let modalBG = document.querySelector(".modal-bg")

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

document.querySelector("#hamburger").addEventListener("click", () => {
    modal()
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
})