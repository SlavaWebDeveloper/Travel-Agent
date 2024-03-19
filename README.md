# The project "Travel-Agent"

## Layout of the [layout](https://www.figma.com/file/g5ufhtadsPYTe63oxXhjfZ/Travel-Agent-Landing-Page-Custom-(Copy)?type=design&node-id=359%3A63&mode=design&t=RUG4Kuttz9n8f8ug-1) "Travel-Agent"

### Link to the project:
https://slavawebdeveloper.github.io/Travel-Agent/

## About the project
The HTML code is completely written according to the BEM methodology. The issues related to the accessibility of the interface are taken into account.
The color palette changes automatically depending on the user's preferences.

### Functions for Webpage Enhancement
This repository contains a collection of JavaScript functions aimed at enhancing webpage functionality and user experience. Below are brief descriptions of each function:

### Autocomplete Functionality
The autoCompleteFunc function initializes autocomplete functionality for an input field, allowing users to quickly find relevant suggestions. It utilizes the @tarekraafat/autocomplete.js library and a data source containing country names.

### Calendar Picker
The calendarPicker function generates dates and initializes a calendar picker with options for date selection. It also adds functionality to display random prices for selected dates. This feature requires the @easepick/bundle package and the datesListPrise.js file for date generation.

### Theme Change Functionality
The changeTheme function enables users to switch between dark and light themes on the webpage. It updates the theme of the webpage and adjusts the SVG image accordingly based on user interaction or system preference.

### Mobile Navigation Toggle
The mobileNav function handles mobile navigation functionality, allowing users to toggle the mobile navigation menu and updating the navigation button icon accordingly. It also toggles the body scroll when the mobile navigation menu is open.

### ScrollReveal Animations
The scrollRevealFunc function configures and applies ScrollReveal animations to specific elements as they enter the viewport during scrolling. It adds subtle animations to enhance the user experience.

### Swiper Carousel Initialization
The swiperPopular and swiperTestimonials functions initialize Swiper instances for popular items carousel and testimonials section respectively. These functions provide interactive carousel functionality for displaying popular items and testimonials.

### Theme Change Event Listeners
The DOMContentLoaded event initializes event listeners for checkbox change and system theme change. It ensures that the webpage theme updates dynamically based on user interaction or system preference.

## Installation

git clone
https://github.com/SlavaWebDeveloper/Travel-Agent.git

`npm install` 

For local development, use:  
`npm run dev`

To build a project, use:  
`npm run build`

## Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## File Tree:
travel-x  
├── gulp  
│   └── ...  
├── src  
│   ├── fonts  
│   │   └── ...  
│   ├── html  
│   │   ├── blocks  
│   │   │   ├── cards  
│   │   │   │   └── bali.html  
│   │   │   │   └── dubai.html  
│   │   │   │   └── france.html  
│   │   │   │   └── greek.html  
│   │   │   │   └── thailand.html  
│   │   │   │   └── USA.html  
│   │   │   │   └── venice.html  
│   │   │   ├── elements  
│   │   │   │   └── form.html  
│   │   │   │   └── hint-discover.html  
│   │   │   │   └── scroll-down.html  
│   │   │   │   └── swiper.html  
│   │   │   │   └── toggle.html  
│   │   │   ├── templates  
│   │   │   │   └── card-populars.html  
│   │   │   │   └── card-review.html  
│   │   │   ├── testimonials  
│   │   │   │   └── card.html  
│   │   │   └── footer.html  
│   │   │   └── header.html  
│   │   │   └── mobile-nav.html  
│   │   │   └── partners.html  
│   │   │   └── popular.html  
│   │   │   └── testimonials.html  
│   │   │   └── subscribe.html  
│   │   │   └── discover.html  
│   │   ├── data  
│   │   │   └── populars.json  
│   │   │   └── testimonials1.json  
│   │   │   └── testimonials2.json  
│   │   │   └── testimonials3.json  
│   │   │   └── testimonialsAll.json  
│   │   └── index.html  
│   ├── img  
│   │   ├── customers  
│   │   │   └── ...  
│   │   ├── discover  
│   │   │   └── ...  
│   │   ├── explore  
│   │   │   └── ...  
│   │   ├── favicons  
│   │   │   └── ...  
│   │   ├── hints  
│   │   │   └── ...  
│   │   ├── icons  
│   │   │   └── ...  
│   │   ├── partners  
│   │   │   └── ...  
│   │   ├── popular  
│   │   │   └── ...  
│   │   ├── premium  
│   │   │   └── ...  
│   │   ├── subscribe  
│   │   │   └── ...  
│   │   ├── svgicons  
│   │   │   └── ...  
│   │   ├── testimonials  
│   │   │   └── ...  
│   ├── js  
│   │   ├── modules  
│   │   │   └── autoComplete.js  
│   │   │   └── calendarPicker.js  
│   │   │   └── changeTheme.js  
│   │   │   └── mobile-nav.js  
│   │   │   └── scrollReveal.js  
│   │   │   └── swiperPopular.js  
│   │   │   └── swiperTestimonials.js  
│   │   │   └── themeToggle.js  
│   │   ├── helpers  
│   │   │   └── countryList.js  
│   │   │   └── datesListPrise.js   
│   │   └── index.js  
│   ├── scss  
│   │   ├── base  
│   │   │   └── _base.scss  
│   │   │   └── _containers.scss  
│   │   │   └── _fontsAutoGen.scss  
│   │   │   └── _functionText.scss  
│   │   │   └── _media.scss  
│   │   │   └── _mixins.scss  
│   │   │   └── _reset.scss  
│   │   │   └── _sticky-footer.scss  
│   │   │   └── _themes.scss  
│   │   │   └── _utils.scss  
│   │   │   └── _vars.scss  
│   │   ├── blocks  
│   │   │   └── _autoComplete.02.scss  
│   │   │   └── _button.scss  
│   │   │   └── _card-populars.scss  
│   │   │   └── _card-review.scss  
│   │   │   └── _discover.scss  
│   │   │   └── _footer-nav.scss  
│   │   │   └── _footer.scss  
│   │   │   └── _form.scss  
│   │   │   └── _header.scss  
│   │   │   └── _hint-discover.scss  
│   │   │   └── _icons.scss  
│   │   │   └── _mobile-nav.scss  
│   │   │   └── _nav-icon.scss  
│   │   │   └── _nav.scss  
│   │   │   └── _partners.scss  
│   │   │   └── _popular.scss  
│   │   │   └── _scroll-down.scss  
│   │   │   └── _subscribe-form.scss  
│   │   │   └── _subscribe.scss  
│   │   │   └── _testimonials.scss  
│   │   │   └── _toggle.scss  
│   │   └── calendar.scss  
│   │   └── main.scss  
└── gulpfile.js  
└── package-lock.json  
└── package.json  
└── README.md  
└── .gitignore  
└── webpack.config.js 
