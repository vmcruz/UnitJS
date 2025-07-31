import { UnitJSClass } from '../../unit.class';
import { allOf } from '../../utils/fns';

/**
 * Formats a UTC timestamp into a custom string using PHP-style date format symbols.
 *
 * Inspired by PHP's `date()` function, this method formats a date based on a given format string,
 * a UNIX timestamp (in milliseconds), and an optional UTC offset (in hours). It supports
 * localization via `this.days` and `this.months` static methods.
 *
 * Supported format characters:
 * - `d` – Day of the month, 2 digits (e.g. "01" to "31")
 * - `j` – Day of the month without leading zeros (1 to 31)
 * - `w` – Day of the week (0 = Sunday to 6 = Saturday)
 * - `N` – ISO-8601 weekday number (1 = Monday to 7 = Sunday)
 * - `l` – Full name of the day (from `this.__i18n__.days`)
 * - `D` – Short name of the day (first 3 letters of `l`)
 * - `m` – Month number with leading zeros (01 to 12)
 * - `n` – Month number without leading zeros (1 to 12)
 * - `F` – Full month name (from `this.__i18n__.months`)
 * - `M` – Short month name (first 3 letters of `F`)
 * - `Y` – Full 4-digit year (e.g. "2025")
 * - `y` – Last two digits of the year (e.g. "25")
 * - `G` – 24-hour format without leading zeros (0 to 23)
 * - `H` – 24-hour format with leading zeros (00 to 23)
 * - `g` – 12-hour format without leading zeros (1 to 12)
 * - `h` – 12-hour format with leading zeros (01 to 12)
 * - `a` – Lowercase am/pm
 * - `A` – Uppercase AM/PM
 * - `i` – Minutes with leading zeros (00 to 59)
 * - `s` – Seconds with leading zeros (00 to 59)
 * - `v` – Milliseconds with leading zeros (000 to 999)
 *
 * Any character not recognized as a formatting symbol will be passed through literally.
 *
 * @param {string} format - The PHP-style format string to use.
 * @param {number} [timestamp=Date.now()] - The timestamp to format (in milliseconds).
 * @param {number} [offset=0] - UTC offset in hours (e.g. `-5` for GMT-5).
 * @throws {TypeError} If `this.__i18n__.months` is not a valid array of 12 items
 * or `this.__i18n__.days` of 7.
 * @throws {RequiredType} If invalid argument types are passed to the function.
 * @returns {string} The formatted date string.
 */
function date(format: string, timestamp = Date.now(), offset = 0) {
  allOf({ values: [format], typeOf: ['string'] });
  allOf({ values: [offset, timestamp], typeOf: ['number'] });

  if (!format) {
    throw new TypeError('Empty string is not a valid string format');
  }

  const validFormat: { [key: string]: string | number } = {};
  const timestampOffsetMs = offset * 60 * 60 * 1000;
  const dateObject = new Date(timestamp + timestampOffsetMs);

  validFormat.d = dateObject.getUTCDate().toString().padStart(2, '0');
  validFormat.j = dateObject.getUTCDate();
  validFormat.w = dateObject.getUTCDay();
  validFormat.N = validFormat.w === 0 ? 7 : validFormat.w;
  validFormat.m = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0');
  validFormat.n = dateObject.getUTCMonth() + 1;
  validFormat.Y = dateObject.getUTCFullYear();
  validFormat.y = validFormat.Y.toString().slice(-2);

  validFormat.a = 'am';
  validFormat.A = 'AM';
  validFormat.G = dateObject.getUTCHours();
  validFormat.H = validFormat.G.toString().padStart(2, '0');
  validFormat.g = validFormat.G === 0 ? 12 : validFormat.G;

  if (validFormat.G > 12) {
    validFormat.a = 'pm';
    validFormat.A = 'PM';
    validFormat.g = validFormat.G - 12;
  }

  validFormat.h = validFormat.g.toString().padStart(2, '0');
  validFormat.i = dateObject.getUTCMinutes().toString().padStart(2, '0');
  validFormat.s = dateObject.getUTCSeconds().toString().padStart(2, '0');
  validFormat.v = dateObject.getMilliseconds().toString().padStart(3, '0');

  validFormat.l = UnitJSClass.__i18n__.days[validFormat.w];
  validFormat.D = (validFormat.l as string).substring(0, 3);
  validFormat.F = UnitJSClass.__i18n__.months[dateObject.getUTCMonth()];
  validFormat.M = (validFormat.F as string).substring(0, 3);

  const fixedFormat = [...format].reduce((acc, sym) => {
    acc += Object.hasOwn(validFormat, sym) ? validFormat[sym] : sym;

    return acc;
  }, '');

  return fixedFormat;
}

export default date;
