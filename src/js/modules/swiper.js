/**
  * Swiper configuration and initialization.
  * 
  * Swiper is a powerful JavaScript library for building touch-enabled, responsive sliders and carousels.
  * 
  * Configuration options:
  * - slidesPerView: Number of slides per view. Can be 'auto' or a number.
  * - spaceBetween: Space between slides in pixels.
  * - navigation: Configuration for navigation arrows.
  *   - nextEl: CSS selector or HTMLElement for the next arrow button.
  *   - prevEl: CSS selector or HTMLElement for the previous arrow button.
*/
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/**
  * Function to create and initialize a Swiper instance.
  * Configuration:
  * - slidesPerView: 4 slides visible at a time.
  * - spaceBetween: Space of 32 pixels between slides.
  * - navigation: Previous and Next navigation buttons specified by '#sliderPrev' and '#sliderNext' elements.
*/
function swiperFunc() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });
}

export default swiperFunc;