const header = document.querySelector(".js-header")
const burger = document.querySelector(".js-burger")
const body = document.querySelector("body")

burger.addEventListener("click", () => {
    header.classList.toggle("header-on")
    body.classList.toggle("y-hidden")
})