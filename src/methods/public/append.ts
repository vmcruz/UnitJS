import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Appends a DOM element or a text node (from string) to each node.
 *
 * @param {string | Element} element - A string to create a text node, or a DOM node to append.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If the input is neither a string nor a Node.
 */
function append(this: UnitJSClass, element: string | Element) {
  allOf({
    values: [element],
    typeOf: ['string'],
    instanceOf: [Element],
    allowEmptyString: true,
  });

  const htmlElement =
    typeof element === 'string' ? document.createTextNode(element) : element;

  this.__nodes__.forEach((node) => {
    node.appendChild(htmlElement);
  });

  return this;
}

export default append;
