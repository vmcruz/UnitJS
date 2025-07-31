import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Checks if nodes have the specified class.
 *
 * @param {string} className - The class name to check.
 * @param {boolean} [strict=true] - If `true`, all nodes must have the class; otherwise, some.
 * @returns {boolean} Whether the nodes meet the class condition.
 * @throws {RequiredType} If `className` is not a string.
 */
function hasClass(this: UnitJSClass, className: string, strict = true) {
  allOf({ values: [className], typeOf: ['string'] });

  const method = strict ? 'every' : 'some';

  return this.__nodes__[method]((node) => node.classList.contains(className));
}

export default hasClass;
