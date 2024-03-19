import { changeTheme } from './changeTheme.js';

/**
 * Function to handle theme change based on user interaction and system preference.
 * When the DOM is loaded, it initializes event listeners for checkbox change and system theme change.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Selecting DOM elements
  const checkbox = document.querySelector('.toggle__checkbox');
  const root = document.documentElement;
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  /**
   * Event listener for checkbox change event.
   * Calls changeTheme function with appropriate theme based on checkbox state.
   */
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  });

  /**
    * Function to handle system theme change.
    * When system theme changes, it updates the webpage theme accordingly.
    * @param {MediaQueryListEvent} event - Media query event representing system theme change.
    */
  function handleSystemThemeChange(event) {
    if (event.matches) {
      changeTheme('dark');
      checkbox.checked = true;
    } else {
      changeTheme('light');
      checkbox.checked = false;
    }
  }

  // Adding listener for system theme change and handling initial system theme
  prefersDarkMode.addListener(handleSystemThemeChange);
  handleSystemThemeChange(prefersDarkMode);
});
