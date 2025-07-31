import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';

describe('UnitJS.date', () => {
  it('should throw a RequiredType first param is not provided', () => {
    // @ts-expect-error
    expect(() => $.date()).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.date(undefined)).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => $.date('')).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string', () => {
    // @ts-expect-error
    expect(() => $.date(1)).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.date(true)).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.date({})).toThrow(RequiredType);
  });

  it('should throw a RequiredType if second param is not a number', () => {
    // @ts-expect-error
    expect(() => $.date('format', true)).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.date('format', [])).toThrow(RequiredType);

    // @ts-expect-error
    expect(() => $.date('format', {})).toThrow(RequiredType);
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544002524124 with -6 offset hours', () => {
    expect(
      $.date('d j w N m n Y y a A G g H h i s v l D F M', 1544002524124, -6)
    ).toBe(
      '05 5 3 3 12 12 2018 18 am AM 3 3 03 03 35 24 124 Wednesday Wed December Dec'
    );
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1439489120127 with -6 offset hours', () => {
    expect(
      $.date('d j w N m n Y y a A G g H h i s v l D F M', 1439489120127, -6)
    ).toBe(
      '13 13 4 4 08 8 2015 15 am AM 12 12 12 12 05 20 127 Thursday Thu August Aug'
    );
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544940000000 with -6 offset hours', () => {
    expect(
      $.date('d j w N m n Y y a A G g H h i s v l D F M', 1544940000000, -6)
    ).toBe(
      '16 16 0 7 12 12 2018 18 am AM 0 12 00 12 00 00 000 Sunday Sun December Dec'
    );
  });

  it('should return the correct value for each format value with timestamp in milliseconds 1544983200000 in UTC time', () => {
    expect(
      $.date('d j w N m n Y y a A G g H h i s v l D F M', 1544983200000)
    ).toBe(
      '16 16 0 7 12 12 2018 18 pm PM 18 6 18 06 00 00 000 Sunday Sun December Dec'
    );
  });
});
