/**
 * Changes the theme of the webpage and updates the SVG image accordingly.
 * @param {string} theme - The theme to apply ('dark' or 'light').
 */
export function changeTheme(theme) {
  // Selecting DOM elements
  const html = document.querySelector('html');
  const scrollDown = document.querySelector('.scroll-down');
  const svg = scrollDown.querySelector('svg');

  // Paths to SVG images
  const lightFilePath = "./img/svgsprite/stack/svg/sprite.stack.svg#discover--scroll-down-text";
  const darkFilePath = "./img/svgsprite/stack/svg/sprite.stack.svg#discover--scroll-down-text-white";

  // Determine the current file path based on the theme
  let currentFilePath = theme === 'dark' ? darkFilePath : lightFilePath;

  /**
  * Updates the SVG image source with the current file path.
  * @function
  */
  function updateImage() {
    svg.innerHTML = '';
    const svgUseElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
    svgUseElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", currentFilePath);
    svg.appendChild(svgUseElement);
  }

  // Apply theme changes and update localStorage
  if (theme === 'dark') {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  
  // Update the image with the new theme
  updateImage();
}
