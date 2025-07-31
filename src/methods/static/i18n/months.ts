import { UnitJSClass } from '../../../unit.class';
import { allOf } from '../../../utils/fns';

/**
 * Sets the localized month names.
 *
 * @param {string[]} months - Array of 12 month names.
 * @returns {void}
 * @throws {RequiredType} If input is not an array of strings.
 * @throws {SyntaxError} If input is not an array of 12 entries.
 */
function months(months: string[]) {
  allOf({ values: months, typeOf: ['string'] });

  if (months.length !== 12) {
    throw new SyntaxError(
      `Expected the months array to have exactly 12 entries, but got ${months.length}`
    );
  }

  UnitJSClass.__i18n__.months = months;
}

export default months;
