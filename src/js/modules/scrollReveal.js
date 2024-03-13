/**
 * ScrollReveal configuration and initialization.
 * 
 * ScrollReveal is a JavaScript library for easily animating elements as they enter the viewport during scrolling.
 * 
 * Configuration options:
 * - distance: The distance in pixels that the element should move during the animation.
 * - duration: The duration of the animation in milliseconds.
 */
import ScrollReveal from 'scrollreveal'

ScrollReveal({
  distance: '60px',
  duration: 2800,
});

/**
 * Function to apply ScrollReveal animations to specific elements.
 * 
 * This function reveals elements with specified animations as they enter the viewport during scrolling.
 * 
 * Elements and their associated animations:
 * - .header, .discover__picture-hint, .partners__row: Revealed from the top.
 * - .discover__image, .popular__controls, .subscribe__form, .footer__navigation: Revealed from the right.
 * - .discover__desc, .subscribe__desc, .footer__copyright: Revealed from the left.
 * - .discover__picture-scroll: Revealed from the bottom.
 * - .scroll-down__icon: Revealed with a delay of 100 milliseconds.
 * - .popular__slider: Revealed from the right with a distance of '300px' and a delay of 500 milliseconds.
 * - .footer__navigation, .footer__copyright: Revealed with a distance of '60px' and a delay of 500 milliseconds.
 */
function scrollRevealFunc() {

  ScrollReveal().reveal('.header, .discover__picture-hint, .partners__row', {
    origin: 'top',
  })

  ScrollReveal().reveal('.discover__image, .popular__controls, .subscribe__form, .footer__navigation', {
    origin: 'right',
  })

  ScrollReveal().reveal('.discover__desc, .subscribe__desc, .footer__copyright', {
    origin: 'left',
  })

  ScrollReveal().reveal('.discover__picture-scroll', {
    origin: 'bottom',
  })

  ScrollReveal().reveal('.scroll-down__icon', {
    delay: 100,
  })

  ScrollReveal().reveal('.popular__slider', {
    origin: 'right',
    distance: '300px',
    delay: 500,
  })

  ScrollReveal().reveal('.footer__navigation, .footer__copyright', {
    distance: '60px',
    delay: 500,
  })
}

export default scrollRevealFunc;