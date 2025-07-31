import { UnitJSClass } from '../../../unit.class';

/**
 * Exposes the i18n configuration object.
 *
 * @returns {{ months: string[], days: string[] }}
 */
function get() {
  return UnitJSClass.__i18n__;
}

export default get;
