import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.hasClass', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if no param className is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').hasClass();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').hasClass(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').hasClass(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').hasClass(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => {
      $('.test-div').hasClass('');
    }).toThrow(RequiredType);
  });

  it('should return true if all elements in node list have the given class name', () => {
    const li = document.querySelectorAll<HTMLElement>('li.test-li');

    expect($(...li).hasClass('test-li')).toBe(true);
  });

  it("should return false if at least one element doesnt't have the given class name", () => {
    const li = document.querySelectorAll<HTMLElement>('li.test-li');
    const liNoClass = document.createElement('li');

    expect($(...li, liNoClass).hasClass('test-li')).toBe(false);
  });
});
