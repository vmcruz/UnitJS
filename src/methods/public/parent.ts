import { UnitJSClass } from '../../unit.class';

/**
 * Returns the parent node of the first element.
 *
 * @returns {HTMLElement|null} The parent node, or `null` if empty.
 */
function parent(this: UnitJSClass) {
  if (!this.__nodes__.length) {
    return null;
  }

  return this.__nodes__[0].parentNode;
}

export default parent;
