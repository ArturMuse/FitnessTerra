import '../scss/app.scss';

/* Your JS Code goes here */

import "./main/sales";
import "./header";
import Popup from "./popup";

// Contact Form Popup Init
const contactForm = new Popup(".js-popup-contact", ".js-popup-contact-toggle", ".js-popup-contact-close")
contactForm.popupInit()

const ticketsForm = new Popup(".js-popup-tickets", ".js-popup-tickets-toggle", ".js-popup-tickets-close")
ticketsForm.popupInit()

