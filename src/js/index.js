// import autoCompleteFunc from "./modules/autoComplete";
// import picker from "./modules/calendarPicker";

// autoCompleteFunc();
// picker();
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});  