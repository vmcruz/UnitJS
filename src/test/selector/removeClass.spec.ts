import { UnitJS as $ } from '../../unit';
import RequiredType from '../../utils/RequiredType.error';
import { FIXTURES } from '../helper/fixtures';

describe('UnitJS.prototype.removeClass', () => {
  beforeEach(() => {
    FIXTURES.common();
  });

  it('should throw a RequiredType if no param className is provided', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').removeClass(undefined);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is not a string', () => {
    expect(() => {
      // @ts-expect-error
      $('.test-div').removeClass(1);
    }).toThrow(RequiredType);

    expect(() => {
      // @ts-expect-error
      $('.test-div').removeClass(true);
    }).toThrow(RequiredType);
  });

  it('should throw a RequiredType if first param is an empty string', () => {
    expect(() => {
      $('.test-div').removeClass('');
    }).toThrow(RequiredType);
  });

  it('should remove the class name to all the nodes in the node list', () => {
    const li = [...document.querySelectorAll('li.test-li')];

    $('li.test-li').removeClass('test-li');

    expect(li.every((e) => e.classList.contains('test-li'))).toBe(false);
  });
});
