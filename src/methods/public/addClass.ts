import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Adds one or more CSS classes to each node.
 *
 * @this {UnitJSClass}
 * @param {...string} classNames - One or more class names to add.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any className is not a string.
 */
function addClass(this: UnitJSClass, ...classNames: string[]) {
  allOf({ values: classNames, typeOf: ['string'] });

  this.__nodes__.forEach((node) => {
    node.classList.add(...classNames);
  });

  return this;
}

export default addClass;
