import autoComplete from "./modules/autoComplete";
import picker from "./modules/calendarPicker";
import swiperPopular from "./modules/swiperPopular";
import scrollReveal from "./modules/scrollReveal";
import swiperTestimonials from "./modules/swiperTestimonials";
import mobileNav from './modules/mobile-nav.js';
import { changeTheme } from './modules/changeTheme.js';
import './modules/themeToggle.js';


mobileNav();
autoComplete();
picker();
scrollReveal();
swiperPopular();
swiperTestimonials();
changeTheme()