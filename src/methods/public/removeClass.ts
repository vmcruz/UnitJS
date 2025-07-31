import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Removes one or more classes from all nodes.
 *
 * @param {...string} classNames - One or more class names to remove.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any class name is not a string.
 */
function removeClass(this: UnitJSClass, ...classNames: string[]) {
  allOf({ values: classNames, typeOf: ['string'] });

  this.__nodes__.forEach((node) => {
    node.classList.remove(...classNames);
  });

  return this;
}

export default removeClass;
