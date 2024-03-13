/**
 * Function to initialize autocomplete functionality.
 * 
 * This function creates an autocomplete instance with specified options and data source.
 * 
 * Dependencies:
 * - autoComplete: A library for creating customizable autocomplete functionality. It should be imported from the '@tarekraafat/autocomplete.js' package.
 * - countryList: An array containing data for autocomplete suggestions. It should be imported from the 'countryList' file located in the 'helpers' directory.
 * 
 * Functionality:
 * - Initializes an autocomplete instance with specified options:
 *    - selector: CSS selector for the input field to apply autocomplete functionality.
 *    - placeHolder: Placeholder text for the input field.
 *    - data: Configuration for autocomplete data source.
 *        - src: Array of data for autocomplete suggestions.
 *        - cache: Boolean value indicating whether to cache the data source.
 *    - resultItem: Configuration for result item display.
 *        - highlight: Boolean value indicating whether to highlight matched text in results.
 *    - events: Configuration for event handling.
 *        - input: Configuration for input events.
 *            - selection: Callback function to handle selection event.
 *    - resultsList: Configuration for the results list.
 *        - maxResults: Maximum number of results to display.
 *    - searchEngine: Search engine type for autocomplete functionality.
 */
import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList";

function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countryList,
      cache: true,
    },
    resultItem: {
      highlight: true,
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        }
      }
    },
    resultsList: {
      maxResults: 10,
    },
    searchEngine: 'strict',
  });
}

export default autoCompleteFunc; 