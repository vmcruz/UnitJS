import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Adds a 'load' event listener to each node.
 * Useful for elements like images, iframes, and window.
 *
 * @param {Function} fn - The handler for the 'load' event.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `fn` is not a function.
 */
function ready(this: UnitJSClass, fn: (ev: Event) => void) {
  allOf({ values: [fn], typeOf: ['function'] });

  this.__nodes__.forEach((node) => {
    if (node instanceof Window || node.nodeType === 1) {
      node.addEventListener('load', fn, false);
    } else {
      node.addEventListener('DOMContentLoaded', fn, false);
    }
  });
  return this;
}

export default ready;
