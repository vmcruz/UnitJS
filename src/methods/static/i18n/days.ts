import { UnitJSClass } from '../../../unit.class';
import { allOf } from '../../../utils/fns';

/**
 * Sets the localized day names.
 *
 * @param {string[]} days - Array of 7 day names.
 * @returns {void}
 * @throws {RequiredType} If input is not an array of strings.
 * @throws {SyntaxError} If input does not have exactly 7 entries.
 */
function days(days: string[]) {
  allOf({ values: days, typeOf: ['string'] });

  if (days.length !== 7) {
    throw new SyntaxError(
      `Expected the days array to have exactly 7 entries, but got ${days.length}`
    );
  }

  UnitJSClass.__i18n__.days = days;
}

export default days;
