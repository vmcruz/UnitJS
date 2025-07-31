import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Attaches one or more event listeners to all nodes.
 *
 * @param {string} event - The event type to listen for.
 * @param {...Function} fns - One or more handler functions.
 * @returns {this} The current instance for chaining.
 * @throws {RequiredType} If `event` is not a string or any handler is not a function.
 */
function on(
  this: UnitJSClass,
  event: keyof HTMLElementEventMap,
  ...fns: ((ev: Event) => void)[]
) {
  allOf({ values: [event], typeOf: ['string'] });
  allOf({ values: fns, typeOf: ['function'] });

  this.__nodes__.forEach((node) => {
    fns.forEach((fn) => node.addEventListener(event, fn, false));
  });

  return this;
}

export default on;
