import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.attr', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType error if no param attribute is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').attr();
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').attr(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType error if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').attr(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').attr(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType error if first param is an empty string', () => {
    expect(() => {
      $('.test-div').attr('');
    }).toThrow(RequiredType);
  });

  it('should return the attribute value of the first element in the node list if no second param is provided', () => {
    const li = document.querySelectorAll<HTMLElement>('li.test-li');
    expect($(...li).attr('disabled')).toBe('disabled');
  });

  it("should return null if the first element doesn't have the asked property", () => {
    const li = document.querySelectorAll<HTMLElement>('li.test-li');
    expect($(...li).attr('id')).toBe(null);
  });

  it('should set the value of the given property to all the nodes in the node list', () => {
    const li = [...document.querySelectorAll<HTMLElement>('li.test-li')];
    $('li.test-li').attr('disabled', 'disabled');
    expect(
      li.every((e) => e.getAttribute('disabled') === 'disabled')
    ).toBeTruthy();
  });
});
