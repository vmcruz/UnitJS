import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Removes a specified child element from each node.
 *
 * @param {Element} element - The child element to remove.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `element` is not an Element.
 */
function remove(this: UnitJSClass, element: Element) {
  allOf({ values: [element], instanceOf: [Element] });

  this.__nodes__.forEach((node) => {
    try {
      node.removeChild(element);
    } catch {
      throw new SyntaxError(`${element} is not a child of this node`);
    }
  });

  return this;
}

export default remove;
