import { UnitJSClass } from '../../unit.class';
import { allOf, isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets the value of a specified attribute on DOM nodes in the current context.
 *
 * @param {string} attribute - The name of the attribute to get or set.
 * @param {string} [value] - The value to assign. If omitted, the current value is returned.
 * @returns {string|this} Returns the attribute value, or the current instance for chaining.
 * @throws {RequiredType} If `attribute` is not a string or `value` (when provided) is not a string.
 */
function attr(this: UnitJSClass, attribute: string, value?: string) {
  allOf({ values: [attribute], typeOf: ['string'] });

  if (isNullOrUndefined(value)) {
    if (this.__nodes__[0].hasAttribute(attribute)) {
      return this.__nodes__[0].getAttribute(attribute);
    }

    return null;
  }

  this.__nodes__.forEach((node) => {
    node.setAttribute(attribute, value);
  });

  return this;
}

export default attr;
