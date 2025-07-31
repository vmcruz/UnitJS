import { UnitJSClass } from '../../unit.class';
import { allOf, isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets the text content of nodes.
 *
 * @param {string} [text] - The text to set.
 * @returns {string|this} The text content, or the current instance for chaining if setting.
 * @throws {RequiredType} If `text` is provided and is not a string.
 */
function text(this: UnitJSClass, text?: string) {
  if (isNullOrUndefined(text)) {
    return this.__nodes__[0].textContent;
  }

  allOf({ values: [text], typeOf: ['string'], allowEmptyString: true });

  this.__nodes__.forEach((node) => {
    node.textContent = text;
  });

  return this;
}

export default text;
