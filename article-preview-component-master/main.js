document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".social").style.display = "none"
})

document.querySelector(".share-icon").addEventListener("click", () => {
    document.querySelector(".social").style.display = "block"
})