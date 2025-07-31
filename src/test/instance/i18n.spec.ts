import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';

describe('UnitJS.i18n', () => {
  it('should return a RequiredType error if array of strings is not provided', () => {
    expect(() => {
      // @ts-expect-error
      $.i18n.months(undefined);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $.i18n.months(true);
    }).toThrow(RequiredType);
  });

  it("should return a SyntaxError if $.i18n.months doesn't have 12 indexes", () => {
    expect(() => {
      $.i18n.months(['a', 'b']);
    }).toThrow(SyntaxError);
  });

  it('should return a RequiredType error if array of strings is not provided', () => {
    expect(() => {
      // @ts-expect-error
      $.i18n.days(undefined);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $.i18n.days(1);
    }).toThrow(RequiredType);
  });

  it("should return a SyntaxError if $.i18n.days doesn't have 7 indexes", () => {
    expect(() => {
      $.i18n.days(['a', 'b']);
    }).toThrow(SyntaxError);
  });
});
