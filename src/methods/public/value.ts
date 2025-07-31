import { UnitJSClass } from '../../unit.class';
import { isNullOrUndefined } from '../../utils/fns';

/**
 * Gets or sets the `value` property of nodes.
 *
 * @param {any} [value] - The value to set.
 * @returns {string|this} The value if getting, or the current instance for chaining if setting.
 */
function value(this: UnitJSClass, value?: any) {
  if (isNullOrUndefined(value)) {
    return (this.__nodes__[0] as HTMLInputElement).value;
  }

  this.__nodes__.forEach((node) => {
    (node as HTMLInputElement).value = value;
  });

  return this;
}

export default value;
