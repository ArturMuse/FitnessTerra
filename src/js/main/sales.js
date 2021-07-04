import SwiperCore, { Navigation, Swiper } from 'swiper/core';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const salesSlider = new Swiper(".js-sales-slider", {
    loop: true,
    spaceBetween: 37,
    navigation: {
        prevEl: ".js-sales-slider-prev",
        nextEl: ".js-sales-slider-next"
    },
    breakpoints: {
        1390: {
            slidesPerView: 3,
            centeredSlides: true
        },
        1090: {
            slidesPerView: 2,
            centeredSlides: false
        },
        320: {
            slidesPerView: 1,
            centeredSlides: true
        }
    }
})

