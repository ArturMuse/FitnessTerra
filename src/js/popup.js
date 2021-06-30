class Popup {
    constructor(popup, toggles, popupShow, popupCloseBtn) {
        this.popup = document.querySelector(popup)
        this.popupToggles = document.querySelectorAll(toggles)
        this.popupShow = popupShow
        this.popupCloseBtn = document.querySelector(popupCloseBtn)
    }
    popupInit() {
        this.popupToggles.forEach(el => {
            el.addEventListener("click", () => {
                this.popup.classList.toggle(this.popupShow)
            })
        })
        this.popupCloseBtn.addEventListener("click", () => {
            this.popup.classList.toggle(this.popupShow)
        })
    }
}
export default Popup


