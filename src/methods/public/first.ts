import { UnitJSClass } from '../../unit.class';

/**
 * Returns the first node in the collection.
 *
 * @returns {any|null} The first node, or `null` if empty.
 */
function first(this: UnitJSClass) {
  if (!this.__nodes__.length) {
    return null;
  }

  return this.__nodes__[0];
}

export default first;
