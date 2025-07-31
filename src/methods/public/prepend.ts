import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Prepends a DOM element or a text node (from string) to each node.
 *
 * @param {string | HTMLElement} element - A string to create a text node, or a DOM node to prepend.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If the input is neither a string nor a Node.
 */
function prepend(this: UnitJSClass, element: string | HTMLElement) {
  allOf({
    values: [element],
    typeOf: ['string'],
    instanceOf: [HTMLElement],
    allowEmptyString: true,
  });

  const htmlElement =
    typeof element === 'string' ? document.createTextNode(element) : element;

  this.__nodes__.forEach((node) => {
    node.insertBefore(htmlElement, node.firstChild);
  });

  return this;
}

export default prepend;
