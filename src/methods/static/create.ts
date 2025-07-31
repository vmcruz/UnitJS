import { allOf } from '../../utils/fns';

/**
 * Creates a new DOM element by tag name.
 *
 * @param {string} element - The tag name of the element to create.
 * @returns {HTMLElement} The created element.
 * @throws {RequiredType} If `element` is not a string.
 */
function create(element: string) {
  allOf({ values: [element], typeOf: ['string'] });

  return document.createElement(element);
}

export default create;
