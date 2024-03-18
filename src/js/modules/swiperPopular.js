import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/**
 * Function to initialize a Swiper instance for the popular items carousel.
 * This function creates a Swiper instance with custom options for different breakpoints.
 */
function swiperPopular() {
  const swiper = new Swiper('#swiper-popular', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    },
  });
}

export default swiperPopular;