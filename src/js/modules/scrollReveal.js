import ScrollReveal from 'scrollreveal'

ScrollReveal({
  distance: '60px',
  duration: 2800,
});

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