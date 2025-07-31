import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.css', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if no param property is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').css();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').css(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').css(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').css(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => {
      $('.test-div').css('');
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if second param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').css('cssProp', 1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').css('cssProp', true);
    }).toThrow(RequiredType);
  });

  it('should return the specified css property if second param is undefined', () => {
    expect($('.test-div').css('color')).toBe('rgb(255, 0, 0)');
    expect($('.test-div').css('color', undefined)).toBe('rgb(255, 0, 0)');
  });

  it('should add the css property with the specified value for the node list', () => {
    const div = document.createElement('div');
    $(div).css('font-size', '14px');

    expect($(div).css('font-size')).toBe('14px');
    expect($(div).css('font-size', undefined)).toBe('14px');
  });
});
