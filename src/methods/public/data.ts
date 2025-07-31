import { UnitJSClass } from '../../unit.class';
import { allOf, camelFromKebab, isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets a data attribute (from `dataset`) on all nodes in the current context.
 *
 * @param {string} property - The camelCase name of the data attribute (without 'data-' prefix).
 * @param {string} [value] - The value to set for the data attribute. If omitted, acts as a getter.
 * @returns {string|this} The data attribute value, or the current instance for chaining.
 * @throws {RequiredType} If `property` is not a string or `value` (when provided) is not a string.
 */
function data(this: UnitJSClass, property: string, value?: string) {
  allOf({ values: [property], typeOf: ['string'] });

  if (isNullOrUndefined(value)) {
    return this.__nodes__[0].dataset[property];
  }

  allOf({ values: [value], typeOf: ['string'] });

  const propertyCamel = camelFromKebab(property);

  this.__nodes__.forEach((node) => {
    node.dataset[propertyCamel] = value;
  });

  return this;
}

export default data;
