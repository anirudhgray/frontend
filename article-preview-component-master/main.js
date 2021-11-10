document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".social").style.display = "none"
})

document.querySelector(".share-icon").addEventListener("click", (e) => {
    document.querySelector(".social").style.display = "block"
    console.log(1)
    if (e && e.stopPropagation) e.stopPropagation();
})

document.querySelector("body").addEventListener("click", () => {
    document.querySelector(".social").style.display = "none"
    console.log(2)
})
