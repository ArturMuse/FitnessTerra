import '../scss/app.scss';

/* Your JS Code goes here */

import "./main/sales";
import "./header";
import Popup from "./popup";

// Contact Form Popup Init
const contactForm = new Popup(".js-popup-contact", ".js-popup-contact-toggle", "popup-show", ".js-popup-contact-close")
contactForm.popupInit()

