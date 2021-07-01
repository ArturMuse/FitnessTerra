class Popup {
    constructor(popup, toggles, popupShow, popupCloseBtn) {
        this.popup = document.querySelector(popup)
        this.popupToggles = document.querySelectorAll(toggles)
        this.popupShow = popupShow
        this.popupCloseBtn = document.querySelector(popupCloseBtn)
        this.body = document.querySelector("body")
    }
    popupInit() {
        this.popupToggles.forEach(el => {
            el.addEventListener("click", () => {
                this.popup.classList.toggle(this.popupShow)
                this.body.style.overflow = "hidden"
            })
        })
        this.popupCloseBtn.addEventListener("click", () => {
            this.popup.classList.toggle(this.popupShow)
            this.body.style.overflow = "auto"
        })
    }
}
export default Popup


