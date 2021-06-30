import SwiperCore, { Navigation, Swiper } from 'swiper/core';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const salesSlider = new Swiper(".js-sales-slider", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 37,
    navigation: {
        prevEl: ".js-sales-slider-prev",
        nextEl: ".js-sales-slider-next"
    }
})

