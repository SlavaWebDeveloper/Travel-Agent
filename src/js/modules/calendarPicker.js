import generateDates from './../helpers/datesListPrise.js';
import { easepick, RangePlugin } from '@easepick/bundle';

function calendarPicker() {
  const dates = generateDates(8);
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

    setup(calendar) {
      // generate random prices
      const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      const prices = {};
      dates.forEach(x => {
        prices[x] = randomInt(50, 200);
      });

      // add price to day element
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