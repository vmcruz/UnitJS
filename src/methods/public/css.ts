import { CSS_VALUE_REGEX } from '../../constants';
import { UnitJSClass } from '../../unit.class';
import { allOf, isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets a CSS property on all nodes in the current context.
 *
 * @param {string} property - The CSS property name (in camelCase or kebab-case).
 * @param {string} [value] - The value to set for the CSS property. If omitted, acts as a getter.
 * @returns {string|this} The computed style value, or the current instance for chaining.
 * @throws {RequiredType} If `property` is not a string or `value` (when provided) is not a string.
 */
function css(this: UnitJSClass, property: string, value?: string) {
  allOf({ values: [property], typeOf: ['string'] });

  if (isNullOrUndefined(value)) {
    const computedStyles = window.getComputedStyle(this.__nodes__[0]);

    return computedStyles.getPropertyValue(property);
  }

  allOf({ values: [value], typeOf: ['string'] });

  const matches = value?.match(CSS_VALUE_REGEX);

  if (matches) {
    this.__nodes__.forEach((node) => {
      node.style.setProperty(
        property,
        matches.groups?.value,
        matches.groups?.important
      );
    });

    return this;
  }

  throw new TypeError('Unkown CSSStyleValue');
}

export default css;
