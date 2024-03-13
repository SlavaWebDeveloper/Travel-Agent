/**
 * Function to initialize calendar picker.
 * 
 * This function generates dates, initializes a calendar picker, and adds functionality to display random prices for selected dates.
 * 
 * Dependencies:
 * - generateDates: A function to generate an array of dates. It should be imported from the 'datesListPrise.js' file located in the 'helpers' directory.
 * - easepick: A library for creating customizable date pickers. It should be imported from the '@easepick/bundle' package.
 * - RangePlugin: A plugin for easepick library to enable range selection functionality. It should be imported from the '@easepick/bundle' package.
 * 
 * Functionality:
 * - Generates 8 random dates using the generateDates function.
 * - Initializes a calendar picker with specified options:
 *    - element: HTML element that serves as the calendar container.
 *    - css: Array of CSS files to be applied to the calendar.
 *    - zIndex: Z-index of the calendar.
 *    - format: Date format to be displayed.
 *    - RangePlugin: Configuration for the RangePlugin.
 *    - plugins: Array of plugins to be used by the calendar.
 *    - setup: Callback function to customize the calendar behavior.
 * - Generates random prices for the generated dates and displays them on the calendar.
 */

import generateDates from './../helpers/datesListPrise.js';
import { easepick, RangePlugin } from '@easepick/bundle';

function calendarPicker() {
  // Generate 8 random dates
  const dates = generateDates(8);
  
  // Initialize calendar picker
  const calendar = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      "./css/calendar.css",
    ],
    zIndex: 10,
    format: "DD/MM/YY",
    RangePlugin: {
      locale: {
        one: 'dag',
        other: 'dagar',
      },
    },
    plugins: [
      RangePlugin,
    ],
    
    // Callback function to customize calendar behavior
    setup(calendar) {
      // Generate random prices for each date
      const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      const prices = {};
      dates.forEach(x => {
        prices[x] = randomInt(50, 200);
      });

      // Add price to day element
      calendar.on('view', (evt) => {
        const { view, date, target } = evt.detail;
        const d = date ? date.format('YYYY-MM-DD') : null;

        if (view === 'CalendarDay' && prices[d]) {
          const span = target.querySelector('.day-price') || document.createElement('span');
          span.className = 'day-price';
          span.innerHTML = `$ ${prices[d]}`;
          target.append(span);
        }
      });
    }
  });
}

export default calendarPicker;