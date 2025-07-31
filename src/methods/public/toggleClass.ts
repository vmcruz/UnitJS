import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Toggles one or more classes on all nodes.
 *
 * @param {...string} classNames - Classes to toggle.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If any class name is not a string.
 */
function toggleClass(this: UnitJSClass, ...classNames: string[]) {
  allOf({ values: classNames, typeOf: ['string'] });

  this.__nodes__.forEach((node) => {
    classNames.forEach((className) => node.classList.toggle(className));
  });

  return this;
}

export default toggleClass;
