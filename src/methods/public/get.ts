import { UnitJSClass } from '../../unit.class';

/**
 * Returns the nth node in the collection.
 *
 * @returns {any|null} The nth node, or `null` if empty.
 */
function get(this: UnitJSClass, index: number) {
  if (!this.__nodes__.length) {
    return null;
  }

  return this.__nodes__[index];
}

export default get;
