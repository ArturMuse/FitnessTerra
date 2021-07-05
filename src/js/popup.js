class Popup {
    constructor(popup, toggles, popupCloseBtn) {
        this.popup = document.querySelector(popup)
        this.popupToggles = document.querySelectorAll(toggles)
        this.popupShow = "popup-show"
        this.popupCloseBtn = document.querySelector(popupCloseBtn)
        this.body = document.querySelector("body")
    }
    popupInit() {
        if (this.popup) {
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
            this.popup.addEventListener("click", (e) => {
                if (e.target === this.popup) {
                    this.popup.classList.toggle(this.popupShow)
                    this.body.style.overflow = "auto"
                }
            })
        }
    }
}
export default Popup


