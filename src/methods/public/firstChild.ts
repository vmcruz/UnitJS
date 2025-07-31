import { UnitJSClass } from '../../unit.class';

/**
 * Returns the first child node of the first element.
 *
 * @returns {Node|null} The first child node, or `null` if none.
 */
function firstChild(this: UnitJSClass) {
  if (!this.__nodes__.length) {
    return null;
  }

  return this.__nodes__[0].firstChild;
}

export default firstChild;
